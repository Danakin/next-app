import fs from "fs";
import path from "path";

import Link from "next/link";

import matter from "gray-matter";
import styled from "styled-components";

const Container = styled.div`
  /* background: red; */
`;

const HomePage = (props) => {
  return props.products.map((product) => {
    return (
      <Container key={product.name}>
        <Link href={product.slug}>
          <a>
            <h1>{product.name}</h1>
          </a>
        </Link>
        <p>{product.description}</p>
        <p>${product.price / 100}</p>
      </Container>
    );
  });
};

export const getStaticProps = async () => {
  const directory = path.join(process.cwd(), "content");
  const filenames = fs.readdirSync(directory);

  const products = filenames.map((filename) => {
    // read file from fs
    const fileContent = fs
      .readFileSync(path.join(directory, filename))
      .toString();

    // pull out frontmatter => name
    const { data } = matter(fileContent);
    const slug = `/products/${filename.replace(".md", "")}`;
    const product = {
      ...data,
      slug,
    };

    // return product
    return product;
  });

  return {
    props: {
      products,
    },
  };
};

export default HomePage;
