import PageRenderer from "./components/pages/PageRenderer.tsx";
import ProgressBar from "./components/progress-bar/progressBar.tsx";
import ButtonBar from "./components/button-bar/buttonBar.tsx";
import {Grid, Title} from "@mantine/core";
import InfoPanel from "./components/info-panel/infoPanel.tsx";

const ResourceFinder = () => {

    return (
        <Grid columns={12} gutter={0} style={{ margin: 0 }}>
            <Grid.Col span={{sm:12, md:9}} p={20} m={0}>
                <Title order={3} >Resource Finder</Title>
                <ProgressBar/>
                <PageRenderer/>
                <ButtonBar/>
            </Grid.Col>
            <Grid.Col span={{sm:12, md:3}} style={{background: '#B6C5C7'}} className="rounded-xs">
                <InfoPanel />
            </Grid.Col>
        </Grid>

    );
};

export default ResourceFinder;
