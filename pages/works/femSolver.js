import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title="femSolver">
            <Container>
                <Title>
                    FEM Solver for Trusses and Frames <Badge>2017</Badge>
                </Title>
                <P>
                    Project developed under the course IM-0238 Finite Element Method of my undergraduate 
                    studies at the EAFIT University. The program uses the Finite Element Method to solve 
                    trusses and frames with known displacements equal to zero.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Github Repository</Meta>
                        <Link href="https://github.com/crendo11/truss-frame-FEM-solver" target="_blank">
                            FEM Solver Repository <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Matlab</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/FEM/displacements_animation.gif" alt="Node displacements animation" />
            </Container>


        </Layout>
    )
}

export default Work;