import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title="analyticFormFitting">
            <Container>
                <Title>
                    Analytic Form Fitting in Poor Triangular Meshes<Badge>2021</Badge>
                </Title>
                <P>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec euismod, nisl eget consectetur sagittis, nisl
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Publication Website</Meta>
                        <Link href="https://www.mdpi.com/1999-4893/14/11/304" target="_blank">
                            Algorithms - MDPI<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Citation</Meta>
                        Cristian Rendon-Cardona, Jorge Correa, Diego A. Acosta, Oscar Ruiz-Salguero 
                        Journal Algorithms, MDPI, 2021, 14(11), 304, eISSN 1999-4893,
                        url = {' '}
                        <Link href='https://www.mdpi.com/1999-4893/14/11/304' target="_blank"> 
                        https://www.mdpi.com/1999-4893/14/11/304
                        </Link> {' '}
                        doi = {' '}  <Link href='https://doi.org/10.3390/a14110304' target="_blank"> 
                        https://doi.org/10.3390/a14110304
                        </Link> {' '}
                        Published online:  22 Oct 2021
                    </ListItem>
                </List>
                <WorkImage src="/images/works/Analytic_Form_Fitting/cylinderFitting_experiment.png" alt="Analytic Form Fitting in Poor Triangular Meshes" />
            </Container>


        </Layout>
    )
}

export default Work;