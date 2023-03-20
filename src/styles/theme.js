export const theme = Object.freeze({
  colors: {
    primary: "#e4ff00",
    secondary: "#1f1f1f",
    textColor: "#f2f2f2",
    white: "#ffffff",
    blue: "#0299f7",
    primaryGradient:
      "linear-gradient(45deg, rgba(71, 85, 234, 1) 0%, rgba(0, 208, 80, 1) 27%, rgba(228, 255, 0, 1) 70%, rgba(228, 255, 0, 1) 100%)",
    secondaryGradient:
      "linear-gradient(-225deg, #0887ff 0%, #ff2b44 39%, #93f53d 67%, #e4ff00 100%)",
    projectGradient:
      "linear-gradient(45deg, rgba(0, 208, 80, 0.9) 0%, rgba(228, 255, 0, 0.9) 40%, rgba(228, 255, 0, 0.9) 100%)",
    bgGradient: "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
  },
  fonts: {
    primary: "Montserrat, sans-serif",
    secondary: "Nunito, sans-serif",
  },
  fontSizes: {
    small: "14px",
    medium: "16px",
    large: "32px",
    max: "48px",
  },
  fontWeight: {
    regular: 400,
    bold: 700,
  },
  lineHeight: {
    default: 1,
    small: 1.2,
    regular: 1.6,
  },
  spacing: (value) => `${4 * value}px`,
  animation: {
    cubicBezier: "0.2s cubic-bezier(0.7, 0.98, 0.86, 0.98)",
  },
  media: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1280px",
  },
  shadows: {
    primaryShadow: "0px 0px 6px #e4ff00",
    secondaryShadow: "0px 5px 20px 0px rgba(0, 0, 0, 0.75)",
  },
});
