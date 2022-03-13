module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mf: "990px",
        "3xl": "2500px",
      },
      backgroundImage: {
        "cloud-image-index": "url('/assets/Sky-Background3.png')",
        "cloud-image-index-2":
          "url(/assets/Sky-Background2-Section-2.png),linear-gradient(#000000, #5a5858)",
        "about-startos":
          "linear-gradient(to left, rgb(255 255 255 / 100%), rgb(223 223 223 / 80%)),url(/assets/Futurism-Background7.jpg)",
        "partner-1": "/assets/partners/kyte-hover.svg",
      },
      boxShadow: {
        "3xl": "0 27px 80px -12px rgb(0 0 0 / 0.5)",
      },
    },
  },
  plugins: [],
};
