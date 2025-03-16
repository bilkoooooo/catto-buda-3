import type {Config} from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            textStrokeWidth: {
                '1.2': '1.2px',
            },
            textStrokeColor: {
                darkRed: 'var(--darkRed)',
                lightRed: 'var(--lightRed)',
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primaryDark: "var(--primaryDark)",
                darkRed: "var(--darkRed)",
                lightRed: "var(--lightRed)"
            },
            backgroundOpacity : {
                '15': '0.15',
                '35': '0.35',
                '65': '0.65',
            }
        },
    },
    plugins: [
        function ({addUtilities}: { addUtilities: any }) {
            const newUtilities = {
                '.text-stroke-darkRed': {
                    '-webkit-text-stroke-width': '1.2px',
                    '-moz-text-stroke-width': '1.2px',
                    '-webkit-text-stroke-color': 'var(--darkRed)',
                    '-moz-text-stroke-color': 'var(--darkRed)',
                    'color': 'transparent',
                },
                '.text-stroke-lightRed': {
                    '-webkit-text-stroke-width': '1.2px',
                    '-moz-text-stroke-width': '1.2px',
                    '-webkit-text-stroke-color': 'var(--lightRed)',
                    '-moz-text-stroke-color': 'var(--lightRed)',
                    'color': 'transparent',
                },
            };

            addUtilities(newUtilities, ['responsive', 'hover']);
        },
    ],
} satisfies Config;
