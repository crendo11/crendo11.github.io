import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title="pendulum">
            <Container>
                <Title>
                    Analysis and Simulation of a Pendulum <Badge>2018</Badge>
                </Title>
                <P>
                    This project was conducted for the Linear Systems course to grasp the concepts of system linearization, 
                    stability and control. We define and analyze a pendular model using Matlab and its tool Simulink to simulate 
                    the system under different inputs. 
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>PDF</Meta>
                        <Link href="https://drive.google.com/file/d/1pIWiXXCSfjG8ogjYJx_TUVZ3pk6vzYq-/view?usp=sharing" target="_blank">
                        Analysis and Simulation of a Pendulum <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/pendulum/pendulum_variables.png" alt="BEM mesh entities" />
                <WorkImage src="/images/works/pendulum/pendulum_stability.png" alt="Singular example" />
            </Container>
        </Layout>
    )
}

export default Work;