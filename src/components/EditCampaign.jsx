import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";


function EditCampaign() {

  const [editData, setEditData ] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    campaignId: "",
    campaignName: "",  
    reportDuplicateCalls: "",
    filterAnonymousSpam: false,
    filterRepeatCaller: false,
    duplicateCalls: false,
    recordCalls: false,
    waitToAnswer: false,
    trimSilence: false,
    campaignNameNumber: "",
  });

const fetchData = async () => {
  const res =  await axios.get(`https://psx-t222.onrender.com/api/get-campaign/${id}`);
  setEditData(res?.data?.data);
}

const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setFormdata((prevData) => ({
    ...prevData,
    [name]: type === "checkbox" ? checked : value,
  }));
};

const payload = {
  "campaignId": formdata.campaignId,
  "campaignname": formdata?.campaignName,
  // "country": formdata?.country,
  // "tollfreenumber": formdata?.TollFreeNumber,
  // "publisher_id": formdata?.publisher,
  // "user_id": "", // You might want to fill this with actual user ID data
  // "target_id": formdata?.SelectTarget,
  // "trackingrevenue": formdata?.TrakingRevenue,
  "duplicatecalls": formdata?.duplicateCalls,
  "filterAnonymousSpam": formdata.anonymouscall,
  "filterrepeatcaller": formdata?.filterRepeatCaller,
  "anonymouscall": formdata?.filterAnonymousSpam,
  "recordcalls": formdata?.recordCalls,
  "waittoanswer": formdata?.waitToAnswer,
  "trimsilence": formdata?.trimSilence,
};


const handleSave = async (e) => {
  console.log(formdata)
  e.preventDefault();
  const res = axios.post(`https://psx-t222.onrender.com/api/update-campaign/${id}`,payload)
    console.log('Form Data Saved:', formdata);
    navigate("/manage-campaigns")
  };

useEffect(() => {
  fetchData()
},[])

