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
                    FEM Solver for Truss and Porticos<Badge>2017</Badge>
                </Title>
                <P>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec euismod, nisl eget consectetur sagittis, nisl
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Github Repository</Meta>
                        <Link href="https://github.com/crendo11/truss-portico-FEM-solver" target="_blank">
                            Fem Solver Repository <ExternalLinkIcon mx="2px" />
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