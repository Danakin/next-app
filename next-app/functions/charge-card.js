const fs = require("fs"); // can't use import because server is running node
const path = require("path");

const matter = require("gray-matter");
const { callbackify } = require("util");

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

exports.handler = async (event, context, callback) => {
  // const { cart } = JSON.parse(event.body);

  // process.env.STRIPE_PUBLIC_KEY;

  // const products = getProducts();

  // const cartWithProducts = cart.map(({ id, qty }) => {
  //   const product = products.find((p) => p.id === id);
  //   return { ...product, qty };
  // });

  // let total = cartWithProducts.reduce((acc, val) => {
  //   return acc + (val.price / 100) * val.qty; // TODO: /100 correct??
  // }, 0);

  const options = {
    statusCode: 200,
    body: {
      cart: cart,
      total: total,
      msg: "I have charged that card many times!",
    },
  };
  console.log(options);

  // talking to Stripe
  // charging the card
  // return {
  //   statusCode: 200,
  //   body: "I have charged that card many times!",
  // };
  callback(null, options);
};
