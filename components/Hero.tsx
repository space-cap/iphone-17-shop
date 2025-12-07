'use client';

import { Container, Title, Text, Button, Stack, Box, Center } from '@mantine/core';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
    return (
        <Box
            component="section"
            style={{
                minHeight: '100vh', // Full viewport height
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingTop: '60px', // account for header
                background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F5F7 100%)',
                overflow: 'hidden',
            }}
        >
            <Container size="xl" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Title
                        order={1}
                        style={{
                            fontSize: 'clamp(3rem, 8vw, 6rem)',
                            fontWeight: 600,
                            letterSpacing: '-0.02em',
                            marginBottom: '10px',
                        }}
                    >
                        iPhone 17 Pro
                    </Title>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <Title order={2} size="h2" c="dimmed" style={{ fontWeight: 400, marginBottom: '2rem' }}>
                        Titanium. So strong. So light. So Pro.
                    </Title>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    style={{ marginBottom: '3rem' }}
                >
                    <Center>
                        <div style={{ position: 'relative', width: '300px', height: '600px' }}>
                            <Image
                                src="/images/iphone_natural.png"
                                alt="iPhone 17 Pro"
                                fill
                                style={{ objectFit: 'contain', filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.3))' }}
                                priority
                            />
                        </div>
                    </Center>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <Stack align="center" gap="md">
                        <Button size="lg" radius="xl" color="blue" px={40}>
                            Buy
                        </Button>
                        <Text size="sm" c="dimmed">
                            From $999 or $41.62/mo. for 24 mo.
                        </Text>
                    </Stack>
                </motion.div>
            </Container>
        </Box>
    );
}
