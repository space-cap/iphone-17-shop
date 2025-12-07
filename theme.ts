'use client';

import { createTheme, Button } from '@mantine/core';

export const theme = createTheme({
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    headings: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
        sizes: {
            h1: { fontSize: '3.5rem', fontWeight: '700', lineHeight: '1.1' },
            h2: { fontSize: '2.5rem', fontWeight: '600', lineHeight: '1.2' },
        },
    },
    colors: {
        // Custom Titanium Palette
        titanium: [
            '#F5F5F7', // 0: Background Light
            '#E5E5E5', // 1: Light Gray
            '#D1D1D6', // 2: Border Light
            '#B6B5B0', // 3: Natural Titanium (Primary)
            '#8E8E93', // 4: Secondary Text
            '#636366', // 5: Dark Gray
            '#48484A', // 6: Darker Gray
            '#2F343F', // 7: Blue Titanium (Dark)
            '#1C1C1E', // 8: Black Titanium
            '#000000', // 9: Pure Black
        ],
    },
    primaryColor: 'titanium',
    primaryShade: 9,
    components: {
        Button: Button.extend({
            defaultProps: {
                radius: 'xl',
                size: 'md',
            },
            styles: {
                root: {
                    fontWeight: 500,
                }
            }
        }),
    },
});
