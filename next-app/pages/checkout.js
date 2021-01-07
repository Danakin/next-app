import styled from "styled-components";
import Page from "../components/styled/Page";
import useCart from "../hooks/useCart";

const List = styled.ul`
  padding: 0;
`;

const Item = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #efefef;
  margin-bottom: 0.5rem;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Button = styled.button`
  background: #3a71b0;
  font-size: 100%;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 5px;
  font-size: 1.5rem;

  &:hover {
    background: #2a61a0;
  }
`;

const Checkout = () => {
  const { cart, total } = useCart();

  const processPayment = () => {
    console.log("TBD");
  };

  return (
    <Page>
      <h2>Checkout</h2>
      <List>
        {cart.length > 0 ? (
          cart.map((item) => {
            return (
              <Item key={item.id}>
                <span>
                  {item.qty} x {item.name}
                </span>
                <span>${(item.price / 100) * item.qty}</span>
              </Item>
            );
          })
        ) : (
          <Item>Your shopping cart is empty</Item>
        )}
      </List>
      {cart.length > 0 ? (
        <Total>
          <span>Total: </span>
          <span>${total}</span>
        </Total>
      ) : (
        <></>
      )}
      {cart.length > 0 ? (
        <Button onClick={processPayment}>Process Payment</Button>
      ) : (
        <></>
      )}
    </Page>
  );
};

export default Checkout;
