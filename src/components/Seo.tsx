import React from "react";
import { Helmet } from "react-helmet-async";
import { useStaticQuery, graphql } from "gatsby";
import FavIcon from "../images/favicon-32x32.png";

type Props = {
  title?: string;
  description?: string;
  lang?: string;
  pathname?: string;
  image?: {
    alt: string;
    src: string;
  };
};

const SEO: React.FC<Props> = ({
  title,
  description,
  lang,
  pathname,
  image,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            image
            siteUrl
          }
        }
      }
    `
  );

  const defaultImage = `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`;
  const metaImage =
    image && image.src
      ? `${site.siteMetadata.siteUrl}${image.src}`
      : defaultImage;
  const metaImageAlt = image && image.alt ? image.alt : title;
  const metaDescription = description || site.siteMetadata.description;
  const metaURL = `${site.siteMetadata.siteUrl}${pathname}`;

  return (
    <Helmet
      title={title || site.siteMetadata.title}
      htmlAttributes={{ lang }}
      // TODO:
      link={[{ rel: "icon", type: "image/ico", href: FavIcon }]}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "keywords",
          content: site.siteMetadata.keywords,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:url",
          content: metaURL,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:image",
          content: metaImage,
        },
        {
          property: "og:image:alt",
          content: metaImageAlt,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ]}
    />
  );
};

export default SEO;
