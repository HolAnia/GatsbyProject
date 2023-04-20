import React from 'react';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage} from 'gatsby-plugin-image';

const IndexPage = ({ data }) => {
  console.log(data.fileInformation.edges)
  return(
    <>
      <div>Start Here</div>
      <ul>
        {data.fileInformation.edges.map(({ node }) => {
          return <li key = {node.id}>{ node.base } | { node.prettySize }</li>
          }
        )}
      </ul>
      <div>
      {data.fileInformation.edges.map(({ node }) => {
          return (
            <img src={node.publicURL}/>
          )
          }
        )}
      </div>
    </>
  )
};

export default IndexPage;

export const query = graphql`
  query {
    fileInformation: allFile {
      edges {
        node {
          id
          base
          prettySize
          childrenImageSharp {
            gatsbyImageData(width: 600)
          }
          publicURL
        }
      }
    }
  }
`;
