
import { resourceFinderStore } from "../../../../../state/resourceFinderStore.ts";
import LinksSummaryRow from "./components/LinksSummaryRow.tsx";
import {useSnapshot} from "valtio/index";
import { Field, PageSection } from "../../../../../shared/models/pageSectionmodel.ts";
import { Accordion, AccordionControl, LoadingOverlay, Title } from "@mantine/core";
import { JourneyResource } from "../../../../../shared/models/journeyResource.model.ts";
import MatchingResourcesAccordion from "./components/MatchingResourcesAccordion.tsx";
import { IconArrowRight } from "@tabler/icons-react";
import StudentForm from "./components/studentForm.tsx";
import { useState } from "react";
import { appStore } from "../../../../../appStore.ts";

const LinksSummaryPage = () => {
    const snapshot = useSnapshot(resourceFinderStore);

    const { title, prompt, form_data } = snapshot.context.getCurrentPage();
    const { isLoading, resources } = resourceFinderStore;
    const fields =  form_data.sections.find((section: PageSection)=> section.name.toLowerCase() == "display");
    return (
        <div className="inner">
                <StudentForm />
            {/* <h1  className="font-normal text-2xl">{prompt || "No summary available"}</h1> */}
            <LoadingOverlay visible={isLoading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
            <div className="flex flex-col items-start">
                <Title className="title roobert-medium" order={1} mt={0} pb={20}>{prompt || "No summary available"}</Title>
                <button className="custom-button flex items-center  w-full md:w-fit mb-6 md:mb-0" onClick={()=>{appStore.setShowStudentForm(true)}}>
                    Email Me My Resources
                    <IconArrowRight size={30} />
                </button>
            </div>
            {
                // fields && fields.fields.map((field: Field)=> {
                //     if(field.value == 0) return null;
                //     return(
                //         <LinksSummaryRow key={field.value} field={field} />
                //     )
                // })
            }
           <MatchingResourcesAccordion/>
          
        </div>
    );
};

export default LinksSummaryPage;

