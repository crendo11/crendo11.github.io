import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';

import thumbnailAnalytic from '../public/images/works/Analytic_Form_Fitting/cylinderFitting_work_image.png';
import thumbnailSkinFriction from '../public/images/works/Skin_Friction/temporal_mean.png';
import thumbnailWingEvol from '../public/images/works/Wing_Profile_Evolution/wing_evol.png';
import thumbnailFEM from '../public/images/works/FEM/portico_solution.png';
import thumbnailCloth from '../public/images/works/Clothing/manequin_scalar.png';
import thumbnailBEM from '../public/images/works/BEM/BEM_mesh.png';
import thumbnaulPendulum from '../public/images/works/pendulum/pendulum_variables.png';

const Works = () => {
    return (
        <Layout>
            <Container maxW='container.sm'>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="clothSimulation" title="Simulation for Human-cloth Interaction" thumbnail={thumbnailCloth}>
                            Development of an engine for the simulations human-cloth interactions.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="analyticFormFitting" title="Analytic Form Fitting" thumbnail={thumbnailAnalytic}>
                            Rapid segmentation of 3D meshes, suited to the limitations of web applications
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="skinFriction" title="Skin-friction Measurements in Turbulent Boundary Layers" thumbnail={thumbnailSkinFriction}>
                            Research article produced in partnership with The University of Melbourne.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="wingProfileEvol" title="Wing Profile Evolution Driven by Computational Fluid Dynamics" thumbnail={thumbnailWingEvol}>
                            Computational aided evolution from a rectangle to an airfoil.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="femSolver" title="FEM Solver" thumbnail={thumbnailFEM}>
                            Finite Element Method solver for trusses and frames.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="bemFluidDynamics" title="Boundary Element Method in Fluid Dynamics" thumbnail={thumbnailBEM}>
                            Co-authored the project of BEM for Fluid Dynamics.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="pendulum" title="Pendulum Model Analysis" thumbnail={thumbnaulPendulum}>
                            Analysis and Simulation of a Pendulum
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works;