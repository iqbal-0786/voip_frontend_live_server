import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import EndSidebar from "./components/EndSidebar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import UserProfile from "./components/UserProfile";
import Purchaseplan from "./components/Purchaseplan";
import NeedHelp from "./components/NeedHelp";
import LiveSummary from "./components/LiveSummary";
import CallLogs from "./components/CallLogs";
import ManageNo from "./components/ManageNo";
import BlockedNumbers from "./lists/BlockedNumbers";
import CreateCampaigns from "./components/CreateCampaigns";
import ManageCampaigns from "./components/ManageCampaigns";
import Publishers from "./components/Publishers";
import ManageBuyers from "./components/Targets-pages/ManageBuyers";
import CreateTargets from "./components/Targets-pages/CreateTargets";
import ManageTargets from "./components/Targets-pages/ManageTargets";
import ManageGroups from "./components/Targets-pages/ManageGroups";
import ManageUser from "./components/Settings-pages/ManageUser";
import Profile from "./components/Settings-pages/Profile";
import Login from "./components/Login";
import Sucess from "./components/Sucess";
import Register from "./components/Register";
import Layout from "./components/boilerPlat/layout";
import ReportList from "./lists/ReportList";
import PurchaseNumberList from "./lists/PurchaseNumberList";
import AddPurchaseNumber from "./lists/AddPurchaseNumber";
import Support from "./components/Support";
import EditCampaign from "./components/EditCampaign";
import AddNumberCampaign from "./components/AddNumberCampaign";
import Compose from "./components/SMS/Compose";
import BulksmsRange from "./components/SMS/BulksmsRange";
import AddContact from "./components/SMS/AddContact";
import DynamiceSMS from "./components/SMS/DynamiceSMS";
import BulkSchedlingsms from "./components/SMS/BulkSchedlingsms";
import DBCampaign from "./components/SMS/DBCampaign";
import DLRReport from "./components/SMS/DLRReport";
import RefundReport from "./components/SMS/RefundReport";
import SMSTemplates from "./components/SMS/SMSTemplates";
import ManageSenders from "./components/SMS/ManageSenders";
import ManageTemplates from "./components/SMS/ManageTemplates";
import PricingCoverage from "./components/SMS/PricingCoverage";
import BulkSMS from "./components/SMS/BulkSMS";
import SendMessagesReport from "./components/Whatsapp/Report/SendMessagesReport";
import ReceivedMessagesReport from "./components/Whatsapp/Report/ReceivedMessagesReport";
import AutoReply from "./components/Whatsapp/AutoReply";
import Device from "./components/Whatsapp/Device";
import SendMessages from "./components/Whatsapp/SendMessages";
import Templates from "./components/Whatsapp/Templates";
import WelcomeTemplates from "./components/Whatsapp/WelcomeTemplate";
import DBCampaignApp from "./components/WhatsappCampaign/DBCampaignApp";
import InternationCampaign from "./components/WhatsappCampaign/InternationCampaign";
import CampaignReport from "./components/WhatsappCampaign/CampaignReport";
import ContactDetails from './components/SMS/ContactDetails';
import Dialpad from './components/phone/Dialpad';
import Callhistory from "./components/phone/Callhistory";
import Calls from "./components/phone/Calls";
import PhoneLine from "./components/phone/PhoneLine";
const RenderLayout = (props) => {
  return (
    <>
      <Layout>{props}</Layout>
    </>
  );
};
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={RenderLayout(<Dashboard />)} />
          <Route path="/profile" element={RenderLayout(<UserProfile />)} />
          <Route
            path="/purchaseplan"
            element={RenderLayout(<Purchaseplan />)}
          />
          <Route path="/success" element={RenderLayout(<Sucess />)} />
          {/* success */}
          <Route path="/need-help" element={RenderLayout(<NeedHelp />)} />
          <Route path="/live-calls" element={RenderLayout(<LiveSummary />)} />
          <Route path="/report-list" element={RenderLayout(<ReportList />)} />
          <Route
            path="/purchase-number-list"
            element={RenderLayout(<PurchaseNumberList />)}
          />
          <Route
            path="/add-purchase-number"
            element={RenderLayout(<AddPurchaseNumber />)}
          />
          <Route
            path="/block-number"
            element={RenderLayout(<BlockedNumbers />)}
          />
          <Route
            path="/create-campaigns"
            element={RenderLayout(<CreateCampaigns />)}
          />
          <Route
            path="/manage-campaigns"
            element={RenderLayout(<ManageCampaigns />)}
          />
          <Route path="/publishers" element={RenderLayout(<Publishers />)} />
          <Route
            path="/manage-buyers"
            element={RenderLayout(<ManageBuyers />)}
          />
          <Route
            path="/create-targets"
            element={RenderLayout(<CreateTargets />)}
          />
          <Route
            path="/manage-targets"
            element={RenderLayout(<ManageTargets />)}
          />
          <Route
            path="/manage-groups"
            element={RenderLayout(<ManageGroups />)}
          />
          <Route path="/support" element={RenderLayout(<Support />)} />
          <Route
            path="/edit-campaign/:id"
            element={RenderLayout(<EditCampaign />)}
          />
          <Route
            path="/add-number-campaign"
            element={RenderLayout(<AddNumberCampaign />)}
          />
          <Route path="/compose" element={RenderLayout(<Compose />)} />
          <Route path="/AddContact" element={RenderLayout(<AddContact />)} />
          <Route path="/bulk-sms" element={RenderLayout(<BulkSMS />)} />
          <Route
            path="/bulksms-range"
            element={RenderLayout(<BulksmsRange />)}
          />
          <Route path="/dynaminc-sms" element={RenderLayout(<DynamiceSMS />)} />
          <Route
            path="/bulk-scheduling"
            element={RenderLayout(<BulkSchedlingsms />)}
          />
          <Route path="/db-camaign" element={RenderLayout(<DBCampaign />)} />
          <Route path="/dlr-report" element={RenderLayout(<DLRReport />)} />
          <Route
            path="/refund-report"
            element={RenderLayout(<RefundReport />)}
          />
          <Route
            path="/sms-templates"
            element={RenderLayout(<SMSTemplates />)}
          />
          <Route
            path="/manage-senders"
            element={RenderLayout(<ManageSenders />)}
          />
          <Route
            path="/manage-templates"
            element={RenderLayout(<ManageTemplates />)}
          />
          <Route
            path="/pricing-coverage"
            element={RenderLayout(<PricingCoverage />)}
          />
          <Route
            path="/send-messages-report"
            element={RenderLayout(<SendMessagesReport />)}
          />
          <Route path="/auto-reply" element={RenderLayout(<AutoReply />)} />
          <Route path="/device" element={RenderLayout(<Device />)} />
          <Route
            path="/send-messages"
            element={RenderLayout(<SendMessages />)}
          />
          <Route path="/templates" element={RenderLayout(<Templates />)} />
          <Route
            path="/welcome-template"
            element={RenderLayout(<WelcomeTemplates />)}
          />
          <Route
            path="/received-messages-report"
            element={RenderLayout(<ReceivedMessagesReport />)}
          />
          <Route
            path="/db-campaignapp"
            element={RenderLayout(<DBCampaignApp />)}
          />
          <Route
            path="/internation-campaign"
            element={RenderLayout(<InternationCampaign />)}
          />
          <Route
            path="/campaign-report"
            element={RenderLayout(<CampaignReport />)}
          />
          <Route
            path="/contact-details"
            element={RenderLayout(<ContactDetails />)}
          />
          <Route
            path="/dial-pad"
            element={RenderLayout(<Dialpad />)}
          />
          <Route
            path="/calls"
            element={RenderLayout(<Calls/>)}
          />
          <Route
            path="/call-history"
            element={RenderLayout(<Callhistory />)}
          />
          <Route
            path="/phone-line"
            element={RenderLayout(<PhoneLine />)}
          />
        </Routes>
      </Router>
    </div>
  );
}

