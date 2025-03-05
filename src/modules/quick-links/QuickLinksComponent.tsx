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
        <Container className="mt-4">
            <Title order={4}>Quick Links</Title>
            <Grid columns={12} gutter={0} className="py-4">
                {
                    appStore.landingPageConfig.quickLinks.map((link: QuickLink)=>{
                        return (
                            <Grid.Col span={{ base: 12 }} key={link.id}>
                                <Container className="pb-0 text-left mb-3 border border-gray-300 rounded-xs">
                                    <Grid className="py-3">
                                        <Grid.Col  span={{sm: 12, md: 9, lg: 9}}>
                                            <Container px={0}> 
                                                <Title order={6}>{link.title}</Title>
                                            </Container>
                                            <Container px={0} className="px-0 mx-0">
                                                <Text size={"sm"}>{link.subtitle}</Text>
                                            </Container>
                                        </Grid.Col>
                                        <Grid.Col span={{sm: 12, md: 3, lg: 3}}>
                                            <Button
                                                color="yellow"
                                                size="sm"
                                                onClick={() => handleOpenNewTab(link.link)}
                                            >
                                                {link.label}
                                            </Button>
                                        </Grid.Col>
                                    </Grid>
                                </Container>
                            </Grid.Col>
                        )
                    })
                }
            </Grid>
        </Container>
    );
};

export default QuickLinksComponent;
