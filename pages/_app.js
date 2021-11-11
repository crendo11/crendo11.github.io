import { ChakraProvider } from "@chakra-ui/react";
import Layoout from '../components/layouts/main'; 

const Website = ( { Component, pageProps, router } ) => {
    return (
        <ChakraProvider>
            <Layoout router={router}>
                <Component {...pageProps} key={ router.router } />
            </Layoout>
        </ChakraProvider>
    );
}

export default Website;