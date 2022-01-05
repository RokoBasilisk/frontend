import React from "react";
import {
  Spinner,
  OverlayTrigger,
  Tooltip,
  Row,
  Col,
  Image,
  Button,
  Card,
  Toast,
} from "react-bootstrap";
const Billitem = ({ products: { product, quantity, price } }) => {
  return (
    <Row className="marginleft margintop">
      <Row>
        <Col sm={4}>
          <Image
            src={`http://localhost:5000/${product.image}`}
            alt={product.title}
            className="bill-image"
          />
        </Col>
        <Col sm={8}>
          <Col className="bill-id">{product.title}</Col>
          <Col>
            <Row>
              <Col>${price}</Col>
              <Col>Qty: {quantity}</Col>
            </Row>
          </Col>
        </Col>
      </Row>
    </Row>
  );
};

export default Billitem;
