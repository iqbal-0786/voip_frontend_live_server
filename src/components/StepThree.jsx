import React, { useContext, useState, useEffect } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";
import axios from "axios";
import { BASE_API } from "../helper/Constants";
// Component for the Links page of the form
const Links = ({formikData}) => {
  // Retrieve links details and state setters from context
  const { linksDetails, setLinksDetails, next, prev, details,address } =
    useContext(MultiStepFormContext);
    console.log(details)
    console.log(address)
    console.log(linksDetails)
  
  const [selectectedTargetID, setSelectectedTargetID ] = useState("");
  const [targetName, setTargetName ] = useState([]);
  const [isTargetError, setIsTargetError] = useState(false);
  const [isTargetName, setIsTargetName] = useState(false);
  const [isTimeZone, setIsTimeZone] = useState(false);
  const [isPhoneNumber, setIsPhoneNumber] = useState(false);
  const [isTargetDial, setIsTargetDial ] = useState(false);

  const handleOptionChange = (option, { setFieldValue }) => {
    setFieldValue('selectedOption', option);
  
    setLinksDetails((prevDetails) => ({
      ...prevDetails,
      selectedOption: option, 
    }));
  };

  const handleChange = (e, { setFieldValue }) => {
    const { name } = e.target;
    // Update the form values based on the input type
    const updatedValue =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
  
    setFieldValue(name, updatedValue);
    setLinksDetails((prevDetails) => ({
      ...prevDetails,
      [name]: updatedValue,
    }));
  };
  
  useEffect( () => {
   const fetchData = async() =>{
      const res = await axios.get(BASE_API+"api/get-target");
      console.log(res.data.data)
      setTargetName(res.data.data);
    }
    fetchData();
   },[])

  return (
    <Formik
      // Initialize the form with linksDetails
      initialValues={{ ...linksDetails, }} 
      // Set linksDetails with form values and move to next step on form submission
      onSubmit={(values, { resetForm, setSubmitting }) => {
        setLinksDetails({ ...values,});

        if(!values.target_id && values.selectedOption === "selectTarget") {
          setIsTargetError(true);
          return;
        } else {
            setIsTargetError(false);
        }

        if(values.selectedOption === "createNew"){
        if (!values.number   || !/^\d{10}$/.test(values.number)) {
          setIsPhoneNumber(true)
          return
        } else {
          setIsPhoneNumber(false)
        }
        if (!values.name) {
          setIsTargetName(true)
          return
        } else {
          setIsTargetName(false)
        }
        if (!values.timezone) {
          setIsTimeZone(true)
          return
        } else {
          setIsTimeZone(false)
        }
        }
      
        console.log(linksDetails);
        // return;
        next();
        resetForm();
        setSubmitting(false);
      }}
      
      // Form validation rules
      validate={(values) => {
        const errors = {};
        if (!values.targetdialattempts) errors.targetdialattempts = " Number is required";
        return errors;
      }}
      >
      {({ handleSubmit,values, errors, setFieldValue  }) => {
        return (
          <div className={"details__wrapper"}>
            <div className="container-fluid d-flex justify-content-center mt-5 ">
              <div className="w-100">
                <div>
                  <div className="row mb-3">
                    <div className="col-sm-4">
                      <label
                        className="desc col-form-label d-flex justify-content-end"
                        id="title3"
                        htmlFor="Field3"
                      >
                        Target Option:
                      </label>
                    </div>
                    <div className="col-sm-6 btn-group">
                      <input
                        type="radio"
                        className="btn-check w-75"
                        name="selectTarget"
                        id="radio7"
                        autoComplete="off"
                        checked={values.selectedOption === "selectTarget"}
                        onChange={(e) => handleOptionChange("selectTarget",{setFieldValue})}
                      />
                      <label
                        className="btn btn-outline-primary"
                        htmlFor="radio7"
                      >
                        Select Target
                      </label>
                      <input
                        type="radio"
                        className="btn-check"
                        name="createNew"
                        id="radio8"
                        autoComplete="off"
                        checked={values.selectedOption === "createNew" }
                       onChange={(e) => handleOptionChange("createNew",{setFieldValue})}
                      />
                      <label
                        className="btn btn-outline-primary"
                        htmlFor="radio8"
                      >
                        Create New
                      </label>
                    </div>
                  </div>
                  {values.selectedOption === "createNew" && (
                    <>
                      <div className="row mb-3">
                        <label
                          htmlFor="inputEmail"
                          className="col-sm-4 col-form-label d-flex d-flex justify-content-end d-flex d-flex justify-content-end"
                        >
                          Target Name* :
                        </label>
                        <div className="col-sm-6">
                          <input
                            id="inputEmail"
                            type="text"
                            className="form-control w-100"
                            name="name"
                            value={values.name}
                            onChange={(e) => { handleChange(e,{setFieldValue}); setIsTargetName(false)}}
                            placeholder=""
                            required=""
                            style={{ borderColor: isTargetName ? 'red' : '#d9d9d9' }} 
                            />
                            {isTargetName &&
                       <div className="col-sm-10 d-flex align-items-center justify-content-center error__feedback" style={{ textAlign: 'center',color:"red" }}>
                           Target Name is required
                        </div> }
                        </div>
                      </div>
                      <div className={`form_item ${ isPhoneNumber && "input_error"}`}>
                       <div className="row mb-3">
                        <label
                        className="col-sm-4 col-form-label d-flex d-flex justify-content-end d-flex d-flex justify-content-end"
                        >
                          Phone Number* :
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="Number"
                            className="form-control w-100"
                            name="number"
                            value={values.number}
                            onChange={(e) => { handleChange(e, {setFieldValue}); setIsPhoneNumber(false)}}
                            placeholder=""
                            required=""
                            style={{ borderColor: isPhoneNumber ? 'red' : '#d9d9d9' }} 
                            />
                            {isPhoneNumber && 
                        <div className="col-sm-10 d-flex align-items-center justify-content-center error__feedback" style={{ textAlign: 'center', color: 'red' }}>
                          Please enter 10 digit Phone number.
                         </div>}
                        </div>
                      </div>
                      </div>
                      <div className="row mb-3">
                        <label className=" desc col-sm-4 col-form-label d-flex justify-content-end ">
                          Timezone*
                        </label>
                        <div className="col-sm-6">
                          <select
                            class="form-select"
                            aria-label="Default select example"
                            name="timezone"
                            value={values.timezone}
                            onChange={(e) => { handleChange(e,{setFieldValue});setIsTimeZone(false)}}
                            style={{ borderColor: isTimeZone ? 'red' : '#d9d9d9' }}
                            >
                            <option selected>Asia/Kolkata</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                          {isTimeZone &&
                       <div className="col-sm-10 d-flex align-items-center justify-content-center error__feedback" style={{ textAlign: 'center',color:"red" }}>
                             TimeZone is required
                        </div> }
                        </div>
                      </div>
                    </>
                  )}
                  {values.selectedOption === "selectTarget" && (
                    <div className="row mb-3">
                      <label className=" desc col-sm-4 col-form-label d-flex justify-content-end ">
                        {" "}
                        Select target*
                      </label>
                      <div className="col-sm-6">
                      <select
                    className="form-select"
                    aria-label="Default select example"
                    name="target_id"
                    value={values.target_id}
                    onChange={(e) => {
                    setSelectectedTargetID(e.target.value);
                    handleChange(e, { setFieldValue });
                    setIsTargetError(false)
                    }}
                    style={{ borderColor: isTargetError ? 'red' : '#d9d9d9' }}
                    >
                  <option value="" disabled selected> Select Target</option>
                    {targetName.map((item, index) => (
                       <option key={index} value={item.target_id}>
                              {item.name}
                        </option>
                     ))}
                     </select>
                       {isTargetError   &&
                       <div className="col-sm-10 d-flex align-items-center justify-content-center error__feedback" style={{ textAlign: 'center',color:"red" }}>
                          Select Target is required
                        </div> 
                        } </div>
                    </div>
                  )}
                  <div className="row mb-3">
                    <label
                      className="form-check-label col-sm-4 col-form-label d-flex justify-content-end  "
                      htmlFor="flexSwitchCheckDefault"
                    >
                      Traking Revenue
                    </label>
                    <div className="col-sm-6">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckTrakingRevenue"
                          name="trackingrevenue"
                          checked={values.trackingrevenue}
                          onChange={(e) => handleChange(e, {setFieldValue})}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3>Campaign</h3>
                  </div>
                  <div className="row mb-3">
                    <label
                      className="form-check-label col-sm-4 col-form-label d-flex justify-content-end "
                      htmlFor="flexSwitchCheckDefault"
                    >
                      Filter Repeat Caller
                    </label>
                    <div className="col-sm-6">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckFilterRepeatCaller"
                          name="filterrepeatcaller"
                          checked={values.filterrepeatcaller}
                          onChange={(e) => handleChange(e, {setFieldValue})}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      className="form-check-label col-sm-4 col-form-label d-flex justify-content-end "
                      htmlFor="flexSwitchCheckDefault"
                    >
                      Duplicate Calls*
                    </label>
                    <div className="col-sm-6">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDuplicateCalls"
                          name="duplicatecalls"
                          checked={values.duplicatecalls}
                          onChange={(e) => handleChange(e, {setFieldValue})}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      className="form-check-label col-sm-4 col-form-label d-flex justify-content-end "
                      htmlFor="flexSwitchCheckDefault"
                    >
                      Anonymous Call
                    </label>
                    <div className="col-sm-6">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckAnonymousCall"
                          name="anonymouscall"
                          checked={values.anonymouscall}
                          onChange={(e) => handleChange(e, {setFieldValue})}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="row mb-3">
                      <label
                        className="form-check-label col-sm-4 col-form-label d-flex justify-content-end"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        Record Calls
                      </label>
                      <div className="col-sm-6">
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckRecordCalls"
                            name="recordcalls"
                            checked={values.recordcalls}
                            onChange={(e) => handleChange(e, {setFieldValue})}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      className="form-check-label col-sm-4 col-form-label d-flex justify-content-end"
                      htmlFor="flexSwitchCheckDefault"
                    >
                      Wait To Answer
                    </label>
                    <div className="col-sm-6">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckWaitToAnswer"
                          name="waittoanswer"
                          checked={values.waittoanswer}
                          onChange={(e) => handleChange(e, {setFieldValue})}
                          />
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      className="form-check-label col-sm-4 col-form-label d-flex justify-content-end"
                      htmlFor="flexSwitchCheckDefault"
                    >
                      Trim Silence
                    </label>
                    <div className="col-sm-6">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckTrimSilence"
                          name="trimsilence"
                          checked={values.trimsilence}
                          onChange={(e) => handleChange(e, {setFieldValue})}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Website Link input */}
                  {/* <div className={form_item ${errors.website && "input_error"}}>
                    <label>Target Dial Attempts *</label>
                    <Input name={"website"} />
                    <p className={"error__feedback"}>{errors.website}</p>
                  </div> */}
                 <div className={`form_item ${errors.targetdialattempts && "input_error"}`}>
  <div className="row mb-3">
    <label className="col-sm-4 col-form-label d-flex justify-content-end">
      Target Dial Attempts * :
    </label>
    <div className="col-sm-6 justify-content-start">
      <Input
        className=" w-100"
        name="targetdialattempts"
        value={values.targetdialattempts}
        onChange={(e) => { handleChange(e, { setFieldValue }) }}
        style={{ borderColor: errors.targetdialattempts ? 'red' : '#d9d9d9' }}
      />
      {errors.targetdialattempts && (
        <div className="col-sm-8 d-flex align-items-center justify-content-center error__feedback" style={{ textAlign: 'center', color: "red" }}>
          {errors.targetdialattempts}
        </div>
      )}
    </div>
  </div>
</div>

                  {/* Back and Next buttons */}
                  <div className="mt-5">
                    <div
                      className={
                        "form_item button_items d-flex justify-content-center"
                      }
                    >
                      {/* <Button type={"default"} onClick={prev}>
                        Back
                      </Button> */}
                      <Button type={"primary"} onClick={handleSubmit}>
                        Save And Contine
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Links;
