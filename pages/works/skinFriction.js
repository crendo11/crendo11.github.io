import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title="skinFriction">
            <Container maxW='container'>
                <Title>
                    Skin-friction Measurements in Turbulent Boundary Layers <Badge>2020</Badge>
                </Title>
                <P>
                    The article was produced as a result of my internship at the {' '}
                    <Link href="https://mechanical.eng.unimelb.edu.au/research/fluid-mechanics/walter-bassett" target="_blank">
                        Walter Bassett aerodynamics laboratory
                    </Link> {', '}
                    where I was under the supervision of Prof. Ivan Marusic and PhD student Jason Ruan in the
                    project &quot;Active Control of Large-scale Structures in High Reynolds Number Turbulent Boundary Layers&quot;.
                </P>
                <P>
                    The article reviews three methods implemented in the laboratory to measure skin friction.
                    <ol>
                        <li> Hot-wire anemometry </li>
                        <li> Hot-film anemometry </li>
                        <li> Particle Image Velocimetry (PIV) </li>
                    </ol>
                    We carried out all the experiments in the High Reynolds Number Boundary Layer Wind Tunnel.
                    To analyse the results, I acquired basic skills in signal post-processing.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Publication PDF</Meta>
                        <Link href="http://www.enggjournals.com/ijet/abstract.html?file=20-12-01-002" target="_blank">
                            International Journal of Engineering and Technology IJET - ENGG Journals <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Citation</Meta>
                        Cristian Rendon-Cardona, Zhoushun Ruan,  Oscar Ruiz-Salguero.  International Journal of Engineering and Technology,
                        e-ISSN : 0975-4024 p-ISSN : 2319-8613, volume 12, issue 1, Publisher Eng Journals.
                        url= {' '}
                        <Link href='http://www.enggjournals.com/ijet/abstract.html?file=20-12-01-002' target="_blank">
                            http://www.enggjournals.com/ijet/abstract.html?file=20-12-01-002
                        </Link>, {' '}
                        doi= DOI : 10.21817/ijet/2020/v12i1/201201002
                        Published: 29 February  2020
                    </ListItem>
                </List>
                <WorkImage src="/images/works/Skin_Friction/piv_setup.png" alt="PIV Setup" />
                <WorkImage src="/images/works/Skin_Friction/hot-wire_setup.png" alt="Hot-wire Setup" />
                <WorkImage src="/images/works/Skin_Friction/PIV_HW_data.png" alt="PIV and Hot-wire data" />
            </Container>
        </Layout>
    )
}

export default Work;