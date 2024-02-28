import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import axios from "axios";
import EditTarget from "./EditTarget";
import { Field } from "formik";
import ReactLoading from "react-loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_API } from "../../helper/Constants";
function ManageTargets() {
  // const [isLoading, setIsLoading] = useState(false);



  const [selectedOption, setSelectedOption] = useState('All');

 
  const [manageTarget, setManageTarget] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isActive, setIsActive] = useState("");
  const [editId, setEditId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [editValues, setEditValues] = useState({
    name: "",
    buyer_id: "",
    type: "",
    number: "",
    timeout: "",
    ivr: "",
    recording: "",
    timezone: "",
    operation: "",
    capon: "",
    callcap: "",
    monthly: "",
    monthlyInput:"",
    daily: "",
    hourly: "",
    max: "",
    maxInput:"",
    dailyInput:"",
    hourlyInput:"",
    
    // duplicate: ""
  });

  const handleEdit = (row,) => {
    console.log("Edit values before update:", editValues);
    setEditId(row.target_id);
    setEditValues({
      name: row.name,
      buyer_id: row.buyer_id, 
      type: row.type,
      number: row.number,
      timeout: row.timeout,
      ivr: row.ivr,
      recording: row.recording,
      timezone: row.timezone,
      operation: row.operation,
      capon: row.capon,
      callcap: row.callcap,
      monthly: row.monthly,
      monthlyInput:row.monthlyInput,
      daily: row.daily,
      dailyInput:row.dailyInput,
      hourly: row.hourly,
      max: row.max,
      maxInput:row.maxInput,
      hourlyInput:row.hourlyInput,
    });
  };

  const onEditChange = (field, value) => {
    console.log(field,value)
    setEditValues({
      ...editValues,
      [field]: value,
    });
  };

  const onSave = async () => {
    try {
      setIsLoading(true);
      if (!editId) {
        console.error("Invalid editId:", editId);
        return; // Exit the function early if editId is not valid
      }

      // Send a PUT request to update the data on the server
      const response = await axios.post(
        `${BASE_API}api/update-target/${editId}`,
        editValues
      );
      console.log("PUT Response:", response);
    
      // Update the row in your local state
      // const updatedData = manageTarget.data.map((row) =>
      //   row.target_id === editId ? { ...row, ...editValues } : row
      // );
      fetchData();
      setShowEditModal(false);
      setIsLoading(true);
      // Update the state with the new data
      // setManageTarget({ ...manageTarget, data: updatedData });

      // Clear the edit state
      setEditId(null);
      setEditValues({
        name: "",
        buyer_id: "",
        type: "",
        number: "",
        timeout: "",
        ivr: "",
        recording: "",
        timezone: "",
        operation: "",
        capon: "",
        callcap: "",
        monthly: "",
        daily: "",
        hourly: "",
        max: "",
        monthlyInput:" ",
        dailyInput:"",
        hourlyInput:"",
        maxInput:"",
       

        // Reset other fields
      });
    } catch (error) {
      console.error("Error updating data:", error);
      // Handle error accordingly, e.g., show a notification to the user
    }
  };

  const onCancel = () => {
    // Clear the edit state
    setEditId(null);
    setEditValues({
      name: "",
      buyer_id: "",
      type: "",
      number: "",
      timeout: "",
      ivr: "",
      recording: "",
      timezone: "",
      operation: "",
      capon: "",
      callcap: "",
      monthly: "",
      daily: "",
      hourly: "",
      max: "",
      monthlyInput:"",
      dailyInput:"",
      hourlyInput:"",
      maxInput:""
      // Reset other fields
    });
  };



  const handleDelete = async (id) => {
    try {
      // Send a DELETE request to your server endpoint
      const response = await axios.get(
        `${BASE_API}api/delete-target/${id}`
      );
      console.log("DELETE Response:", response);
fetchData()
      // Update the row in your local state
      const updatedData = manageTarget.data.filter(
        (row) => row.target_id !== id
      );

      // Update the state with the new data
      setManageTarget({ ...manageTarget, data: updatedData });
    } catch (error) {
      console.error("Error deleting data:", error);
      // Handle error accordingly, e.g., show a notification to the user
    }
  };

  const [showEditModal, setShowEditModal] = useState(false);

  const handleToggleEditModal = (target_id, row) => {
    console.log(row.buyername)
    setShowEditModal(!showEditModal);
    if (!showEditModal) {
      setEditId(target_id);
      setEditValues({
        name: row.name,
        buyer_id:row.buyer_id,
        buyername: row.buyername || "",
        type: row.type,
        number: row.number,
        timeout: row.timeout,
        ivr: row.ivr,
        recording: row.recording,
        timezone: row.timezone,
        operation: row.operation,
        capon: row.capon,
        callcap: row.callcap,
        monthly: row.monthly,
        daily: row.daily,
        hourly: row.hourly,
        max: row.max,
        monthlyInput:row.monthlyInput,
        dailyInput:row.dailyInput,
        hourlyInput:row.hourlyInput,
        maxInput:row.maxInput,
      });
    } else {
      setEditId(null);
      setEditValues({
        name: "",
        buyer_id:"",
        buyername: "",
        type: "",
        number: "",
        timeout: "",
        ivr: "",
        recording: "",
        timezone: "",
        operation: "",
        capon: "",
        callcap: "",
        monthly: "",
        daily: "",
        hourly: "",
        max: "",
        monthlyInput:"",
        dailyInput:"",
        hourlyInput:"",
        maxInput:""
      });
    }
  };


  

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };








