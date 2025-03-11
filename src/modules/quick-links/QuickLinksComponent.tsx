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
        <Container fluid className="w-full mt-6 flex flex-col items-start">
            <Title order={4}>Quick Links</Title>
            <Container fluid className="w-full" px={0}>
                <Grid columns={12} gutter={0} className="py-4">
                    {
                        appStore.landingPageConfig.quickLinks.map((link: QuickLink)=>{
                            return (
                                    <Container key={link.id} fluid className="flex items-center flex-col md:flex-row justify-between w-full py-5 text-left mb-3 border border-gray-300 rounded-xs">
                                     
                                        <div className="pb-5"> 
                                            <Title order={6} pb={8}>{link.title}</Title>
                                            <Text size={"sm"}>{link.subtitle}</Text>
                                        </div>
                                        <div className="mt-5 md:mt-0">
                                            <Button
                                                color="yellow"
                                                size="sm"
                                                onClick={() => handleOpenNewTab(link.link)}
                                                >
                                                {link.label}
                                            </Button>
                                        </div>
                             
                                    </Container>
                            )
                        })
                    }
                </Grid>
            </Container>
        </Container>
    );
};

export default QuickLinksComponent;
