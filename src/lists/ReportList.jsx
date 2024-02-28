import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import { Line } from '@ant-design/charts';
import { campaigncolumns, campaigndata } from "./ReportListData";
import { publishercolumns, publisherdata } from "./ReportListData";
import { buyercolumns, buyerdata } from "./ReportListData";
import { targetcolumns, targetdata } from "./ReportListData";
import { callcolumns, calldata } from "./ReportListData";

import moment from "moment-timezone"; // Import the library
import DataTable from "react-data-table-component";

const ReportList = () => {

  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];

  const config = {
    data,
    width: 1200,
    height: 250,
    autoFit: false,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
  };

  let chart;

  // Export Image
  const downloadImage = () => {
    chart?.downloadImage();
  };

  // Get chart base64 string
  const toDataURL = () => {
    console.log(chart?.toDataURL());
  };


  const [showFilterForm, setShowFilterForm] = useState(false);

  const openFilterForm = () => {
    setShowFilterForm(true);
  };

  const closeFilterForm = () => {
    setShowFilterForm(false);
  };

  const applyFilter = () => {
    // Add logic to handle filter application
    // For example, you can retrieve input values and perform filtering
    // You may also want to update the state or perform other actions
  };



  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeZone, setSelectedTimeZone] = useState("");
  const [selectedAdmin, setSelectedAdmin] = useState("")
  // const data = [];

  // Function to format the selected date and time with the selected time zone
  const formatSelectedDateTime = (date, timeZone) => {
    if (date) {
      return (
        <span>
          <FaCalendarAlt />{" "}
          {moment(date).tz(timeZone).format("MMMM D, YYYY h:mm A")}
        </span>
      );
    } else {
      return "Date";
    }
  };

  return (
    <main id="mains" className="mains">
      <section>
        <div className="card">
          <div className="card-body">
            <h1></h1>
            <div className="filter-section">
              <div className="custom-select-container">
                <select
                  id="timeZoneFilter"
                  value={selectedAdmin}
                  onChange={(e) => setSelectedAdmin(e.target.value)}
                  className="custom-select"
                >
                  <option value="" disabled>
                    Admin
                  </option>
                  <option value="publisher">Publisher</option>
                  <option value="buyer">Buyer</option>
                  <option value=""></option>
                  {/* Add more time zone options as needed */}
                  <div className="current-admin">
                    {selectedAdmin
                      ? `Selected Time Zone: ${selectedAdmin}`
                      : ""}
                  </div>
                </select>
                <select
                  id="timeZoneFilter"
                  value={selectedTimeZone}
                  onChange={(e) => setSelectedTimeZone(e.target.value)}
                  className="custom-select"
                >
                  <option value="" disabled>
                    Choose a Time Zone
                  </option>
                  <option value="America/New_York">US/Eastern</option>
                  <option value="America/Los_Angeles">US/Pacific</option>
                  <option value="Canada/Eastern">Canada/Eastern</option>
                  {/* Add more time zone options as needed */}
                  <div className="current-time">
                    {selectedTimeZone
                      ? `Selected Time Zone: ${selectedTimeZone}`
                      : ""}
                  </div>
                </select>
                {/* ... your other code ... */}
                <div className="">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    isClearable
                    placeholderText={
                      selectedDate ? (
                        <span>
                          <FaCalendarAlt /> {selectedDate.toLocaleDateString()}
                        </span>
                      ) : (
                        "Date"
                      )
                    }
                    className="custom-select"
                  />
                </div>
                {/* ... your other code ... */}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="card">
          <div className="card-body">
            {showFilterForm ? (
              <form>
                <label htmlFor="filterInput">Filter Input:</label>
                <input type="text" id="filterInput" className="form-control" />
                <button type="button" className="btn btn-primary" onClick={applyFilter}>
                  Apply Filter
                </button>
                <button type="button" className="btn btn-secondary ml-2" onClick={closeFilterForm}>
                  Close
                </button>
              </form>
            ) : (
              <button type="button" className="btn btn-sm btn-outline-dark" onClick={openFilterForm}>
                +Filter
              </button>
            )}
          </div>
        </div> */}
        <div className="card">
          <div className="card-body">

            <div>
              <button type="button" onClick={downloadImage} style={{ marginRight: 24 }}>
                Export Image
              </button>
              <button type="button" onClick={toDataURL}>
                Get base64
              </button>
              <Line {...config} onReady={(chartInstance) => (chart = chartInstance)} />
            </div>

          </div>
        </div>

        <div className="card">
          <div className="card-body">
            {/* Bordered Tabs Justified */}
            <div>
              {/* <h5 className="card-title">Live Summary</h5> */}
              <ul
                className="nav nav-tabs nav-tabs-bordered d-flex"
                id="borderedTabJustified"
                role="tablist"
              >
                <li className="nav-item flex-fill" role="presentation">
                  <button
                    className="nav-link w-100 active"
                    id="campaign-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#bordered-justified-campaign"
                    type="button"
                    role="tab"
                    aria-controls="campaign"
                    aria-selected="true"

                  >
                    Campaign
                  </button>
                </li>
                <li className="nav-item flex-fill" role="presentation">
                  <button
                    className="nav-link w-100"
                    id="publisher-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#bordered-justified-publisher"
                    type="button"
                    role="tab"
                    aria-controls="publisher"
                    aria-selected="false"

                  >
                    Publisher
                  </button>
                </li>
                <li className="nav-item flex-fill" role="presentation">
                  <button
                    className="nav-link w-100"
                    id="buyer-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#bordered-justified-buyer"
                    type="button"
                    role="tab"
                    aria-controls="buyer"
                    aria-selected="false"
                  >
                    Buyer
                  </button>
                </li>
                <li className="nav-item flex-fill" role="presentation">
                  <button
                    className="nav-link w-100"
                    id="target-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#bordered-justified-target"
                    type="button"
                    role="tab"
                    aria-controls="target"
                    aria-selected="false"
                  >
                    Target
                  </button>
                </li>
              </ul>
            </div>

            <div className="tab-content pt-2" id="borderedTabJustifiedContent">

              <div
                className="tab-pane fade show active"
                id="bordered-justified-campaign"
                role="tabpanel"
                aria-labelledby="campaign-tab"
              >
                <div className="card" style={{ boxShadow: "none" }}>
                  <div className="card-body" style={{ padding: 0 }}>
                    <div className="main">
                      {/* <DataTableExtensions {...tableData}> */}
                      <DataTable
                        columns={campaigncolumns}
                        data={campaigndata}
                        noHeader
                        defaultSortField="id"
                        // sortIcon={<SortIcon />}
                        defaultSortAsc={true}
                        pagination
                        highlightOnHover
                        dense
                      />
                      {/* </DataTableExtensions> */}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="bordered-justified-publisher"
                role="tabpanel"
                aria-labelledby="publisher-tab"
              >
                <div className="card" style={{ boxShadow: "none" }}>
                  <div className="card-body" style={{ padding: 0 }}>
                    <div className="main">
                      {/* <DataTableExtensions {...tableData}> */}
                      <DataTable
                        columns={publishercolumns}
                        data={publisherdata}
                        noHeader
                        defaultSortField="id"
                        // sortIcon={<SortIcon />}
                        defaultSortAsc={true}
                        pagination
                        highlightOnHover
                        dense
                      />
                      {/* </DataTableExtensions> */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade "
                id="bordered-justified-buyer"
                role="tabpanel"
                aria-labelledby="buyer-tab"
              >
                <div className="card" style={{ boxShadow: "none" }}>
                  <div className="card-body" style={{ padding: 0 }}>
                    <div className="main">
                      {/* <DataTableExtensions {...tableData}> */}
                      <DataTable
                        columns={buyercolumns}
                        data={buyerdata}
                        noHeader
                        defaultSortField="id"
                        // sortIcon={<SortIcon />}
                        defaultSortAsc={true}
                        pagination
                        highlightOnHover
                        dense
                      />
                      {/* </DataTableExtensions> */}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade "
                id="bordered-justified-target"
                role="tabpanel"
                aria-labelledby="target-tab"
              >
                <div className="card" style={{ boxShadow: "none" }}>
                  <div className="card-body" style={{ padding: 0 }}>
                    <div className="main">
                      {/* <DataTableExtensions {...tableData}> */}
                      <DataTable
                        columns={targetcolumns}
                        data={targetdata}
                        noHeader
                        defaultSortField="id"
                        // sortIcon={<SortIcon />}
                        defaultSortAsc={true}
                        pagination
                        highlightOnHover
                        dense
                      />
                      {/* </DataTableExtensions> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Repeat the above code for the other tabs */}
            </div>
            {/* End Bordered Tabs Justified */}
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="main">
              <h5>Call Details</h5>
              {/* <DataTableExtensions {...tableData}> */}
              <DataTable
                columns={callcolumns}
                data={calldata}
                noHeader
                defaultSortField="id"
                // sortIcon={<SortIcon />}
                defaultSortAsc={true}
                pagination
                highlightOnHover
                dense
              />
              {/* </DataTableExtensions> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ReportList;
