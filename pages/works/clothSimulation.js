import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title="clothSimulation">
            <Container>
                <Title>
                    Human-cloth Simulation<Badge>Ongoing</Badge>
                </Title>
                <P>
                    Worked on the research and development of a kernel for the computer
                    simulation in real-time of cloth using potential functions.
                </P>
                <P>
                    The research is conducted in the context of my Master&apos;s degree at the {' '}
                    <Link href="http://cadcamcae.eafit.edu.co/" target="_blank">
                    CAD CAM CAE Laboratory
                    </Link> {' '} in partnership with {' '}
                    <Link href="https://www.cohesivemanufacturing.com/" target="_blank">
                        Manufactura Cohesiva
                    </Link> {' '}
                    in an effort to contribute to the industry through research and academia.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Javascript, Three.js, Ammo,js</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/Clothing/animation.gif" alt="Animation of Cloth Interaction" />
                <WorkImage src="/images/works/Clothing/manequin_scalar.png" alt="Scalar Fields for Manequins" />
            </Container>
        </Layout>
    )
}

export default Work;