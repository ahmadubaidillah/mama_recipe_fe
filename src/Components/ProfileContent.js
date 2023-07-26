import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Container, Row, Col, Collapse, Button } from "react-bootstrap";
import profile from "../asset/images/4662c85cb7661f579e2c9baff0ce5fdc.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../redux/action/user";

const ProfileContent = () => {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [id, setID] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  console.log(id);

  useEffect(() => {
    refreshToken();
    // getUsers();
  }, []);

  // const token = localStorage.getItem("token");
  // const decode = jwt_decode(token);
  // console.log(decode);
  // setID(decode.userId);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:4000/token", {
        withCredentials: true,
      });
      console.log(response.data);
      // console.log(response.data);
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      console.log(decoded.name);
      console.log(decoded.id);
      setName(decoded.name);
      setID(decoded.id);
      setImage(decoded.image);
      setExpire(decoded.exp);
    } catch (error) {
      console.log(error);
      if (error.response) {
        console.log(error.response);
        // navigate("/");
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get("http://localhost:4000/token");
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.name);
        setID(decoded.id);
        setImage(decoded.image);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // const getUsers = async () => {
  //   try {
  //     const response = await axiosJWT.get(
  //       `http://localhost:4000/getuser/${id}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           withCredentials: true,
  //         },
  //       }
  //     );
  //     console.log(response);
  //     setUsers(response.data.data[0]);
  //   } catch (error) {
  //     if (error.response) {
  //       console.log(error.response);
  //       // navigate("/");
  //     }
  //   }
  // };

  // const { id } = useParams();
  // // eslint-disable-next-line no-unused-vars
  // const [name, setName] = useState("");
  // const [image, setImage] = useState("");

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   const headers = { Authorization: "Bearer " + token };

  //   axios
  //     .get(`${process.env.REACT_APP_BACKEND_URL}/user/${id}`, { headers })
  //     .try((response) => {
  //       console.log(response);
  //       setName(response);
  //     })
  //     .catch((error) => console.log("error"));
  // }, []);

  // useEffect(() => {
  //   // refreshToken();
  //   getUsers();
  // }, []);

  // const decode = jwt_decode(localStorage.getItem("token"));

  // const getUsers = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:4000/getuser/${decode.userId}`
  //     );
  //     console.log(response.data.data);
  //     setName(response.data.data[0].name);
  //     setImage(response.data.data[0].image);
  //     // setUsers(response.data);
  //   } catch (error) {
  //     if (error.response) {
  //       console.log(error.response);
  //       // navigate("/");
  //     }
  //   }
  // };

  return (
    <Container>
      <Row>
        <Col className="mt-5 mb-5 text-center ">
          <img
            src={image}
            alt="profile"
            className=" "
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              width: "150px",
              height: "150px",
            }}
          ></img>
          <br></br>
          <a
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            <FontAwesomeIcon
              icon={faPencilAlt}
              className="ms-5"
              style={{ color: "#EFC81A" }}
            ></FontAwesomeIcon>
          </a>
          <Collapse in={open}>
            <div id="example-collapse-text ">
              <Link
                to={`/Edit/${id}`}
                variant=""
                className="btn btn-warning text-white  fw-semibold mx-1"
              >
                Edit Profile
              </Link>
              {/* <Link
                to={`/Edit/${id}`}
                variant=""
                className="btn btn-warning text-white  fw-semibold mx-1"
              >
                Change image
              </Link> */}
            </div>
          </Collapse>

          <div>
            <p className="text-center fs-5 mt-3 fw-semibold">{name}</p>
            {/* {user.user.map((item, index) => {
              return (
                <p key={index} className="text-center fs-5 mt-3 fw-semibold">
                  {item.name}
                </p>
              );
            })} */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default ProfileContent;
