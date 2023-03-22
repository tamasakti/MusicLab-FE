import React from "react";
import Poster from "../../assets/poster.webp";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";

const background = {
  backgroundImage: `url(${Poster})`,
  width: "100%",
  height: "auto",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const Register = () => {
  return (
    <div className="w-full h-full bg-white flex flex-row">
      <div className="flex-1 lg:flex hidden h-auto" style={background}></div>
      <div className="flex-1 h-auto">
        <h1 className=" text-2xl lg:text-4xl font-bold text-center  font-poppins text-black mt-16 lg:mt-24">
          Register
        </h1>
        <form>
          <div className="form-control w-full mt-10">
            <label className="label">
              <span className="label-text text-black font-semibold text-lg font-poppins mx-auto w-10/12 lg:w-7/12">
                Nama Lengkap
              </span>
            </label>
            <Input
              id="input-namalengkap"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-10/12 lg:w-7/12 border-slate-300  mx-auto text-black font-semibold font-poppins bg-white"
            />
            <label className="label">
              <span className="label-text text-black font-semibold text-lg font-poppins mx-auto w-10/12 lg:w-7/12 mt-5">
                Role
              </span>
            </label>
            <select
              id="select-role"
              className="input input-bordered w-10/12 lg:w-7/12 border-slate-300  mx-auto text-black font-semibold font-poppins bg-white"
              defaultValue={"DEFAULT"}
            >
              <option disabled selected>
                Pilih Salah Satu
              </option>
              <option value="Student">Student</option>
              <option value="Mentor">Mentor</option>
            </select>
            <label className="label">
              <span className="label-text text-black font-semibold text-lg font-poppins mx-auto w-10/12 lg:w-7/12 mt-5">
                Email
              </span>
            </label>
            <Input
              id="input-email"
              type="email"
              placeholder="Type here"
              className="input input-bordered w-10/12 lg:w-7/12 border-slate-300  mx-auto text-black font-semibold font-poppins bg-white"
            />
            <label className="label">
              <span className="label-text text-black font-semibold text-lg font-poppins mx-auto w-10/12 lg:w-7/12 mt-5">
                Password
              </span>
            </label>
            <Input
              id="input-password"
              type="password"
              placeholder="Type here"
              className="input input-bordered w-10/12 lg:w-7/12 border-slate-300  mx-auto text-black font-semibold font-poppins bg-white"
            />
            <div className="text-center w-full  mt-10">
              <Button
                id="btn-register"
                label="Register"
                className="bg-button w-10/12 lg:w-7/12 rounded-lg py-3 text-white font-poppins font-semibold disabled:bg-slate-400 disabled:cursor-not-allowed hover:cursor-pointer hover:bg-blue-600"
              />
            </div>
          </div>
        </form>
        <p className="text-center text-black  font-semibold mt-5 font-poppins">
          Don't Have an Account?{" "}
          <span className="font-bold font-poppins">
            <Link to="/">Login</Link>
          </span>
        </p>
        <div className="pb-16 lg:pb-24"></div>
      </div>
    </div>
  );
};

export default Register;