import {Accordion, AccordionControl} from "@mantine/core";
import { useEffect, useState } from "react";
import { resourceFinderStore } from "../../../../../../state/resourceFinderStore";
import { JourneyService } from "../../../../../../shared/services/journey/journeyService";
import { JourneyResource, Resource } from "../../../../../../shared/models/journeyResource.model";
import { useSnapshot } from "valtio";
import { IconArrowRight } from "@tabler/icons-react";

const MatchingResourcesAccordion = () => {
    const arrowIcon = <IconArrowRight size={20} />;
    const { resources } = resourceFinderStore;
    useSnapshot(resourceFinderStore);
    const redirect = (url: string) => {
        window.open(url, "_blank");
    };

    useEffect(() => {
        selected_journey_id().then;
    }, []);

    const selected_journey_id = async () => {
        const { person_id, selected_journey_id } = resourceFinderStore.context;
        if (person_id != 0 && selected_journey_id != 0) {
            const service = new JourneyService();
            const response = await service.resources(
                person_id,
                selected_journey_id
            );
            resourceFinderStore.setResource(response);
        }
    };

    return (
        <Accordion chevronPosition="left" maw={400} mx="auto" className="accordion-container">
            {resources.length > 0 &&
                resources.map((el: JourneyResource) => {
                    return (
                        <Accordion.Item
                            value={el.name.toLocaleLowerCase()}
                            className="accordion-item"
                            key={el.id}
                        >
                            <AccordionControl className="roobert-bold fs-18">{el.name}</AccordionControl>
                            {el.resources.map((resource: Resource) => {
                                return (
                                    <>
                                        <Accordion.Panel>
                                            <button
                                                className="accordion-button"
                                                onClick={() => {
                                                    redirect(resource.url);
                                                }}
                                            >
                                                {resource.name}
                                                {arrowIcon}
                                            </button>
                                        </Accordion.Panel>
                                    </>
                                );
                            })}
                        </Accordion.Item>
                    );
                })}
        </Accordion>
    );
};

export default MatchingResourcesAccordion;
