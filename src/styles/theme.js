export default function ThemeSelector(theme) {
  let colors = {};

  switch (theme) {
    case "1":
      break;

    default:
      colors = {
        primary: "#333",
        secondary: "#ccc",
      };
      break;
  }

  return colors;
}
