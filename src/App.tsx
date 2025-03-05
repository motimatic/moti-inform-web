import {useEffect, useState} from 'react'
import './App.css'
import FafsaTemplate from "./layout-templates/fafsa-template/FafsaTemplate.tsx";
import BaseTemplate from "./layout-templates/base-template/BaseTemplate.tsx";
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { useSearchParams } from "react-router-dom";
import {LandingPageService} from "./shared/services/landing-page/LandingPageService.ts";
import {useSnapshot} from "valtio/react";
import {appStore} from "./appStore.ts";

const templates: Record<string, React.ComponentType> = {
    base: BaseTemplate,
    fafsa: FafsaTemplate,
};

function App() {

    const [searchParams] = useSearchParams();
    const [selectedTemplate, setSelectedTemplate] = useState<string>("base");
    console.log("selectedTemplate ", selectedTemplate)
    const TemplateComponent = templates[selectedTemplate];
    useSnapshot(appStore);

    const service = new LandingPageService();

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                console.log('calling');
                const page_url = window.location.hostname;
                const adId = searchParams.get("adId");
                if(adId) {
                    const landingPageConfig =  await service.getInfo(adId, page_url);
                    if (landingPageConfig) {
                        setSelectedTemplate(landingPageConfig.template_name);
                        appStore.setLandingPageConfig(landingPageConfig);
                    }
                }

            }catch (error){
                console.log("Error App ", error)
            }
        }

        fetchInfo().then();

    }, []);

  return (

            <MantineProvider>
                <TemplateComponent />
            </MantineProvider>

  )
}

export default App
