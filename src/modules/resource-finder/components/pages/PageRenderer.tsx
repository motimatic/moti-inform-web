import { useEffect, useState } from "react";
import { useSnapshot } from "valtio/react";
import { PageFactory } from "./pageFactory.ts";
import { JourneyService } from "../../../../shared/services/journey/journeyService.ts";
import { JourneyContext } from "../../../../shared/models/journeyContext.model.ts";
import { resourceFinderStore } from "../../../../state/resourceFinderStore.ts";
import {appStore} from "../../../../appStore.ts";
import { LoadingOverlay } from "@mantine/core";


const PageRenderer = () => {
  const snap = useSnapshot(resourceFinderStore);
  useSnapshot(appStore);
  const {setIsLoading } = resourceFinderStore;
  const [CurrentPageComponent, setCurrentPageComponent] = useState<React.FC | null>(null);
  const service = new JourneyService();

  const fetchJourneyContext = async () => {
    setIsLoading(true);
    // First request to fetch journey context to fill resource finder component
    const journeyContext =  await service.context(appStore.adId, appStore.pageHostName);
        try {
            if(journeyContext) {
                resourceFinderStore.setContext(journeyContext as JourneyContext);
                const PageComponent = PageFactory.create(
                    journeyContext.getCurrentPage()
                );
                setCurrentPageComponent(() => PageComponent);
            }
        } catch(error) {
            console.log("error getting journey context ", error)
        } finally {
            setIsLoading(false);
        }
    }

    const fetchPage = async() => {
        try {
            setIsLoading(true);
            if(resourceFinderStore.context.pages.length > 0 )
            //request on each step selected by user
            {
                const finderContext = await service.navigate(resourceFinderStore.context);
                if (finderContext) {
                    resourceFinderStore.setContext(finderContext as JourneyContext);
                    const PageComponent = PageFactory.create(finderContext.getCurrentPage());
                    setCurrentPageComponent(() => PageComponent);
                }
            }
        } catch (error) {
            console.log("error navigating ", error)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if(resourceFinderStore.context.next_page != 0) {
            fetchPage().then;
        } else{
            fetchJourneyContext().then;
        }
        
  }, [snap.buttonClicked]);

    return (
        <>{CurrentPageComponent ? 
            <CurrentPageComponent/>
        : 
         <LoadingOverlay visible={true} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
        }
        </>
  );
};

export default PageRenderer;
