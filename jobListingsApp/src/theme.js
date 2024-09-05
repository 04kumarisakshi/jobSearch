import { createTheme } from '@mui/material/styles';

export const mainTheme = createTheme({
  palette: {
     // Provide every color token (light, main, dark, and contrastText) when using
     // custom colors for props in Material UI's components.
     // Then you will be able to use it like this: `<Button color="custom">`
     // (For TypeScript, you need to add module augmentation for the `custom` value)
    custom: {
      darkCyan: "hsl(180, 29%, 50%)",
      lightGrayCyan: "hsl(180, 52%, 96%)",
      lightGrayCyanFilterTablets: "hsl(180, 31%, 95%)",
      darkGrayCyan:"hsl(180, 8%, 52%)",
      veryDarkGrayCyan: "hsl(180, 14%, 20%)",
    }

  },
});