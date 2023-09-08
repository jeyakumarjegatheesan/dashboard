import React from "react";

const SalesInfoSearch = () => {
  return (
    <div id="salesInfoSearch">
      <h4 id="SalesText">Sales Information</h4>
      <div class="row">
        <div class="col-sm-6 col-lg-3">
          <label for="Customer">Customer</label>
          <br></br>

          <input
            type="search"
            placeholder="  Enter customer name"
            class="sales"
          ></input>
        </div>

        <div class="col-sm-6 col-lg-3">
          <label for="InvoiceId">Invoice Id</label>
          <br></br>
          <input
            type="search"
            placeholder="  Enter Invoice Id"
            class="sales"
          ></input>
        </div>

        <div class="col-sm-6 col-lg-3">
          <label for="Start date">Start Date</label>
          <br></br>
          <input
            type="search"
            placeholder="   Start Date"
            class="sales"
          ></input>
        </div>

        <div class="col-sm-6 col-lg-3">
          <label for="End date">End Date</label>
          <br></br>
          <input type="search" placeholder="   End Date" class="sales"></input>
        </div>
      </div>
    </div>
  );
};

export default SalesInfoSearch;
