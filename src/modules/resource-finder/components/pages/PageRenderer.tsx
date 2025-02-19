import {useEffect, useState} from "react";
import {resourceFinderStore} from "../../state/resourceFinderStore.ts";
import {useSnapshot} from "valtio/react";
import {PageFactory} from "./pageFactory.ts";
import {Page} from "../../../../shared/models/page.model.ts";
import {ResourceFinderService} from "../../../../shared/services/resource-finder/resourceFinderService.ts";


const PageRenderer = () => {

    const snap = useSnapshot(resourceFinderStore);

    const [currentPage, setCurrentPage] = useState(new Page());
    const [CurrentPageComponent, setCurrentPageComponent] = useState<React.FC | null>(null);

    const service = new ResourceFinderService();

    useEffect(() => {

        const fetchPage = async () => {

            try {
                const finderContext =  await service.navigate(currentPage.name);
                if (finderContext) {
                    setCurrentPage(finderContext.getCurrentPage());
                    const PageComponent = PageFactory.create(finderContext.getCurrentPage())
                    setCurrentPageComponent(() => PageComponent);
                }
            }catch (error){

            }
        }

        fetchPage().then();

        console.log('get page')

    }, [snap.buttonClicked]);



    return (
        <>
            {CurrentPageComponent ?
                <CurrentPageComponent />
                : <p>Loading...</p>
            }
        </>
    );
};

export default PageRenderer;
