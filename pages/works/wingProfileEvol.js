import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title="wingProfileEvol">
            <Container>
                <Title>
                    Wing Profile Evolution Driven by Computational Fluid Dynamics<Badge>2019</Badge>
                </Title>
                <P>
                    The project was developed during my undergraduate studies at the EAFIT University.
                    We analyzed the evolution of an initial blunt object (rectangle) into a NACA airfoil.
                    The transition was conducted by examining fluid mechanics indicators such as lift, drag,
                    streamline curvature, and pressure difference.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Matlab, Ansys</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Publication PDF</Meta>
                        <Link href="https://revistas.uis.edu.co/index.php/revistauisingenierias/article/view/9031/9117" target="_blank">
                            UIS Ingenierías <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Citation</Meta>
                        Cristian C. Rendon, Jose L. Hernandez, Oscar Ruiz – Salguero, Carlos A. Alvarez, Mauricio Toro.  Vol. 18 , n. 2, pp. 139-146, 2019 Revista UIS Ingenierías, ISSN printed: 1657-4583, ISSN (online): 2145-8456,
                        url: <Link href='https://revistas.uis.edu.co/index.php/revistauisingenierias/article/view/9031' target="_blank">
                            https://revistas.uis.edu.co/index.php/revistauisingenierias/article/view/9031
                        </Link>, {' '} ,
                        doi: 10.18273/revuin.v18n2-2019013. Published online: 2019-02-14  .
                    </ListItem>
                </List>

                <WorkImage src="/images/works/Wing_Profile_Evolution/lift_drag_var.png" alt="Lift and drag evolution" />
                <WorkImage src="/images/works/Wing_Profile_Evolution/experiments_evolution.png" alt="Profile Evolution" />
            </Container>


        </Layout>
    )
}

export default Work;