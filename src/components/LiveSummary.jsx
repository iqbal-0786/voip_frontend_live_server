import React from "react";

function LiveSummary() {
  return (
    <main id="main" className="main">
      <section>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Live Summary</h5>
            {/* Bordered Tabs Justified */}
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
            <div className="tab-content pt-2" id="borderedTabJustifiedContent">
              <div
                className="tab-pane fade show active"
                id="bordered-justified-campaign"
                role="tabpanel"
                aria-labelledby="campaign-tab"
              >
                <div className="card" style={{ boxShadow: "none" }}>
                  <div className="card-body" style={{ padding: 0 }}>
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">Campaign</th>
                          <th scope="col">Publisher</th>
                          <th scope="col">Buyer</th>
                          <th scope="col">Caller ID</th>
                          <th scope="col">Phone Number</th>
                          <th scope="col">Duration</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                        <tr>
                          <th scope="col">Pree</th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col">
                            <i className="fa fa-play"></i>
                            <i className="fa fa-pause"></i>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                        </tr>
                        {/* Add more table rows here */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* Repeat the above code for the other tabs */}
            </div>
            {/* End Bordered Tabs Justified */}
            <div className="tab-content pt-2" id="borderedTabJustifiedContent">
              <div
                className="tab-pane fade show active"
                id="bordered-justified-publisher"
                role="tabpanel"
                aria-labelledby="campaign-tab"
              >
                <div className="card" style={{ boxShadow: "none" }}>
                  <div className="card-body" style={{ padding: 0 }}>
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">Campaign</th>
                          <th scope="col">Publisher</th>
                          <th scope="col">Buyer</th>
                          <th scope="col">Caller ID</th>
                          <th scope="col">Phone Number</th>
                          <th scope="col">Duration</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                        <tr>
                          <th scope="col">Pree</th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col">
                            <i className="fa fa-play"></i>
                            <i className="fa fa-pause"></i>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                        </tr>
                        {/* Add more table rows here */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* Repeat the above code for the other tabs */}
            </div>
              {/* End Bordered Tabs Justified */}
              <div className="tab-content pt-2" id="borderedTabJustifiedContent">
              <div
                className="tab-pane fade show active"
                id="bordered-justified-buyer"
                role="tabpanel"
                aria-labelledby="campaign-tab"
              >
                <div className="card" style={{ boxShadow: "none" }}>
                  <div className="card-body" style={{ padding: 0 }}>
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">Campaign</th>
                          <th scope="col">Publisher</th>
                          <th scope="col">Buyer</th>
                          <th scope="col">Caller ID</th>
                          <th scope="col">Phone Number</th>
                          <th scope="col">Duration</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                        <tr>
                          <th scope="col">Pree</th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col">
                            <i className="fa fa-play"></i>
                            <i className="fa fa-pause"></i>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                        </tr>
                        {/* Add more table rows here */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* Repeat the above code for the other tabs */}
            </div>
            {/* End Bordered Tabs Justified */}
            <div className="tab-content pt-2" id="borderedTabJustifiedContent">
              <div
                className="tab-pane fade show active"
                id="bordered-justified-target"
                role="tabpanel"
                aria-labelledby="campaign-tab"
              >
                <div className="card" style={{ boxShadow: "none" }}>
                  <div className="card-body" style={{ padding: 0 }}>
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">Campaign</th>
                          <th scope="col">Publisher</th>
                          <th scope="col">Buyer</th>
                          <th scope="col">Caller ID</th>
                          <th scope="col">Phone Number</th>
                          <th scope="col">Duration</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                        <tr>
                          <th scope="col">Pree</th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col">
                            <i className="fa fa-play"></i>
                            <i className="fa fa-pause"></i>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                          <td>Brandon Jacob</td>
                          <td>Designer</td>
                          <td>28</td>
                          <td>2016-05-25</td>
                        </tr>
                        {/* Add more table rows here */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* Repeat the above code for the other tabs */}
            </div>
              {/* End Bordered Tabs Justified */}
          </div>
        </div>
      </section>
    </main>
  );
}

export default LiveSummary;
