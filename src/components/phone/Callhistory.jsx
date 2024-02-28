import React from 'react';
import DataTable from "react-data-table-component";
import { callhistorycolumns, callhistorydata } from './PhoneData';

function Callhistory() {
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
              <div className="mb-3 col-md-12 text-end mt-4">
                <button type="button" class="btn btn-outline-dark"><i class="fa-sharp fa-solid fa-download"></i>  Export call History</button>
                <span>  </span>
                <button type="button" class="btn btn-outline-dark" ><i class="fa-solid fa-phone"></i>  Open your phone</button>
              </div>
              <div className="card" style={{ boxShadow: "none" }}>
                <div className="card-body" style={{ padding: 0 }}>
                  <div className="container-fluid d-flex justify-content-center">
                    <div className="w-100">
                      <div className="main">
                        <DataTable className='border-top border-1 mt-4'
                          columns={callhistorycolumns}
                          data={callhistorydata}
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
    </>
  )
}

export default Callhistory