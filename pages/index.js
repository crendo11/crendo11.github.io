import NextLink from 'next/link';
import { Container, Box, Heading, Image, Button, Link, List, ListItem, useColorModeValue, Icon } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import {
    IoLogoLinkedin,
    IoLogoGithub,
    IoMail,
    IoCloudDownload
} from 'react-icons/io5';

const Page = () => {
    return (
        (<Layout>
            <Container maxW='container.sm'>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'witeAlpha.200')} p={3} mb={6} align="center">
                    Hello, I&apos;m a PhD student based in France
                </Box>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page.-title">
                            Cristian Rendon
                        </Heading>
                        <p>PhD student in Augmented Vision (Researcher, Developer, Geek)</p>
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
                        <Image
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/cristian.jpg"
                            alt="Profile Image"
                        />
                    </Box>

                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        About me
                    </Heading>
                    <Paragraph>
                        I am a passionate MSc. Engineer with a minor in Computational
                        Mechanics from Universidad EAFIT, Colombia. I have been working in
                        Computer Graphics with a strong background in programming.
                    </Paragraph>
                    <Paragraph>
                        Currently, I am pursuing a PhD in Augmented Vision at the {' '}
                        <Link href="https://ar-ai.org/" target="_blank">
                            ARAI
                        </Link> group, part of the LISN laboratory from the {' '}
                        <Link href="https://www.cnrs.fr/en" target="_blank">
                            CNRS.
                        </Link> I am working on the thesis &quot;Enhance Human Performance Through
                        Augmented Vision&quot; under the supervision of Prof. Christian Sandor, 
                        Prof. Richard Legras and Prof. Marie-Anne Burcklen.
                    </Paragraph>
                    <Paragraph>
                        I did an MSc in Engineering in Computational Geometry and Computer
                        Graphics for cloud technologies at the {' '}
                        <Link href="http://cadcamcae.eafit.edu.co/" target="_blank">
                            CAD CAM CAE Laboratory
                        </Link>. Also, I held a software engineer position at {' '}
                        <Link href="https://cohesivemanufacturing.com" target="_blank">
                            Manufactura Cohesiva S.A.S
                        </Link>, a top Colombian Start-Up focused on researching and developing of high-quality
                        cloud technology solutions for industry 4.0. <br />
                    </Paragraph>
                    <Paragraph>
                        I have produced high-quality research papers concerning wing profile evolution,
                        skin friction measurements, and analytic forms fitting, partnering with top-tier
                        universities such as UIS (Colombia) and The University of Melbourne (Australia).
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works" legacyBehavior>
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                My Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    {/* Born date (Maybe delete this one) */}
                    <BioSection>
                        <BioYear>1997</BioYear>
                        Born in Medellin, Colombia.
                    </BioSection>
                    {/* Internship, MSc */}
                    <BioSection>
                        <BioYear>
                            2019-2019
                        </BioYear>
                        Research intern at the Walter Bassett Aerodynamics Laboratory - The University of Melbourne.
                    </BioSection>
                    {/* Graduation date */}
                    <BioSection>
                        <BioYear>
                            2015-2020
                        </BioYear>
                        Completed my Bachelor&apos;s Degree in Mechanical Engineering at Universidad EAFIT.
                    </BioSection>
                    {/* Current studies, MSc */}
                    <BioSection>
                        <BioYear>
                            2020-2022
                        </BioYear>
                        Master&apos;s of Science in Engineering at Universidad EAFIT.
                    </BioSection>
                    {/* Graduation date */}
                    <BioSection>
                        <BioYear>
                            2017-2022
                        </BioYear>
                        Researach assistant at {' '}
                        <Link href="http://cadcamcae.eafit.edu.co/" target="_blank">
                            CAD CAM CAE Laboratory
                        </Link>, Universidad EAFIT.
                    </BioSection>
                    {/* Current studies, MSc */}
                    <BioSection>
                        <BioYear>
                            2020-2022
                        </BioYear>
                        Software Engineer at {' '}
                        <Link href="https://cohesivemanufacturing.com" target="_blank">
                            Manufactura Cohesiva S.A.S
                        </Link>.
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2022-present
                        </BioYear>
                        PhD student in Augmented Vision at {' '}
                        <Link href="https://ar-ai.org/" target="_blank">
                            ARAI - LISN
                        </Link>.
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2025-2025
                        </BioYear>
                        Research Visit at  {' '}
                        <Link href="https://www-ui.is.s.u-tokyo.ac.jp/en/" target="_blank">
                            User Interface Research Group 
                        </Link> - The University of Tokyo.
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I love
                    </Heading>
                    <Paragraph>
                        Science, Games, Technology, Sports, Movies and Series
                    </Paragraph>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Find me on
                    </Heading>
                    <Link href="https://www.linkedin.com/in/cristian-rend%C3%B3n-4b474716b/" target="_blank">
                        <Button variant="ghost" colorScheme="teal">
                            <Icon fontSize={24} as={IoLogoLinkedin} />
                        </Button>
                    </Link>
                    <Link href="https://github.com/crendo11/" target="_blank">
                        <Button variant="ghost" colorScheme="teal">
                            <Icon fontSize={24} as={IoLogoGithub} />
                        </Button>
                    </Link>
                    {/* <Link href="https://bsky.app/profile/rendon-cris.bsky.social" target="_blank">
                        <Button variant="ghost" colorScheme="teal">
                            <Icon fontSize={24} as={SiBluesky} />
                        </Button>
                    </Link> */}
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Contact me
                    </Heading>
                    <List>
                        <ListItem>
                            <Button variant="ghost" colorScheme="teal"
                                onClick={() => { navigator.clipboard.writeText('crendoc11@gmail.com') }}
                                leftIcon={<Icon fontSize={24} as={IoMail} />}>
                                crendoc11@gmail.com
                            </Button>
                        </ListItem>
                        <ListItem>
                            <Link href="/uploads/CV_CristianRendon.pdf" target="_blank">
                                <Button variant="ghost" colorScheme="teal"
                                    leftIcon={<Icon fontSize={24} as={IoCloudDownload} />}>
                                    CV
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>)
    );
}

export default Page;