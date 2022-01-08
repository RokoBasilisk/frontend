import React, { useState } from "react";
import { Row, Col, Card, Badge, Image, Container } from "react-bootstrap";
import Billitem from "../products/BillItem";
import BillActionButton from "../layout/BillActionButton";

const Bill = ({ bills: { customer, date, products, total, _id, status } }) => {
  let test = new Date(date);
  let item = products[0].product;
  return (
    <Col key={_id} className="my-2">
      <Card
        style={{ height: "100%" }}
        className="shadow"
        border={
          status === "Accepted"
            ? "success"
            : status === "Rejected"
            ? "danger"
            : "warning"
        }
      >
        <Card.Body>
          <Card.Title style={{ height: "100%" }}>
            <Row style={{ height: "100%" }}>
              <Col>
                <Row>
                  <Col sm={8}>
                    <Col className="bill-id">#{_id}</Col>
                    <Col className="bill-date">
                      {test.toString().substr(0, 24)}
                    </Col>
                  </Col>
                  <Col sm={4}>
                    <Image
                      src={`http://localhost:5000/${item.image}`}
                      alt={item.title}
                      className="bill-image"
                    />
                  </Col>
                </Row>
              </Col>
              {products.map((product) => {
                return <Billitem products={product} />;
              })}
              <Col className="margintop full">
                <Row
                  className="full"
                  style={{ justifyContent: "space-between" }}
                >
                  <Col sm={6}>
                    <Col className="bill-itemscount">
                      X{products.length} items
                    </Col>
                    <Col>
                      <Badge
                        pill
                        variant="secondary"
                        className="bill-totalprice"
                      >
                        ${total}
                      </Badge>
                    </Col>
                  </Col>
                  <Col sm={6} className="text-right">
                    <BillActionButton _id={_id} status={status} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Bill;
