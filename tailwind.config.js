// const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./src/**/*.{ts,wxml}`],
  theme: {
    extend: {}
  },
  plugins: [
    // iconsPlugin({
    //   // Select the icon collections you want to use
    //   collections: getIconCollections(["mdi", "lucide"]),
    // }),
  ],
  corePlugins: {
    preflight: false
  }
}
