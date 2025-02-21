import { Grid } from '@mantine/core';
import ResourceFinder from "../../modules/resource-finder/ResourceFinder.tsx";
import PageHeader from "./components/pageHeader.tsx";

const BaseTemplate = () => (
    <>
        <Grid gutter={0}>
            <Grid.Col span={12} style={{ background: '#6588de', textAlign: 'center' }}>
                <PageHeader />
            </Grid.Col>
            <Grid.Col span={12} style={{ background: '#6588de', textAlign: 'center' }}>
                Hero
            </Grid.Col>
            <Grid.Col span={12} style={{ background: '#f78c6b', textAlign: 'center' }}>
                Quick Links
            </Grid.Col>
            <Grid.Col span={12}>
                <ResourceFinder />
            </Grid.Col>
            <Grid.Col span={12} style={{ background: '#b8e994', textAlign: 'center' }}>
                Footer
            </Grid.Col>
        </Grid>
    </>
);

export default BaseTemplate;
