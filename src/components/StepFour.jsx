import { Button, Col, message, Row } from "antd";
import React, { useContext, useEffect, useState,useRef } from "react";
import MultiStepFormContext from "./MultiStepFormContext";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import { Formik } from "formik";
import axios from "axios";
import Links from "./StepThree";
import Details from "./StepOne";
import Address from "./StepTwo";
import { BASE_API } from "../helper/Constants";
const Save = () => {
  const navigate = useNavigate();
  const { linksDetails, setLinksDetails, next, prev, details,address, setAddress, setDetails } = useContext(MultiStepFormContext);
  const [isLoading, setIsLoading] = useState(false);
  console.log(details)
  console.log(address)
  console.log(linksDetails)

  const apiUrl = BASE_API+'api/create-campaign';
 
  const handleSave = async () => {
    console.log("Save button clicked");
    setIsLoading(true);

    let payload;
    if (linksDetails?.selectedOption === "createNew") {
      payload ={
        "campaignname": details?.campaignname || "",
        "country": details?.country || "",
        "tollfreenumber": address?.TollFreeNumber || "",
        "publisher_id": address?.Publisher_id || "",
        "user_id": "",
        "name": linksDetails?.name || "",
        "number": linksDetails?.number || "",
        "trackingrevenue": linksDetails?.trackingrevenue || false,
        "duplicatecalls": linksDetails?.duplicatecalls || false,
        "filterrepeatcaller": linksDetails?.filterrepeatcaller || false,
        "targetoption": linksDetails?.selectedOption,
        "anonymouscall": linksDetails?.anonymouscall || false,
        "recordcalls": linksDetails?.recordcalls || false,
        "waittoanswer": linksDetails?.waittoanswer || false,
        "trimsilence": linksDetails?.trimsilence || false,
        "targetdialattempts": linksDetails?.targetdialattempts || "",
      } ;
    } else {
      payload = {
        "campaignname": details?.campaignname || "",
        "country": details?.country || "",
        "tollfreenumber": address?.TollFreeNumber || "",
        "publisher_id": address?.Publisher_id || "",
        "user_id": "",
        "target_id": linksDetails?.target_id || "",
        "trackingrevenue": linksDetails?.trackingrevenue || false,
        "duplicatecalls": linksDetails?.duplicatecalls || false,
        "filterrepeatcaller": linksDetails?.filterrepeatcaller || false,
        "anonymouscall": linksDetails?.anonymouscall || false,
        "recordcalls": linksDetails?.recordcalls || false,
        "waittoanswer": linksDetails?.waittoanswer || false,
        "trimsilence": linksDetails?.trimsilence || false,
        "targetdialattempts": linksDetails?.targetdialattempts || "",
      };
    }
    const response = await axios.post(apiUrl, payload);
  // Manually reset the Formik form
  setAddress({});
  setDetails({});
  setLinksDetails({});
  navigate("/manage-campaigns");  
  setIsLoading(false);    
  };
 
  const [showAll, setShowAll] = useState(false);

  const handleSubmit = () => {
    if (showAll === true) {
      message.success("Details submitted successfully!");
      next();
    }
  };

  // which enables the display of all the user's entered details
  const handleView = () => {
    setShowAll(true);
  };

  // Render the Save form with the user's inputted details
  return (
  <div className={"details__wrapper"}>
      <div>
        <h1 className="review__header m-4" style={{ textAlign: "center" }}>
          Confirm Details
        </h1>
        {/* <Button
          type="primary"
          onClick={handleView}
          className="view__button"
          style={{
            margin: "auto",
            marginBottom: "40px",
            display: "block",
            paddingBottom: "10px",
            borderRadius: "5px",
            fontWeight: "bold"
          }}
        >
          View
        </Button> */}
      </div>
      {isLoading && (
        <div className="d-flex justify-content-center my-5" style={{ marginTop: '20px' }} >
          <ReactLoading type="spokes" color="grey" height={50} width={50}   />
        </div>
      )}
      {!isLoading && (<>
      <Row gutter={[16, 16]}>
        {showAll && (
          <div>
            <Col span={24}>
              <h2 className="review__header">Personal Details</h2>
              <div className="review__details">
                <p className="review__item">
                  <strong>Name:</strong> {details?.name}
                </p>
                <p className="review__item">
                  <strong>Username:</strong> {details?.username}
                </p>
              </div>
            </Col>
            <Col span={24}>
              <h2 className="review__header">Address Details</h2>
              <div className="review__details">
                <p className="review__item">
                  <strong>Phone:</strong> {address?.phone}
                </p>
                <p className="review__item">
                  <strong>Address:</strong> {address?.address1}
                </p>
                <p className="review__item">
                  <strong>Country:</strong> {address?.country}
                </p>
                <p className="review__item">
                  <strong>State:</strong> {address?.state}
                </p>
                <p className="review__item">
                  <strong>City:</strong> {address?.city}
                </p>
              </div>
            </Col>
            <Col span={24}>
              <h2 className="review__header">Website Details</h2>
              <div className="review__details">
                <p className="review__item">
                  <strong>Portfolio Link:</strong> {linksDetails?.portfolio}
                </p>
                <p className="review__item">
                  <strong>Github Link:</strong> {linksDetails?.github}
                </p>
                <p className="review__item">
                  <strong>Website Link:</strong> {linksDetails?.website}
                </p>
              </div>
            </Col>
          </div>
        )}
       <Col span={22}>
          <Details />
        </Col>
        <Col span={22}>
          <Address />
        </Col>
        <Col span={22}>
          <Links />
        </Col>
        <Col span={24}>
          <div
            className={"form_item button_items d-flex justify-content-between"}
          >
            {/* Button to go back to the previous step */}
            <Button type={"default"} onClick={prev}>
              Back
            </Button>
            {/* Button to submit and move to the next step */}
            <Button type={"primary"} onClick={handleSave}>
              Confirm
            </Button>
          </div>
        </Col>
      </Row>
    </>  ) }
    </div>
    //  )}
    // </Formik>
  );
};

export default Save;
