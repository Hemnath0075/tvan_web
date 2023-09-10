import React from "react";
import logo from "../../assets/images/tvan.png";

function AdminNavbar() {
  return (
    <div className="w-full bg-[#ffffff] h-[10vh]  flex items-center justify-between border-b-2">
      <div className="flex justify-center items-center gap-[4%] ml-4">
        <img src={logo} alt="" className="h-[8vh]" />
        <a href="/admin/home">Home</a>
        <a href="/transactions">Transactions</a>
      </div>
      <div className="mr-[3%]">
        <button>Logout</button>
      </div>
    </div>
  );
}

export default AdminNavbar;
