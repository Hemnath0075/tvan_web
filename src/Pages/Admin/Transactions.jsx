import React, { useEffect } from "react";
import AdminNavbar from "../../Components/Navbar/AdminNavbar";
import axios from "axios";
import CryptoJS from "crypto-js";

function Transactions() {
  useEffect(() => {
    const getData = async () => {
      const currentDate = new Date();
    //   console.log(currentDate-86400000);
      // Extract year, month, and day from the date
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Subtract 1 from the month and pad with '0' if needed
      const day = String(currentDate.getDate()).padStart(2, "0");
      console.log(day);
      const formattedDate = `${year}-${month}-${day}`;
      const data = await axios.post(
        "http://localhost:8057/admin/today/dashboard/",
        {
          date: "2023-10-20",
        }
      );
      console.log(data.data);
      const decryptData = CryptoJS.AES.decrypt(data.data, "secret key 123");
      console.log(decryptData);
      const originalText = decryptData.toString(CryptoJS.enc.Utf8);
      console.log(originalText);
      const response = JSON.parse(originalText);
      console.log(response);
    };
    getData();
  }, []);
  return (
    <div className="">
      <AdminNavbar />
    </div>
  );
}

export default Transactions;
