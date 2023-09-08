import React from "react";

const Sidebar = () => {
  return (
    <div>
      <ul class="list-group" id="list">
        <li class="list-group-item">
          <img src="./images/element-3.png" alt="" id="imgList"></img>
             <span id="dash">Dashboard</span>
        </li>
        <li class="list-group-item">
          <img src="./images/clipboard-tick.png" alt="" id="imgList"></img>
          <span>Lab Test</span>
        </li>
        <li class="list-group-item">
          <img src="./images/calendar-tick.png" alt="" id="imgList"></img>
          <span>Appoinment</span>
        </li>
        <li class="list-group-item">
          <img src="./images/bag-tick-2.png" alt="" id="imgList"></img>
          <span>Medicine Order</span>
        </li>
        <li class="list-group-item">
          <img src="./images/sms.png" alt="" id="imgList"></img>
          <span>Message</span>
        </li>
        <li class="list-group-item">
          <img src="./images/empty-wallet.png" alt="" id="imgList"></img>
          <span>Payment</span>
        </li>
        <li class="list-group-item">
          <img src="./images/setting-2.png" alt="" id="imgList"></img>
          <span>Settings</span>
        </li>
        <li class="list-group-item" id="help">
          <img src="./images/Question.png" alt="" id="imgList"></img>
          <span>Help</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
