/**
 * 
 *  <>
      <div className='mb-2 userinfo px-5 pt-5'>
        {data && data.map((item) => (
          <div className='bg-white p-4 radius d-flex flex-column-reverse flex-md-column'>
            <div className='box-info d-flex flex-wrap text-capitalize'>
              <div className='info1 my-2 d-flex flex-column'>
                <div className='flex'>
                  <p className=' d-flex flex-column'>
                    <span className='data1 mb-2'>job title</span>
                    <span>{item.designation}</span>
                  </p>
                  <p className=' d-flex flex-column'>
                    <span className='data1 mb-2'>location</span>
                    <span>{item.location}</span>
                  </p>

                  <div className='info1 d-flex flex-column'>
                    <ul className=' my-2 ms-0 d-flex flex-column'>
                      <span className='data1 mb-2'> experise  </span>
                      {item.expertise.map((e, i) => <li key={i}>{e.name}</li>)}
                    </ul>
                  </div>

                  {
                    datainfo.map((item) => (
                      <>
                        <p className='my-2 d-flex flex-column'>
                          <span className='data1 mb-2'>email  </span>
                          <span>{item.email}</span>
                        </p>
                        <p className='my-2 d-flex flex-column'>
                          <span className='data1 mb-2'>Name  </span>
                          <span>{item.name}</span>
                        </p>
                      </>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className='flex1'>
        </div>
      </div>
    </>
  )
}
export default Info
 * 
 * 
 */


import axios from 'axios'
import React, { useEffect } from 'react';
import { useState } from 'react';
import './style.css'
import { NavLink, useParams } from 'react-router-dom'
import { Localhost } from '../../../config/api'
import { FaLessThan } from 'react-icons/fa'

const Info = () => {
  // const [data, setData] = useState([])
  const [datainfo, setDataInfo] = useState([])
  const [dataProfile, setDataProfile] = useState([])
  const [avatar, setAvatar] = useState("");
  const { id } = useParams()
  useEffect(() => {
    const getOpp = async () => {
      try {
        const response = await axios.get(`${Localhost}/api/opp/opp/${id}`, {
          withCredentials: true,
        });
        // setData([response.data]);
        setDataInfo([response.data[0].owner]);
      setDataProfile([response.data[0].profile]);
      console.log([response.data[0].profile]);
      setAvatar(response.data[0].profile.avatar)
      console.log("Avatar URL:",response.data[0].profile.avatar)
      console.log(avatar); // Corrected
      } catch (error) {
        console.log(error);
      }
    };
    getOpp();
  }, [id]);

  const baseURL = "http://localhost:5000/";
  const avatar2 = baseURL + avatar;
  console.log("Complete Avatar URL:", avatar2);
    if (datainfo.length === 0) {
        return <div>Loading...</div>;
      }
    

    if (datainfo.length === 0) {
        return <div>Loading...</div>;
    }

  // let avatar = baseURL + .avatar


  if (datainfo.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mb-2 userinfo px-5 box-info">
      {
        datainfo.map((item) => (
          
          <>
            <h3 className=" text-capitalize fw-bold blue-color title-info">
              About {item.name}
            </h3>

            <div className="bg-white p-4 radius d-flex box-info-container">
              <div className="w-100">
                <div className="d-flex flex-wrap mt-1 text-capitalize box-info-left">
                  {/* info1  d-flex flex-column */}
                  <div className="">
                    <p className=" d-flex flex-column">
                      <span className="data1 ">name </span>
                      <span>{item.name}</span>
                    </p>
                    {dataProfile.map((items) => (
                      <>
                        <p className="  d-flex flex-column">
                          <span className="data1 ">Job Title</span>
                          <span>{items.designation}</span>
                        </p>

                        <p className=" d-flex flex-column">
                          <span className="data1 ">Company</span>
                          <span>{items.currentCompany}</span>
                        </p>
                      </>
                    ))}
                  </div>
                  {/* my-2 d-flex flex-column */}
                  <div className="middleBox">
                    <p className=" my-2 d-flex flex-column">
                      <span className="data1 ">phone Number </span>
                      <span>{item.phoneNumber}</span>
                    </p>
                    <p className="my-2 d-flex flex-column">
                      <span className="data1 ">email </span>
                      <span>{item.email}</span>
                    </p>
                    {dataProfile.map((i) => (
                      <p className="my-2 d-flex flex-column">
                        <span className="data1 ">Location </span>
                        <span>{i.location}</span>
                      </p>
                    ))}
                  </div>
                </div>
                {/* ))} */}
                <div className="mt-5 w-100 pragraphContainer">
                  <p className="w-60 boxBaragraph">specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                </div>
              </div>
              {/* user avatar */}
              <div className='box-info-right'>
                <div className="d-flex flex-column align-items-center  userAvatar">
                  <div className="info1 d-flex flex-column listExperince">
                    <ul className=" d-flex flex-column">
                      <span className="data1 mb-4"> experise </span>
                      <span className="data1 mb-4"> experise </span>
                      <span className="data1 mb-4"> experise </span>
                      {/* {item.expertise.map((i) =>
                        <li>{i}</li>
                      )} */}
                    </ul>
                  </div>
                  {datainfo.length > 0 && 
                             
                             <img
                             src={avatar2}
                                 alt="avatar"
                                 width="80"
                                 height="80"
                                 className="rounded-circle shadow-1-strong mb-3"
                             />}
                  <NavLink
                   to={`/external/${id}`} 
                    className="profileBtn px-4 py-2 rounded-pill "
                    style={{
                      backgroundColor: "darkgray",
                      color: "#000000d6",
                      fontWeight: "500",
                    }}
                  >
                    view profile
                  </NavLink>
                </div>
              </div>
            </div>
          </>
        ))
      }
    </div>
  )
}

export default Info
