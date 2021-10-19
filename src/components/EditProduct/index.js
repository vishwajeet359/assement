import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";

const EditProduct = ({products, updateProduct }) => {
  const { id } = useParams();
  const history = useHistory();
  const currentProduct = products.find(
    (product) => product.id === parseInt(id)
  );

  useEffect(() => {
    setName(currentProduct.name);
    setPrice(currentProduct.price);
    setQuantity(currentProduct.quantity);
    setDescription(currentProduct.description);
  }, [currentProduct]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // const checkContactEmailExists = contacts.filter((contact) =>
    //   contact.email === email && contact.id !== currentContact.id
    //     ? contact
    //     : null
    // );
    // const checkContactPhoneExists = contacts.filter((contact) =>
    //   contact.phone === phone && contact.id !== currentContact.id
    //     ? contact
    //     : null
    // );

    // if (!email || !name || !phone) {
    //   return toast.warning("Please fill in all fields!!");
    // }
    // if (checkContactEmailExists.length > 0) {
    //   return toast.error("This email already exists!!");
    // }
    // if (checkContactPhoneExists.length > 0) {
    //   return toast.error("This phone number already exists!!");
    // }

    const data = {
      id: currentProduct.id,
      name,
      price,
      quantity,
      description,
    };

    updateProduct(data);
    toast.success("Contact updated successfully!!");
    history.push("/");
  };

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <button
          className="btn btn-dark ml-auto my-5"
          onClick={() => history.push("/")}
        >
          Go back
        </button>
        <div className="col-md-6 mx-auto shadow p-5">
          {currentProduct ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  value={name}
                  placeholder={"Name"}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={price}
                  placeholder={"Price"}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={quantity}
                  placeholder={"Quantity"}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={description}
                  placeholder={"Description"}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-primary">
                  Update Product
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => history.push("/")}
                >
                  cancel
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">No Product Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state,
});
const mapDispatchToProps = (dispatch) => ({
  updateProduct: (data) => {
    dispatch({ type: "UPDATE_PRODUCT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
