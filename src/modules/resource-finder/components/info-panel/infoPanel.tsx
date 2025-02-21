import {useEffect, useState} from "react";
import {Page} from "../../../../shared/models/page.model.ts";
import {useSnapshot} from "valtio/react";
import {resourceFinderStore} from "../../state/resourceFinderStore.ts";
import MetricPanel from "./components/metric-panel/metricPanel.tsx";
import TextPanel from "./components/text-panel/textPanel.tsx";



const infoPanels = {
    "metric": MetricPanel,
    "text": TextPanel,
};

const InfoPanel = () => {

    const snap = useSnapshot(resourceFinderStore);

    const [selectedInfoPanel, setSelectedInfoPanel] = useState("metric");
    const CurrentInfoPanel = infoPanels[selectedInfoPanel];


    useEffect(() => {

        const page = resourceFinderStore.context.getCurrentPage();

        setSelectedInfoPanel(page.summary.type);

    }, [resourceFinderStore.buttonClicked]);

    return (
        <div style={{padding:'10px'}}>
            <CurrentInfoPanel />
        </div>
    );
};

export default InfoPanel;
