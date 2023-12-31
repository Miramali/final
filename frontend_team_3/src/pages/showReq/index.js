// import React, { useEffect, useState } from "react";
// import "./style.css";
// import SidaNav2 from "./sideBar";
// import Mony from "@iconscout/react-unicons/icons/uil-dollar-alt";
// import Location from "@iconscout/react-unicons/icons/uil-location-point";
// import Time from "@iconscout/react-unicons/icons/uil-clock";
// import Exp from "@iconscout/react-unicons/icons/uil-bag";
// import Comments from "../../components/comments/Comments";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { Localhost } from "../../config/api";
// import { faClock, faDollarSign, faLocationDot } from "@fortawesome/free-solid-svg-icons";
// // import Comments from '../comments/Comments'

// function ShowReqest() {
//   const { id } = useParams();
//   const [data, setData] = useState([])

//   useEffect(() => {
//     const getReq = async () => {
//       try {
//         const response = await axios.get(`${Localhost}/api/req/request/${id}`, {
//           withCredentials: true,
//         });
//         setData(Array.isArray(response.data) ? response.data : [response.data]);
//         console.log(response.data)
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getReq();
//   }, [id]);

//   if (data.length === 0) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="opp color-gray px-5 pt-5">
//       {data &&
//         data.map((item) => (
//           <>
//             <div className={`box py-2 right-green-title text-white`}>
//               <span>{"mentoring request"} </span>
//             </div>
//             <div className="mb-5 text-capitalize">
//               <h3 className="fw-bold">{item.title}</h3>
//               {item.hired ? (
//                 <h4 className="fw-bold">
//                   Get mentored by :{" "}
//                   <span className="data1">Belal Shwani</span>
//                 </h4>
//               ) : (
//                 ""
//               )}
//             </div>
//             <div className="lh-base des">
//               <p>{item.description}</p>
//             </div>

//             <div className="d-flex flex-wrap my-3 text-capitalize">
//               {/* {item.hired && (<p className='info1 my-2 '>
//                             <span className='me-1'><FontAwesomeIcon icon={faFileCsv} className='fa-2xl' /> certificate :</span>
//                             <span className='data1'>{item.certificate}</span>
//                         </p>)} */}

//               <p className="info1 my-2">
//                 <span className="me-1">
//                   <Location icon={faLocationDot} className="fa-2xl" />{" "}
//                   location :
//                 </span>
//                 <span className="data1">{item.location}</span>
//               </p>
//               {/* </div> */}
//               {/* {item.hired ? (
//                             <p className='info1 my-2'>
//                                 <span className='me-1'><FontAwesomeIcon icon={faBriefcase} className='fa-2xl' /> might get hired :</span>
//                                 <span className='data1'> yes</span>
//                             </p>
//                         ) : (
//                             item.opp_experise && (<p className='info1 my-2'>
//                                 <span className='me-1'><FontAwesomeIcon icon={faBriefcase} className='fa-2xl' /> experise :</span>
//                                 <span className='data1'> yes</span>
//                             </p>))
//                         } */}
//               <p className="info1 my-2">
//                 <span className="me-1">
//                   <Mony icon={faDollarSign} className="fa-2xl" /> paid :
//                 </span>
//                 <span className="data1">{item.paid.amount} sdg / H</span>
//               </p>

//               <p className="info1 my-2">
//                 <span className="me-1">
//                   <Time icon={faClock} className="fa-2xl" /> duration :
//                 </span>
//                 <span className="data1">{item.duration}</span>
//               </p>
//             </div>

//             <div className="">
//               {/* <div>
//                             <h4 className='data1 text-capitalize fw-bold'> {item.hired ? "requirements" : "i'm looking for help with"}</h4>
//                             <ul>
//                                 {item.requirements.map((q, i) => <li key={i}>{q}</li>)}
//                             </ul>
//                         </div> */}
//               <div className="Left-Request-Top-left-parags-1 py-2">
//                 <h6 className="py-1 blue-color">I'm looking for help with</h6>
//                 <ul>
//                   <li>
//                     {item.helpWith.map((q, i) => (
//                       <li key={i}>{q}</li>
//                     ))}{" "}
//                   </li>
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="data1 text-capitalize fw-bold">
//                   requirements
//                 </h4>
//                 <ul>
//                   {item.requirements.map((q, i) => (
//                     <li key={i}>{q}</li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="Left-Request-Top-left-parags-3 py-2">
//                 <h6 className="py-1 blue-color">I have a background about</h6>
//                 <ul>
//                   <li>
//                     {item.haveBgWith.map((q, i) => (
//                       <li key={i}>{q}</li>
//                     ))}
//                   </li>
//                 </ul>
//               </div>
//               {/* <div>
//                             <h4 className='data1 text-capitalize fw-bold'> {item.hired ? "expected outcome" : "i have a background about"}</h4>
//                             <ul>
//                                 {item.expected_outcome.map((q, i) => <li key={i}>{q}</li>)}
//                             </ul> */}
//               {/* </div> */}
//             </div>
//           </>
//         ))}
//       <div className="Left-Request-Bottm m-2 ">
//         <Comments id={id} />
//       </div>
//     </div>
//   );
// }


// export default ShowReqest;




