'use client';

import { Container, Title, Table, Box } from '@mantine/core';

const specs = [
    { feature: 'Display', value: '6.9-inch Super Retina XDR display' },
    { feature: 'Chip', value: 'A19 Pro chip with 6-core GPU' },
    { feature: 'Camera', value: '48MP Main | Ultra Wide | Telephoto' },
    { feature: 'Material', value: 'Titanium with textured matte glass back' },
    { feature: 'Connector', value: 'USB-C with USB 3 speeds' },
    { feature: 'Battery', value: 'Up to 29 hours video playback' },
];

export function TechSpecs() {
    return (
        <Box component="section" py={120} bg="#F5F5F7">
            <Container size="md">
                <Title order={2} size="h1" mb={60}>Tech Specs</Title>
                <Table verticalSpacing="md" horizontalSpacing="xl" style={{ fontSize: '1.2rem' }}>
                    <Table.Tbody>
                        {specs.map((row) => (
                            <Table.Tr key={row.feature} style={{ borderBottom: '1px solid #d2d2d7' }}>
                                <Table.Td style={{ fontWeight: 600, width: '40%' }}>{row.feature}</Table.Td>
                                <Table.Td style={{ color: '#86868b' }}>{row.value}</Table.Td>
                            </Table.Tr>
                        ))}
                    </Table.Tbody>
                </Table>
            </Container>
        </Box>
    );
}
