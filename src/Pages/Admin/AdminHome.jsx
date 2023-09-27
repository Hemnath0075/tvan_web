import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/tvan.png";
import AdminNavbar from "../../Components/Navbar/AdminNavbar";

function AdminHome() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [bannerImages,setBannerImages] = useState();
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
  useEffect(()=>{
    const getImages = () =>{
      const urls = [
        'http://localhost:8057/admin/images/products',
        'http://localhost:8057/admin/images/banner',
        'http://localhost:8057/admin/images/schemes',
      ];
      
      // Create an array of Axios promises
      const axiosPromises = urls.map((url) => {
        return axios.get(url); // Replace with your Axios request configuration
      });
      
      // Use Promise.all to execute all requests concurrently
      Promise.all(axiosPromises)
        .then((responses) => {
          // Handle the responses here
          responses.forEach((response, index) => {
            switch(index){
              case 1: 
                  setBannerImages(response.data)
                  break;
              case 2: 
                  // setBannerImages(response.data)
                  break;
              default:
                  break;
            }
            console.log(`Response from URL ${urls[index]}:`, response.data);
          });
        })
        .catch((error) => {
          // Handle errors here
          console.error('Error:', error);
        });
    }
    getImages();
  },[])
  console.log(bannerImages)
  return (
    <>
    <AdminNavbar/>
      <div className="">
        <h2 className="text-lg ml-4">Banner</h2>
        <div className="w-full grid grid-cols-3 gap-4 p-2">
          {bannerImages?.map((item)=>{
            return (
              <img src={item.url} alt="" className=""/>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default AdminHome;
