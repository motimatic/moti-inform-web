import { Grid } from '@mantine/core';
import ResourceFinder from "../../modules/resource-finder/ResourceFinder.tsx";

const BaseTemplate = () => (
    <>
        <Grid gutter={0}>
            <Grid.Col span={12} style={{ background: '#ffdd57', textAlign: 'center' }}>
                Header
            </Grid.Col>
            <Grid.Col span={12} style={{ background: '#6588de', textAlign: 'center' }}>
                Hero
            </Grid.Col>
            <Grid.Col span={12} style={{ background: '#f78c6b', textAlign: 'center' }}>
                Quick Links
            </Grid.Col>
            <Grid.Col span={12} style={{ textAlign: 'center' }}>
                <ResourceFinder />
            </Grid.Col>
            <Grid.Col span={12} style={{ background: '#b8e994', textAlign: 'center' }}>
                Footer
            </Grid.Col>
        </Grid>
    </>
);

export default BaseTemplate;
