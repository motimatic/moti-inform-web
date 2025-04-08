import {Button, Container, Grid, Text, Title} from "@mantine/core";
import { useSnapshot } from "valtio";
import {appStore} from "../../appStore.ts";
import {QuickLink} from "../../shared/models/quickLink.model.ts";

const QuickLinksComponent = () => {
    useSnapshot(appStore);
   

    const handleOpenNewTab = (url: string) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };
    
    return (
        <Container style={{overflow:"hidden"}}>
            <Container fluid className={`pt-20 w-full flex flex-col items-start quick-links-menu ${appStore.showQuickLinksMenu ? "show-menu" : "hide-menu"}`}>
            <Title className="mt-5 roobert-medium" order={1}>Already know what <br/>you're looking for?</Title>
            <Title order={1} className="orbikular-light-italic">Select a resource below:</Title>
                <Container fluid className="w-full" px={0}>
                <span className="close-quick-links cursor-pointer" onClick={()=>{appStore.setShowQuickLinksMenu(false)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </span>
                    <Grid columns={12} gutter={0} className="py-6">
                        {
                            appStore.landingPageConfig.quickLinks.map((link: QuickLink)=>{
                                return (
                                        <Container onClick={() => handleOpenNewTab(link.link)} key={link.id} fluid className="custom-button flex items-center flex-row justify-between w-full py-5 text-left mb-3 border border-gray-300 rounded-xs">
                                            <div className="w-75 ps-3"> 
                                                <h2 className="text-lg roobert-bold">{link.title}</h2>
                                                <Text size={"md"} className="roobert-regular">{link.subtitle}</Text>
                                            </div>
                                            <div className="mt-5 md:mt-0 pe-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                                </svg>
                                            </div>
                                        </Container>
                                )
                            })
                        }
                    </Grid>
                </Container>
            </Container>
        </Container>
    );
};

export default QuickLinksComponent;
