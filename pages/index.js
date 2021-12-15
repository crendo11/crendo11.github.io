import NextLink from 'next/link';
import { Container, Box, Heading, Image, Button, Link, useColorModeValue } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'witeAlpha.200')} p={3} mb={6} align="center">
                    Hello, I&apos;m a full stack developer based in Colombia
                </Box>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page.-title">
                            Cristian Rendon
                        </Heading>
                        <p>Mechanical Engineer (Researcher, Developer, Geek)</p>
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
                        I am a passionate Mechanical Engineer with a minor in Computational Mechanics from
                        Universidad EAFIT, Colombia. I have been working in the field of Computer Graphics
                        with a strong background in programming. Currently, I am pursuing a MSc degree in
                        Engineering in the field of Computational Geometry and Computer Graphics for cloud
                        technologies, and also hold an software engineer position at {' '}
                        <Link href="https://cohesivemanufacturing.com" target="_blank">
                            Manufactura Cohesiva S.A.S
                        </Link>, a top Colombian Start-Up focused on the research and development of high-quality
                        cloud technology solutions for industry 4.0. <br/>
                        I have produced high-quality research papers concerning wing profile evolution,
                        skin friction measurements, and analytic forms fitting partnering with top tier 
                        universities such as UIS (Colombia) and University of Melbourne (Australia).
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/about">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                My Portafolio
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
                    {/* Graduation date */}
                    <BioSection>
                        <BioYear>
                            2020
                        </BioYear>
                        Completed my Bachelor&apos;s Degree in Mechanical Engineering at Universidad EAFIT.
                    </BioSection>
                    {/* Current studies, MSc */}
                    <BioSection>
                        <BioYear>
                            2019
                        </BioYear>
                        Research intern at the Walter Bassett Aerodynamics Laboratory - The University of Melbourne.
                    </BioSection>
                    {/* Current studies, MSc */}
                    <BioSection>
                        <BioYear>
                            2020-2022
                        </BioYear>
                        Master&apos;s of Science in Engineering at Universidad EAFIT.
                    </BioSection>
                    {/* Current studies, MSc */}
                    <BioSection>
                        <BioYear>
                            2020-present
                        </BioYear>
                        Works at {' '}
                        <Link href="https://cohesivemanufacturing.com" target="_blank">
                            Manufactura Cohesiva S.A.S
                        </Link>.
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I love
                    </Heading>
                    <Paragraph>
                        Science, Games, Technology, Movies and Series,
                    </Paragraph>
                </Section>
            </Container>
        </Layout>
    );
}

export default Page;