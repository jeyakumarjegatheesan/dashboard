import React from "react";

const TopHeader = () => {
  return (
    <div>
      <div class="row" id="topHeader">
        <div class="col-6">
          <img src="./images/search-normal.png" alt="" id="searchIcon" />
          <input type="search" placeholder="            Search" id="search" />
        </div>
        <div class="col-6" id="bellImg">
          <img src="./images/Frame 3.png" alt="bell" id="bell" />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
