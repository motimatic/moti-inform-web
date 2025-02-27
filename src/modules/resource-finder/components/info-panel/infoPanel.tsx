import {useEffect, useState} from "react";
import {useSnapshot} from "valtio/react";
import MetricPanel from "./components/metric-panel/metricPanel.tsx";
import TextPanel from "./components/text-panel/textPanel.tsx";
import { resourceFinderStore } from "../../../../state/resourceFinderStore.ts";

const infoPanels: Record<string, React.ComponentType> = {
    "metric": MetricPanel,
    "text": TextPanel,
};

const InfoPanel = () => {

    useSnapshot(resourceFinderStore);
    const [selectedInfoPanel, setSelectedInfoPanel] = useState<string>("metric");
    const CurrentInfoPanel = infoPanels[selectedInfoPanel];

    useEffect(() => {
        const page = resourceFinderStore.context.getCurrentPage();
        if(page)
            setSelectedInfoPanel(page.summary.type);

    }, [resourceFinderStore.buttonClicked]);

    return (
        <div>
            <CurrentInfoPanel />
        </div>
    );
};

export default InfoPanel;
