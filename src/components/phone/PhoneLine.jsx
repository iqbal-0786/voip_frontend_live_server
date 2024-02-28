import React from 'react'
import DataTable from "react-data-table-component";
import { Phonedatacolumns, Phonedata } from './PhoneData';
import { Link } from 'react-router-dom';
function PhoneLine() {
  const isPortingEnabled = false;
  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Call History</li>
            </ol>
          </nav>
        </div>
        <section className="section dashboard">
          <div className="card">
            <div className="card-body mt-3">
              <h3><strong className='border-bottom border-3 pb-2'>Call History</strong></h3>
              <div className="tab-content pt-2" id="borderedTabJustifiedContent">
                <div
                  className="tab-pane fade show active"
                  id="bordered-justified-campaign"
                  role="tabpanel"
                  aria-labelledby="campaign-tab"
                >
                </div>
              </div>
              <div className="mb-3 col-md-12 text-end mt-3">
                <div className="row d-flex justify-content-end">
                  <div className=" mt-2 col-md-3">
                    {isPortingEnabled ? (
                      <Link to="/another-page"> <i className="fa-solid fa-file-export"></i>Port your existing number</Link>
                    ) : (
                      <span className="disabled-link"> <i className="fa-solid fa-file-export"></i>Port your existing number</span>
                    )}
                  </div>
                  <div className=" col-md-3 text-end">
                    <Link to="/dial-pad" className="btn btn-primary p-1">
                      <i className="fa-solid fa-phone p-2"></i>
                      Open Your Phone
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card" style={{ boxShadow: "none" }}>
                <div className="card-body" style={{ padding: 0 }}>
                  <div className="container-fluid d-flex justify-content-center">
                    <div className="w-100">
                      <div className="main">
                        <DataTable  className='border-top border-1 mt-4'
                          columns={Phonedatacolumns}
                          data={Phonedata}
                          searchable
                          noHeader
                          defaultSortField="id"
                          // sortIcon={<SortIcon />}
                          defaultSortAsc={true}
                          pagination
                          highlightOnHover
                          dense
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="footer" class="footer">
        <div class="copyright">
          &copy; Copyright 2023{" "}
          <strong>
            <span>Live PBX</span>
          </strong>
          . All Rights Reserved
        </div>
      </footer> 
    </>
  )
}

export default PhoneLine