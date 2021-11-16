import { ChakraProvider } from "@chakra-ui/react";
import Layoout from '../components/layouts/main';
import Fonts from '../components/fonts';
import theme from '../lib/theme';

const Website = ( { Component, pageProps, router } ) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layoout router={router}>
                <Component {...pageProps} key={ router.router } />
            </Layoout>
        </ChakraProvider>
    );
}

export default Website;