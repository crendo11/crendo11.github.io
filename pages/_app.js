import { ChakraProvider } from "@chakra-ui/react";
import Layoout from '../components/layouts/main';
import Fonts from '../components/fonts';
import theme from '../lib/theme';
import { AnimatePresence } from 'framer-motion';

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layoout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key={router.router} />
                </AnimatePresence>
            </Layoout>
        </ChakraProvider>
    );
}

export default Website;