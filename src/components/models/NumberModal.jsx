import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { BASE_API } from "../../helper/Constants";

const NumberModal = ({ show, onHide, selectedNumber, crrPrice }) => {
  const [taxes, setTaxes] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const calculateTotalPrice = () => {
    const total = parseFloat(crrPrice) + parseFloat(taxes);
    if (!isNaN(total)) {
      if (Number.isInteger(total) && total >= 2) {
        return `$${total + 0.15}`;
      } else {
        return total.toFixed(2);
      }
    } else {
      return "Invalid input";
    }
  };


  const handleBuyClick = async () => {
    try {
      setIsLoading(true);
      console.log("njhbhg");
    
      const body = {
        itemName: "shoes",
        itemSKU: "001",
        itemPrice: "300.00",
        itemCurrency: "USD",
        itemQuantity: 2,
      };
      const response = await axios.post(BASE_API + "/pay", body, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response)
      window.location.href = response.data.redirect_url;
    } catch (error) {
     
      setIsLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide} className="modal-lg " backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Review Order</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Number</th>
              <th>Price</th>
              {/* <th>Remove</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{selectedNumber}-One time setup free</td>
              <td>${crrPrice}</td>
              <td>
                <a href="#">
                  <i className="fas fa-times"></i>{" "}
                  {/* Font Awesome remove icon */}
                </a>
              </td>
            </tr>
            <tr className="taxes">
              <td>Taxes</td>
              <td>${taxes}</td>
              <td>
                <a href="#" onClick={() => setTaxes(0)}>
                  <i className="fas fa-times"></i>
                </a>
              </td>
            </tr>
            <tr className="total">
              <td>Total</td>
              <td>${calculateTotalPrice()}</td>
              <td>
                <a href="#">
                  <i className="fas fa-times"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        {/* Add more details here */}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleBuyClick}>
          Confirm Order
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NumberModal;
