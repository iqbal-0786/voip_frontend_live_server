import React, { useState } from "react";
import { Link } from "react-router-dom";

const PurchaseNumberList = () => {
  const [data, setData] = useState([
    {
      number: "PN001",
      company: "Company A",
      campaign: "Campaign 1",
      target: 100,
      status: "Active",
    },
  ]);

  
  const toggleStatus = (index) => {
    const updatedData = [...data];
    updatedData[index].status =
      updatedData[index].status === "Active" ? "InActive" : "Active";
    setData(updatedData);
  };
  const styles = {
    title: {
      display: "flex",
      alignItems: "end",
      justifyContent: "end",
      fontSize: "14px",
      padding: "2px",
      // width: "100%",
      // maxWidth: "1000px",
    },
    button: {
      cursor: "pointer",
    },
  };

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle" style={styles.title}>
          {/* <h1>Purchase Number List</h1> */}
          <Link to="/add-purchase-number">
            <button className="btn btn-primary" style={styles.title}>
              Add Purchase Number
            </button>
          </Link>
          {/* <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">Tables</li>
              <li className="breadcrumb-item active">Data</li>
            </ol>
          </nav> */}
        </div>
        {/* End Page Title */}
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="number-list">Purchase Number List</h5>

                  {/* Table with stripped rows */}
                  <table className="table datatable">
                    <thead>
                      <tr>
                        <th scope="col">Number</th>
                        <th scope="col">Company</th>
                        <th scope="col">Campaign</th>
                        <th scope="col">Target</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, index) => (
                        <tr key={index}>
                          <td>{item.number}</td>
                          <td>{item.company}</td>
                          <td>{item.campaign}</td>
                          <td>{item.target}</td>
                          <td
                            onClick={() => toggleStatus(index)}
                            className={`clickable ${
                              item.status === "Active"
                                ? "text-success"
                                : "text-danger"
                            }`}
                            style={{ cursor: "pointer" }}
                          >
                            {item.status}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {/* End Table with stripped rows */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* End #main */}
    </>
  );
};

export default PurchaseNumberList;
