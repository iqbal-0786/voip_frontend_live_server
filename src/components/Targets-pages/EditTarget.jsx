import React, { useState ,useEffect} from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BASE_API } from "../../helper/Constants";
const EditTarget = ({
  editValues,
  onEditChange,
  onCancel,
  onSave,
  show,
  setShow,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [buyersList, setBuyersList] = useState([]);
  const handleToggleChange = () => {
    setIsChecked(!isChecked);
    // You can perform additional actions here based on the state change
  };
  const [isCheck, setIsCheck] = useState(false);

  const handleToggleMonthly = () => {
    setIsCheck(!editValues.monthly);
    // Additional actions based on the state change can be performed here
  };
 

  const handleToggleRecording = () => {
   
    setIsCheck(!editValues.recording);
    // Additional actions based on the state change can be performed here
  };
  const [isCheckd, setIsCheckd] = useState(false);

  const handleToggleDaily = () => {
    setIsCheck(!editValues.daily);
    // You can perform additional actions here based on the state change
  };

  const [isCheckh, setIsCheckh] = useState(false);

  const handleToggleHour = () => {
    setIsCheck(!editValues.hourly);
    // You can perform additional actions here based on the state change
  };
  const [isCheckm, setIsCheckm] = useState(false);

  const handleToggleMax = () => {
    setIsCheck(!editValues.max);
    // You can perform additional actions here based on the state change
  };

  const [showBasicTable, setShowBasicTable] = useState(true);

  const handleCheckChange = (event) => {
    setShowBasicTable(event.target.id === "radio10");
  };
  const handleClose = () => setShow(false);

  console.log({editValues})

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        
        const response = await axios.get(BASE_API+'api/get-buyer/');
        console.log(response.data.data)
        // Assuming the API response is an array of buyers
        setBuyersList(response?.data?.data ||[]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); 

  console.log({buyersList})
  return (
    <>
      <Modal show={show} onHide={handleClose} className={"modal-xl"}>
        <Modal.Header closeButton>
        </Modal.Header>
        <form method="post" className="mt-3" >
          <div className="row mb-3">
            <label
              htmlFor="inputEmail"
              className="col-sm-4 col-form-label d-flex d-flex justify-content-end d-flex d-flex justify-content-end"
            >
              Name :
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className={`form-control w-100`}
                value={editValues.name}
                onChange={(e) => onEditChange("name", e.target.value)}
                id="inputEmail"
                name="name"
                placeholder=""
                required=""
              />
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
  class="form-select w-100"
  id="sel1"
  name="buyer_id"
  value={editValues.buyer_id || ""}
  onChange={(e) => onEditChange("buyer_id", e.target.value)}
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
        selected={editValues.buyer_id === buyer.buyer_id}
      >
        {buyer.buyername}
      </option>
    ))
  ) : (
    <option value="">No buyers available</option>
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
                className={`form-control w-100`}
                placeholder=""
                type="number"
                id="typeNumber"
                name="number"
                value={editValues.number}
                onChange={(e) => onEditChange("number", e.target.value)}
                required=""
              />
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
                className={`form-control w-100 `}
                id="typeNumber"
                placeholder=""
                name="timeout"
                value={editValues.timeout}
                onChange={(e) => onEditChange("timeout", e.target.value)}
                required=""
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
                className={`form-control w-100`}
                id="inputEmail"
                placeholder=""
                name="ivr"
                value={editValues.ivr}
                onChange={(e) => onEditChange("ivr", e.target.value)}
                required=""
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
                  checked={editValues.recording}
                  onChange={(e) => {
                    handleToggleRecording(); // Handle checkbox state
                    onEditChange("recording", e.target.checked); // Handle associated value
                  }}
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
                // value={createTarget.timezone}
                // onChange={handleChange}
              >
                <option value="" disabled>Select a timezone</option>
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
              Hours of Operation :
            </label>
            <div className="col-sm-6">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="operation"
                  // value={createTarget.operation}
                  onChange={handleToggleChange}
                  checked={isChecked}
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
            {isChecked && (
             <div className="container-fluid">
              <div className="row d-flex justify-content-center">
              <div className="col-sm-12  mt-4">
                <div className="btn-group">
                  <input
                    type="radio"
                    className="btn-check "
                    name="options"
                    id="radio9"
                    checked={!showBasicTable}
                    onChange={handleCheckChange}
                    autoComplete="off"
                  />
                  <label className="btn btn-outline-primary" htmlFor="radio9">
                    BASIC
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="options"
                    id="radio10"
                    checked={showBasicTable}
                    onChange={handleCheckChange}
                    autoComplete="off"
                  />
                  <label className="btn btn-outline-primary" htmlFor="radio10">
                    ADVANCED
                  </label>
                </div>
                <div className="col-sm-10 mt-4">
                  {showBasicTable ? (
                    <div className="col-sm-12 mt-4 d-flex justify-content-center">
                      <div className="col-sm-12">
                        <table class="table  w-100 text-left ">
                          <tr className="border-bottom">
                            <td className="w-25">Days</td>
                            <td className="w-25">Open</td>
                            <td className="w-50">Time Slot</td>
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
                                    // value={createTarget.recording}
                                    // onChange={handleChange}
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
                                    // value={createTarget.recording}
                                    // onChange={handleChange}
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
                                    // value={createTarget.recording}
                                    // onChange={handleChange}
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
                                    // value={createTarget.recording}
                                    // onChange={handleChange}
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
                                    // value={createTarget.recording}
                                    // onChange={handleChange}
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
                                    // value={createTarget.recording}
                                    // onChange={handleChange}
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
                                    // value={createTarget.recording}
                                    // onChange={handleChange}
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

                    <div className="col-sm-12  mt-4 d-flex justify-content-center ">
                        <table class="table  w-100 ">
                          <tr className="border-bottom">
                            <td className="w-25">Days</td>
                            <td className="w-25">Open</td>
                            <td className="w-50">Time Slot</td>
                          </tr>
                          <tr className="border-bottom">
                            <td scope="row">Monday-Sunday</td>
                            <td>
                              <div className="d-flex justify-content-around">
                                <div className="form-check form-switch ml-2">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="recording"
                                    // value={createTarget.recording}
                                    // onChange={handleChange}
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
                  )}
                </div>
              </div>
              </div>
             </div>
            )}
          </div>
          <hr />

          <h5 className="m-2 text-center">Cap Settings</h5>
          <div className="row mb-3">
            <label
              htmlFor="inputEmail"
              className="col-sm-4 col-form-label d-flex d-flex justify-content-end"
            >
              Monthly Cap :
            </label>
            <div className="col-sm-6">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  name="monthly"
                  checked={editValues.monthly}
                  onChange={(e) => {
                    handleToggleMonthly(); // Handle checkbox state
                    onEditChange("monthly", e.target.checked); // Handle associated value
                  }}
 
                   id="flexSwitchCheckDefault"
                />
                 {editValues.monthly && (
             
                  <>
                    <input
                      type="number"
                      id="typeNumber"
                      name="monthlyInput"
                      value={editValues.monthlyInput}
                      onChange={(e) => onEditChange("monthlyInput", e.target.value)}
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
                  onChange={(e) => {
                    handleToggleDaily(); // Handle checkbox state
                    onEditChange("daily", e.target.checked); // Handle associated value
                  }}
                 
                  checked={editValues.daily}
                   id="flexSwitchCheckDefault"
                />
              {editValues.daily && (
                  <>
                    <input
                      type="number"
                      id="typeNumber"
                      name="dailyInput"
                      value={editValues.dailyInput}
                      onChange={(e) => onEditChange("dailyInput", e.target.value)}
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
              Hourly Cap :
            </label>
            <div className="col-sm-6">
              <div className="form-check form-switch">
              
                <input
                  className="form-check-input"
                  type="checkbox"
                   name="hourly"
                   onChange={(e) => {
                    handleToggleHour(); // Handle checkbox state
                    onEditChange("hourly", e.target.checked); // Handle associated value
                  }}
                 
                  checked={editValues.hourly}
                  
                  role="switch"
                   id="flexSwitchCheckDefault"
                />
            {editValues.hourly && (
                  <>
                    <input
                      type="number"
                      id="typeNumber"
                      name="hourlyInput"
                      value={editValues.hourlyInput}
                      onChange={(e) => onEditChange("hourlyInput", e.target.value)}
                      class="form-control"
                      htmlFor="flexSwitchCheckDefault"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
          <h5 className="m-2 text-center">Concurrency Settings</h5>
          <div className="row mb-3">
            <label
              htmlFor="inputEmail"
              className="col-sm-4 col-form-label d-flex d-flex justify-content-end"
            >
              Max Concurrency :
            </label>
            <div className="col-sm-6">
              <div className="form-check form-switch ">
             
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="max"
                  onChange={(e) => {
                    handleToggleMax(); // Handle checkbox state
                    onEditChange("max", e.target.checked); // Handle associated value
                  }}
                  // onChange={handleToggleMax}
                  checked={editValues.max}
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                {editValues.max && (
                  <>
                    <input
                      type="number"
                      id="typeNumber"
                      name="maxInput"
                      value={editValues.maxInput}
                      onChange={(e) => onEditChange("maxInput", e.target.value)}
                      class="form-control"
                      htmlFor="flexSwitchCheckDefault"
                    />
                  </>
                )}
              </div>
            </div>
          </div>

          {/* <div className="row mb-3">
                              <label htmlFor="inputEmail" className="col-sm-4 col-form-label d-flex d-flex justify-content-end">
                                Restrict Duplicate :
                              </label>
                              <div className="col-sm-6">
                                <select class="form-select w-100 " id="sel1" name="duplicate" value={createTarget.duplicate}
                                  onChange={handleChange}>
                                  <option>Not Restricted</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                </select>
                              </div>
                            </div> */}
        </form>
        <Modal.Footer>
          <Button variant="secondary" onClick={onCancel}>
            Close
          </Button>
          <Button variant="primary" onClick={onSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditTarget;
