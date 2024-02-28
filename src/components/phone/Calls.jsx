import React from "react";
import DataTable from "react-data-table-component";
import { recentcallcolumns, recentcalldata } from "./PhoneData";
import { Link } from "react-router-dom";

function Calls() {
  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>
        <section className="section dashboard">
          <div className="card">
            <div className="card-body mt-3">
              <h3>
                <strong className="border-bottom border-3 pb-2">
                  Phone Dashboard
                </strong>
              </h3>
              <div
                className="tab-content pt-2"
                id="borderedTabJustifiedContent"
              >
                <div
                  className="tab-pane fade show active"
                  id="bordered-justified-campaign"
                  role="tabpanel"
                  aria-labelledby="campaign-tab"
                ></div>
              </div>
              <div className="mb-5 col-md-12 text-end mt-3 ">
                <button type="button" class="btn btn-outline-dark">
                  <i class="fa-solid fa-users"></i> Manage Users
                </button>
                <span> </span>
                <button type="button" class="btn btn-outline-dark">
                  <i class="fa-solid fa-phone"></i> Open your phone
                </button>
              </div>
              <div className="card" style={{ boxShadow: "none" }}>
                <div className="card-body" style={{ padding: 0 }}>
                  <div className="container-fluid d-flex justify-content-center">
                    <div className="w-100">
                      <div>
                        <div className="mb-3 col-md-12 d-flex justify-content-between">
                          <div class="card">
                            <div class="card-body text-start p-4">
                              <h6 class="card-text">
                                All calls over the last 30 days
                              </h6>
                              <h1 class="card-text ">6</h1>
                              <a href="#" class="btn btn-outline-dark mt-5">
                                <i class="fa-solid fa-phone"></i> Open your
                                phone
                              </a>
                            </div>
                          </div>
                          <div class="card" style={{ width: "700px;" }}>
                            <div class="card-body text-start p-3">
                              <div className="p-2 border-bottom d-flex align-items-center">
                                <i
                                  class="bi bi-arrow-down-left-circle-fill mb-5"
                                  style={{ fontSize: "1.5rem" }}
                                ></i>
                                <div class="ms-3">
                                  <h6 class="card-text">Incoming Calls</h6>
                                  <h5 class="card-text">0</h5>
                                  <h6 class="card-text">-% of all calls</h6>
                                </div>
                              </div>
                              <br />
                              <div className="p-2 border-bottom d-flex align-items-center">
                                <i
                                  class="bi bi-arrow-up-right-circle-fill mb-5"
                                  style={{ fontSize: "1.5rem" }}
                                ></i>
                                <div class="ms-3">
                                  <h6 class="card-text">Outgoing Calls</h6>
                                  <h5 class="card-text">6</h5>
                                  <h6 class="card-text">100% of all calls</h6>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="card" style={{ width: "700px;" }}>
                            <div class="card-body text-start p-3">
                              <div className="p-2 border-bottom d-flex align-items-center">
                                <i
                                  class="bi bi-arrow-down-left-circle-fill mb-5"
                                  style={{ fontSize: "1.5rem", color: "red" }}
                                ></i>
                                <div class="ms-3">
                                  <h6 class="card-text">Missed Calls</h6>
                                  <h5 class="card-text">0</h5>
                                  <h6 class="card-text">
                                    -% of all incoming calls
                                  </h6>
                                </div>
                              </div>
                              <br />
                              <div className="p-2 border-bottom d-flex align-items-center">
                                <i
                                  class="bi bi-telephone-inbound-fill mb-5"
                                  style={{ fontSize: "1.5rem" }}
                                ></i>
                                <div class="ms-3">
                                  <h6 class="card-text">
                                    Average call duratiom
                                  </h6>
                                  <h5 class="card-text">-</h5>
                                  <h6 class="card-text">0 picked up calls</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3 col-md-12 text-start d-flex">
                        <h4>Recent calls</h4>
                        <Link to="/dial-pad" className="mt-1 ms-3 ">
                          <i class="fa-regular fa-clock ml-4"></i> All Recent
                          calls
                        </Link>
                      </div>
                      <div className="main">
                        <iframe
                          src="https://103.113.27.163/webphone/Phone/index.html"
                          width="800"
                          height="600"
                          frameborder="0"
                          scrolling="no"
                        ></iframe>
                        <DataTable
                          columns={recentcallcolumns}
                          data={recentcalldata}
                          searchable
                          noHeader
                          defaultSortField="id"
                          defaultSortAsc={true}
                          pagination
                          highlightOnHover
                          dense
                        />
                      </div>
                      <div className="mb-3 col-md-12 text-start">
                        <h3>Download our apps</h3>
                        <div>
                          <div className="mb-3 col-md-12 d-flex justify-content-between">
                            <div class="card" style={{ width: "700px;" }}>
                              <div class="card-body text-start p-3">
                                <div class="row">
                                  <div class="col-md-6">
                                    <h5 class="card-text">
                                      <i class="fa-solid fa-mobile"></i> Mobile
                                      App
                                    </h5>
                                    <h6 class="card-text">
                                      Take Web Phone with you. Be always
                                      reachable.
                                    </h6>
                                  </div>
                                  <div class="col-md-6">
                                    <a
                                      href="#"
                                      class="btn btn-outline-dark me-2"
                                    >
                                      <i class="fa-solid fa-arrow-up-right-from-square"></i>{" "}
                                      iOS
                                    </a>
                                    <a href="#" class="btn btn-outline-dark">
                                      <i class="fa-solid fa-arrow-up-right-from-square"></i>{" "}
                                      Android
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="card" style={{ width: "700px;" }}>
                              <div class="card-body text-start p-3">
                                <div class="row">
                                  <div class="col-md-6">
                                    <h5 class="card-text">
                                      <i class="fa-solid fa-desktop"></i>{" "}
                                      Desktop App
                                    </h5>
                                    <h6 class="card-text">
                                      Never miss a call while on your computer.
                                    </h6>
                                  </div>
                                  <div class="col-md-6">
                                    <a
                                      href="#"
                                      class="btn btn-outline-dark me-2"
                                    >
                                      <i class="fa-sharp fa-solid fa-download"></i>{" "}
                                      Mac
                                    </a>
                                    <a href="#" class="btn btn-outline-dark ">
                                      <i class="fa-sharp fa-solid fa-download"></i>{" "}
                                      Windows
                                    </a>
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
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Calls;
