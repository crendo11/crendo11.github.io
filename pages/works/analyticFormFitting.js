import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title="analyticFormFitting">
            <Container maxW='container'>
                <Title>
                    Analytic Form Fitting in Poor Triangular Meshes <Badge>2021</Badge>
                </Title>
                <P>
                    A novel algorithm for rapid segmentation of 3D triangular meshes which is suited
                    to the limitations of web applications. The algorithm segments and identifies
                    Cylinders, Spheres, and Cones in triangulated meshes. We accelerate the fitting by 
                    implementing a spatial hashing and boundary representation during the preprocessing sequence.
                </P>
                <P>
                    The research is conducted in a partnership between the {' '}
                    <Link href="http://cadcamcae.eafit.edu.co/" target="_blank">
                        CAD CAM CAE Laboratory
                    </Link> {' '} and <Link href="https://www.cohesivemanufacturing.com/" target="_blank">
                        Manufactura Cohesiva
                    </Link> {' '}, applying research to develop new technologies and methods in the industry.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Publication PDF</Meta>
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
                <WorkImage src="/images/works/Analytic_Form_Fitting/cone_fitting.png" alt="Fitting of a cone" />
            </Container>
        </Layout>
    )
}

export default Work;