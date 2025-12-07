'use client';

import { Container, Grid, Card, Text, Title, ThemeIcon, Stack } from '@mantine/core';
import { motion } from 'framer-motion';
import { Cpu, Zap, Camera, Battery, Shield } from 'lucide-react';

import Image from 'next/image';

const features = [
    {
        title: 'A19 Pro',
        description: 'The fastest chip ever in a smartphone. Console-level gaming.',
        icon: Cpu,
        span: 8,
        height: 400,
        image: '/images/feature_chip.jpg',
        darkText: false
    },
    {
        title: 'Titanium',
        description: 'Aerospace-grade titanium design. Stronger, lighter.',
        icon: Shield,
        span: 4,
        height: 400,
        image: '/images/feature_titanium.jpg',
        darkText: true
    },
    {
        title: '48MP Camera',
        description: 'Next-generation portraits with Focus and Depth Control.',
        icon: Camera,
        span: 4,
        height: 300,
        image: '/images/feature_camera.png',
        darkText: false
    },
    {
        title: 'All-day Battery',
        description: 'Up to 29 hours video playback.',
        icon: Battery,
        span: 4,
        height: 300,
        image: '/images/feature_battery.jpg',
        darkText: false
    },
    {
        title: 'Action Button',
        description: 'A shortcut to your favorite feature.',
        icon: Zap,
        span: 4,
        height: 300,
        darkText: true
    },
];

const FeatureCard = ({ feature, index }: { feature: any; index: number }) => {
    const Icon = feature.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ height: '100%' }}
        >
            <Card
                shadow="sm"
                padding="xl"
                radius="lg"
                style={{
                    height: '100%',
                    backgroundColor: feature.image ? '#000' : '#F5F5F7',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    color: feature.darkText ? 'black' : 'white',
                    minHeight: feature.height
                }}
            >
                {feature.image && (
                    <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        style={{ objectFit: 'cover', opacity: 0.8, zIndex: 0 }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                )}
                <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Stack>
                        <ThemeIcon size={48} radius="md" variant={feature.darkText ? "light" : "white"} color="gray" style={{ backgroundColor: feature.darkText ? undefined : 'rgba(255,255,255,0.2)' }}>
                            <Icon size={24} color={feature.darkText ? 'black' : 'white'} />
                        </ThemeIcon>
                        <Title order={3} size="h2" fw={600} style={{ color: feature.darkText ? '#1d1d1f' : '#f5f5f7' }}>
                            {feature.title}
                        </Title>
                    </Stack>
                    <Text size="lg" style={{ color: feature.darkText ? '#86868b' : '#a1a1a6' }}>
                        {feature.description}
                    </Text>
                </div>
            </Card>
        </motion.div>
    );
};

export function Features() {
    return (
        <Container size="xl" py={120}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <Title order={2} size="3rem" ta="center" mb={80}>
                    Detailed to the pixel.
                </Title>
            </motion.div>

            <Grid gutter="lg">
                {features.map((feature, index) => (
                    <Grid.Col key={index} span={{ base: 12, md: feature.span }}>
                        <FeatureCard feature={feature} index={index} />
                    </Grid.Col>
                ))}
            </Grid>
        </Container>
    );
}
