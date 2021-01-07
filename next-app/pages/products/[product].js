import fs from "fs";
import path from "path";

import matter from "gray-matter";
import marked from "marked";

import styled from "styled-components";

const Container = styled.div`
  background: white;
  padding: 1rem 2rem;
  margin: 0.5rem 0;
`;

const Title = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const Subtitle = styled.p`
  padding: 0.75rem 1rem;
  color: #666;
`;

const Price = styled.span`
  font-size: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 1px solid #3b79cd;
  font-weight: 800;
  display: inline-block;
  margin: 1rem 0;
`;

const Product = ({ product: { data, content } }) => {
  const html = marked(content);
  return (
    <Container>
      <Title>
        <h1>{data.name}</h1>
        <Subtitle>{data.description}</Subtitle>
      </Title>
      <Price>${data.price / 100}</Price>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  );
};

export const getStaticPaths = () => {
  // product pages to generate
  const directory = path.join(process.cwd(), "content");
  const filenames = fs.readdirSync(directory);
  const paths = filenames.map((filename) => {
    return {
      params: {
        product: filename.replace(".md", ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const productName = context.params.product; // name of variable ( here [product] )
  const filePath = path.join(process.cwd(), "content", `${productName}.md`);
  const fileContent = fs.readFileSync(filePath).toString();

  const { data, content } = matter(fileContent);

  return {
    props: {
      product: {
        data,
        content,
      },
    },
  };
};

export default Product;
