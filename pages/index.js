import NextLink from 'next/link';
import { Container, Box, Heading, Image, Button, Link, useColorModeValue } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';

const Page = () => {
    return (
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
                    Works
                </Heading>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisi orci,
                    tincidunt sed bibendum sed, varius ut mi. Praesent sed tempor nibh. Nunc faucibus
                    augue quis cursus pellentesque. Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Ut mattis nibh et tincidunt vehicula. Morbi iaculis
                    risus non dignissim malesuada. Nam eu luctus enim, tempor vestibulum mauris. Nunc
                    egestas, urna a iaculis posuere, est odio bibendum diam, eu blandit nisi lorem ut lectus.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et purus ut velit gravida convallis
                    at eu velit. Proin ante nisi, finibus quis ligula in, efficitur rutrum neque. This is an example
                    of a link in the paragraph{' '}
                    <NextLink href="/about">
                        <Link>Works</Link>
                    </NextLink>.
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
    );
}

export default Page;