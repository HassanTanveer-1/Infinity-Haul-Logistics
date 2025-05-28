export const colors = {
  primary: {
    50: '#E6EEF5',
    100: '#C0D5E8',
    200: '#96B9D9',
    300: '#6C9DCA',
    400: '#4D88BE',
    500: '#2E73B3',
    600: '#1F5C96',
    700: '#0A3D62', // Main primary
    800: '#06304E',
    900: '#03233A',
  },
  secondary: {
    50: '#E6F7F6',
    100: '#C0ECE9',
    200: '#96E0DC',
    300: '#65D1CB',
    400: '#3EC4BD',
    500: '#12B0A4', // Main secondary
    600: '#0E8D83',
    700: '#0A6A63',
    800: '#064742',
    900: '#032421',
  },
  accent: {
    50: '#FCF3E9',
    100: '#F8E2C9',
    200: '#F3D0A7',
    300: '#EEBA7D',
    400: '#EAA75C',
    500: '#E67E22', // Main accent
    600: '#C56A1B',
    700: '#9E5516',
    800: '#754010',
    900: '#4D2A0A',
  },
  success: {
    500: '#27AE60',
  },
  warning: {
    500: '#F39C12',
  },
  error: {
    500: '#E74C3C',
  },
  neutral: {
    50: '#F8F9FA',
    100: '#F1F3F5',
    200: '#E9ECEF',
    300: '#DEE2E6',
    400: '#CED4DA',
    500: '#ADB5BD',
    600: '#6C757D',
    700: '#495057',
    800: '#343A40',
    900: '#1A1A1A',
  },
};

export const fontSizes = {
  xs: '0.75rem',    // 12px
  sm: '0.875rem',   // 14px
  base: '1rem',     // 16px
  lg: '1.125rem',   // 18px
  xl: '1.25rem',    // 20px
  '2xl': '1.5rem',  // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem', // 36px
  '5xl': '3rem',    // 48px
  '6xl': '3.75rem', // 60px
};

export const spacing = {
  0: '0',
  1: '0.25rem',     // 4px
  2: '0.5rem',      // 8px
  3: '0.75rem',     // 12px
  4: '1rem',        // 16px
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  8: '2rem',        // 32px
  10: '2.5rem',     // 40px
  12: '3rem',       // 48px
  16: '4rem',       // 64px
  20: '5rem',       // 80px
  24: '6rem',       // 96px
  32: '8rem',       // 128px
};

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
};

export const borderRadius = {
  none: '0',
  sm: '0.125rem',   // 2px
  md: '0.25rem',    // 4px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  full: '9999px',
};

export const animations = {
  fadeIn: 'fadeIn 0.5s ease-in-out',
  slideIn: 'slideIn 0.5s ease-in-out',
  bounce: 'bounce 1s infinite',
};

export const transitions = {
  standard: 'all 0.3s ease-in-out',
  fast: 'all 0.15s ease-in-out',
  slow: 'all 0.5s ease-in-out',
};