'use client';

import { Container, Group, Button, Box, Burger, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Apple } from 'lucide-react';
import classes from './Header.module.css';

const links = [
    { link: '/active', label: 'Store' },
    { link: '/mac', label: 'Mac' },
    { link: '/ipad', label: 'iPad' },
    { link: '/iphone', label: 'iPhone' },
    { link: '/watch', label: 'Watch' },
    { link: '/vision', label: 'Vision' },
    { link: '/airpods', label: 'AirPods' },
    { link: '/tv-home', label: 'TV & Home' },
    { link: '/entertainment', label: 'Entertainment' },
    { link: '/accessories', label: 'Accessories' },
    { link: '/support', label: 'Support' },
];

export function Header() {
    const [opened, { toggle }] = useDisclosure(false);

    // Apple-like header styles inline or via module (using inline for speed/simplicity in this context, but module is cleaner. 
    // I will use a simple style object for the blur since I'm not creating the CSS file in this tool call).
    // Actually, I'll write the CSS in a style tag or basic inline styles for the "sticky" part.

    return (
        <Box
            component="header"
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 100,
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(0,0,0,0.1)',
                height: '48px',
            }}
        >
            <Container size="lg" h="100%">
                <Group justify="space-between" h="100%" wrap="nowrap">
                    <Apple size={18} style={{ cursor: 'pointer', opacity: 0.8 }} />

                    <Group gap="xl" visibleFrom="sm">
                        {links.map((link) => (
                            <Text
                                key={link.label}
                                size="xs"
                                c="dimmed"
                                style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                                onMouseOver={(e) => (e.currentTarget.style.color = 'black')}
                                onMouseOut={(e) => (e.currentTarget.style.color = 'var(--mantine-color-dimmed)')}
                            >
                                {link.label}
                            </Text>
                        ))}
                    </Group>

                    <Group gap="xs">
                        <Button size="xs" radius="xl" variant="filled" color="blue">
                            Buy
                        </Button>
                        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    </Group>
                </Group>
            </Container>
        </Box>
    );
}
