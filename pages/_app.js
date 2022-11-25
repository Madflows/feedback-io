import "../styles/globals.css";
import { ChakraProvider, ThemeProvider, CSSReset } from "@chakra-ui/react";
import { AuthProvider } from "lib/auth";
import theme from "styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ChakraProvider>
        <ThemeProvider theme={theme}>
          <CSSReset />
            <Component {...pageProps} />
        </ThemeProvider>
      </ChakraProvider>
    </AuthProvider>
  );
}

export default MyApp;
