import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title="augmentedVisionLitReview">
            <Container maxW='container'>
                <Title>
                    Augmented Vision Systems: Paradigms and Applications <Badge>2025</Badge>
                </Title>
                <P>
                <b>Abstract</b>
                <br/>
                Augmented Reality (AR) has grown from specialised uses to applications for the common public. 
                One of these developments led to Augmented Vision (AV), which enhances vision beyond traditional methods 
                like glasses or contact lenses. This review aims to compare and categorise AV systems according to the 
                paradigms they implement to enhance the users' vision.
                Additionally, the review examines whether researchers conduct measurements and analysis on the human 
                visual system (HVS) when evaluating their system. Such an overall view will help future researchers position 
                their work on AV. By understanding AV systems' paradigms and approaches, researchers will be well-equipped to 
                identify gaps, explore novel directions, and leverage existing advancements. 
                <br/>
                We searched Scopus, Web of Science, and PubMed databases for publications until February 26, 2025, exploring 
                citations and references for the selected articles to avoid missing out on relevant articles. We then conducted 
                a two-step screening process that involved LLM-assisted screening of the article's abstracts and an in-depth assessment 
                of the article. This review follows the PRISMA statement, reducing bias risk. 
                <br/>
                We selected 113 of 469 articles, as they improved users' visual performance. We defined three main categories: 
                (1) adding light to the incoming light field, (2) modifying the incoming light field, and (3) intersecting approaches. 
                We found three main application areas: (1) task-specific, (2) vision correction, and (3) visual perception
                 enhancement. The most typical application is task-specific. We identified a gap in the literature since 
                 just four of the papers we reviewed measured and analysed the accommodation while utilising the device.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Publication (Early Access)</Meta>
                        <Link href="https://doi.org/10.1109/TVCG.2025.3587527" target="_blank">
                            IEEE TVCG<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Meta>Open Access Version (comming soon)</Meta>
                        <Link href="https://doi.org/10.1109/TVCG.2025.3587527" target="_blank">
                            HAL<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Meta>Citation</Meta>
                        Cristian Rendon-Cardona, Marie-Anne Burcklen, Richard Legras, Christian Sandor.
                        IEEE Transactions on Visualization and Computer Graphics, XX(XX), 1-18, July 2025. 
                        doi: {' '}  <Link href='https://doi.org/10.1109/TVCG.2025.3587527' target="_blank">
                        10.1109/TVCG.2025.3587527
                        </Link> {' '}
                    </ListItem>
                </List>
                <WorkImage src="/images/works/AV_systems_review/alluvial_categories.jpg" alt="Analytic Form Fitting in Poor Triangular Meshes" />
                <WorkImage src="/images/works/AV_systems_review/publications_per_year.jpg" alt="Fitting of a cone" />

                <P>
                    <Link href="https://www.rendon-cristian.com/augmented_vision_lit_review/av_taxonomy.html" target="_blank">
                            Click here
                    </Link>
                    {' '} for an interactive visualization of the papers distribution within the viewing paradigm used, the modulation paradigm, and the application.
                </P>
            </Container>
        </Layout>
    )
}

export default Work;