function DashboardWithLayout() {
  return (
    <>
      <Dashboard />
      <Header />
      <Sidebar />
      <EndSidebar />
      <Footer />
    </>
  );
}

function ProfileWithLayout() {
  return (
    <>
      <UserProfile />
      <Header />
      <Sidebar />
      <EndSidebar />
      <Footer />
    </>
  );
}

function NeedHelpWithLayout() {
  return (
    <>
      <NeedHelp />
      <Header />
      <Sidebar />
      <EndSidebar />
      <Footer />
    </>
  );
}

function LiveSummaryWithLayout() {
  return (
    <>
      <LiveSummary />
      <Header />
      <Sidebar />
      <EndSidebar />
      <Footer />
    </>
  );
}

function CallLogsWithLayout() {
  return (
    <>
      <CallLogs />
      <Header />
      <Sidebar />
      <EndSidebar />
      <Footer />
    </>
  );
}

function ManageNoWithLayout() {
  return (
    <>
      <ManageNo />
      <Header />
      <Sidebar />
      <EndSidebar />
      <Footer />
    </>
  );
}

function BlockNoWithLayout() {
  return (
    <>
      <BlockedNumbers />
      <Header />
      <Sidebar />
      <EndSidebar />
      <Footer />
    </>
  );
}

function CreateCampaignsWithLayout() {
  return (
    <>
      <CreateCampaigns />
      <Header />
      <Sidebar />
      <EndSidebar />
      <Footer />
    </>
  );
}

function ManageCampaignsWithLayout() {
  return (
    <>
      <ManageCampaigns />
      <Header />
      <Sidebar />
      <EndSidebar />
      <Footer />
    </>
  );
}

function PublishersWithLayout() {
  return (
    <>
      <Publishers />
      <Header />
      <Sidebar />
      <EndSidebar />
      <Footer />
    </>
  );
}

function ManageBuyersWithLayout() {
  return (
    <>
      <ManageBuyers />
      <Header />
      <Sidebar />
      <EndSidebar />
      <Footer />
    </>
  );
}

function CreateTargetsWithLayout() {
  return (
    <>
      <CreateTargets />
      <Header />
      <Sidebar />
      <EndSidebar />
      <Footer />
    </>
  );
}

function ManageTargetsWithLayout() {
  return (
    <>
      <ManageTargets />
      <Header />
      <Sidebar />
      <EndSidebar />
      <Footer />
    </>
  );
}

function ManageGroupsWithLayout() {
  return (
    <>
      <ManageGroups />
      <Header />
      <Sidebar />
      <EndSidebar />
      <Footer />
    </>
  );
}

function ManageUserWithLayout() {
  return (
    <>
      <ManageUser />
      <Header />
      <Sidebar />
      <EndSidebar />
      <Footer />
    </>
  );
}

export default App;
