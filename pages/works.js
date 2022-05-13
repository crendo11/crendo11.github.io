import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';

import thumbnailTestWork from '../public/images/works/Analytic_Form_Fitting/cylinderFitting_work_image.png'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="analyticFormFitting" title="Analytic Form Fitting in Poor Triangular Meshes" thumbnail={thumbnailTestWork}>
                            A novel algorithm for rapid segmentation of 3D meshes, suited to the limitations of web applications
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works;