import React from "react";
import logo from "../../assets/images/tvan.png";
import { useForm } from "react-hook-form";

function AdminLogin() {
  const onSubmit = (data) => console.log(data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-[#EEE7DF]">
      <div className="sm:w-[70vw] md:w-[50vw] h-[90vh] bg-white border-2 border-black rounded-md flex flex-col justify-evenly items-center p-4">
        <div className="w-full flex justify-center items-center">
          <img src={logo} alt="" className="" />
        </div>
        <div className="w-[80%] h-[50%] border-2 border-white flex flex-col justify-evenly">
          <h3 className="w-full flex justify-center items-center text-[4vmin] font-bold">
            Admin Login
          </h3>
          <div className="flex flex-col justify-start items-center w-full">
            <form
              onSubmit={handleSubmit(onSubmit)}
              method="post"
              className="flex flex-col justify-center items-center w-full gap-[3vh]"
            >
              {errors.email && (
                <span className="w-full flex justify-start text-[2vmin] text-red-500">
                  **This field is required
                </span>
              )}
              <input
                type="email"
                {...register("email", { required: true })}
                className={`px-[4%] py-[3%] w-full border-2 rounded-md ${
                  errors.email ? "border-red-600" : "border-blue-200"
                }`}
                placeholder="Email"
              />
              {errors.password && (
                <span className="w-full flex justify-start text-[2vmin] text-red-500">
                  **This field is required
                </span>
              )}
              <input
                type="password"
                {...register("password", { required: true })}
                className={`px-[4%] py-[3%] w-full border-2 rounded-md ${
                  errors.password ? "border-red-600" : "border-blue-200"
                }`}
                placeholder="Password"
              />

              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}
              <input
                type="submit"
                value="LOGIN"
                className={`px-[4%] py-[3%] w-full border-2 rounded-md cursor-pointer bg-blue-200 text-black font-bold`}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
