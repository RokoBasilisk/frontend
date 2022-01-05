import { useContext, useEffect } from "react";
import { BillContext } from "../contexts/BillContext";
import { AuthContext } from "../contexts/AuthContext";
import { Spinner, Row, Button, Card, Toast } from "react-bootstrap";
import Bill from "../components/products/Bill";
import InfoBar from "../components/layout/InfoBar";

const Bills = () => {
  const {
    authState: { user },
  } = useContext(AuthContext);
  const {
    billState: { billLoading, bill },
    getBills,
  } = useContext(BillContext);

  useEffect(() => {
    console.log(billLoading);
    getBills();
  }, [user, billLoading]);

  let body = null;
  let loadData = () => {
    if (billLoading) {
      body = (
        <div className="spinner-container">
          <Spinner animation="border" variant="info" />
        </div>
      );
    } else {
      if (bill.length === 0) {
        body = (
          <>
            <Card className="text-center mx-5 my-5">
              <Card.Header as="h1">Hi {user.username}</Card.Header>
              <Card.Body>
                <Card.Title>Welcome to LearnIt</Card.Title>
                <Card.Text>
                  Click the button below to get your first product
                </Card.Text>
                <Button variant="primary">LearnIt!</Button>
              </Card.Body>
            </Card>
          </>
        );
      } else {
        body = (
          <>
            <Row className="row-cols-1 row-cols-md-3 g-4 mx-auto mt-3">
              {bill.map((billdetail) => {
                return <Bill bills={billdetail} />;
              })}
            </Row>
          </>
        );
      }
    }
  };
  loadData();

  return (
    <>
      {bill && <InfoBar bills={bill} />}
      <h3>Bills</h3>
      {body}
    </>
  );
};

export default Bills;
