import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title="bemFluidDynamics">
            <Container maxW='container'>
                <Title>
                    Boundary Element Method in Fluid Dynamics <Badge>2021</Badge>
                </Title>
                <P>
                    Co-author in the project &quot;Solution of Singularities in Boundary Methods for Fluid Dynamics 
                    using Node Displacement and Analytic Integral Evaluation&quot;. An implementation of the BEM to
                    solve Steady Incompressible Viscous Flow in 2D. We solve the singularity of the Boundary Integral
                    Equations by implementing a source node displacement. Publication of the article is pending.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Draft PDF</Meta>
                        <Link href="/uploads/2021_SolutionSingularitiesBEMFluidDynamics.pdf" target="_blank">
                        Solution of Singularities in Boundary Methods for Fluid dynamics <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/BEM/BEM_mesh.png" alt="BEM mesh entities" />
                <WorkImage src="/images/works/BEM/singular_example.png" alt="Singular example" />
            </Container>
        </Layout>
    )
}

export default Work;