import React, { useEffect, useState } from "react";
import "./style.css";
import SidaNav2 from "./sideBar";
import Mony from "@iconscout/react-unicons/icons/uil-dollar-alt";
import Location from "@iconscout/react-unicons/icons/uil-location-point";
import Time from "@iconscout/react-unicons/icons/uil-clock";
import Exp from "@iconscout/react-unicons/icons/uil-bag";
import Comments from "../../components/comments/Comments";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { Localhost } from "../../config/api";
import { faClock, faDollarSign, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Info from "./userInfo";
// import Comments from '../comments/Comments'

function ShowReqest() {
  const { id } = useParams();
  const [data, setData] = useState([])
  const [datainfo, setDataInfo] = useState([])

  useEffect(() => {
    const getReq = async () => {
      try {
        const response = await axios.get(`${Localhost}/api/req/request/${id}`, {
          withCredentials: true,
        });

        setData(Array.isArray(response.data) ? response.data : [response.data]);
        setDataInfo([response.data[0].owner]);
      } catch (error) {
        console.log(error);
      }
    };
    getReq();
  }, [id]);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }
  let message;
  let backgroundColor;
  let textColor;
  if (data.progress === "close") {
   
    message = "Closed Mentoring Request";
    backgroundColor = "red";
    textColor = "white";
  } else  if (data.progress==="open"){
    message = "Open mentoring Request";
    backgroundColor = "green";
    textColor = "white";
  } else{
      message = "in progress mentoring Request";
    backgroundColor = "brown";
    textColor = "white";

  }


  return (
    <div className="RequestMentor2">
      {data && data.map((item) => (
        <div className="container mt-4">
          <div className="row">
            <div className="col col-lg-3 d-none d-lg-block">
              <div className="Left-Request d-sm-flex d-none justify-content-start align-items-start">
                <SidaNav2 />
              </div>
            </div>
            <div className="col-sm">
              <div className="Right-Request p-2 ">
                <div className="right-green-title-box d-flex justify-content-end align-items-center ">
                  <div className="right-green-title text-white p-2 text-center " style={{backgroundColor, color: textColor,                                     
                                        }}>
              
                                                <span>
                                        {message}
                                    </span>
                                    
                  </div>
                </div>
                <div className="Left-Request-Top m-2">
                  <div className="Left-Request-Top-right d-flex w-25 justify-content-end align-items-end d-sm-flex d-none">
                    <button className="border-0 m-auto p-2 text-center ">
                      Mentor
                    </button>
                  </div>
                  <div className="Left-Request-Top-container d-flex  m-auto">
                    <div className="Left-Request-Top-left d-flex flex-column mx-2">
                      <div className=" d-sm-flex flex-sm-column d-none nameInfo">
                        <h5 style={{ marginTop: '30px' }}>{item.title} </h5>
                        <span className="d-flex ">
                          {
                            datainfo.map((item) => (
                              <h5 className="mr-3">
                                <span className="blue-color">{item.name}</span>{" "}
                              </h5>
                            ))
                          }
                          <small className="p-1">
                            {" "}
                            is looking for a mentor{" "}
                          </small>{" "}
                        </span>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="lh-base des mt-5 descriptionOfPerson">
                  <p>
                    <p>{item.description}</p>
                  </p>
                </div>

                <div className=" flex-wrap my-3 text-capitalize listOfInfo">
                  <div className="row">
                    <div className="row">
                      <p className="info1 my-2">
                        <span className="me-1">
                          <Mony icon={faDollarSign} className="fa-2xl" /> paid :

                        </span>
                        <span className="data1">{item.paid.amount} {item.paid.currency}</span>
                      </p>

                      <p className="info1 my-2">
                        <span className="me-1">
                          <Location icon={faLocationDot} className="fa-2xl" />location :
                        </span>
                        <span className="data1">{item.location}</span>
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <p className="info1 my-2">
                      <span className="me-1">
                        <Mony icon={faDollarSign} className="fa-2xl" />{" "}
                        Experince :
                      </span>
                      <span className="data1">{item.experience}</span>
                    </p>

                    <p className="info1 my-2">
                      <span className="me-1">
                        <Time icon={faClock} className="fa-2xl" /> duration :
                      </span>
                      <span className="data1">{item.duration}</span>
                    </p>
                  </div>
                </div>

                <div className="listOfExperience">
                  <div className="Left-Request-Top-left-parags-1 py-2">
                    <h5 className="data1 text-capitalize fw-bold">
                      I'm looking for help with
                    </h5>
                    <ul>
                      <li>
                        {item.helpWith.map((q, i) => (
                          <li key={i}>{q}</li>
                        ))}{" "}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="data1 text-capitalize fw-bold">
                      requirements
                    </h5>
                    <ul>
                      {item.requirements.map((q, i) => (
                        <li key={i}>{q}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="Left-Request-Top-left-parags-3 py-2 ">
                    <h5 className="data1 text-capitalize fw-bold">
                      I have a background about
                    </h5>
                    <ul>
                      <li>
                        {item.haveBgWith.map((q, i) => (
                          <li key={i}>{q}</li>
                        ))}
                      </li>
                    </ul>
                  </div>
                </div>
                <Info />
                <Comments id={id}/>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


export default ShowReqest;