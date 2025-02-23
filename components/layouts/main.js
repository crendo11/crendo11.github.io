import Head from 'next/head';
import Navbar from '../navbar';
import { Analytics } from "@vercel/analytics/react"
import { Box, Container } from '@chakra-ui/react';

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title> Cristian Rendon - Homepage </title>
            </Head>
            <Navbar path={router.asPath}/>
            <Container maxW="container.md" pt={14}> 
                {children}
            </Container>
            <Analytics />
        </Box>
    )
}

export default Main;