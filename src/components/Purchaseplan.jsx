import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_API } from "../helper/Constants";
import ReactLoading from "react-loading";
const Purchaseplan = () => {
  const [isLoading, setIsLoading] = useState(false);
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

      window.location.href = response.data.redirect_url;
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <main id="main" className="main">
      {isLoading && (
        <div
          className="d-flex justify-content-center my-5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <ReactLoading type="spokes" color="grey" height={50} width={50} />
        </div>
      )}
      {!isLoading && (
        <div className="row">
          <div className="col-md-4">
            <div className="purchase-card">
              <div className="card-body">
                <i className="mdi mdi-cube-outpne pricing-plan-icon" />
                <p className="pricing-plan-title">Basic</p>
                <h3 className="pricing-plan">FREE</h3>
                <ul className="pricing-plan-features">
                  <p>Unpmited conferences</p>
                  <p>100 participants max</p>
                  <p>Custom Hold Music</p>
                  <p>10 participants max</p>
                </ul>
                <button
                  className="btn btn-primary custom-button"
                  onClick={handleBuyClick}
                >
                  Free
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="purchase-card">
              <div className="card-body">
                <i className="mdi mdi-trophy pricing-plan-icon" />
                <p className="pricing-plan-title">Pro</p>
                <h3 className="pricing-plan">$49</h3>
                <ul className="pricing-plan-features">
                  <p>Unpmited conferences</p>
                  <p>100 participants max</p>
                  <p>Custom Hold Music</p>
                  <p>10 participants max</p>
                </ul>
                <button
                  className="btn btn-primary custom-button"
                  onClick={handleBuyClick}
                >
                  Purchase
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="purchase-card">
              <div className="card-body">
                <i className="mdi mdi-wallet-giftcard pricing-plan-icon" />
                <p className="pricing-plan-title">Enterprise</p>
                <h3 className="pricing-plan">$69</h3>
                <ul className="pricing-plan-features">
                  <p>Unpmited conferences</p>
                  <p>100 participants max</p>
                  <p>Custom Hold Music</p>
                  <p>10 participants max</p>
                </ul>
                <button
                  className="btn btn-primary custom-button"
                  onClick={handleBuyClick}
                >
                  Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Purchaseplan;
