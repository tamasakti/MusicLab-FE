import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

import Layout from "../../components/Layout";
import { Card } from "../../components/Card";
import Button from "../../components/Button";

import { ProfileType } from "../../utils/types/Profile";
import images from "../../assets/Ana.svg";

const DetailTeacher = () => {

  const [user, SetUser] = useState<ProfileType>();
  const [instrument, SetInstrument] = useState<string>("");
  const [loading, SetLoading] = useState<boolean>(false);
  const [cookie, SetCookie] = useCookies(["token", "role"]);
  const checkToken = cookie.token;
  let checkRole = cookie.role;

  useEffect(() => {
    Profile();
    Instrument();
  }, []);

  function Profile() {
    axios.get(`https://app.swaggerhub.com/apis-docs/KHARISMAJANUAR/MusicLab-API/1.0.0/mentors/profile`, {
      headers: {
        Authorization: `Bearer ${checkToken}`,
      },
    })
    .then((response) => {
      const data = response.data.data;
      SetUser(data);
      console.log("datas", response.data.data);
    })
    .catch((error) => {
      console.log(error);
    })
  };

  function Instrument() {
    axios.get(`https://app.swaggerhub.com/apis-docs/KHARISMAJANUAR/MusicLab-API/1.0.0/mentors/instrument`)
    .then((response) => {
      const datas = response.data.data;
      SetInstrument(datas);
      console.log("instrument", response.data.data);
    })
    .catch((error) => {
      console.log(error);
    })
  };

  return (
    <Layout>
      <div className="container mx-auto p-10">
        <div className="flex flex-row p-4">
          <div className="text-black font-poppins">
            <p className="text-3xl font-semibold opacity-80">Teacher</p>
            <p className="text-5xl font-bold">{user?.name}</p>
            <p className="font-semibold">
              {instrument}
            </p>
            <div className="mt-2">
              <p className="font-semibold opacity-75">Ulasan</p>
              <p className="text-sm font-bold">47.889</p>
            </div>
            <div className="mt-7">
              <p className="text-xl font-semibold">About Me</p>
              <p className="text-lg">
                {user?.about}
              </p>
            </div>
            <div className="mt-7">
              <p className="font-semibold text-xl">my Course</p>
              <div className="m-2 mt-7 grid grid-cols-2 space-x-5 gap-14">
                {/* <Card /> */}
              </div>
              <div className="grid grid-cols-3 mt-8 p-7 ml-8">
                <Button
                  label="Prev"
                  className="btn border-none w-5/6 bg-transparent text-black hover:text-white font-semibold hover:bg-[#3A2BE8]"
                />
                <p className="mx-auto text-xl text-[#3A2BE8] mt-2">1</p>
                <Button
                  label="Next"
                  className="btn border-none w-5/6 bg-transparent text-black hover:text-white font-semibold hover:bg-[#3A2BE8]"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-10/12 ml-40">
            <img src={images} alt="photo" width={250} />
            <div className="text-black text-md font-semibold ml-16 sm:ml-10 mt-2">
              <p>
                Address : <span>{user?.address}</span>
              </p>
              <p>
                Gmail : <span>{user?.email}</span>
              </p>
              <div className="flex space-x-3 ml-4">
                {/* <img src={facebook} alt="facebook" width={25} />
                <img src={instagram} alt="instagram" width={25} />
                <img src={twitter} alt="twitter" width={25} />
                <img src={youtube} alt="youtube" width={25} /> */}
              </div>
              <button className="btn bg-[#3A2BE8] text-white mt-2 w-44">
                kirim pesan
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailTeacher;