const fetchData = async (option) => {
  try {
    setIsLoading(true);

    let activestatus = '';
    if (option === 'Status') {
      activestatus = '1';
    } else if (option === 'Pause') {
      activestatus = '0';
    } else if (option === 'All') {
      // No specific filter for 'All', leave activestatus empty
    }

    const response = await axios.get(`${BASE_API}api/search?activestatus=${activestatus}`);
    console.log({response})
    const responseData = response?.data?.data || [];
    console.log({responseData})
    const activeStatusArray = responseData.map(item => ({ target_id: item.target_id, activestatus: item.activestatus }));

    setIsActive(activeStatusArray);
    setManageTarget(responseData);
    setIsLoading(false);
  } catch (error) {
    console.error('Error fetching data:', error);
    setIsLoading(false);
  }
};
const initialFetch = async () => {
  try {
    setIsLoading(true);
    const response = await axios.get(BASE_API+'api/get-target');
    const responseData = response?.data?.data || [];
    const activeStatusArray = responseData.map(item => ({ target_id: item.target_id, activestatus: item.activestatus }));

    setIsActive(activeStatusArray);
    setManageTarget(responseData);
    setIsLoading(false);
  } catch (error) {
    console.error('Error fetching data:', error);
    setIsLoading(false);
  }
};
useEffect(() => {
 
  initialFetch();
}, []);





// const handlePlayPause = async (id) => {
//   try {
//     setIsLoading(true);
//     // Send a GET request to update the play/pause status
//     const response = await axios.get(`https://psx-t222.onrender.com/api/activestatus/${id}`);
//     console.log(response);
//    if(response.data.status){
//     toast.success(response?.data?.message);
//    }

//   //   const updatedData = manageTarget.data.map((row) =>
//   //   row.target_id === editId ? { ...row, ...editValues } : row
//   // );
//     // Update the row in your local state
//     const updatedData = manageTarget.data.map((row) => {
//       if (row.target_id === id) {
//         return {
//           ...row,
//           activestatus: !row.activestatus, // Toggle the play/pause status
//         };
//       }
//       return row;
//     });

//     // Update the state with the new data
//     setManageTarget({ ...manageTarget, data: updatedData });
    
//     setIsLoading(false);
  
//   } catch (error) {
//     console.error('Error updating play/pause status:', error);
//       setIsLoading(false);
//     // Handle error accordingly, e.g., show a notification to the user
//   }
// };



