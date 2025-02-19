import { useState } from 'react'
import './App.css'
import FafsaTemplate from "./layout-templates/fafsa-template/FafsaTemplate.tsx";
import BaseTemplate from "./layout-templates/base-template/BaseTemplate.tsx";
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

const templates = {
    base: BaseTemplate,
    fafsa: FafsaTemplate,
};


function App() {

    const [selectedTemplate, setSelectedTemplate] = useState("base");
    const TemplateComponent = templates[selectedTemplate];

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <TemplateComponent />
    </MantineProvider>
  )
}

export default App
