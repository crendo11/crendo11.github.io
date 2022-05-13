import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';

import thumbnailAnalytic from '../public/images/works/Analytic_Form_Fitting/cylinderFitting_work_image.png';
import thumbnailSkinFriction from '../public/images/works/Skin_Friction/temporal_mean.png';
import thumbnailWingEvol from '../public/images/works/Wing_Profile_Evolution/wing_evol.png';
import thumbnailFEM from '../public/images/works/FEM/portico_solution.png';

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="analyticFormFitting" title="Analytic Form Fitting in Poor Triangular Meshes" thumbnail={thumbnailAnalytic}>
                            A novel algorithm for rapid segmentation of 3D meshes, suited to the limitations of web applications
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="skinFriction" title="Skin-friction Measurements in Turbulent Boundary Layers" thumbnail={thumbnailSkinFriction}>
                            A research article produced in partnership with The University of Melbourne.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="wingProfileEvol" title="Wing Profile Evolution Driven by Computational Fluid Dynamics" thumbnail={thumbnailWingEvol}>
                            Computational aided evolution from a rectangle to an airfoil.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="femSolver" title="FEM Solver" thumbnail={thumbnailFEM}>
                            Finite Element Method solver for truss and porticos.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works;