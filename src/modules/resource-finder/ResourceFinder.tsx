import PageRenderer from "./components/pages/PageRenderer.tsx";
import ProgressBar from "./components/progress-bar/progressBar.tsx";
import ButtonBar from "./components/button-bar/buttonBar.tsx";
import {Container, Grid, Title} from "@mantine/core";
import InfoPanel from "./components/info-panel/infoPanel.tsx";
import { useSnapshot } from "valtio";
import { resourceFinderStore } from "../../state/resourceFinderStore.ts";
import BackButton from "./components/back-button/backButton.tsx";

const ResourceFinder = () => {
    const snapshot = useSnapshot(resourceFinderStore);
    const { current_page } = snapshot.context;
    const totalPages = 3;
    const currentProgress = ((current_page + 1) / totalPages)* 100;

    return (
        <Grid columns={12} gutter={0} style={{ margin: 0 }}>
            <Grid.Col span={{sm:12, md:9}} p={20} m={0}>
                <Title order={3} >Resource Finder</Title>
                <Grid align="center">
                    <Grid.Col span={{base:11}} ><ProgressBar currentProgress={currentProgress}/></Grid.Col>
                    {  current_page != 0 &&
                            <Grid.Col span={{base:1}}><BackButton/></Grid.Col>
                    }
                </Grid>
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
