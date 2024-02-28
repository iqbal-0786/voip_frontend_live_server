import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar, selectIsSidebarOpen } from "../slices/sidebarSlice";

const Sidebar = ({ openNav, navHandler }) => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  return (
    <>
      <aside id="sidebar" className={`sidebar ${openNav ? "active" : ""}`}>
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              {" "}
              {/* Use Link to create the dashboard link */}
              <i className="bi bi-grid" />
              <span>Dashboard</span>
            </Link>
          </li>
          {/* End Dashboard Nav */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#components-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-menu-button-wide" />
              <span>Reporting</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="components-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link to="/report-list" className="nav-link">
                  <i className="bi bi-circle" />
                  <span>Report</span>
                </Link>
              </li>
              <li>
                <Link to="/live-calls" className="nav-link">
                  {" "}
                  {/* Use Link component to link to Dashboard */}
                  <i className="bi bi-circle" />
                  <span>Live Calls</span>
                </Link>
              </li>
            </ul>
          </li>
          {/* End Components Nav */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#forms-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-journal-text" />
              <span>Numbers</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="forms-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link to="/purchase-number-list" className="nav-link">
                  <i className="bi bi-circle" />
                  <span style={{ marginLeft: "-28px" }}>
                    Purchase Number list
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/block-number" className="nav-link">
                  <i className="bi bi-circle" />
                  <span style={{ marginLeft: "-28px" }}>
                    Manage Block Numbers
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          {/* End Forms Nav */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#tables-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-layout-text-window-reverse" />
              <span>Campaigns</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="tables-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link to="/create-campaigns" className="nav-link">
                  <i className="bi bi-circle" />
                  <span>Create Campaigns</span>
                </Link>
              </li>
              <li>
                <Link to="/manage-campaigns" className="nav-link">
                  <i className="bi bi-circle" />
                  <span>Manage Campaigns</span>
                </Link>
              </li>
            </ul>
          </li>
          {/* End Tables Nav */}
          <li className="nav-item">
            <Link to="/publishers" className="nav-link collapsed">
              <i className="bi bi-person" />
              <span>Publishers</span>
            </Link>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#charts-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-bar-chart" />
              <span>Targets</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="charts-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link to="/manage-buyers" className="nav-link">
                  <i className="bi bi-circle" />
                  <span>Manage Buyers</span>
                </Link>
              </li>
              <li>
                <Link to="/create-targets" className="nav-link">
                  <i className="bi bi-circle" />
                  <span>Create Targets</span>
                </Link>
              </li>
              <li>
                <Link to="/manage-targets" className="nav-link">
                  <i className="bi bi-circle" />
                  <span>Manage Targets</span>
                </Link>
              </li>
              <li>
                <Link to="/manage-groups" className="nav-link">
                  <i className="bi bi-circle" />
                  <span>Manage Groups</span>
                </Link>
              </li>
            </ul>
          </li>
          {/* End Charts Nav */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#activities-nav" // Change to a unique target
              data-bs-toggle="collapse"
              href="#"
            >
           <i class="fa-solid fa-comment-sms"></i>
              <span>SMS Marketing</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="activities-nav" // Update the ID to match the target
              className="nav-content collapse"
              data-bs-parent="#sidebar-nav"
            >
             <li>
                <Link to="/AddContact" className="nav-link">
                  <i className="bi bi-circle" />
                  <span className="text-nowrap">Contact Management</span>
                </Link>
              </li>
             <li>
                <Link to="/sms-templates" className="nav-link">
                  <i className="bi bi-circle" />
                  <span>SMS Templates</span>
                </Link>
              </li>
              <li>
                <Link to="/compose" className="nav-link">
                  <i className="bi bi-circle" />
                  <span>Compose SMS</span>
                </Link>
              </li>
             
              <li>
                <Link to="/bulk-sms" className="nav-link">
                  <i className="bi bi-circle" />
                  <span>Bulk SMS</span>
                </Link>
              </li>
              <li>
                <Link to="/bulksms-range" className="nav-link">
                  <i className="bi bi-circle" />
                  <span className="text-nowrap">Bulk SMS Range</span>
                </Link>
              </li>
              <li>
                <Link to="/dynaminc-sms" className="nav-link">
                  <i className="bi bi-circle" />
                  <span>Dynaminc SMS</span>
                </Link>
              </li>
              <li>
                <Link to="/bulk-scheduling" className="nav-link">
                  <i className="bi bi-circle" />
                  <span className="text-nowrap">Bulk Scheduling SMS</span>
                </Link>
              </li>
              <li>
                <Link to="/db-camaign" className="nav-link">
                  <i className="bi bi-circle" />
                  <span>DB Campaign</span>
                </Link>
              </li>
              <li>
                <Link to="/dlr-report" className="nav-link">
                  <i className="bi bi-circle" />
                  <span>DLR Report</span>
                </Link>
              </li>
              <li>
                <Link to="/refund-report" className="nav-link">
                  <i className="bi bi-circle" />
                  <span>Refund Report</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#sms-nav" // Change to a unique target
              data-bs-toggle="collapse"
              href="#"
            >
             <i class="fa-solid fa-comment-sms"></i>
              <span>SMS Manage</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="sms-nav" // Update the ID to match the target
              className="nav-content collapse"
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link to="/manage-senders" className="nav-link">
                  <i className="bi bi-circle" />
                  <span>Manage Senders</span>
                </Link>
              </li>
              <li>
                <Link to="/manage-templates" className="nav-link">
                  <i className="bi bi-circle" />
                  <span>Manage Templates</span>
                </Link>
              </li>
              <li>
                <Link to="/pricing-coverage" className="nav-link">
                  <i className="bi bi-circle" />
                  <span>Pricing & Coverage</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#whatsapp-nav" // Change to a unique target
              data-bs-toggle="collapse"
              href="#"
            >
<i class="fa-brands fa-whatsapp"></i>
              <span>Whatsapp</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="whatsapp-nav" // Update the ID to match the target
              className="nav-content collapse"
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link to="/device" className="nav-link">
                  <i className="bi bi-circle" />
                  <span>Device</span>
                </Link>
              </li>
              <li>
                <Link to="/auto-reply" className="nav-link">
                  <i className="bi bi-circle" />
                  <span>AutoReply</span>
                </Link>
              </li>
              <li>
                <Link to="/welcome-template" className="nav-link">
                  <i className="bi bi-circle" />
                  <span className="text-nowrap">Welcome Templates </span>
                </Link>
              </li>
              <li>
                <Link to="/templates" className="nav-link">
                  <i className="bi bi-circle" />
                  <span>Templates</span>
                </Link>
              </li>
              <li>
                <Link to="/send-messages" className="nav-link">
                  <i className="bi bi-circle" />
                  <span>Send Messages</span>
                </Link>
              </li>
              <li>
                <Link to="/send-messages-report" className="nav-link">
                  <i className="bi bi-circle" />
                  <span className="text-nowrap">Send Messages Report</span>
                </Link>
              </li>
              <li>
                <Link to="/received-messages-report" className="nav-link">
                  <i className="bi bi-circle" />
                  <span className="text-nowrap">Received Messages Report</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#Whatapp-nav" // Change to a unique target
              data-bs-toggle="collapse"
              href="#"
            >
             <i class="fa-brands fa-square-whatsapp"></i>
              <span>Whatsapp Campaign</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="Whatapp-nav" // Update the ID to match the target
              className="nav-content collapse"
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link to="/db-campaignapp" className="nav-link">
                  <i className="bi bi-circle" />
                  <span>DB Campaign</span>
                </Link>
              </li>
              <li>
                <Link to="/internation-campaign" className="nav-link">
                  <i className="bi bi-circle" />
                  <span>Internation Campaign</span>
                </Link>
              </li>
              <li>
                <Link to="/campaign-report" className="nav-link">
                  <i className="bi bi-circle" />
                  <span>Campaign Report</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#hatapp-nav" // Change to a unique target
              data-bs-toggle="collapse"
              href="#"
            >
             <i class="fa-brands fa-square-whatsapp"></i>
              <span>Phone</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="hatapp-nav" // Update the ID to match the target
              className="nav-content collapse"
              data-bs-parent="#sidebar-nav"
            >
             <li>
                <Link to="/calls" className="nav-link">
                  <i className="bi bi-circle" />
                  <span>Calls</span>
                </Link>
              </li>
              <li>
                <Link to="/dial-pad" className="nav-link">
                  <i className="bi bi-circle" />
                  <span>Dial Pad</span>
                </Link>
              </li>
              <li>
                <Link to="/phone-line" className="nav-link">
                  <i className="bi bi-circle" />
                  <span>Phone Line</span>
                </Link>
              </li>
              <li>
                <Link to="/call-history" className="nav-link">
                  <i className="bi bi-circle" />
                  <span>Call History</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#settings-nav" // Change to a unique target
              data-bs-toggle="collapse"
              href="#"
            >
             <i class="fa-solid fa-gear"></i>
              <span>Settings</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="settings-nav" // Update the ID to match the target
              className="nav-content collapse"
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link to="/manage-user" className="nav-link">
                  <i className="bi bi-circle" />
                  <span>Manage Users</span>
                </Link>
              </li>
              <li>
                <Link to="/profile" className="nav-link">
                  <i className="bi bi-circle" />
                  <span>Profile</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/Support" className="nav-link">
            <i class="fa-solid fa-circle-info"></i>
              <span>Support</span>
            </Link>
          </li>
          {/* End Icons Nav */}
        </ul>
      </aside>
      {/* <CallLogs /> */}
      {/* <i
        className="bi bi-list toggle-sidebar-btn"
        onClick={handleToggleSidebar}
      /> */}
      {/* <ManageNo /> */}
    </>
  );
};

export default Sidebar;
