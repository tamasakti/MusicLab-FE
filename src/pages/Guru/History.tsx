import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import axios from "axios";
import { HistoryMentor } from "../../utils/types/Datatypes";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import withReactContent from "sweetalert2-react-content";
import Swal from "utils/Swal";

export default function History() {
  const [loading, setLoading] = useState<boolean>(false);
  const status = localStorage.getItem("status");
  console.log(status);
  const [historyMentor, setHistoryMentor] = useState<HistoryMentor[]>([]);
  const [urlGoogle, setUrlGoogle] = useState<string>("");
  const [cookie, removeCookie] = useCookies(["token"]);
  const checkToken = cookie.token;
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    fetchDataHistoryMentor();
  }, []);

  const fetchDataHistoryMentor = () => {
    setLoading(true);

    axios
      .get("/mentors/transactions ")
      .then((res) => {
        const data = res.data.data;
        setHistoryMentor(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Layout>
        <div className="w-full min-h-screen">
          <div className="w-[85%] mx-auto mt-10 mb-5 pl-5">
            <h1 className="text-button font-bold text-2xl">Histori Mengajar</h1>
          </div>
          <div className="overflow-x-auto ">
            <table className="table w-[85%] mx-auto ">
              {/* head */}
              <thead>
                <tr>
                  <th className="bg-button text-white">No</th>
                  <th className="bg-button text-white">Student Name</th>
                  <th className="bg-button text-white">Course</th>
                  <th className="bg-button text-white">Start Date</th>
                  <th className="bg-button text-white">End Date</th>
                  <th className="bg-button text-white">Status</th>
                  <th className="bg-button text-white">Create Events</th>
                </tr>
              </thead>
              <tbody>
                {historyMentor?.map((item, index) => {
                  return (
                    <>
                      <tr className=" ">
                        <th className="bg-slate-100 text-black border-none ">
                          {index + 1}
                        </th>
                        <td className="bg-slate-100 text-black border-none ">
                          {item?.student_name}
                        </td>
                        <td className="bg-slate-100 text-black border-none ">
                          {item?.class_name}
                        </td>
                        <td className="bg-slate-100 text-black border-none ">
                          {item?.start_date}
                        </td>
                        <td className="bg-slate-100 text-black border-none ">
                          {item?.end_date}
                        </td>
                        <td className="bg-slate-100 text-black border-none ">
                          {item?.status}
                        </td>
                        <td className="bg-slate-100 text-black border-none ">
                          {item?.status === "settlement" ? (
                            <>
                              <Button
                                id="btn-createEvents"
                                label="Create Events"
                                className="btn bg-button text-white"
                                onClick={() =>
                                  navigate(`/createEvents/${item?.id}`)
                                }
                              />
                            </>
                          ) : (
                            "Selesaikan Pembayaran"
                          )}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
          {checkToken ? (
            ""
          ) : (
            <>
              <h1 className="text-black text-md font-poppins font-semibold text-center">
                * To Create Event Please Login With your Google Accounts ?{" "}
                <span className="text-black font-bold text-lg">Click Here</span>
              </h1>
            </>
          )}

          <div className="flex w-[93%] justify-end">
            <Button
              id="btn-kembali"
              label="Kembali"
              className="btn bg-button px-32 lg:px-20 py-2 text-white border-none mt-5"
              onClick={() => navigate("/profileTeacher")}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
