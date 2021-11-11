import Logo from './logo';
import NextLink from 'next/link';
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react';
import { HumburgerIcon } from '@chakra-ui/icons';

const LinkItem = ({ href, path, children }) => {
    const active = path == href;
    const inactiveColor = useColorModeValue('gray.200', 'whiteAlpha.900');
    return (
        <NextLink>
            <Link
                p={2}
                bg={active ? 'glassTeal' : undefined}
                color={active ? '#202023' : inactiveColor}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props;

    return (
        <Box
            positions="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{ backdropFiler: 'blur(10px)' }}
            zIndex={1}
            {...props}>
            <Container diaplay="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="space-between">
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo/>
                    </Heading>
                </Flex>
            </Container>
        </Box>
    )

}


export default Navbar;