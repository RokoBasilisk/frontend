import React, { useContext } from "react";
import DeleteIcon from "../../assets/trash.svg";
import EditIcon from "../../assets/pencil.svg";
import { Button } from "react-bootstrap";
import { ProductContext } from "../../contexts/ProductContext";

const ActionButtons = ({ _id }) => {
  const {
    deleteProducts,
    findProducts,
    showUpdateProductModal,
    setShowUpdateProductModal,
  } = useContext(ProductContext);
  const chooseProduct = (productId) => {
    findProducts(productId);
    setShowUpdateProductModal(true);
  };
  return (
    <>
      <Button className="post-button" onClick={chooseProduct.bind(this, _id)}>
        <img src={EditIcon} alt="Edit" width="24" height="24" />
      </Button>
      <Button className="post-button" onClick={deleteProducts.bind(this, _id)}>
        <img src={DeleteIcon} alt="Delete" width="24" height="24" />
      </Button>
    </>
  );
};
export default ActionButtons;
