const title =
  "Feedback.io – The easiest way to add comments or reviews to your static site.";
const description = "Our platform helps you to simplify the process of customer feedback by collecting it in one place";

const SEO = {
  title,
  description,
  canonical: "https://feedback.io",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://feedback.io",
    title,
    description,
    images: [
      {
        url: "https://feedback.io/og.png",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
};

export default SEO;
