import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title="skinFriction">
            <Container>
                <Title>
                    Skin-friction Measurements in Turbulent Boundary Layers<Badge>2020</Badge>
                </Title>
                <P>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec euismod, nisl eget consectetur sagittis, nisl
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Publication Website</Meta>
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