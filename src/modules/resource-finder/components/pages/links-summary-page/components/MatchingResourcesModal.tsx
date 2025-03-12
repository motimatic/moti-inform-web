import { Container, Grid, Tabs, Title, Text, Loader } from "@mantine/core";
import { Modal, Button } from "@mantine/core";
import { CloseButton } from "@mantine/core";
import { useEffect, useState } from "react";
import StudentForm from "./studentForm";
import { appStore } from "../../../../../../appStore";
import { resourceFinderStore } from "../../../../../../state/resourceFinderStore";
import { JourneyService } from "../../../../../../shared/services/journey/journeyService";
import { JourneyResource, Resource } from "../../../../../../shared/models/journeyResource.model";
interface MatchingResourcesModalProps {
  opened: boolean;
  close: () => void;
}
const MatchingResourcesModal: React.FC<MatchingResourcesModalProps> = ({opened, close}) => {

    const [showForm, setShowForm] = useState<boolean>(false);
    const { resources } = resourceFinderStore;
    const redirect = (url: string) => {
        window.open(url, '_blank');
    }

    const selected_journey_id = async() => {
        const { person_id, selected_journey_id} = resourceFinderStore.context;
        if( person_id != 0 && selected_journey_id != 0) {
            const service = new JourneyService();
            const response = await service.resources(person_id,selected_journey_id);
            resourceFinderStore.setResource(response);
        }

    }

    useEffect(()=>{
        selected_journey_id().then;
    },[opened])
    
    return (
        <Modal
            size={"xl"}
            styles={{
                header: {
                padding: 0, // Remove default padding from header
            },
            body: {
                padding: 0,
            },
            }}
            opened={opened}
            onClose={close}
            withCloseButton={false}
        >
        {!showForm &&
            <Modal.Header>
                <Container className="flex justify-between items-center flex-col sm:flex-row w-full py-4" style={{backgroundColor:appStore.landingPageConfig.brand.primary_color_code}}>
                    <div className="flex justify-start items-center">
                        <CloseButton
                            size="xl"
                            variant="light"
                            style={{ color: "#FFF", outline: "none"}}
                            onClick={close}
                        />
                        <h2 className="text-white text-md sm:text-xl md:text-3xl">
                            View Matching Resources
                        </h2>
                    </div>
                    <Button color="green" size="md"  onClick={()=>{setShowForm(true)}}>
                        Send to Me
                    </Button>
                </Container>
            </Modal.Header>
        }

        <Modal.Body className="px-0 py-0">
            { showForm  ?
                <div className="px-10 py-8">
                    <StudentForm setShowForm={setShowForm} />
                </div>
            :
            <Container className="mt-5">
                {resources.length == 0 &&
                    <Container className="flex justify-center items-center h-100">
                        <Loader color={appStore.landingPageConfig.brand.primary_color_code}  />
                    </Container>
                }
                { resources.length > 0 &&
                <Tabs defaultValue={resources.filter((el:JourneyResource)=>el.resources.length > 0)[0].name.toLowerCase()} >
                    <Tabs.List>
                        {resources.length > 0 && resources.map((el: JourneyResource)=>{
                            if(el.resources.length == 0) return null;
                            return(
                                <Tabs.Tab
                                color="blue" rightSection={<Text size="sm" fw={"bold"} className="px-0 mx-0">({el.resources.length})</Text>} key={el.id} value={el.name.toLowerCase()} style={{ fontSize: "16px", fontWeight: "bold" }}>
                                    <Text size="sm">{el.name}</Text>
                            </Tabs.Tab>
                            )
                        })
                        }
                    </Tabs.List>
                    { resources.map((el: JourneyResource)=>{
                        return (
                                el.resources.map((resource: Resource) => {
                                    return(
                                        <Tabs.Panel value={el.name.toLocaleLowerCase()} key={resource.id}>
                                            <Container className=" pb-0 text-left mt-7 mb-3 border border-gray-300 rounded-xs">
                                                <Grid className="py-3" align="center">
                                                    <Grid.Col  span={{ xs:12,  sm: 8 }}>
                                                        <Container px={0} >
                                                            <Title  order={6}>{resource.name}</Title>
                                                        </Container>
                                                        {/* <Container px={0} className="px-0 mx-0">
                                                            <Text size={"sm"}>
                                                            Get help getting started, request more information, or
                                                            take a tour
                                                            </Text>
                                                        </Container> */}
                                                    </Grid.Col>
                                                    <Grid.Col className="flex justify-end" span={{ xs:12, sm: 4 }}>
                                                        <Button color="yellow" size="sm" onClick={() => {redirect(resource.url)}}>
                                                            View
                                                        </Button> 
                                                        
                                                    </Grid.Col>
                                                </Grid>
                                            </Container>
                                        </Tabs.Panel>
                                    )
                                })
                            )})
                    }
                </Tabs>
            }
            </Container>
        }
        </Modal.Body>
      </Modal>
  );
};

export default MatchingResourcesModal;
