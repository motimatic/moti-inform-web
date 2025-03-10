import { Container, Grid, Tabs, Title, Text } from "@mantine/core";
import { Modal, Button } from "@mantine/core";
import { CloseButton } from "@mantine/core";
import { useState } from "react";
import StudentForm from "./studentForm";
import { appStore } from "../../../../../../appStore";

interface MatchingResourcesModalProps {
  opened: boolean;
  close: () => void;
}
const MatchingResourcesModal: React.FC<MatchingResourcesModalProps> = ({opened, close}) => {

    const [showForm, setShowForm] = useState<boolean>(false);
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
                <Container className="flex justify-between items-center w-full py-4" style={{backgroundColor:appStore.landingPageConfig.brand.primary_color_code}}>
                    <div className="flex justify-start items-center">
                        
                        <CloseButton
                            size="xl"
                            variant="light"
                            style={{ color: "#FFF", outline: "none"}}
                            onClick={close}
                            
                        />
                        <Title order={2} style={{ color: "#FFF" }}>
                            View Matching Resources
                        </Title>
                    </div>
                    <Button color="green" size="md" onClick={()=>{setShowForm(true)}}>
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
            <Container className="mt-10">
                <Tabs defaultValue="financial">
                    <Tabs.List>
                        <Tabs.Tab value="financial" style={{ fontSize: "16px", fontWeight: "bold" }}>
                            Financial
                        </Tabs.Tab>
                        <Tabs.Tab value="academic" style={{ fontSize: "16px", fontWeight: "bold" }}>
                            Academic
                        </Tabs.Tab>
                        <Tabs.Tab value="wellness" style={{ fontSize: "16px", fontWeight: "bold" }}>
                            Wellness
                        </Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value="financial">
                        <Container className=" pb-0 text-left mt-7 mb-3 border border-gray-300 rounded-xs">
                            <Grid className="py-3">
                                <Grid.Col span={{ sm: 12, md: 9, lg: 9 }}>
                                    <Container px={0}>
                                        <Title order={6}>Federal Student Aid FASFA</Title>
                                    </Container>
                                    <Container px={0} className="px-0 mx-0">
                                        <Text size={"sm"}>
                                        Get help getting started, request more information, or
                                        take a tour
                                        </Text>
                                    </Container>
                                </Grid.Col>
                                <Grid.Col className="flex justify-end" span={{ sm: 12, md: 3, lg: 3 }}>
                                    <Button color="yellow" size="sm" onClick={() => {}}>
                                        View
                                    </Button>
                                </Grid.Col>
                            </Grid>
                        </Container>
                    </Tabs.Panel>
                    <Tabs.Panel value="academic">
                        <Container className=" pb-0 text-left mt-7 mb-3 border border-gray-300 rounded-xs">
                            <Grid className="py-3">
                                <Grid.Col span={{ sm: 12, md: 9, lg: 9 }}>
                                    <Container px={0}>
                                        <Title order={6}>Federal Student Aid FASFA</Title>
                                    </Container>
                                    <Container px={0} className="px-0 mx-0">
                                        <Text size={"sm"}>
                                        Get help getting started, request more information, or
                                        take a tour
                                        </Text>
                                    </Container>
                                </Grid.Col>
                                <Grid.Col className="flex justify-end" span={{ sm: 12, md: 3, lg: 3 }}>
                                    <Button color="yellow" size="sm" onClick={() => {}}>
                                        View
                                    </Button>
                                </Grid.Col>
                            </Grid>
                        </Container>
                    </Tabs.Panel>
                    <Tabs.Panel value="wellness">
                        <Container className=" pb-0 text-left mt-7 mb-3 border border-gray-300 rounded-xs">
                            <Grid className="py-3">
                                <Grid.Col span={{ sm: 12, md: 9, lg: 9 }}>
                                    <Container px={0}>
                                        <Title order={6}>Federal Student Aid FASFA</Title>
                                    </Container>
                                    <Container px={0} className="px-0 mx-0">
                                        <Text size={"sm"}>
                                        Get help getting started, request more information, or
                                        take a tour
                                        </Text>
                                    </Container>
                                </Grid.Col>
                                <Grid.Col className="flex justify-end" span={{ sm: 12, md: 3, lg: 3 }}>
                                    <Button color="yellow" size="sm" onClick={() => {}}>
                                        View
                                    </Button>
                                </Grid.Col>
                            </Grid>
                        </Container>
                    </Tabs.Panel>
                </Tabs>
            </Container>
        }
        </Modal.Body>
      </Modal>
  );
};

export default MatchingResourcesModal;
