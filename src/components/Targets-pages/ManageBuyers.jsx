import React, { useState, useEffect } from "react";
import axios from "axios";
import EditBuyer from "./EditBuyer"
// import { columns, data } from "./BuyerData";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import { BASE_API } from "../../helper/Constants";
function ManageBuyers() {
  const [formData, setFormData] = useState({
    buyername: "",
    pausetarget: false,
    targetconcurrency: false,
    limitrevenue: false,
    restrictDuplicates: "notRestricted",
    restrictAfter: "Converted",
    // Add other form fields here as needed
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: fieldValue,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        (BASE_API+"api/create-buyer"),
        formData
      );
      console.log("Data sent:", response.data);
      // Handle success or update UI based on the response
    } catch (error) {
      console.error("Error sending data:", error);
      // Handle error or display error message
    }
  };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await axios.get(
       ( BASE_API+"api/get-buyer/")
      );
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
   
    fetchData();
  }, []);
  const columns = [
    { name: "Buyer Name", selector: "buyername", sortable: true },
    { name: "UID", selector: "buyer_id", sortable: true },
    {
      name: "Can Pause Targets...",
      sortable: true,
      selector: "pausetarget",
      cell: (row) => (
        <p>
          <div className="form-check form-switch ms-3">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id={`flexSwitchCheck-${row.pausetarget}`} // Unique ID based on data
              checked={row.pausetarget} // Assuming 'pausetarget' is a boolean in your data
            />
            <label
              className="form-check-label"
              htmlFor={`flexSwitchCheck-${row.pausetarget}`} // Corresponding label ID
            ></label>
          </div>
        </p>
      ),
    },
    {
      name: "Can Set Target...",
      sortable: true,
      selector: "targetconcurrency",
      cell: (row) => (
        <p>
          <div className="form-check form-switch ms-3">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id={`flexSwitchCheck-${row.targetconcurrency}`} // Unique ID based on data
              checked={row.targetconcurrency} // Assuming 'targetconcurrency' is a boolean in your data
            />
            <label
              className="form-check-label"
              htmlFor={`flexSwitchCheck-${row.targetconcurrency}`} // Corresponding label ID
            ></label>
          </div>
        </p>
      ),
    },
    {
      name: "Can Dispute Target...",
      sortable: true,
      selector: "limitrevenue",
      cell: (row) => (
        <p>
          <div className="form-check form-switch ms-3">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id={`flexSwitchCheck-${row.limitrevenue}`} // Unique ID based on data
              checked={row.limitrevenue} // Assuming 'limitrevenue' is a boolean in your data
            />
            <label
              className="form-check-label"
              htmlFor={`flexSwitchCheck-${row.limitrevenue}`} // Corresponding label ID
            ></label>
          </div>
        </p>
      ),
    },
    { name: "Live", selector: "" },
    { name: "Hour", selector: "createdAt" },
    { name: "Day", selector: "createdAt" },
    { name: "Month", selector: "status" },
    { name: "Total", selector: "createdAt" },
    {
      name: "Status",
      selector: "status",
      sortable: true,
      cell: (row) => (
        <span
          style={{
            color: row.status ? "green" : "red",
            fontSize: "3rem",
            lineHeight: 0,
          }}
        >
          &bull;
        </span>
      ),
    },
    {
      name: "ACTION",
      center: true,
      sortable: false,
      selector: "null",
      cell: (row) => [
        <button type="button" class="btn btn-sm btn-outline-warning" onClick={() => handleToggleEditModal(row.buyer_id, row)}>
        <i class="fa-regular fa-pen-to-square"></i>
      </button> ,
        <button type="submit" class="btn btn-sm btn-outline-warning">
          <i class="fa-regular fa-user"></i>
        </button>,
        <button
          type="submit"
          className="btn btn-sm btn-outline-warning"
          onClick={() => handleDelete(row.buyer_id)}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>,
      ],
    },
  ];

  const [showEditModal, setShowEditModal] = useState(false);
  const [manageBuyer, setManageBuyer] = useState([]);
  const [editId, setEditId] = useState(null);
  const [createBuyer, setCreateBuyer] = useState(
    {
      buyername: "",
      pausetarget: false,
      targetconcurrency: false,
      callconversions: false,
      limitrevenue: false,
      ristrictduplicates: "notRestricted",
      ristrictafter: "Converted",
      status: true,
      type: "always"
    }
  );
  const [editValues, setEditValues] = useState(
    {
      buyername: "",
      pausetarget: false,
      targetconcurrency: false,
      callconversions: false,
      limitrevenue: false,
      ristrictduplicates: "notRestricted",
      ristrictafter: "Converted",
      status: true,
      type: "always"
    }
  )

  const handleToggleEditModal = (id, row) => {
    setShowEditModal(!showEditModal);
    if (!showEditModal) {
      // If the modal is opening, set the edit values
      setEditId(id);
      setEditValues({
        buyername: row.buyername,
        pausetarget: row.pausetarget,
        targetconcurrency: row.targetconcurrency,
        callconversions: row.callconversions,
        limitrevenue: row.limitrevenue,
        ristrictduplicates: row.ristrictduplicates,
        ristrictafter: row.ristrictafter,
        status: row.status,
        type: row.type
      });
    } else {
      // If the modal is closing, reset the edit values
      setEditId(null);
      setEditValues({
        buyername: "",
        pausetarget: false,
        targetconcurrency: false,
        callconversions: false,
        limitrevenue: false,
        ristrictduplicates: "notRestricted",
        ristrictafter: "Converted",
        status: true,
        type: "always"
      });
    }
  };


  const onEditChange = (field, value) => {
    setEditValues({
      ...editValues,
      [field]: value,
    });
  };

  const onSave = async () => {
    try {
      if (!editId) {
        console.error('Invalid editId:', editId);
        return; //Exit the function early if editId is not valid
      }
      //Send a PUT request to update the data on the server
      const response = await axios.post(`${BASE_API}api/update-buyer/${editId}`,editValues);
      console.log('PUT Response:', response);

      setShowEditModal(false);
      fetchData()
      //Update the row in your local state
      const updatedData = manageBuyer.data.map(row => row.buyer_id === editId ? { ...row, ...editValues } : row
      );

      //Update the state with the new data
      setManageBuyer({ ...manageBuyer, data: updatedData });
    
   
      //Clear the edit state
      setEditId(null);
      setEditValues({
        buyername: "",
        pausetarget: false,
        targetconcurrency: false,
        callconversions: false,
        limitrevenue: false,
        ristrictduplicates: "notRestricted",
        ristrictafter: "Converted",
        status: true,
        type: "always"
      });
    } catch (error) {
      console.error('Error updating data:', error);
      // Handle error accordingly, e.g., show a notification to the user 
    }
  };

  const onCancel = () => {
    // Clear the edit state
    setEditId(null);
    setEditValues({
      buyername: "",
      pausetarget: false,
      targetconcurrency: false,
      callconversions: false,
      limitrevenue: false,
      ristrictduplicates: "notRestricted",
      ristrictafter: "Converted",
      status: true,
      type: "always"
    })
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    //Update createBuyer with the new input value
    setCreateBuyer({ ...createBuyer, [name]: fieldValue })
  };

  const handleDelete = async (id) => {
    try {
      // Send a DELETE request to your server endpoint
      const response = await axios.get(
        `${BASE_API}api/delete-buyer/${id}`
      );
      console.log("DELETE Response:", response);
fetchData()
      // Update the row in your local state
      const updatedData = manageBuyer.data.filter(
        (row) => row.buyer_id !== id
      );

      // Update the state with the new data
      setManageBuyer({ ...manageBuyer, data: updatedData });
    } catch (error) {
      console.error("Error deleting data:", error);
      // Handle error accordingly, e.g., show a notification to the user
    }
  };


  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Buyers</li>
            </ol>
          </nav>
        </div>
        <section>
          <div className="card">
            <div className="card-body mt-3">
              <h1></h1>
              {/* Bordered Tabs Justified */}
              <div className="container-fluid ">
                <div className="row">
                  <div className="col-6 d-flex justify-content-start ">
                    <li
                      className="nav-item flex-fill d-flex "
                      role="presentation"
                    >
                      <input
                        className="form-control w-50 rounded-0"
                        type="text"
                        placeholder="Search"
                      />
                      <button type="submit" class="btn btn-primary rounded-0">
                        <i class="fa fa-search"></i>
                      </button>
                    </li>
                  </div>
                  <div className="col-6 d-flex justify-content-end ">
                    <div className="d-grid col-6">
                      <button
                        type="button"
                        className="btn btn-primary px-5 rounded-0"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                      >
                        Add Buyer
                      </button>
                      {/* add buyer */}
                      <div className="modal" id="myModal">
                        <div className="modal-dialog modal-xl">
                          <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                              <h4 className="modal-title">Add Buyer</h4>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                              />
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                              <div className="container-fluid">
                                <div className="row">
                                  <div className="col-2"></div>
                                  <div className="col-8">
                                      <form onSubmit={handleSubmit}>
                                        <div className="row mb-3">
                                          <label
                                            className="desc col-sm-6 col-form-label  d-flex justify-content-end  "
                                            id="title1"
                                            htmlFor="Field1"
                                          >
                                            Buyer Name :
                                          </label>
                                          <div className="col-sm-6">
                                            <input
                                              type="text"
                                              className="form-control "
                                              placeholder=""
                                              required=""
                                              id="buyername"
                                              name="buyername"
                                              value={formData.buyername}
                                              onChange={handleInputChange}
                                            />
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            className="desc col-sm-6 col-form-label d-flex justify-content-end "
                                            id="title3"
                                            htmlFor="Field3"
                                          >
                                            Allow Buyer To Pause Targets :
                                          </label>
                                          <div className="col-sm-6">
                                            <div className="form-check form-switch ">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="pausetarget"
                                                name="pausetarget"
                                                checked={formData.pausetarget}
                                                onChange={handleInputChange}
                                              />
                                              <label
                                                className="form-check-label"
                                                htmlFor="flexSwitchCheckDefault"
                                              ></label>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            className="desc col-sm-6 col-form-label d-flex justify-content-end"
                                            id="title3"
                                            htmlFor="Field3"
                                          >
                                            Allow Buyer To Set Target Concurrency
                                            :
                                          </label>
                                          <div className="col-sm-6">
                                            <div className="form-check form-switch ">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                role="switch"
                                                id="flexSwitchCheckDefault"
                                                // id="pausetarget"
                                                name="targetconcurrency"
                                                checked={
                                                  formData.targetconcurrency
                                                }
                                                onChange={handleInputChange}
                                              />
                                              <label
                                                className="form-check-label"
                                                htmlFor="flexSwitchCheckDefault"
                                              ></label>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            className="desc col-sm-6 col-form-label d-flex justify-content-end"
                                            id="title3"
                                            htmlFor="Field3"
                                          >
                                            Allow Buyer To Dispute Call
                                            Conversions :
                                          </label>
                                          <div className="col-sm-6">
                                            <div className="form-check form-switch ">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                role="switch"
                                                id="flexSwitchCheckDefault"
                                                name="limitrevenue"
                                                checked={formData.limitrevenue}
                                                onChange={handleInputChange}
                                              />
                                              <label
                                                className="form-check-label"
                                                htmlFor="flexSwitchCheckDefault"
                                              ></label>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            className="desc col-sm-6 col-form-label d-flex justify-content-end"
                                            id="title3"
                                            htmlFor="Field3"
                                          >
                                            Limit Revenue :
                                          </label>
                                          <div className="col-sm-6">
                                            <div className="form-check form-switch ">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                role="switch"
                                                id="flexSwitchCheckDefault"
                                              />
                                              <label
                                                className="form-check-label"
                                                htmlFor="flexSwitchCheckDefault"
                                              ></label>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            className="desc col-sm-6 col-form-label d-flex justify-content-end"
                                            id="title3"
                                            htmlFor="Field3"
                                          >
                                            Ristrict Duplicates :
                                          </label>
                                          <div className="col-sm-6">
                                            <select
                                              class="form-select"
                                              id="sel1"
                                              name="restrictDuplicates" // Changed name to make it unique
                                              value={formData.restrictDuplicates} // Set value to the form data
                                              onChange={handleInputChange}
                                            >
                                              <option value="notRestricted">
                                                Not Restricted
                                              </option>
                                              <option value="option2">
                                                Target Setting
                                              </option>
                                              <option value="option3">
                                                Buyer Setting
                                              </option>
                                            </select>
                                          </div>
                                        </div>

                                        <div className="row mb-3">
                                          <label
                                            className="desc col-sm-6 col-form-label d-flex justify-content-end"
                                            id="title3"
                                            htmlFor="Field3"
                                          >
                                            Ristrict After :
                                          </label>
                                          <div className="col-sm-6">
                                            <select
                                              class="form-select"
                                              id="sel1"
                                              name="restrictAfter" // Changed name to make it unique
                                              value={formData.restrictAfter} // Set value to the form data
                                              onChange={handleInputChange}
                                            >
                                                <option value="connected">
                                                Connected
                                              </option>
                                              <option value="converted">
                                                Converted
                                              </option>
                                            </select>
                                          </div>
                                        </div>
                                        <div className="row mb-3">
                                          <label
                                            className="desc col-sm-6 col-form-label d-flex justify-content-end"
                                            id="title3"
                                            htmlFor="Field3"
                                          >
                                            Type :
                                          </label>
                                          <div className="d-flex justify-content-start  col-sm-6">
                                            <div className="btn-group">
                                              <input
                                                type="radio"
                                                className="btn-check"
                                                name="options"
                                                id="radio7"
                                                autoComplete="off"
                                              />
                                              <label
                                                className="btn btn-outline-primary"
                                                htmlFor="radio7"
                                              >
                                                Always
                                              </label>
                                              <input
                                                type="radio"
                                                className="btn-check"
                                                name="options"
                                                id="radio8"
                                                autoComplete="off"
                                                defaultChecked=""
                                              />
                                              <label
                                                className="btn btn-outline-primary"
                                                htmlFor="radio8"
                                              >
                                                Time Limit
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="modal-footer">
                                          <button
                                            type="button"
                                            className="btn btn-danger"
                                            data-bs-dismiss="modal"
                                          >
                                            Close
                                          </button>
                                          <button
                                            className="btn btn-success"
                                            data-bs-dismiss="modal"
                                            type="submit"
                                          >
                                            Add
                                          </button>
                                        </div>
                                      </form>
                                  </div>
                                  <div className="col-2"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* add buyer */}
                    </div>
                    <div>
                      <button type="button" class="btn border-light ">
                        <i class="fa-solid fa-gear"></i>
                      </button>
                    </div>
                  </div>
                  <div className=" d-flex justify-content-end">
                    <div className="pl-2"></div>
                  </div>
                </div>
              </div>
              <div className="container-fluid mt-4 text-center">
                <div className="row ">
                  <div className="col-12">
                    <h5 className="text-left">Buyers</h5>
                  </div>
                </div>
              </div>
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
                          <div className="main">
                            <DataTable
                              columns={columns}
                              data={data?.data || []}
                              noHeader
                              defaultSortField="id"
                              // sortIcon={<SortIcon />}
                              defaultSortAsc={true}
                              pagination
                              highlightOnHover
                              dense
                            />  
                             <EditBuyer
                            editValues={editValues}
                            onEditChange={onEditChange}
                            onSave={onSave}
                            show={showEditModal}
                            setShow={setShowEditModal}
                            onCancel={onCancel}
                          />
                            {/* </DataTableExtensions> */}
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

export default ManageBuyers;
