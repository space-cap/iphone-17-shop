'use client';

import { Container, Title, Group, Stack, Text, ColorSwatch, Button, Paper, Center, Box } from '@mantine/core';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const colors = [
    { name: 'Natural Titanium', value: '#B6B5B0', image: '/images/iphone_natural.png' },
    { name: 'Blue Titanium', value: '#2F343F', image: '/images/iphone_blue.png' },
    { name: 'White Titanium', value: '#F2F2F2', image: '/images/iphone_white.png' },
    { name: 'Black Titanium', value: '#1C1C1E', image: '/images/iphone_black.jpg' },
];

export function BuySection() {
    const [activeColor, setActiveColor] = useState(colors[0]);

    return (
        <Box component="section" py={100} style={{ backgroundColor: '#fff' }}>
            <Container size="lg">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <Title order={2} mb="xl">Buy iPhone 17 Pro</Title>

                    <Group align="flex-start" grow>
                        {/* Left: Product Image */}
                        <Paper bg="#F5F5F7" radius="lg" p="xl" h={500} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                            <motion.div
                                key={activeColor.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                                style={{ position: 'relative', width: '100%', height: '100%' }}
                            >
                                <Image
                                    src={activeColor.image}
                                    alt={`iPhone 17 Pro - ${activeColor.name}`}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    priority
                                />
                            </motion.div>
                        </Paper>

                        {/* Right: Controls */}
                        <Stack gap="xl" px="lg">
                            <div>
                                <Text fw={600} size="xl" mb="xs">Model</Text>
                                <Text size="lg" c="dimmed">iPhone 17 Pro</Text>
                            </div>

                            <div>
                                <Text fw={600} size="xl" mb="md">Finish. <span style={{ fontWeight: 400, color: 'gray' }}>Pick your favorite.</span></Text>
                                <Text size="sm" fw={600} mb="sm">Color: {activeColor.name}</Text>
                                <Group>
                                    {colors.map((color) => (
                                        <ColorSwatch
                                            key={color.name}
                                            color={color.value}
                                            onClick={() => setActiveColor(color)}
                                            size={40}
                                            style={{
                                                cursor: 'pointer',
                                                border: activeColor.name === color.name ? '2px solid #0071e3' : '1px solid transparent',
                                                padding: '4px'
                                            }}
                                            radius="xl"
                                        />
                                    ))}
                                </Group>
                            </div>

                            <div>
                                <Text fw={600} size="xl" mb="md">Storage. <span style={{ fontWeight: 400, color: 'gray' }}>How much space do you need?</span></Text>
                                <Stack gap="sm">
                                    {['128GB', '256GB', '512GB', '1TB'].map((size) => (
                                        <Button
                                            key={size}
                                            variant="outline"
                                            color="gray"
                                            size="lg"
                                            fullWidth
                                            styles={{ root: { justifyContent: 'space-between', borderColor: '#d2d2d7', color: 'black' } }}
                                        >
                                            <span>{size}</span>
                                            <span style={{ fontSize: '0.9em', color: 'gray' }}>From ${999 + (size === '128GB' ? 0 : 100)}</span>
                                        </Button>
                                    ))}
                                </Stack>
                            </div>
                        </Stack>
                    </Group>
                </motion.div>
            </Container>
        </Box>
    );
}

