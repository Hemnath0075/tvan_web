import axios from "axios";
import React, { useState } from "react";
import logo from "../../assets/images/tvan.png";
import AdminNavbar from "../../Components/Navbar/AdminNavbar";

function AdminHome() {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const uploadImage = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("image", selectedFile);
    try {
      await axios.post("http://localhost:8057/admin/upload/Schemes", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // Refresh the list of images after successful upload
      // fetchImages();
      setSelectedFile(null);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  return (
    <>
    <AdminNavbar/>
      <div className="">
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={uploadImage}>Upload Image</button>
      </div>
    </>
  );
}

export default AdminHome;
