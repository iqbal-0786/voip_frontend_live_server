import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import AddCard from "./AddCard";
import Cards from "./Cards";
const AddPurchaseNumber = () => {
  const [localAreaCodeFilter, setLocalAreaCodeFilter] = useState("");
  const [localCityFilter, setLocalCityFilter] = useState("");
  const [tollFreeAreaCodeFilter, setTollFreeAreaCodeFilter] = useState("");
  const [tollFreeCityFilter, setTollFreeCityFilter] = useState("");

  // State variables to track the active tab
  const [activeTab, setActiveTab] = useState("local"); // Default to "local"

  const Filters = ({
    areaCodeFilter,
    setAreaCodeFilter,
    cityFilter,
    setCityFilter,
  }) => {
    return (
      <div className="custom-select-container">
        <div>
          <select
            id="areaCodeFilter"
            value={areaCodeFilter}
            onChange={(e) => setAreaCodeFilter(e.target.value)}
            className="custom-select"
          >
            <option value="">Area Code</option>
            <option value="areaCode1">Area Code 1</option>
            <option value="areaCode2">Area Code 2</option>
            <option value="areaCode3">Area Code 3</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <select
            id="cityFilter"
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            className="custom-select"
          >
            <option value="">City</option>
            <option value="city1">City 1</option>
            <option value="city2">City 2</option>
            <option value="city3">City 3</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
    );
  };

  return (
    <>
      <main id="main" className="main">
        <section>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title"></h5>
              <ul
                className="nav nav-tabs nav-tabs-bordered d-flex"
                id="borderedTabJustified"
                role="tablist"
              >
                <li className="nav-item flex-fill" role="presentation">
                  <button
                    className={`nav-link w-50 ${
                      activeTab === "local" ? "active" : ""
                    }`}
                    id="campaign-tab"
                    onClick={() => setActiveTab("local")}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === "local"}
                  >
                    Local
                  </button>
                </li>
                <li className="nav-item flex-fill" role="presentation">
                  <button
                    className={`nav-link w-50 ${
                      activeTab === "tollfree" ? "active" : ""
                    }`}
                    id="publisher-tab"
                    onClick={() => setActiveTab("tollfree")}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === "tollfree"}
                  >
                    Toll Free
                  </button>
                </li>
              </ul>
              <div
                className="tab-content pt-2"
                id="borderedTabJustifiedContent"
              >
                <div
                  className={`tab-pane fade ${
                    activeTab === "local" ? "show active" : ""
                  }`}
                  id="bordered-justified-campaign"
                  role="tabpanel"
                  aria-selected={activeTab === "local"}
                >
                  {activeTab === "local" && (
                    <div className="card" style={{ "box-shadow": "none" }}>
                      <div className="card-body" style={{ padding: "0" }}>
                        <Filters
                          areaCodeFilter={localAreaCodeFilter}
                          setAreaCodeFilter={setLocalAreaCodeFilter}
                          cityFilter={localCityFilter}
                          setCityFilter={setLocalCityFilter}
                        />
                        <div className="content-box">
                          {/* Render your table data for Local here */}
                          {/* You can add any content or components you need here */}
                        </div>
                        <Cards /> {/* Include the AddCard component here */}
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "tollfree" ? "show active" : ""
                  }`}
                  id="bordered-justified-publisher"
                  role="tabpanel"
                  aria-selected={activeTab === "tollfree"}
                >
                  {activeTab === "tollfree" && (
                    <div className="card" style={{ "box-shadow": "none" }}>
                      <div className="card-body" style={{ padding: "0" }}>
                        <Filters
                          areaCodeFilter={tollFreeAreaCodeFilter}
                          setAreaCodeFilter={setTollFreeAreaCodeFilter}
                          cityFilter={tollFreeCityFilter}
                          setCityFilter={setTollFreeCityFilter}
                        />
                        <div className="content-box">
                          {/* <Form.Label htmlFor="inputPassword5"></Form.Label>
                          <Form.Control
                            className="custom-box"
                            type="text"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                          /> */}
                          <AddCard />{" "}
                          {/* Include the AddCard component here as well */}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AddPurchaseNumber;
