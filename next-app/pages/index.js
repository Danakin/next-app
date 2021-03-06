import fs from "fs";
import path from "path";

import Link from "next/link";

import matter from "gray-matter";
import styled from "styled-components";

import UnstyledLink from "../components/styled/UnstyledLink";

import useCart from "../hooks/useCart";

const Container = styled.div`
  position: relative;
  background: white;
  padding: 1rem 2rem;
  min-height: 200px;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
  margin: 0.5rem 0;
`;

const Price = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 1rem;
  font-size: 2.5rem;
`;

const renderProduct = (product, addItemToCart) => {
  const handleClick = (event) => {
    event.stopPropagation();
    addItemToCart(product);
  };
  return (
    <Link key={product.id} href={product.slug}>
      <UnstyledLink>
        <Container>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <button onClick={handleClick}>Add to cart</button>
          <Price>${product.price / 100}</Price>
        </Container>
      </UnstyledLink>
    </Link>
  );
};

const HomePage = (props) => {
  const { cart, addItemToCart, removeItemFromCart } = useCart();

  return (
    <ProductsContainer>
      {props.products.map((product) => renderProduct(product, addItemToCart))}
    </ProductsContainer>
  );
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
