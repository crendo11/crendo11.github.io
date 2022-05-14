import NextLink from 'next/link';
import { Container, Box, Heading, Image, Button, Link, List, ListItem, useColorModeValue, Icon } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import {
    IoLogoInstagram,
    IoLogoLinkedin,
    IoLogoGithub,
    IoMail,
    IoPhonePortrait
} from 'react-icons/io5';

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'witeAlpha.200')} p={3} mb={6} align="center">
                    Hello, I&apos;m a Mechanical Engineer based in Colombia
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
                        with a strong background in programming.
                    </Paragraph>
                    <Paragraph>
                        Currently, I am pursuing an MSc degree in
                        Engineering in the field of Computational Geometry and Computer Graphics for cloud
                        technologies at the {' '}
                        <Link href="http://cadcamcae.eafit.edu.co/" target="_blank">
                            CAD CAM CAE Laboratory
                        </Link>. Also, hold a software engineer position at {' '}
                        <Link href="https://cohesivemanufacturing.com" target="_blank">
                            Manufactura Cohesiva S.A.S
                        </Link>, a top Colombian Start-Up focused on the research and development of high-quality
                        cloud technology solutions for industry 4.0. <br />

                    </Paragraph>
                    <Paragraph>
                        I have produced high-quality research papers concerning wing profile evolution,
                        skin friction measurements, and analytic forms fitting partnering with top tier
                        universities such as UIS (Colombia) and The University of Melbourne (Australia).
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
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
                            2017-present
                        </BioYear>
                        Researach assistant at {' '}
                        <Link href="http://cadcamcae.eafit.edu.co/" target="_blank">
                            CAD CAM CAE Laboratory
                        </Link>, Universidad EAFIT.
                    </BioSection>
                    {/* Current studies, MSc */}
                    <BioSection>
                        <BioYear>
                            2020-present
                        </BioYear>
                        Software Engineer at {' '}
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
                    <Link href="https://www.instagram.com/cris2125_/" target="_blank">
                        <Button variant="ghost" colorScheme="teal">
                            <Icon fontSize={24} as={IoLogoInstagram} />
                        </Button>
                    </Link>
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
                            <Button variant="ghost" colorScheme="teal"
                                onClick={() => { navigator.clipboard.writeText('+573208719484') }}
                                leftIcon={<Icon fontSize={24} as={IoPhonePortrait} />}>
                                +57 320 8719484
                            </Button>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    );
}

export default Page;