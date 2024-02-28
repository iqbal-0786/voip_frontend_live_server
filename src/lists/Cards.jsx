import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { BASE_API } from "../helper/Constants";
import NumberModal from "../components/models/NumberModal";

import ReactLoading from "react-loading";
const Cards = () => {
  const [localNumbers, setLocalNumbers] = useState([]);
  const [tollFreeNumbers, setTollFreeNumbers] = useState([]);
  const [price, setPrice] = useState([]);
  const [crrPrice, setCrrPrice] = useState("");
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchNumbers = async () => {
      try {
        const response = await fetch(BASE_API + "/api/fetchnumber");
        const data = await response.json();
        setPrice(data.data.price_info);
        setLocalNumbers(data.data.localNumbers);
        setTollFreeNumbers(data.data.tollFreeNumbers);

        const prices = data.data.price_info.phoneNumberPrices;
        console.log({ prices });
        const priceObject = prices.find(
          (price) => price.number_type === "local"
        );
        const currentPrice = priceObject
          ? parseFloat(priceObject.current_price)
          : NaN;

        if (!isNaN(currentPrice)) {
          const additionalAmount = 12;
          const totalPrice = currentPrice + additionalAmount;

          setCrrPrice(totalPrice);
       
        } else {
          console.log("Invalid or missing current price.");
        }
        setIsLoading(false);
      } catch (error) {
      
        console.error("Error fetching local numbers:", error);
        setIsLoading(false);
      }
    };

    fetchNumbers();
  }, []);
  const openModal = (number) => {
    setSelectedNumber(number);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedNumber(null);
    setIsModalOpen(false);
  };
  const cardsPerPage = 4;
  const numbersToDisplay = localNumbers;
  const tollfree = tollFreeNumbers;

  const pageCount = Math.ceil(localNumbers.length / cardsPerPage);

  return (
    <>
    {isLoading && (
        <div className="d-flex justify-content-center my-5">
          <ReactLoading type="spokes" color="grey" height={50} width={50} />
        </div>
      )}
      {!isLoading && (
        <>
      {Array.from({ length: pageCount }, (_, i) => i).map((page, pageIndex) => (
        <div key={pageIndex} className="custom-card-container">
          {numbersToDisplay
            .slice(page * cardsPerPage, (page + 1) * cardsPerPage)
            .map((number, index) => (
              <Card
                key={index}
                className="custom-card"
                onClick={() => openModal(number)}
              >
                <Card.Body>
                  <Card.Text className="smaller-price">{` $${crrPrice}`}</Card.Text>
                  <Card.Title>{number}</Card.Title>
                </Card.Body>
              </Card>
            ))}
        </div>
      ))}
      <NumberModal
        show={isModalOpen}
        onHide={closeModal}
        selectedNumber={selectedNumber}
        crrPrice={crrPrice}
      />
    </>
    )}
    </>
  );
};

export default Cards;
