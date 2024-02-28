import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../slices/sidebarSlice";
import Sidebar from "./Sidebar";
const Header = ({ navHandler, openNav }) => {
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };
  const [dollarAmount, setDollarAmount] = useState(10); // Set your initial dollar amount
  return (
    <>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="row w-100">
          <div className="col-lg-4 d-flex justify-content-start">
            <div className="d-flex align-items-center ">
              <a to="/dashboard" className="logo d-flex align-items-center">
                <img src="assets/img/icon.png" alt="Logo" />
                <p className="d-none d-lg-block text-nowrap">
                  <span style={{ color: "#FF7F00" }}>Live </span>
                  <span style={{ color: "#0083BE" }}>PBX</span>
                </p>
                <i
                  className="bi bi-list toggle-sidebar-btn"
                  onClick={navHandler} // Yahan toggleSidebar function ko call karenge
                />
                <i
                  className="fa-solid fa-phone-volume"
                  style={{ fontSize: "28px", color: "#07a61a" }}
                  // Yahan toggleSidebar function ko call karenge
                />
                <span
                  style={{
                    fontSize: "12px",
                    color: "000000",
                    paddingLeft: "10px",
                  }}
                >
                  0 Live
                </span>
                <i
                  className="fa-solid fa-phone-volume"
                  style={{ fontSize: "28px", color: "#0083BE" }}
                  // Yahan toggleSidebar function ko call karenge
                />{" "}
                <span
                  style={{
                    fontSize: "12px",
                    color: "#000000",
                    paddingLeft: "10px",
                  }}
                >
                  5 Live
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* End Logo */}
        {/* <div className="search-bar">
          <form
            className="search-form d-flex align-items-center"
            method="POST"
            action="#"
          >
            <input
              type="text"
              name="query"
              placeholder="Search"
              title="Enter search keyword"
            />
            <button type="submit" title="Search">
              <i className="bi bi-search" />
            </button>
          </form>
        </div> */}
        {/* End Search Bar */}
        <div className="col-lg-8 d-flex justify-content-end">
          <nav className="header-nav">
            <ul className="d-flex align-items-center">
              {/* <li className="nav-item d-block d-lg-none">
              <a className="nav-link nav-icon search-bar-toggle " href="#">
                <i className="bi bi-search" />
              </a>
            </li> */}
              {/* End Search Icon*/}
              {dollarAmount < 10 && (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link nav-icon"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <button type="button" className="btn btn-danger rounded-0">
                      Low Credit
                    </button>
                  </a>
                </li>
              )}
              <li className="nav-item dropdown">
                <a
                  className="nav-link nav-icon"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <button type="button" class="btn btn-danger rounded-0">
                    Your Plan Will Expire Soon
                  </button>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link nav-icon"
                  href=""
                  data-bs-toggle="false" // Add this attribute to make it unclickable
                >
                  <span style={{ "font-size": "16px" }}>
                    <strong>Expiry Date: 01-01-2023</strong>
                  </span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link nav-icon"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <i className="fa fa-phone" />
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link nav-icon" href="" data-bs-toggle="false">
                  <i className="bi bi-wallet" />
                  <span style={{ fontSize: "18px" }}>
                    <i className="bi bi-currency-dollar" />
                    <strong>{dollarAmount}</strong>
                  </span>
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link nav-icon"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-bell" />
                  <span className="badge bg-primary badge-number">4</span>
                </a>
                {/* End Notification Icon */}
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                  <li className="dropdown-header">
                    You have 4 new notifications
                    <a href="#">
                      <span className="badge rounded-pill bg-primary p-2 ms-2">
                        View all
                      </span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="notification-item">
                    <i className="bi bi-exclamation-circle text-warning" />
                    <div>
                      <h4>Lorem Ipsum</h4>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>30 min. ago</p>
                    </div>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="notification-item">
                    <i className="bi bi-x-circle text-danger" />
                    <div>
                      <h4>Atque rerum nesciunt</h4>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>1 hr. ago</p>
                    </div>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="notification-item">
                    <i className="bi bi-check-circle text-success" />
                    <div>
                      <h4>Sit rerum fuga</h4>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>2 hrs. ago</p>
                    </div>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="notification-item">
                    <i className="bi bi-info-circle text-primary" />
                    <div>
                      <h4>Dicta reprehenderit</h4>
                      <p>Quae dolorem earum veritatis oditseno</p>
                      <p>4 hrs. ago</p>
                    </div>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="dropdown-footer">
                    <a href="#">Show all notifications</a>
                  </li>
                </ul>
                {/* End Notification Dropdown Items */}
              </li>
              {/* End Notification Nav */}
              <li className="nav-item dropdown pe-3">
                <a
                  className="nav-link nav-profile d-flex align-items-center pe-0"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="assets/img/profile-img.jpg"
                    alt="Profile"
                    className="rounded-circle"
                  />
                  <span className="d-none d-md-block dropdown-toggle ps-2">
                    K. Anderson
                  </span>
                </a>
                {/* End Profile Iamge Icon */}
                <ul
                  className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile"
                  style={{}}
                >
                  <li className="dropdown-header">
                    <h6>Kevin Anderson</h6>
                    <span>Web Designer</span>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      to="/profile"
                      className="dropdown-item d-flex align-items-center"
                    >
                      <i className="bi bi-person" />
                      <span>My Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/purchaseplan"
                      className="dropdown-item d-flex align-items-center"
                    >
                      <i className="bi bi-person" />
                      <span>Purchase Plan</span>
                    </Link>
                  </li>

                  {/* <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    to="/profile"
                    className="dropdown-item d-flex align-items-center"
                  >
                    <i className="bi bi-person" />
                    <span>Account Settings</span>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    to="/need-help"
                    className="dropdown-item d-flex align-items-center"
                  >
                    <i className="bi bi-question-circle" />
                    <span>Need Help?</span>
                  </Link>
                </li> */}

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="dropdown-item d-flex align-items-center"
                    >
                      <i className="bi bi-box-arrow-right" />
                      <span>Sign Out</span>
                    </Link>
                  </li>
                </ul>
                {/* End Profile Dropdown Items */}
              </li>
              {/* End Profile Nav */}
            </ul>
          </nav>
        </div>
        {/* End Icons Navigation */}
      </header>
    </>
  );
};

export default Header;
