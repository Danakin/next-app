import styled from "styled-components";
import { FiX } from "react-icons/fi";
import useCart from "../hooks/useCart";

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding-left: 1rem;

  transition: transform 0.2s ease-in-out;
  transform: translateX(${(props) => (props.isOpen ? "0" : "100%")});
`;

const XContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const X = styled(FiX)`
  font-size: 3rem;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  border-bottom: 1px solid #efefef;
`;

const List = styled.ul`
  padding: 0;
`;

const Item = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #efefef;
  margin-bottom: 0.05rem;
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

const Cart = () => {
  const { cart, isOpen, openCart, closeCart } = useCart();

  const handleClick = () => {
    closeCart();
  };

  return (
    <Container isOpen={isOpen}>
      <XContainer>
        <X onClick={handleClick} />
      </XContainer>
      <Content>
        <Title>Cart</Title>
        <List>
          {cart.map((item) => {
            return (
              <Item key={item.id}>
                <span>
                  {item.qty} x {item.name}
                </span>
                <span>${(item.price / 100) * item.qty}</span>
              </Item>
            );
          })}
        </List>
        <Total>
          <span>Total: </span>
          <span>$500</span>
        </Total>
        <Button>Checkout</Button>
      </Content>
    </Container>
  );
};

export default Cart;
