import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Gallery } from '../components/Grid';

const IndexPage = ({ data }) => {
  const [img, setImg] = React.useState();

  const images = data.allFile.edges.map((node) => {
    return { source: `fulls/${node.node.relativePath}` };
  });

  React.useEffect(() => {
    setImg([...images]);
  }, []);

  return <Layout>{img ? <Gallery images={img} /> : null}</Layout>;
};

export default IndexPage;

export const query = graphql`
  query AllImageQuery {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        absolutePath: { regex: "/assets/images/fulls/" }
      }
    ) {
      edges {
        node {
          id
          relativePath
          sourceInstanceName
          name
        }
      }
    }
  }
`;
