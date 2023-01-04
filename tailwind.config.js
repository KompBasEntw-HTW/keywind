const colors = require('tailwindcss/colors');

/**
 * @type { import('tailwindcss').Config }
 */
module.exports = {
  content: ['./theme/**/*.ftl'],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      colors: {
        primary: colors.amber,
        secondary: colors.gray,
        brand: {
          DEFAULT: '#009687',
          50: '#F1F9F8',
          100: '#E2F3F1',
          200: '#BFE5E1',
          300: '#C2FFF9',
          400: '#99FFF5',
          500: '#00B8A5',
          600: '#009687',
          700: '##007A6E',
          800: '#00665C',
          900: '##005249',
        },
        provider: {
          bitbucket: '#0052CC',
          facebook: '#1877F2',
          github: '#181717',
          gitlab: '#FC6D26',
          google: '#4285F4',
          instagram: '#E4405F',
          linkedin: '#0A66C2',
          microsoft: '#5E5E5E',
          oidc: '#F78C40',
          openshift: '#EE0000',
          paypal: '#00457C',
          stackoverflow: '#F58025',
          twitter: '#1DA1F2',
        },
      },
    },
  },
};