const handlePlayPause = async (id) => {
  setIsLoading(true);
  // Send a GET request to update the play/pause status
  axios.get(`${BASE_API}api/activestatus/${id}`)
    .then(response => {
      console.log(response);
      if(response.data.status){
        // Update the row in your local state
        fetchData()
        const updatedData = manageTarget.data.map((row) => {
          if (row.target_id === id) {
            return {
              ...row,
              activestatus: !row.activestatus, // Toggle the play/pause status
            };
          }
          return row;
        });

        // Update the state with the new data
        setManageTarget({ ...manageTarget, data: updatedData });

        // Show success message
        toast.success(response?.data?.message);
       
      }
      setIsLoading(false);
    })
    .catch(error => {
      console.error('Error updating play/pause status:', error);
      setIsLoading(false);
      // Handle error accordingly, e.g., show a notification to the user
    });
};
// Filter the data based on the selected option
const filteredData = manageTarget.filter(item => {
  const includesSearchTerm = Object.values(item).some(value =>
    String(value).toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedOption === 'All') {
    return includesSearchTerm; // Show all data
  } else if (selectedOption === 'Status') {
    return includesSearchTerm && item.activestatus === true; // Compare as boolean
  } else if (selectedOption === 'Pause') {
    return includesSearchTerm && item.activestatus === false; // Compare as boolean
  }

  return false;
});


  const columns = [
    { name: "Name", selector: "name", sortable: true },
    {
      name: "UID",
      sortable: true,
      selector: "uid",
      // cell: (row) => (row.numbercreation ? "Yes" : "No"),
    },
    {
      name: "buyer",
      selector: "buyername",
      sortable: true,

      
      // cell: (row) => (row.type === null || row.type === "" ? "you" : row.type),
    },
    // {
    //   name: "Type",
    //   sortable: true,
    //   selector: "type",
    //   cell: (row) =>
    //     row.type === null || row.type === "" ? "Number" : row.type,
    // },
    {
      name: "Destination",
      sortable: true,
      selector: "number",
      // cell: (row) =>
      //   row.blockcalls === null || row.blockcalls === ""
      //     ? "Account Setting"
      //     : row.blockcalls,
    },
    { name: "Live", selector: "status" ,sortable: true,},
  //   { name: "CC", selector: "" ,
  //   // cell: (row) => {
  //   //   // Assuming monthlyInput is a number, you can customize the display here
  //   //   const value = " ";
  //   //   return value ? `${value}/∞` : '0'; // Display "value/∞" if value exists, otherwise an empty string
  //   // } 
  // },
    { name: "Hour", selector: "hourlyInput",
    cell: (row) => {
      // Assuming monthlyInput is a number, you can customize the display here
      const value = row.hourlyInput;
      return value ? `${value}/∞` : '0'; // Display "value/∞" if value exists, otherwise an empty string
    } },
    { name: "Day", selector: "hourlyInput",
    cell: (row) => {
      // Assuming monthlyInput is a number, you can customize the display here
      const value = row.dailyInput;
      return value ? `${value}/∞` : '0'; // Display "value/∞" if value exists, otherwise an empty string
    } },
    { name: "Month", selector: "monthlyInput" ,
     cell: (row) => {
      // Assuming monthlyInput is a number, you can customize the display here
      const value = row.monthlyInput;
      return value ? `${value}/∞` : '0'; // Display "value/∞" if value exists, otherwise an empty string
    }
},
    // { name: "Total", selector: "createdAt" },
    {
      name: "Status",
      selector: "activestatus",
      sortable: true,
      cell: (row) => (
        <span
          style={{
            color: row.activestatus ? "green" : "red",
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
      selector: (row) => row.null,
      cell: (row) => (
        <>
        {/* <button type="submit" class="btn btn-sm btn-outline-warning ">
          <i class="fa-regular fa-copy "></i>
        </button>, */}
        <button
          type="button"
          class="btn btn-sm btn-outline-warning"
          onClick={() => handleToggleEditModal(row.target_id, row)}
        >
          <i class="fa-regular fa-pen-to-square"></i>
        </button>,


        <button type="submit" class="btn btn-sm btn-outline-warning">
          <i class="fa-solid fa-repeat"></i>
        </button>,


{row.activestatus ? (
  <button type="submit" className="btn btn-sm btn-outline-warning" onClick={()=>handlePlayPause(row.target_id)}>
           <i className="fa-solid fa-grip-lines fa-rotate-90"></i>
  </button>
   ) : (
  <button type="button" className="btn btn-sm btn-outline-warning btn-play-pause" onClick={()=>handlePlayPause(row.target_id)}>
           <i className="fas fa-play"></i>
  </button>
   )},
       
        <button
          type="button"
          className="btn btn-sm btn-outline-warning"
          onClick={() => handleDelete(row.target_id)}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>,
     
     </>
      ),
    },
  ];


  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Call fetchData when the user selects an option
    fetchData(selectedValue);
   
  };
 

  // const filteredData = manageTarget?.data.filter(item =>
  //   Object.values(item).some(value =>
  //     String(value).toLowerCase().includes(searchTerm.toLowerCase())
  //   )
  // );

  // const filteredData = manageTarget?.data
  // ? manageTarget.data.filter(item =>
  //     Object.values(item).some(value =>
  //       String(value).toLowerCase().includes(searchTerm.toLowerCase())
  //     )
  //   )
  // : [];
  return (
    <>
      <main id="main" className="main">
      
 
  <div>
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
                      <select
                        class="form-select rounded-0"
                        id="sel1"
                        name="sellist1"
                        value={selectedOption}
                        onChange={handleSelectChange}
                      >
                        <option>All</option>
                        <option>Live</option>
                        <option>Pause</option>
                        <option>Status</option>
                      </select>
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
                    <h5 className="text-left">Manage Targets</h5>
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
                            {/* <DataTableExtensions {...tableData}> */}
                            <DataTable
                              columns={columns}
                              data={filteredData}
                               searchable
                              // data={manageTarget}
                              noHeader
                              defaultSortField="id"
                              // sortIcon={<SortIcon />}
                              defaultSortAsc={true}
                              pagination
                              highlightOnHover
                              dense
                             
                              // selectableRows
                              // onSelectedRowsChange={handleRowSelected}
                            />
                            {editId !== null && (
                              <EditTarget
                                editValues={editValues}
                                onEditChange={onEditChange}
                                onSave={onSave}
                                onCancel={onCancel}
                                show={showEditModal}
                                setShow={setShowEditModal}
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
     
      <footer footer id="footer" class="footer">
        <div class="copyright">
          &copy; Copyright 2023{" "}
          <strong>
            <span>Live PBX</span>
          </strong>
          . All Rights Reserved
        </div>
      </footer>
      </div>

      </main>
    </>
  );
}

export default ManageTargets;
