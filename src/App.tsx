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


const templates = {
    base: BaseTemplate,
    fafsa: FafsaTemplate,
};


function App() {

    const [searchParams] = useSearchParams();
    const [selectedTemplate, setSelectedTemplate] = useState("base");
    const TemplateComponent = templates[selectedTemplate];

    const snap = useSnapshot(appStore);

    const service = new LandingPageService();

    useEffect(() => {

        const fetchInfo = async () => {

            try {

                const adId = searchParams.get("adId");

                const landingPageConfig =  await service.getInfo(adId);
                if (landingPageConfig) {
                    setSelectedTemplate(landingPageConfig.template_name);
                    appStore.setLandingPageConfig(landingPageConfig);
                }

            }catch (error){

            }
        }

        fetchInfo().then();


    }, []);

  return (

            <MantineProvider withGlobalStyles withNormalizeCSS>
                <TemplateComponent />
            </MantineProvider>

  )
}

export default App
