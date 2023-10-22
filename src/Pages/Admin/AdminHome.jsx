import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/tvan.png";
import AdminNavbar from "../../Components/Navbar/AdminNavbar";
import { AiFillDelete, AiFillPlusCircle } from "react-icons/ai";
import { Modal } from "antd";

function AdminHome() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [bannerImages, setBannerImages] = useState();
  const [hover, setHover] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const uploadImage = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("image", selectedFile);
    try {
      await axios.post("http://localhost:8057/admin/upload/banner", formData, {
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
  const deleteBannerImage = async (item) => {
    console.log(item.fileName);
    const deleteImage = await axios.delete(
      `http://localhost:8057/admin/Banner/${item.fileName}`
    );
    console.log(deleteImage);
  };
  useEffect(() => {
    const getImages = () => {
      const urls = [
        "http://localhost:8057/admin/images/products",
        "http://localhost:8057/admin/images/banner",
        "http://localhost:8057/admin/images/schemes",
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
            switch (index) {
              case 1:
                setBannerImages(response.data);
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
          console.error("Error:", error);
        });
    };
    getImages();
  }, []);

  console.log(bannerImages);
  return (
    <>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <div className="">
          <p>Upload the Image File :-</p>
          <input type="file" accept="image/*" onChange={handleFileChange}/>
          {/* <button onClick={uploadImage}/>Submit</button> */}
          <button onClick={uploadImage}>Submit</button>
        </div>
      </Modal>
      <AdminNavbar />
      <div className="">
        <h2 className="text-lg ml-4">Banner</h2>
        <div className="w-full grid grid-cols-3 gap-4 p-2">
          {bannerImages?.map((item, index) => {
            return (
              <div
                className="relative z-0 rounded-md"
                key={index}
                onMouseOver={() => setHover(index)}
                onMouseOut={() => setHover(null)}
              >
                <img src={item.url} alt="" className="rounded-md" />
                {hover === index && (
                  <div className="absolute flex w-full h-full bottom-0 z-20 hover_div justify-center items-center rounded-md">
                    <AiFillDelete
                      size={40}
                      className="cursor-pointer"
                      fill="#ffffff"
                      onClick={() => deleteBannerImage(item)}
                    />
                  </div>
                )}
              </div>
            );
          })}
          <div className="flex w-full h-full justify-center items-center border-2 rounded-md">
            <AiFillPlusCircle
              size={40}
              className="cursor-pointer"
              onClick={() => showModal()}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminHome;
