import React, { useState } from "react";
import { Row, Col, Card, Badge, Image } from "react-bootstrap";
import ActionButtons from "../layout/ActionButtons";

const Products = ({
  products: { _id, title, description, price, date, image },
}) => {
  let test = new Date(date);
  return (
    <Col key={_id} className="my-2">
      <Card className="shadow" border="success" style={{ height: "100%" }}>
        <Card.Body>
          <Card.Title>
            <Row>
              <Col>
                <p className="post-title">{title}</p>
                {image !== undefined && (
                  <p>
                    <img
                      src={`http://localhost:5000/${image}`}
                      alt={title}
                      className="productImage"
                    />
                  </p>
                )}
                <p className="post-description">
                  {test.toString().substr(0, 24)}
                </p>
                <Badge pill variant="secondary" className="text-bottom">
                  $ {price}
                </Badge>
              </Col>
              <Col className="text-right">
                <ActionButtons _id={_id} />
              </Col>
            </Row>
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Products;
