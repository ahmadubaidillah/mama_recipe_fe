/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
// import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
// import { getList } from "../redux/action/user";

function MainNavbar() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   refreshToken();
  //   // getUsers();
  // }, []);

  // const refreshToken = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://mama-recipe-api-nine.vercel.app/token",
  //       {
  //         withCredentials: true,
  //       }
  //     );
  //     console.log(response.data);
  //     // console.log(response.data);
  //     setToken(response.data.accessToken);
  //     // const decoded = jwt_decode(response.data.accessToken);
  //     // console.log(decoded.name);
  //     // setName(decoded.name);
  //     // setImage(decoded.image);
  //     // setExpire(decoded.exp);
  //   } catch (error) {
  //     console.log(error);
  //     if (error.response) {
  //       console.log(error.response);
  //       // navigate("/login");
  //     }
  //   }
  // };

  // const decode = jwt_decode(localStorage.getItem("token"));
  const decoded = jwt_decode(localStorage.getItem("token"));
  console.log(decoded.name);
  setName(decoded.name);
  setImage(decoded.image);
  setExpire(decoded.exp);
  // const navigate = useNavigate();

  const Logout = async () => {
    try {
      await axios.delete("https://mama-recipe-api-nine.vercel.app/logout");
      localStorage.removeItem("token");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  // const axiosJWT = axios.create();

  // axiosJWT.interceptors.request.use(
  //   async (config) => {
  //     const currentDate = new Date();
  //     if (expire * 1000 < currentDate.getTime()) {
  //       const response = await axios.get("http://localhost:5000/token");
  //       config.headers.Authorization = `Bearer ${response.data.accessToken}`;
  //       setToken(response.data.accessToken);
  //       const decoded = jwt_decode(response.data.accessToken);
  //       setName(decoded.name);
  //       setExpire(decoded.exp);
  //     }
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );
  // const user = useSelector((state) => {
  //   return state.user.myUser;
  // });
  // const { id } = useParams();

  // // console.log(user.user[0].name);
  // console.log(user.name);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getList(id));
  // }, []);

  // const profile = `/profile/${id}`;
  // const home = `/home/${id}`;
  // const name = user.name;

  return (
    <Navbar expand="lg" className="nav2  h-25  ">
      <Container className="">
        <Navbar.Brand href="/home" className="pe-5">
          Mama Recipe
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-center ">
            <Nav.Link href="/home" className="px-4 text-dark">
              Home
            </Nav.Link>
            <Nav.Link href="/AddRecipe" className="px-4 text-dark">
              Add Recipe
            </Nav.Link>
            <Nav.Link href="/profile" className="px-4 text-dark">
              Profile
            </Nav.Link>
          </Nav>
          <Nav className="me-1 text-center">
            <Nav.Link
              href="#"
              className="me-2 text-center text-dark d-flex justify-content-center"
            >
              {/* <FontAwesomeIcon icon={faCircleUser} className="me-2 mt-2" /> */}
              <img
                src={image}
                alt="sandwich"
                className=""
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <p className="fs-5 mx-3">{name}</p>{" "}
              {/* {user.map((item, index) => {
                return (
                  <p key={item.id} className="fs-5">
                    {item.name}
                  </p>
                );
              })} */}
            </Nav.Link>
            <a
              className="btn btn-danger text-white ms-3 h-75 fs-5 mt-2"
              onClick={Logout}
            >
              Logout
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
