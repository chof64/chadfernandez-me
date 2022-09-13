/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            'fontFamily': {
                'sans': ['Roboto'],
                'mono': ['JetBrains Mono']
            },            
            'colors': {
                //* https://coolors.co/ffffff-2f4b4f-00a79a
                'colorLight': '#ffffff', 
                'colorDark': '#2a2a29', 
                'colorAccentBlue': '#008792', 
                'colorAccentDarkBlue': '#00646d',
            },
            'animation': {
                'gradient-x':'gradient-x 15s ease infinite',
                'gradient-y':'gradient-y 15s ease infinite',
                'gradient-xy':'gradient-xy 15s ease infinite',
            },
            'keyframes': {
                'gradient-y': {
                    '0%, 100%': {
                        'background-size':'400% 400%',
                        'background-position': 'center top'
                    },
                    '50%': {
                        'background-size':'200% 200%',
                        'background-position': 'center center'
                    }
                },
                'gradient-x': {
                    '0%, 100%': {
                        'background-size':'200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size':'200% 200%',
                        'background-position': 'right center'
                    }
                },
                'gradient-xy': {
                    '0%, 100%': {
                        'background-size':'400% 400%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size':'200% 200%',
                        'background-position': 'right center'
                    },
                },
            },
        },
    },
    plugins: [],
}
