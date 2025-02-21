import PageRenderer from "./components/pages/PageRenderer.tsx";
import ProgressBar from "./components/progress-bar/progressBar.tsx";
import ButtonBar from "./components/button-bar/buttonBar.tsx";
import {Grid} from "@mantine/core";
import InfoPanel from "./components/info-panel/infoPanel.tsx";

const ResourceFinder = () => {


    return (

        <Grid columns={12} gutter={0} style={{ margin: 0 }}>
            <Grid.Col span={9} style={{ padding: '20px', margin: 0 }}>
                <ProgressBar/>
                <PageRenderer/>
                <ButtonBar/>
            </Grid.Col>
            <Grid.Col span={3} style={{background: '#B6C5C7', padding: 0, margin: 0 }}>
                <InfoPanel />
            </Grid.Col>
        </Grid>

    );
};

export default ResourceFinder;
