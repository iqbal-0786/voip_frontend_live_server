import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { DecryptToken } from "../../helper/Constants";
import "react-toastify/dist/ReactToastify.css";
import ReactLoading from "react-loading";
import { BASE_API } from "../../helper/Constants";


function CreateTargets() {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [buyersList, setBuyersList] = useState([]);
  const [user_id, setUserId] = useState("");
  const API_ENDPOINT = (BASE_API+"api/create-target");
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleToggleChange = () => {
    setIsChecked(!isChecked);
    // You can perform additional actions here based on the state change
  };
  const [isCheck, setIsCheck] = useState(false);

  const handleTogglemonthly = () => {
    setIsCheck(!isCheck);
    // You can perform additional actions here based on the state change
  };

  const [isCheckd, setIsCheckd] = useState(false);

  const handleToggleDaily = () => {
    setIsCheckd(!isCheckd);
    // You can perform additional actions here based on the state change
  };

  const [isCheckh, setIsCheckh] = useState(false);

  const handleToggleHour = () => {
    setIsCheckh(!isCheckh);
    // You can perform additional actions here based on the state change
  };
  const [isCheckm, setIsCheckm] = useState(false);

  const handleTogglemax = () => {
    setIsCheckm(!isCheckm);
    // You can perform additional actions here based on the state change
  };

  const [showBasicTable, setShowBasicTable] = useState(true);

  const handleCheckChange = (event) => {
    setShowBasicTable(event.target.id === "radio10");
  };

  const [createTarget, setCreateTarget] = useState({
    name: "",
    buyer: "",
    number: "",
    timeout: "",
    ivr: "",
    recording: false,
    timezone: "",
    operation: false,
    monthly: false,
    daily: false,
    hourly: false,
    max: false,
    maxInput: "",
    monthlyInput: "",
    hourlyInput: "",
    dailyInput: "",
    user_id: "",
    buyer_id: "",
    days: [],
  });

  console.log({ createTarget });
  const [isNameValid, setIsNameValid] = useState(true);
  const [isNumberValid, setIsNumberValid] = useState(true);
  const [isTimeoutValid, setIsTimeoutValid] = useState(true);
  const [isIvrValid, setIsIvrValid] = useState(true);

  // Validation functions
  // const validateName = (value) => value.trim() !== '';
  // const validateNumber = (value) => value.trim() !== '';
  const validateTimeout = (value) => value.trim() !== "";
  const validateIvr = (value) => value.trim() !== "";

  const validateName = (value) => {
    const errorMessage = {};

    if (!value) {
      errorMessage.value = "Name is required";
    }
    const trimmedValue = value.trim();
    const isValid = trimmedValue !== "";
    // const errorMessage = isValid ? '' : 'Please enter a name';

    return {
      isValid,
      errorMessage,
    };
  };
  const validateNumber = (value) => {
    const trimmedValue = value.trim();
    const isValid =
      /^\d*\.?\d+$/.test(trimmedValue) && parseFloat(trimmedValue) >= 0;
    const errorMessage = isValid ? "" : "Please enter a non-negative number";

    return {
      isValid,
      errorMessage,
    };
  };
  // Event handlers
  const handleNameChange = (event) => {
    const newName = event.target.value;
    const validation = validateName(newName);
    // Check if the field is empty

    setCreateTarget((prevCreateTarget) => ({
      ...prevCreateTarget,
      name: newName,
    }));

    setIsNameValid(validation.isValid);
    setErrorMsg(validation.errorMessage.value);
  };

  // const handleNumberChange = (event) => {
  //   const newNumber = event.target.value;
  //   const isPositiveNumber = /^\d*\.?\d+$/.test(newNumber) && parseFloat(newNumber) >= 0;
  //   if (isPositiveNumber) {
  //   setCreateTarget((prevCreateTarget) => ({
  //     ...prevCreateTarget,
  //     number: newNumber,
  //   }));
  // }else{
  //   setIsNumberValid(validateNumber(newNumber));
  // }
  // };

  const handleNumberChange = (event) => {
    const newNumber = event.target.value;
    // const isPositiveNumber = /^\d*\.?\d+$/.test(newNumber) && parseFloat(newNumber) >= 0;
    const validation = validateNumber(newNumber);
    setCreateTarget((prevCreateTarget) => ({
      ...prevCreateTarget,
      number: newNumber,
    }));

    setIsNumberValid(validation.isValid);
    setErrorMsg(validation.errorMessage);
  };
  const handleTimeoutChange = (event) => {
    const newTimeout = event.target.value;
    setCreateTarget((prevCreateTarget) => ({
      ...prevCreateTarget,
      timeout: newTimeout,
    }));
    setIsTimeoutValid(validateTimeout(newTimeout));
  };

  const handleIvrChange = (event) => {
    const newIvr = event.target.value;
    setCreateTarget((prevCreateTarget) => ({
      ...prevCreateTarget,
      ivr: newIvr,
    }));
    setIsIvrValid(validateIvr(newIvr));
  };

  //Form field change handler
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   //Update createData with the new input value
  //   setCreateTarget({ ...createTarget, [name]: value })
  // };
  const handleChange = (e) => {
    const { name, checked, value, type } = e.target;
    console.log("handleChange called:", name, checked, value);
    setCreateTarget({
      ...createTarget,
      [name]: checked,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('form working fine')

    try {
      setIsLoading(true);
      const finalPayload = { ...createTarget };
      finalPayload.user_id = user_id;
      const response = await axios.post(API_ENDPOINT, finalPayload);

      // Handle the response if needed
      console.log("Post request successful:", response.data);
      setIsLoading(false);
      // Show a success toast
      toast.success("Target created successfully!", {
        toastId: "customId",
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Optionally, you can clear the form after a successful submission
      setCreateTarget({
        name: "",
        buyer: "",
        number: "",
        timeout: "",
        ivr: "",
        recording: "",
        timezone: "",
        operation: "",
        monthly: "",
        daily: "",
        hourly: "",
        max: "",
        maxInput: "",
        hourlyInput: "",
        monthlyInput: "",
        dailyInput: "",
        buyer_id: "",
        user_id: "",
      });
      navigate("/manage-targets");
    } catch (error) {
      console.error("Error posting data:", error);
      setIsLoading(false);
      // Handle error response if needed
    }
  };

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        let token = localStorage.getItem("psx_token");
        console.log({ token });
        const user = DecryptToken(token);

        // Assuming you have set up state using the useState hook
        setUserId(user.user_id);
        const response = await axios.get(
         ( BASE_API+"api/get-buyer/")
        );
        console.log(response.data.data);
        // Assuming the API response is an array of buyers
        setBuyersList(response?.data?.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // The empty dependency array ensures that the effect runs once when the component mounts

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Targets</li>
            </ol>
          </nav>
        </div>

        <section>
          {/* {!isLoading && ( */}
          <div className="card">
            <div className="card-body">
              <h1></h1>
              {/* Bordered Tabs Justified */}
              <div
                className="tab-content pt-2"
                id="borderedTabJustifiedContent"
              >
                <div
                  className="tab-pane fade show active"
                  id="bordered-justified-campaign"
                  role="tabpanel"
                  aria-labelledby="campaign-tab"
                >
                  <div className="card" style={{ boxShadow: "none" }}>
                    <div
                      className="card-body"
                      style={{ padding: 0, overflowX: "auto" }}
                    >
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col" class="h5">
                              Create Target
                            </th>
                          </tr>
                        </thead>
                        <tbody></tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* Repeat the above code for the other tabs */}
              </div>
              <div className="card" style={{ boxShadow: "none" }}>
                <div className="card-body" style={{ padding: 0 }}>
                  {isLoading && (
                    <div
                      className="d-flex justify-content-center my-5"
                      style={{ marginTop: "20px" }}
                    >
                      <ReactLoading
                        type="spokes"
                        color="grey"
                        height={50}
                        width={50}
                      />
                    </div>
                  )}

                  {!isLoading && (
                    <div className="container-fluid d-flex justify-content-center">
                      <div className="w-100">
                        <div>
                          <div className="m-4">
                            <form method="post" onSubmit={handleSubmit}>
                              <div className="row mb-3 ">
                                <label
                                  htmlFor="inputEmail"
                                  className="col-sm-4 col-form-label d-flex d-flex justify-content-end d-flex d-flex justify-content-end"
                                >
                                  Name :
                                </label>

                                <div className="col-sm-6">
                                  <input
                                    type="text"
                                    className={`form-control w-100 ${
                                      isNameValid ? "" : "is-invalid"
                                    }`}
                                    value={createTarget.name}
                                    onChange={handleNameChange}
                                    id="inputEmail"
                                    name="name"
                                    placeholder=""
                                    required
                                  />
                                  {!isNameValid && (
                                    <div className="invalid-feedback">
                                      {errorMsg}
                                    </div>
                                  )}
                                </div>
                              </div>

                              <div className="row mb-3">
                                <label
                                  className="desc col-sm-4 col-form-label d-flex d-flex justify-content-end d-flex d-flex justify-content-end"
                                  id="title3"
                                  htmlFor="Field3"
                                >
                                  Buyer :
                                </label>
                                <div className="col-sm-6">
                                  <select
                                    className="form-select w-100"
                                    id="sel1"
                                    name="buyer_id"
                                    value={createTarget.buyer_id}
                                    onChange={handleChange}
                                    required
                                  >
                                    <option value="" disabled>
                                      Select a buyer
                                    </option>

                                    {buyersList && buyersList.length > 0 ? (
                                      buyersList.map((buyer) => (
                                        <option
                                          key={buyer.buyer_id}
                                          value={buyer.buyer_id}
                                        >
                                          {buyer.buyername}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="">
                                        No buyers available
                                      </option>
                                    )}
                                  </select>
                                </div>
                              </div>

                              <div className="row mb-3">
                                <label
                                  htmlFor="inputEmail"
                                  className="col-sm-4 col-form-label d-flex d-flex justify-content-end"
                                >
                                  Number :
                                </label>
                                <div className="col-sm-6">
                                  <input
                                    className={`form-control w-100 ${
                                      isNumberValid ? "" : "is-invalid"
                                    }`}
                                    placeholder=""
                                    type="number"
                                    id="typeNumber"
                                    value={createTarget.number}
                                    onChange={handleNumberChange}
                                    required
                                  />
                                  {!isNumberValid && (
                                    <div className="invalid-feedback">
                                      {errorMsg}
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="row mb-3">
                                <label
                                  htmlFor="inputEmail"
                                  className="col-sm-4 col-form-label d-flex d-flex justify-content-end"
                                >
                                  Connection Timeout :
                                </label>
                                <div className="col-sm-6">
                                  <input
                                    type="time"
                                    className={`form-control w-100 ${
                                      isTimeoutValid ? "" : "is-invalid"
                                    }`}
                                    id="typeNumber"
                                    placeholder=""
                                    name="timeout"
                                    value={createTarget.timeout}
                                    onChange={handleTimeoutChange}
                                    required
                                  />
                                </div>
                              </div>

                              <div className="row mb-3">
                                <label
                                  htmlFor="inputEmail"
                                  className="col-sm-4 col-form-label d-flex d-flex justify-content-end"
                                >
                                  Dial IVR Options :
                                </label>
                                <div className="col-sm-6">
                                  <input
                                    type="text"
                                    className={`form-control w-100 ${
                                      isIvrValid ? "" : "is-invalid"
                                    }`}
                                    id="inputEmail"
                                    placeholder=""
                                    name="ivr"
                                    value={createTarget.ivr}
                                    onChange={handleIvrChange}
                                    required
                                  />
                                </div>
                              </div>

                              <div className="row mb-3">
                                <label
                                  htmlFor="inputEmail"
                                  className="col-sm-4 col-form-label d-flex d-flex justify-content-end"
                                >
                                  Disable Recording :
                                </label>
                                <div className="col-sm-6">
                                  <div className="form-check form-switch">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="recording"
                                      value={createTarget.recording}
                                      onChange={handleChange}
                                      role="switch"
                                      id="flexSwitchCheckDefault"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row mb-3">
                                <label
                                  htmlFor="inputEmail"
                                  className="col-sm-4 col-form-label d-flex d-flex justify-content-end"
                                >
                                  Time Zone :
                                </label>
                                <div className="col-sm-6">
                                  <select
                                    class="form-select w-100 "
                                    id="sel1"
                                    name="timezone"
                                    value={createTarget.timezone}
                                    onChange={handleChange}
                                  >
                                    <option value="" disabled>
                                      Select a timezone
                                    </option>
                                    <option>Asia/Kolkata</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                  </select>
                                </div>
                              </div>

                              <div className="row mb-3">
                                <label
                                  htmlFor="inputEmail"
                                  className="col-sm-4 col-form-label d-flex d-flex justify-content-end"
                                >
                                  Hours of operation :
                                </label>
                                <div className="col-sm-6">
                                  <div className="form-check form-switch">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="operation"
                                      value={createTarget.operation}
                                      onChange={handleChange}
                                      role="switch"
                                      id="flexSwitchCheckDefault"
                                    />
                                  </div>
                                </div>
                                {createTarget.operation && (
                                  <div className="col-sm-12 mt-4">
                                    <div className="btn-group">
                                      <input
                                        type="radio"
                                        className="btn-check "
                                        name="options"
                                        id="radio9"
                                        value={createTarget.type}
                                        checked={!showBasicTable}
                                        onChange={handleCheckChange}
                                        autoComplete="off"
                                      />
                                      <label
                                        className="btn btn-outline-primary"
                                        htmlFor="radio9"
                                      >
                                        BASIC
                                      </label>
                                      <input
                                        type="radio"
                                        className="btn-check"
                                        name="options"
                                        id="radio10"
                                        value={createTarget.type}
                                        checked={showBasicTable}
                                        onChange={handleCheckChange}
                                        autoComplete="off"
                                      />
                                      <label
                                        className="btn btn-outline-primary"
                                        htmlFor="radio10"
                                      >
                                        ADVANCED
                                      </label>
                                    </div>
                                    <div className="col-sm-12 mt-4">
                                      {showBasicTable ? (
                                        /* Render the basic table */
                                        <div className="col-sm-12 mt-4 d-flex justify-content-between">
                                          <div className="col-sm-12">
                                            <table class="table  w-100 text-left ">
                                              <tr className="border-bottom">
                                                <td className="w-25">Days</td>
                                                <td className="w-25">Open</td>
                                                <td className="w-50">
                                                  Time Slot
                                                </td>
                                              </tr>
                                              <tr className="border-bottom">
                                                <td scope="row">Sunday</td>
                                                <td>
                                                  <div className="d-flex justify-content-around">
                                                    <div className="form-check form-switch ml-2">
                                                      <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        name="recording"
                                                        value={
                                                          createTarget.days.day
                                                        }
                                                        onChange={handleChange}
                                                        role="switch"
                                                        id="flexSwitchCheckDefault"
                                                      />
                                                    </div>
                                                  </div>
                                                </td>
                                                <td className="">
                                                  <div className="d-flex">
                                                    <input
                                                      type="time"
                                                      className="form-control"
                                                      placeholder="Enter Email"
                                                    />
                                                    <input
                                                      type="time"
                                                      className="form-control"
                                                      placeholder="Enter Email"
                                                    />
                                                  </div>
                                                </td>
                                              </tr>
                                              <tr className="border-bottom">
                                                <td scope="row">Monday</td>
                                                <td>
                                                  <div className="d-flex justify-content-around">
                                                    <div className="form-check form-switch ml-2">
                                                      <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        name="recording"
                                                        value={
                                                          createTarget.recording
                                                        }
                                                        onChange={handleChange}
                                                        role="switch"
                                                        id="flexSwitchCheckDefault"
                                                      />
                                                    </div>
                                                  </div>
                                                </td>
                                                <td className="">
                                                  <div className="d-flex">
                                                    <input
                                                      type="time"
                                                      className="form-control"
                                                      placeholder="Enter Email"
                                                    />
                                                    <input
                                                      type="time"
                                                      className="form-control"
                                                      placeholder="Enter Email"
                                                    />
                                                  </div>
                                                </td>
                                              </tr>
                                              <tr className="border-bottom">
                                                <td scope="row">Tuesday</td>
                                                <td>
                                                  <div className="d-flex justify-content-around">
                                                    <div className="form-check form-switch ml-2">
                                                      <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        name="recording"
                                                        value={
                                                          createTarget.recording
                                                        }
                                                        onChange={handleChange}
                                                        role="switch"
                                                        id="flexSwitchCheckDefault"
                                                      />
                                                    </div>
                                                  </div>
                                                </td>
                                                <td className="">
                                                  <div className="d-flex">
                                                    <input
                                                      type="time"
                                                      className="form-control"
                                                      placeholder="Enter Email"
                                                    />
                                                    <input
                                                      type="time"
                                                      className="form-control"
                                                      placeholder="Enter Email"
                                                    />
                                                  </div>
                                                </td>
                                              </tr>
                                              <tr className="border-bottom">
                                                <td scope="row">Wednesday</td>
                                                <td>
                                                  <div className="d-flex justify-content-around">
                                                    <div className="form-check form-switch ml-2">
                                                      <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        name="recording"
                                                        value={
                                                          createTarget.recording
                                                        }
                                                        onChange={handleChange}
                                                        role="switch"
                                                        id="flexSwitchCheckDefault"
                                                      />
                                                    </div>
                                                  </div>
                                                </td>
                                                <td className="">
                                                  <div className="d-flex">
                                                    <input
                                                      type="time"
                                                      className="form-control"
                                                      placeholder="Enter Email"
                                                    />
                                                    <input
                                                      type="time"
                                                      className="form-control"
                                                      placeholder="Enter Email"
                                                    />
                                                  </div>
                                                </td>
                                              </tr>
                                              <tr className="border-bottom">
                                                <td scope="row">Thursday</td>
                                                <td>
                                                  <div className="d-flex justify-content-around">
                                                    <div className="form-check form-switch ml-2">
                                                      <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        name="recording"
                                                        value={
                                                          createTarget.recording
                                                        }
                                                        onChange={handleChange}
                                                        role="switch"
                                                        id="flexSwitchCheckDefault"
                                                      />
                                                    </div>
                                                  </div>
                                                </td>
                                                <td className="">
                                                  <div className="d-flex">
                                                    <input
                                                      type="time"
                                                      className="form-control"
                                                      placeholder="Enter Email"
                                                    />
                                                    <input
                                                      type="time"
                                                      className="form-control"
                                                      placeholder="Enter Email"
                                                    />
                                                  </div>
                                                </td>
                                              </tr>
                                              <tr className="border-bottom">
                                                <td scope="row">Friday</td>
                                                <td>
                                                  <div className="d-flex justify-content-around">
                                                    <div className="form-check form-switch ml-2">
                                                      <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        name="recording"
                                                        value={
                                                          createTarget.recording
                                                        }
                                                        onChange={handleChange}
                                                        role="switch"
                                                        id="flexSwitchCheckDefault"
                                                      />
                                                    </div>
                                                  </div>
                                                </td>
                                                <td className="">
                                                  <div className="d-flex">
                                                    <input
                                                      type="time"
                                                      className="form-control"
                                                      placeholder="Enter Email"
                                                    />
                                                    <input
                                                      type="time"
                                                      className="form-control"
                                                      placeholder="Enter Email"
                                                    />
                                                  </div>
                                                </td>
                                              </tr>
                                              <tr className="border-bottom">
                                                <td scope="row">Saturday</td>
                                                <td>
                                                  <div className="d-flex justify-content-around">
                                                    <div className="form-check form-switch ml-2">
                                                      <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        name="recording"
                                                        value={
                                                          createTarget.recording
                                                        }
                                                        onChange={handleChange}
                                                        role="switch"
                                                        id="flexSwitchCheckDefault"
                                                      />
                                                    </div>
                                                  </div>
                                                </td>
                                                <td className="">
                                                  <div className="d-flex">
                                                    <input
                                                      type="time"
                                                      className="form-control"
                                                      placeholder="Enter Email"
                                                    />
                                                    <input
                                                      type="time"
                                                      className="form-control"
                                                      placeholder="Enter Email"
                                                    />
                                                  </div>
                                                </td>
                                              </tr>
                                            </table>
                                          </div>
                                        </div>
                                      ) : (
                                        /* Render the advanced table */
                                        <div className="col-sm-12 mt-4 d-flex justify-content-center">
                                          <div className="col-sm-12  mt-4 d-flex justify-content-center ">
                                            <table class="table  w-100 ">
                                              <tr className="border-bottom">
                                                <td className="w-25">Days</td>
                                                <td className="w-25">Open</td>
                                                <td className="w-50">
                                                  Time Slot
                                                </td>
                                              </tr>
                                              <tr className="border-bottom">
                                                <td scope="row">
                                                  Monday-Sunday
                                                </td>
                                                <td>
                                                  <div className="d-flex justify-content-around">
                                                    <div className="form-check form-switch ml-2">
                                                      <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        name="recording"
                                                        value={
                                                          createTarget.recording
                                                        }
                                                        onChange={handleChange}
                                                        role="switch"
                                                        id="flexSwitchCheckDefault"
                                                      />
                                                    </div>
                                                  </div>
                                                </td>
                                                <td className="">
                                                  <div className="d-flex">
                                                    <input
                                                      type="time"
                                                      className="form-control"
                                                      placeholder="Enter Email"
                                                    />
                                                    <input
                                                      type="time"
                                                      className="form-control"
                                                      placeholder="Enter Email"
                                                    />
                                                  </div>
                                                </td>
                                              </tr>
                                            </table>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                              <hr />

                              <h5 className="m-2">Cap Settings</h5>
                              <div className="row mb-3">
                                <label
                                  htmlFor="inputEmail"
                                  className="col-sm-4 col-form-label d-flex d-flex justify-content-end"
                                >
                                  monthly Cap :
                                </label>
                                <div className="col-sm-6">
                                  <div className="form-check form-switch">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      role="switch"
                                      name="monthly"
                                      checked={createTarget.monthly}
                                      onChange={handleChange}
                                      id="flexSwitchCheckDefault"
                                    />
                                    {createTarget.monthly && (
                                      <>
                                        <input
                                          type="number"
                                          id="typeNumber"
                                          name="monthlyInput"
                                          value={createTarget.monthlyInput}
                                          onChange={handleChange}
                                          class="form-control"
                                          htmlFor="flexSwitchCheckDefault"
                                        />
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>

                              <div className="row mb-3">
                                <label
                                  htmlFor="inputEmail"
                                  className="col-sm-4 col-form-label d-flex d-flex justify-content-end"
                                >
                                  Daily Cap :
                                </label>
                                <div className="col-sm-6">
                                  <div className="form-check form-switch">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      role="switch"
                                      name="daily"
                                      checked={createTarget.daily}
                                      onChange={handleChange}
                                      id="flexSwitchCheckDefault"
                                    />
                                    {createTarget.daily && (
                                      <>
                                        <input
                                          type="number"
                                          id="typeNumber"
                                          name="dailyInput"
                                          value={createTarget.dailyInput}
                                          onChange={handleChange}
                                          class="form-control"
                                          htmlFor="flexSwitchCheckDefault"
                                        />
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>

                              <div className="row mb-3">
                                <label
                                  htmlFor="inputEmail"
                                  className="col-sm-4 col-form-label d-flex d-flex justify-content-end"
                                >
                                  hourly Cap :
                                </label>
                                <div className="col-sm-6">
                                  <div className="form-check form-switch">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="hourly"
                                      checked={createTarget.hourly}
                                      onChange={handleChange}
                                      role="switch"
                                      id="flexSwitchCheckDefault"
                                    />
                                    {createTarget.hourly && (
                                      <>
                                        <input
                                          type="number"
                                          id="typeNumber"
                                          name="hourlyInput"
                                          value={createTarget.hourlyInput}
                                          onChange={handleChange}
                                          class="form-control"
                                          htmlFor="flexSwitchCheckDefault"
                                        />
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <h5 className="m-2">Concurrency Settings</h5>
                              <div className="row mb-3">
                                <label
                                  htmlFor="inputEmail"
                                  className="col-sm-4 col-form-label d-flex d-flex justify-content-end"
                                >
                                  max Concurrency :
                                </label>
                                <div className="col-sm-6">
                                  <div className="form-check form-switch ">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="max"
                                      checked={createTarget.max}
                                      onChange={handleChange}
                                      role="switch"
                                      id="flexSwitchCheckDefault"
                                    />
                                    {createTarget.max && (
                                      <>
                                        <input
                                          type="number"
                                          id="typeNumber"
                                          value={createTarget.maxInput}
                                          name="maxInput"
                                          onChange={handleChange}
                                          className="form-control"
                                        />
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-6 "></div>
                                <div className="col-sm-6 d-flex justify-content-start ">
                                  <button
                                    type="submit"
                                    className="btn btn-primary"
                                  >
                                    Create Target
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* End Bordered Tabs Justified */}
            </div>
          </div>
        </section>

        <footer id="footer" class="footer">
          <div class="copyright">
            &copy; Copyright 2023{" "}
            <strong>
              <span>Live PBX</span>
            </strong>
            . All Rights Reserved
          </div>
        </footer>
      </main>
    </>
  );
}

export default CreateTargets;
