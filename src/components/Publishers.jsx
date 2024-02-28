import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import EditPublishers from "./EditPublishers";
import axios from "axios";
import ReactLoading from "react-loading";
import { BASE_API } from "../helper/Constants";
function Publishers() {
    const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [savepublisher, setSavePublisher] = useState({ data: [] });
  const [editValues, setEditValues] = useState({
    name: "",
    numbercreation: false,
    blockcalls: "",
    accesstorecordings: "",
  });
  
  const onEditChange = (field, value) => {
    setEditValues({
      ...editValues,
      [field]: value,
    });
  };
  
  const [editId, setEditId] = useState(null);
  
  const onCancel = () => {
    setEditId(null);
    setEditValues({
      name: "",
      numbercreation: false,
      blockcalls: "",
      accesstorecordings: "",
    });
  };

  const handleUpdate = async() => {
    const response = await axios.post( // Ensure if it's a PUT request for updating
    `${BASE_API}api/update-publisher/${editId}`,
    editValues
  );

  // Handle the response accordingly
  console.log("PUT Response:", response);

  // Assuming savepublisher is a state variable
  const updatedData = savepublisher.data.map((row) =>
    row.publisher_id === editId ? { ...row, ...editValues } : row
  );

  setSavePublisher({ ...savepublisher, data: updatedData });
   // Reload the page
   window.location.reload();

  }
  
  const onSave = async () => {
    try {
      setIsLoading(true)
      if (!editId) {
        console.error("Invalid editId:", editId);
        return;
      }
  
      setEditId(null);
      setEditValues({
        name: "",
        numbercreation: false,
        blockcalls: "",
        accesstorecordings: "",
      });
      setIsLoading(false)
      // Reload the page
      window.location.reload();
    } catch (error) {
      console.error("Error updating data:", error);
      setIsLoading(false)
      // Handle error accordingly
    }
  };
  
  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get(
          (BASE_API+"api/get-publisher")
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  
  // Edit modal handling
  const [showEditModal, setShowEditModal] = useState(false);
  
  const handleToggleEditModal = (id, row) => {
    setShowEditModal(!showEditModal);
    if (!showEditModal) {
      setEditId(id);
      setEditValues({
        name: row.name,
        numbercreation: row.numbercreation, // Change as per your data
        blockcalls: row.blockcalls,
        accesstorecordings: row.accesstorecordings,
      });
    } else {
      setEditId(null);
      setEditValues({
        name: "",
        numbercreation: false,
        blockcalls: "",
        accesstorecordings: "",
      });
    }
  };

  

  const columns = [
    { name: "Name", selector: "name", sortable: true },
    {
      name: "Create Number",
      sortable: true,
      selector: "numbercreation",
      cell: (row) => (row.numbercreation ? "Yes" : "No"),
    },
    { name: "ID", selector: "uid", sortable: true },
    {
      name: "Reacoding",
      sortable: true,
      selector: "accesstorecordings",
      style: {
        whiteSpace: "normal",
      },
    },
    {
      name: "Block Calls",
      sortable: true,
      selector: "blockcalls",
    },
    { name: "Live", selector: "status" },
    { name: "Hour", selector: "hourlyInput",
    cell: (row) => {
      // Assuming monthlyInput is a number, you can customize the display here
      const value = row.hourlyInput;
      return value ? `${value}/∞` : '0'; // Display "value/∞" if value exists, otherwise an empty string
    } },
  
    { name: "Day", selector: "dailyInput" ,
    cell: (row) => {
      // Assuming monthlyInput is a number, you can customize the display here
      const value = row.dailyInput;
      return value ? `${value}/∞` : '0'; // Display "value/∞" if value exists, otherwise an empty string
    }},
    { name: "Month", selector: "monthlyInput",
    cell: (row) => {
      // Assuming monthlyInput is a number, you can customize the display here
      const value = row.monthlyInput;
      return value ? `${value}/∞` : '0'; // Display "value/∞" if value exists, otherwise an empty string
    } },
    // { name: "Total", selector: "" },
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
        <button
          type="button"
          class="btn btn-sm btn-outline-warning"
          onClick={() => handleToggleEditModal(row.publisher_id, row)}
        >
          <i class="fa-regular fa-pen-to-square"></i>
        </button>,
        <button type="submit" class="btn btn-sm btn-outline-warning">
          <i class="fa-regular fa-user"></i>
        </button>,
        <button
          type="submit"
          className="btn btn-sm btn-outline-warning"
          onClick={() => deleteTarget(row.publisher_id)}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>,
      ],
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    numbercreation: false,
    blockcalls: "", // Include this in your formData
    accesstorecordings: "", // Include this in your formData
  });
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    try {
      const response = await axios.post(
        (BASE_API+"api/create-publisher"),
        formData
      );
      console.log("Data sent:", response.data);
      // Optionally, perform actions after successful submission
    } catch (error) {
      console.error("Error sending data:", error);
      // Handle error scenarios
    }
  };

  const [publishersTarget, setPublishersTarget] = useState([]);
  const deleteTarget = async (id) => {
    try {
      console.log("Attempting to delete item with ID:", id);

      const response = await axios.get( `${BASE_API}api/delete-publisher/${id}`);
      console.log("DELETE Response:", response);

      const updatedData = data.data.filter((row) => row.publisher_id !== id);
      console.log("Updated Data after deletion:", updatedData);

      // setPublishersTarget(updatedData);
      setData({ ...data, data: updatedData });
        // Reload the page
        window.location.reload();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };



  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };


  const filteredData = data?.data?.filter(item => {
    return Object.values(item).some(value =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  
  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Publishers</li>
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
                        value={searchTerm}
                        onChange={handleSearch}
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
                        className="btn btn-primary rounded-0"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal2"
                      >
                        Add Publisher
                      </button>
                      {/* add Publicher btn */}
                      <div className="modal" id="myModal2">
                        <div className="modal-dialog modal-xl">
                          <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                              <h4 className="modal-title">
                                Add a new Publisher
                              </h4>
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
                                          htmlFor="inputEmail"
                                          className="col-sm-6 col-form-label d-flex justify-content-end"
                                        >
                                          Name :
                                        </label>
                                        <div className="col-sm-6">
                                          <input
                                            type="text"
                                            className="form-control w-100"
                                            placeholder="Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          className="desc col-sm-6 col-form-label d-flex justify-content-end"
                                          id="title3"
                                          htmlFor="Field3"
                                        >
                                          Number Creation :
                                        </label>
                                        <div className="col-sm-6">
                                          <div className="form-check form-switch">
                                            <input
                                              className="form-check-input"
                                              type="checkbox"
                                              name="numbercreation"
                                              id="flexSwitchCheckChecked"
                                              checked={formData.numbercreation}
                                              onChange={handleInputChange}
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="flexSwitchCheckChecked"
                                            ></label>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          className="desc  col-sm-6 col-form-label d-flex justify-content-end"
                                          id="title3"
                                          htmlFor="Field3"
                                        >
                                          Block Calls After Payout Cap is
                                          Reached :
                                        </label>
                                        <div className="d-flex justify-content-start col-sm-6">
                                          <div className="btn-group">
                                            <input
                                              type="radio"
                                              className="btn-check"
                                              name="blockcalls"
                                              id="radio1"
                                              autoComplete="off"
                                              value="Accounting Setting (Allow)"
                                              checked={
                                                formData.blockcalls ===
                                                "Accounting Setting (Allow)"
                                              }
                                              onChange={handleInputChange}
                                            />
                                            <label
                                              className="btn btn-outline-primary"
                                              htmlFor="radio1"
                                            >
                                              Accounting Setting (Allow)
                                            </label>
                                            <input
                                              type="radio"
                                              className="btn-check"
                                              name="blockcalls"
                                              id="radio2"
                                              autoComplete="off"
                                              value="Allow"
                                              checked={
                                                formData.blockcalls === "Allow"
                                              }
                                              onChange={handleInputChange}
                                            />
                                            <label
                                              className="btn btn-outline-primary"
                                              htmlFor="radio2"
                                            >
                                              Allow
                                            </label>
                                            <input
                                              type="radio"
                                              className="btn-check"
                                              name="blockcalls"
                                              id="radio3"
                                              autoComplete="off"
                                              value="Block"
                                              checked={
                                                formData.blockcalls === "Block"
                                              }
                                              onChange={handleInputChange}
                                            />
                                            <label
                                              className="btn btn-outline-primary"
                                              htmlFor="radio3"
                                            >
                                              Block
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          className="desc  col-sm-6 col-form-label d-flex justify-content-end"
                                          id="title4"
                                          htmlFor="Field4"
                                        >
                                          Access To Recordings :
                                        </label>
                                        <div className="d-flex justify-content-end col-sm-6">
                                          <div className="btn-group">
                                            <input
                                              type="radio"
                                              className="btn-check"
                                              name="accesstorecordings"
                                              id="radio4"
                                              autoComplete="off"
                                              value="Accounting Setting (Disabled)"
                                              checked={
                                                formData.accesstorecordings ===
                                                "Accounting Setting (Disabled)"
                                              }
                                              onChange={handleInputChange}
                                            />
                                            <label
                                              className="btn btn-outline-primary"
                                              htmlFor="radio4"
                                            >
                                              Accounting Setting (Disabled)
                                            </label>
                                            <input
                                              type="radio"
                                              className="btn-check"
                                              name="accesstorecordings"
                                              id="radio5"
                                              autoComplete="off"
                                              defaultChecked=""
                                              value="Allow"
                                              checked={
                                                formData.accesstorecordings ===
                                                "Allow"
                                              }
                                              onChange={handleInputChange}
                                            />
                                            <label
                                              className="btn btn-outline-primary"
                                              htmlFor="radio5"
                                            >
                                              Enabled
                                            </label>
                                            <input
                                              type="radio"
                                              className="btn-check"
                                              name="accesstorecordings"
                                              id="radio6"
                                              autoComplete="off"
                                              value="Block"
                                              checked={
                                                formData.accesstorecordings ===
                                                "Block"
                                              }
                                              onChange={handleInputChange}
                                            />
                                            <label
                                              className="btn btn-outline-primary"
                                              htmlFor="radio6"
                                            >
                                              Disabled
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                      <button
                                        type="submit"
                                        className="btn btn-success"
                                        data-bs-dismiss="modal"
                                        onClick={handleUpdate}
                                      >
                                        Add
                                      </button>
                                    </form>
                                  </div>
                                  <div className="col-2"></div>
                                </div>
                              </div>
                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer"></div>
                          </div>
                        </div>
                      </div>
                      {/* add Publicher btn */}
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
                <div className="row">
                  <div className="col-12">
                    <h5 className="text-left">Publishers</h5>
                  </div>
                </div>
              </div>
              {isLoading && (
        <div className="d-flex justify-content-center my-5" style={{ marginTop: '20px' }} >
          <ReactLoading type="spokes" color="grey" height={50} width={50}   />
        </div>
      )}


{!isLoading && (
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
                            <div>
                              {/* <h1>Your Data Table</h1> */}
                              {/* {JSON.stringify(data?.DataTable)} */}
                              {/* {JSON.stringify(columns)} */}
                            </div>
                            <DataTable
                              columns={columns}
                              data={filteredData}
                              noHeader
                              defaultSortField="id"
                              // sortIcon={<SortIcon />}
                              defaultSortAsc={true}
                              pagination
                              highlightOnHover
                              dense
                            />
                            {editId !== null && (
                              <EditPublishers
                                editValues={editValues}
                                onEditChange={onEditChange}
                                onSave={onSave}
                                show={showEditModal}
                                setShow={setShowEditModal}
                                onCancel={onCancel}
                                editId={editId}
                              />
                            )}
                            {/* </DataTableExtensions> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Repeat the above code for the other tabs */}
                  </div>
                </div>
              </div>
)}
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

export default Publishers;
