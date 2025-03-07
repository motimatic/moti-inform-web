import { useEffect, useState } from "react";
import { useSnapshot } from "valtio/react";
import { PageFactory } from "./pageFactory.ts";
import { Page } from "../../../../shared/models/page.model.ts";
import { JourneyService } from "../../../../shared/services/journey/journeyService.ts";
import { JourneyContext } from "../../../../shared/models/journeyContext.model.ts";
import { resourceFinderStore } from "../../../../state/resourceFinderStore.ts";
import {appStore} from "../../../../appStore.ts";

const PageRenderer = () => {
  const snap = useSnapshot(resourceFinderStore);
  const appSnap = useSnapshot(appStore);

  const [currentPage, setCurrentPage] = useState(new Page());
  const [CurrentPageComponent, setCurrentPageComponent] = useState<React.FC | null>(null);
  const service = new JourneyService();

    useEffect(()=>{
        const fetchJourneyContext = async() => {

        // First request to fetch journey context to fill resource finder component
        const journeyContext =  await service.context(appStore.adId, appStore.pageHostName);
            if(journeyContext) {
                resourceFinderStore.setContext(journeyContext as JourneyContext);
                setCurrentPage(journeyContext.getCurrentPage());
                const PageComponent = PageFactory.create(
                    journeyContext.getCurrentPage()
                );
                setCurrentPageComponent(() => PageComponent);
            }
        }
        fetchJourneyContext().then();
            
    },[])

  useEffect(() => {
    const fetchPage = async () => {
      try {
        if(resourceFinderStore.context.pages.length > 0)
        //request on each step selected by user
        {
        const finderContext = await service.navigate(resourceFinderStore.context);
        if (finderContext) {
          resourceFinderStore.setContext(finderContext as JourneyContext);
          setCurrentPage(finderContext.getCurrentPage());
          const PageComponent = PageFactory.create(
            finderContext.getCurrentPage()
          );
          setCurrentPageComponent(() => PageComponent);
        }
        }
      } catch (error) {
        console.log("error navigating ", error)
      }
    };

    fetchPage().then();

    console.log("get page");
  }, [snap.buttonClicked]);

    return (
        <>{CurrentPageComponent ? 
        <>
            <CurrentPageComponent />
        </> : <p>Loading...</p>}</>
  );
};

export default PageRenderer;