useEffect(() => {
  if (editData) {
    const FD = {
      ...formdata,
      campaignId: editData.campaign_id,
      campaignName: editData.campaignname,
      // reportDuplicateCalls: editData.
      filterAnonymousSpam: editData.anonymouscall,
      filterRepeatCaller: editData.filterrepeatcaller,
      duplicateCalls: editData.duplicatecalls, 
      recordCalls: editData.recordcalls,
      waitToAnswer: editData.waittoanswer,
      trimSilence: editData.trimsilence,
      campaignNameNumber: editData.campaignname,
    };

    setFormdata(FD);
  }
}, [editData]);

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
          <div className="card">
            <div className="card-body mt-3">
              <h1></h1>
              {/* Bordered Tabs Justified */}
              <div className="container-fluid mt-4 text-left">
                <div className="row ">
                  <div
                    className="tab-content "
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
                          <div className="container-fluid d-flex justify-content-center">
                            <div className="w-100">
                              <div>
                                <div className="m-4">
                                  <form
                                    action=""
                                    onSubmit={handleSave}
                                  >
                                    <div className="row mb-3">
                                      <label
                                        htmlFor="inputEmail"
                                        className="col-sm-4 col-form-label d-flex d-flex justify-content-end d-flex d-flex justify-content-end"
                                      >
                                        Campaign ID :
                                      </label>
                                      <div className="col-sm-6">
                                        <p>{formdata?.campaignId}</p>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        htmlFor="inputEmail"
                                        className="col-sm-4 col-form-label d-flex d-flex justify-content-end d-flex d-flex justify-content-end"
                                      >
                                        Campaign Name :
                                      </label>
                                      <div className="col-sm-6">
                                        <input
                                          type="text"
                                          className="form-control w-100"
                                          id="inputEmail"
                                          name="campaignName"
                                          value={formdata.campaignName}
                                          onChange={handleChange}
                                          placeholder=""
                                          required=""
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        htmlFor="inputEmail"
                                        className="col-sm-4 col-form-label d-flex d-flex justify-content-end"
                                      >
                                        Report Duplicate Calls On :
                                      </label>
                                      <div className="col-sm-6">
                                        <select
                                          class="form-select w-100 "
                                          id="sel1"
                                          name="reportDuplicateCalls"
                                          value={formdata.reportDuplicateCalls}
                                          onChange={handleChange}
                                        >
                                          <option value="Connect">Connect</option>
                                          <option value="Incoming">Incoming</option>
                                          <option value="Call Length Greater Than">
                                            Call Length Greater Than
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label
                                        htmlFor="inputEmail"
                                        className="col-sm-4 col-form-label d-flex d-flex justify-content-end"
                                      >
                                        Filter Anonymus Spam :
                                      </label>
                                      <div className="col-sm-6">
                                        <div className="form-check form-switch">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="filterAnonymousSpam"
                                            checked={formdata.filterAnonymousSpam}
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
                                        Filter Repeat Caller :
                                      </label>
                                      <div className="col-sm-6">
                                        <div className="form-check form-switch">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="filterRepeatCaller"
                                            checked={formdata.filterRepeatCaller}
                                            onChange={handleChange}
                                            role="switch"
                                            id="flexSwitchCheckDefault"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <h3 className="m-2">Campaign</h3>
                                    <div className="row mb-3">
                                      <label
                                        htmlFor="inputEmail"
                                        className="col-sm-4 col-form-label d-flex d-flex justify-content-end"
                                      >
                                        Duplicate Calls :
                                      </label>
                                      <div className="col-sm-6">
                                        <div className="form-check form-switch">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="duplicateCalls"
                                            checked={formdata.duplicateCalls}
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
                                        Record Calls :
                                      </label>
                                      <div className="col-sm-6">
                                        <div className="form-check form-switch">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="recordCalls"
                                            checked={formdata.recordCalls}
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
                                        Wait To Answer :
                                      </label>
                                      <div className="col-sm-6">
                                        <div className="form-check form-switch">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="waitToAnswer"
                                            checked={formdata.waitToAnswer}
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
                                        Trim Silence :
                                      </label>
                                      <div className="col-sm-6">
                                        <div className="form-check form-switch">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="trimSilence"
                                            checked={formdata.trimSilence}
                                            onChange={handleChange}
                                            role="switch"
                                            id="flexSwitchCheckDefault"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    {/* <div className="row mb-3">
                                      <label
                                        htmlFor="inputEmail"
                                        className="col-sm-4 col-form-label d-flex d-flex justify-content-end d-flex d-flex justify-content-end"
                                      >
                                        Campaign Name :
                                      </label>
                                      <div className="col-sm-6">
                                        <input
                                          className="form-control w-100"
                                          type="number"
                                          id="campaignNameNumber"
                                          value={formdata.campaignNameNumber}
                                          onChange={handleChange}
                                        />
                                      </div>
                                    </div> */}

                                    <div className="row">
                                      <div className="col-sm-6 "></div>
                                      <div className="col-sm-6 d-flex justify-content-start ">
                                        <button
                                          type="submit"
                                          className="btn btn-primary"
                                        >
                                          Save
                                        </button>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="accordion"
                            id="panelsStayOpen-headingOne"
                          >
                            <div class="accordion-item">
                              <h2
                                class="accordion-header"
                                id="flush-headingOne"
                              >
                                <button
                                  class="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#flush-collapseOne"
                                  aria-expanded="false"
                                  aria-controls="flush-collapseOne"
                                >
                                  Publishers
                                </button>
                              </h2>
                              <div
                                id="flush-collapseOne"
                                class="accordion-collapse collapse"
                                aria-labelledby="flush-headingOne"
                                data-bs-parent="#accordionFlushExample"
                              >
                                <div class="accordion-body">
                                  <div className="d-flex  justify-content-between">
                                    <h4>Publisher </h4>
                                    <button
                                      class="btn btn-primary"
                                      type="submit"
                                      value="Submit"
                                    >
                                      + Add Number
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="accordion-item">
                             <div>
                             <h2
                                class="accordion-header"
                                id="flush-headingTwo"
                              >
                                <button
                                  class="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#flush-collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="flush-collapseTwo"
                                >
                                 Call Routing
                                </button>
                              </h2>
                             </div>
                             <div>

                             </div>
                              <div
                                id="flush-collapseTwo"
                                class="accordion-collapse collapse"
                                aria-labelledby="flush-headingTwo"
                                data-bs-parent="#accordionFlushExample"
                              >
                                <div class="accordion-body">
                                <div className="container ">
                                   <div className="row">
                                     <div className="col-lg-6">
                                     <div className="d-flex  justify-content-between">
                                    <h4>Publisher List</h4>
                                    <button
                                      class="btn btn-primary"
                                      type="submit"
                                      value="Submit"
                                    >
                                      + Add Number
                                    </button>
                                  </div>
                                     </div>
                                     <div className="col-lg-6">
                                      <h4 className="justify-content-start">
                                      Routing Plan
                                      </h4>
                                     </div>
                                   </div>
                                </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Repeat the above code for the other tabs */}
                  </div>
                </div>
              </div>
              {/* End Bordered Tabs Justified */}
            </div>
          </div>
        </section>
      </main>
     

      <footer footer id="footer" class="footer">
        <div class="copyright">
          &copy; Copyright 2023{" "}
          <strong>
            <span>Live PBX</span>
          </strong>
          . All Rights Reserved
        </div>
      </footer>
    </>
  );
}

export default EditCampaign;
