import "../styles/globals.css";
import { ChakraProvider, ThemeProvider, CSSReset } from "@chakra-ui/react";
import { AuthProvider } from "lib/auth";
import theme from "styles/theme";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "components/MDXComponents";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <MDXProvider components={MDXComponents}>
            <DefaultSeo {...SEO} />
            <CSSReset />
            <Analytics />
            <Component {...pageProps} />
          </MDXProvider>
        </AuthProvider>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
