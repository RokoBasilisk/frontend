import React, { useContext, useState, useEffect } from "react";
import { Modal, Button, Form, Image } from "react-bootstrap";
import { ProductContext } from "../../contexts/ProductContext";

const UpdateProductModel = () => {
  // Contexts
  const {
    productState: { productSelect },
    showUpdateProductModal,
    setShowUpdateProductModal,
    updateProducts,
    updateOutProducts,
    setShowToast,
  } = useContext(ProductContext);

  // State
  const [updateProduct, setUpdateProduct] = useState(productSelect);
  useEffect(() => {
    setUpdateProduct(productSelect);
  }, [productSelect]);
  const [IMAGE, setIMAGE] = useState("");

  const { title, description, price, image } = updateProduct;

  const onChangeUpdatedProductForm = (event) => {
    if (event.target.name !== "image")
      setUpdateProduct({
        ...updateProduct,
        [event.target.name]: event.target.value,
      });
    else {
      setUpdateProduct({
        ...updateProduct,
        [event.target.name]: event.target.files[0],
        imgcheck: IMAGE,
      });
      setIMAGE(URL.createObjectURL(event.target.files[0]));
    }
  };

  const closeDialog = () => {
    resetUpdateProductData();
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(updateProduct);
    if (updateProduct.imgcheck === "") {
      const { message, success } = await updateProducts(updateProduct);
      resetUpdateProductData();
      setShowToast({
        show: true,
        message,
        type: success ? "success" : "danger",
      });
    } else {
      const { message, success } = await updateOutProducts(updateProduct);
      resetUpdateProductData();
      setShowToast({
        show: true,
        message,
        type: success ? "success" : "danger",
      });
    }
  };

  const resetUpdateProductData = () => {
    setUpdateProduct({
      title: title,
      description: description,
      price: price,
      image: image,
    });
    setShowUpdateProductModal(false);
  };

  return (
    <Modal show={showUpdateProductModal} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>Update Product</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Title"
              name="title"
              required-aria-aria-describedby="title-help"
              value={title}
              onChange={onChangeUpdatedProductForm}
            />
            <Form.Text id="title-help" muted>
              Required
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              row={3}
              placeholder="Description"
              name="description"
              value={description}
              onChange={onChangeUpdatedProductForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              placeholder="0"
              value={price}
              onChange={onChangeUpdatedProductForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              name="image"
              onChange={onChangeUpdatedProductForm}
            />
            <img
              src={IMAGE === "" ? `http://localhost:5000/${image}` : IMAGE}
              alt={title}
              className="productImage"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDialog}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default UpdateProductModel;
