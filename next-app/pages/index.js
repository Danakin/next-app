import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Link from "next/link";

const HomePage = (props) => {
  return props.products.map((product) => {
    return (
      <div key={product.name}>
        <Link href={product.slug}>
          <a>
            <h1>{product.name}</h1>
          </a>
        </Link>
        <p>{product.description}</p>
        <p>${product.price / 100}</p>
      </div>
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
