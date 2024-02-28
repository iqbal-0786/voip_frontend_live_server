import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { BASE_API } from "../helper/Constants";
import NumberModal from "../components/models/NumberModal";

import ReactLoading from "react-loading";
const AddCard = () => {
  const [localNumbers, setLocalNumbers] = useState([]);
  const [tollFreeNumbers, setTollFreeNumbers] = useState([]);
  const [price, setPrice] = useState([]);
  const [crrPrice, setCrrPrice] = useState("");
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tollFreeNumber, setTollFreeNumber] = useState([]);
  const [prices, setPrices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const openModal = (number) => {
    setSelectedNumber(number);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedNumber(null);
    setIsModalOpen(false);
  };
  // const cardData = [
  //   { title: "FREE" },
  //   { title: "$100" },
  //   { title: "FREE" },
  //   { title: "$200" },
  //   { title: "$300" },
  //   { title: "$400" },
  //   { title: "$200" },
  //   { title: "$300" },
  //   { title: "$400" },
  //   { title: "FREE" },
  //   { title: "$100" },
  //   { title: "FREE" },
  //   { title: "$200" },
  //   { title: "$300" },
  //   { title: "$400" },
  //   { title: "$200" },
  //   { title: "$300" },
  //   { title: "$400" },
  // ];

  useEffect(() => {
    // Make API request to fetch local numbers
    const fetchNumbers = async () => {
      try {
        const response = await fetch(BASE_API + "/api/fetchnumber");
        const data = await response.json();
        setPrice(data.data.price_info);
        setLocalNumbers(data.data.localNumbers);
        setTollFreeNumbers(data.data.tollFreeNumbers);
        const prices = data.data.price_info.phoneNumberPrices;
        const priceObject = prices.find(
          (price) => price.number_type === "toll free"
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
  
    const fetchTollFreeNumbers = async () => {
      try {
        const response = await fetch(BASE_API + "/api/phone");
        const data = await response.json();
        var phoneNumbers = [];
        var price = [];
        for (var index in data.data.items) {
          phoneNumbers.push(data.data.items[index].formatted);
          var itemPrice = data.data.items[index].price;
          var updatedPrice = `${itemPrice + 12}`;
          price.push(updatedPrice);
        }
        setTollFreeNumber(phoneNumbers);
        setPrices(price);
        setIsLoading(false); // Move setIsLoading inside this function
      } catch (error) {
        console.error("Error fetching toll-free numbers:", error);
        setIsLoading(false); // Move setIsLoading inside this function in case of an error
      }
    };
  
    const fetchData = async () => {
      setIsLoading(true); // Set isLoading to true before making API calls
      await fetchNumbers();
      await fetchTollFreeNumbers();
    };
  
    fetchData();
  }, []);
  
  const cardsPerPage = 4;
  const numbersToDisplay = localNumbers;
  const tollfree = tollFreeNumbers;
  const phoneNumber = tollFreeNumber;
  
  const secondprices = prices;

  // Calculate the number of pages
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
          {Array.from({ length: pageCount }, (_, i) => i).map(
            (page, pageIndex) => (
              <div key={pageIndex} className="custom-card-container">
                {tollFreeNumbers
                  .slice(page * cardsPerPage, (page + 1) * cardsPerPage)
                  .map((number, index) => (
                    <Card
                      key={index}
                      className="custom-card"
                      onClick={() => openModal(number)}
                    >
                      <Card.Body>
                        <Card.Text className="smaller-price">
                          {`$${crrPrice}`}
                        </Card.Text>
                        <Card.Title>{number}</Card.Title>
                      </Card.Body>
                    </Card>
                  ))}
              </div>
            )
          )}

          {Array.from({ length: pageCount }, (_, i) => i).map(
            (page, pageIndex) => (
              <div key={pageIndex} className="custom-card-container">
                {tollFreeNumber
                  .slice(page * cardsPerPage, (page + 1) * cardsPerPage)
                  .map((phoneNumber, index) => (
                    <Card key={index} className="custom-card">
                      <Card.Body>
                        <Card.Text className="smaller-price">
                          {`$${prices[index]}`}
                        </Card.Text>
                        <Card.Title>{phoneNumber}</Card.Title>
                      </Card.Body>
                    </Card>
                  ))}
              </div>
            )
          )}

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

export default AddCard;
