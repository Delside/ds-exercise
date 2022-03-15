const theme = {
  focusStyle: {
    boxShadow: "inset 0 0 0 2pt #0068b5,inset 0 0 0 3pt #fff",
  },
  disabledStyle: {
    backgroundColor: "#e9eaeb",
    color: "#b2b3b9",
    pointerEvents: "none",
  },

  fontFamily:
    '"Trebuchet MS","Lucida Sans Unicode","Lucida Grande","Lucida Sans",Arial,sans-serif',
  fontColor: "#fff",

  classicBlue: {
    tint1: "#00a3f6",
    tint2: "#76ceff",
    primary: "#0068b5",
    shade1: "#004a86",
    shade2: "#00285a",
  },

  btnSize: {
    large: {
      minWidth: "max-content",
      height: "40pt",
      fontSize: "16pt",
      padding: "8pt 20pt 8pt 20pt",
    },
    medium: {
      minWidth: "max-content",
      height: "32pt",
      fontSize: "14pt",
      padding: "8pt 16pt 8pt 16pt",
    },
    small: {
      minWidth: "max-content",
      height: "24pt",
      fontSize: "12pt",
      padding: "4pt 12pt 4pt 12pt",
    },
  },
};

export default theme;
