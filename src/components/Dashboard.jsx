import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Dashboard() {
  const [barChartCanvas, setBarChartCanvas] = useState(null);
  const [pieChartCanvas, setPieChartCanvas] = useState(null);

  useEffect(() => {
    if (barChartCanvas) {
      new Chart(barChartCanvas, {
        type: "bar",
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              label: "Bar Chart",
              data: [65, 59, 80, 81, 56, 55, 40],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(201, 203, 207, 0.2)",
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)",
                "rgb(201, 203, 207)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
    if (pieChartCanvas) {
      new Chart(pieChartCanvas, {
        type: "pie",
        data: {
          labels: ["Red", "Blue", "Yellow"],
          datasets: [
            {
              label: "My First Dataset",
              data: [300, 50, 100],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
              ],
              hoverOffset: 4,
            },
          ],
        },
      });
    }
  }, [barChartCanvas, pieChartCanvas]);
  const bucketListData = [
    {
      country: "USA",
      name: "John",
      previousMonth: "Jan",
      remaining: "NA",
      assigned: 6,
      usedPercentage: "36%",
    },
    {
      country: "UK",
      name: "Mariam",
      previousMonth: "Mar",
      remaining: "NA",
      assigned: 12,
      usedPercentage: "42%",
    },
    {
      country: "UK",
      name: "Alman",
      previousMonth: "Nov",
      remaining: "NA",
      assigned: 2,
      usedPercentage: "22%",
    },
  ];
  return (
    <>
      <ToastContainer />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
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
          <div className="row">
            <div className="col-lg-12">
              <div className="col-12">
                <div className="card top-selling overflow-auto pt-3 pb-3">
                  <div className="card-body pb-0">
                    <div className="row">
                      <div className="col-lg-4">
                        <h5 className="user-details">User Details:-</h5>
                        <p style={{ fontSize: "14px" }}>
                          <i
                            className="fa fa-calendar"
                            style={{ color: "#0083be", fontSize: "22px" }}
                          ></i>
                          &nbsp; <strong>Activation Date</strong>
                        </p>
                        <p style={{ fontSize: "14px" }}>
                          <i
                            className="fa fa-calendar"
                            style={{ color: "#0083be", fontSize: "22px" }}
                          ></i>
                          &nbsp; <strong>Billing Cycle</strong>
                        </p>
                        <p style={{ fontSize: "14px" }}>
                          <i
                            className="fa fa-calendar"
                            style={{ color: "#0083be", fontSize: "22px" }}
                          ></i>
                          &nbsp; <strong>Billing Date</strong>
                        </p>
                        <p style={{ fontSize: "14px" }}>
                          <i
                            className="fa fa-calendar"
                            style={{ color: "#0083be", fontSize: "22px" }}
                          ></i>
                          &nbsp; <strong>Dye Date</strong>
                        </p>
                      </div>
                      <div className="col-lg-4">
                        <canvas
                          ref={(ref) => setBarChartCanvas(ref)}
                          style={{ maxHeight: "400px", height: "400px" }}
                        ></canvas>
                      </div>
                      <div className="col-lg-4">
                        <canvas ref={(ref) => setPieChartCanvas(ref)}></canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-12">
              <div className="col-12">
                <div className="card top-selling overflow-auto pt-3 pb-3">
                  <div className="card-body pb-0">
                    <h5 className="bucket-list">Bucket List</h5>
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">Country</th>
                          <th scope="col">Name</th>
                          <th scope="col">Previous Month</th>
                          <th scope="col">Remaining</th>
                          <th scope="col">Assigned</th>
                          <th scope="col">Used Percentage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bucketListData.map((item, index) => (
                          <tr key={index}>
                            <td>{item.country}</td>
                            <td>{item.name}</td>
                            <td>{item.previousMonth}</td>
                            <td>{item.remaining}</td>
                            <td>{item.assigned}</td>
                            <td>{item.usedPercentage}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default Dashboard;
