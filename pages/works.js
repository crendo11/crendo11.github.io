import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/Section';
import { WorkGridItem } from '../components/grid-item';

import thumbnailTestWork from '../public/images/cristian.jpg'

const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id="testWork" title="Test Work" thumbnail={thumbnailTestWork}>
                        A test work item fot page
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works;