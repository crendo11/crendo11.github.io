import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title="phdThesis">
            <Container maxW='container'>
                <Title>
                    PhD Thesis: Enhancing Human Performance Through Augmented Vision <Badge>2026</Badge>
                </Title>
                <P>
                    During my PhD, I worked on the design, development, and evaluation of an optical system for enhancing human vision. We developed a 
                    system that combines a Spatial Light Modulator (SLM) with a freeform refractive lens, providing dynamical spatially-multiplxed focus control. 
                    This configuration allows to select different areas of the field of view (FOV) and change the optical power to focus at a specific distance.
                </P>
                <P>
                    We quantitatively evaluated the system using a camera that simulates a presbyopic eye (fixed focus at infinity)
                    and measuring the MTF of the caputred images through the system when it is on and off.
                    The results confirm that the system can bring objects from multiple depths into focus, demonstrating a higher MTF for each focused 
                    plane when the system is active compared to the inactive condition.
                </P>
                <P>
                The thesis was conducted under the supervision of: Prof. Christian Sandor, Prof. Richard Legras, and Prof. Marie-Anne Burcklen at the {' '}
                    <Link href="https://ar-ai.org/" target="_blank">
                        Université Paris-Sclay.
                    </Link>
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Thesis PDF</Meta>
                        <Link href="https://theses.hal.science/tel-05518916" target="_blank">
                            HAL Theses<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/PhD_Thesis/optical_layout.png" alt="OOptical Layout of the Prototype" />
                <WorkImage src="/images/works/PhD_Thesis/built_system.png" alt="Built System" />
                <WorkImage src="/images/works/PhD_Thesis/d0p75_d4p37_off.png" alt="System Off" />
                <WorkImage src="/images/works/PhD_Thesis/d0p75_d4p37.png" alt="System On" />
            </Container>
        </Layout>
    )
}

export default Work;