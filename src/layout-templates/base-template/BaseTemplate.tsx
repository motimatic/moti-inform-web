import { Grid } from '@mantine/core';
import ResourceFinder from "../../modules/resource-finder/ResourceFinder.tsx";
import PageHeader from "./components/pageHeader.tsx";
import AdBanner from './components/adBanner.tsx';
import QuickLinksComponent from '../../modules/quick-links/QuickLinksComponent.tsx';
import Footer from './components/footer.tsx';

const BaseTemplate = () => (
    <>
        <Grid gutter={0}>
            <Grid.Col span={12} style={{ background: 'gray', textAlign: 'center' }}>
                <PageHeader />
            </Grid.Col>
            <Grid.Col span={12} style={{ background: '#6588de', textAlign: 'center' }}>
                <AdBanner/>
            </Grid.Col>
            <Grid.Col span={12}>
                <QuickLinksComponent/>
            </Grid.Col>
            <Grid.Col span={12}>
                <ResourceFinder />
            </Grid.Col>
            <Grid.Col span={12}>
                <Footer/>
            </Grid.Col>
        </Grid>
    </>
);

export default BaseTemplate;
