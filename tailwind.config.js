module.exports = {
  content: ["*"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      Strongcyan: "hsl(172, 67%, 45%)",
      Verydarkcyan: "hsl(183, 100%, 15%)",
      Darkgrayishcyan: "hsl(186, 14%, 43%)",
      Grayishcyan: "hsl(184, 14%, 56%)",
      Lightgrayishcyan: "hsl(185, 41%, 84%)",
      Verylightgrayishcyan: "hsl(189, 41%, 97%)",
      White: "hsl(0, 0%, 100%)",
      green: "#13ce66",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      mono: ["Space Mono"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
