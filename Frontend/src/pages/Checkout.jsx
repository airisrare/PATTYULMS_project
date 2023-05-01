import { loadStripe } from "@stripe/stripe-js";
import { Container, Row, Col, Button } from "react-bootstrap";

let stripePromise;
//Load stripe from stripe js
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

//Checkout item
const Checkout = () => {
  const item = {
    price: "price_1N0ZP0CTTGR7rgLf25k3zeRQ",
    quantity: 1,
  };

  //Our checkout payment specifications
  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };
  //Go to checkout page
  const redirectToCheckout = async () => {
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe Checkout Error", error);
  };
  return (
    <Container className="productCardFlex">
      <Row className="">
        <Col>
          <h1>Checkout Page</h1>
          <p>Click checkout to redirect to Stripe, a secure payment website</p>
          <Button className="btncolor" onClick={redirectToCheckout}>
            Checkout
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
