import { Grid } from '@mantine/core';
import ResourceFinder from "../../modules/resource-finder/ResourceFinder.tsx";
import PageHeader from "./components/pageHeader.tsx";
import AdBanner from './components/adBanner.tsx';
import QuickLinksComponent from '../../modules/quick-links/QuickLinksComponent.tsx';

const BaseTemplate = () => (
    <>
        <Grid gutter={0} style={{ height: "100%" }}>
            <Grid.Col span={12} style={{ background: 'white', textAlign: 'center' }}>
                <PageHeader />
            </Grid.Col>
            <Grid.Col span={12}>
                <AdBanner/>
            </Grid.Col>
            <Grid.Col span={12} >
                <QuickLinksComponent/>
            </Grid.Col>
            <Grid.Col span={12} style={{ height: "100%" }}>
                <ResourceFinder />
            </Grid.Col>
            {/* <Grid.Col span={12}>
                <Footer/>
            </Grid.Col> */}
        </Grid>
    </>
);

export default BaseTemplate;
 top:0;