const fs = require("fs"); // can't use import because server is running node
const path = require("path");

const matter = require("gray-matter");

const getProducts = () => {
  const directory = path.join(process.cwd(), "content");
  const filenames = fs.readdirSync(directory);

  const products = filenames.map((filename) => {
    const fileContent = fs
      .readFileSync(path.join(directory, filename))
      .toString();

    const { data } = matter(fileContent);

    return data;
  });

  return products;
};

const filepath = path.join(process.cwd(), "functions", "products.json");
const products = getProducts();

fs.writeFileSync(filepath, JSON.stringify(products));
