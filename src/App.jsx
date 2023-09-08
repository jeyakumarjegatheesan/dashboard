import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Logo from "./components/Logo";
import TopHeader from "./components/TopHeader";
import SalesInfoSearch from "./components/SalesInfoSearch";
import Table from "./components/Table";

function App() {
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-2" id="sidebar">
            <Logo />
            <Sidebar />
          </div>
          <div class="col-10" id="HomePage">
            <TopHeader />
            <SalesInfoSearch />
            <Table />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


