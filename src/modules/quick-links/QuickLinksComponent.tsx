
import {Button, Container, Grid, Text, Title} from "@mantine/core";
import { useEffect } from "react";
import { quickLinksStore } from "../../state/quickLinksStore.ts";
import { useSnapshot } from "valtio";
import { QuickLinksService } from "../../shared/services/quick-links/journeyService.ts";
import { QuickLinks } from "../../shared/models/quiclLinks.model.ts";

const QuickLinksComponent = () => {
    useSnapshot(quickLinksStore);
    const { data } = quickLinksStore;
    useEffect(()=>{
        const fetchQuickLinks = async () => {

            try {
                const service = new QuickLinksService();
                const response =  await service.getQuickLinks();
                if (response) {
                    quickLinksStore.setData(response);
                }
            }catch (error){

            }
        }
        fetchQuickLinks();
    },[])
    console.log("data ", data)
    return (
        <Container className="mt-4">
            <Title order={4}>Quick Links</Title>
            <Grid columns={12} gutter={0} className="py-4">
                {
                    data.map((link: QuickLinks)=>{
                        return (
                            <Grid.Col span={{ base: 12 }} className="">
                                <Container className="pb-0 text-left mb-3 border border-gray-300 rounded-xs">
                                    <Grid className="py-3">
                                        <Grid.Col  span={{sm: 12, md: 9, lg: 9}}>
                                            <Container px={0}> 
                                                <Title order={6}>{link.name}</Title>
                                            </Container>
                                            <Container px={0} className="px-0 mx-0">
                                                <Text size={"sm"}>{link.description}</Text>
                                            </Container>
                                        </Grid.Col>
                                        <Grid.Col span={{sm: 12, md: 3, lg: 3}}>
                                            <Button 
                                                size="sm" 
                                            >
                                                {link.action}
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
