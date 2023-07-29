import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import BombChiken from "../asset/images/cfef9bb1fc6e0bef50d5c8ef7a6cdff6.jpg";
import { useSelector, useDispatch } from "react-redux";
import { editFood, getFood } from "../redux/action/food";
import { deleteFood } from "../redux/action/food";
import { Link, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const MyRecipe = () => {
  const [recipe, setRecipe] = useState([]);
  // const [token, setToken] = useState("");
  // const food = useSelector((state) => {
  //   return state.food.food;
  // });
  // const navigate = useNavigate();
  // // console.log(user.user[0].name);
  // console.log(food);

  const dispatch = useDispatch();

  useEffect(() => {
    // refreshToken();
    MyRecipe();
  }, []);

  const deleteClick = async (id) => {
    try {
      dispatch(deleteFood(id));
    } catch (error) {
      console.log(error);
    }
  };
  // const editClick = (id) => {
  //   try {
  //     dispatch(editFood(id));
  //   } catch (error) {
  //     alert("Error deleting");
  //   }
  // };
  const token = localStorage.getItem("token");
  console.log(token);
  const decode = jwtDecode(token);

  // const refreshToken = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:4000/token", {
  //       withCredentials: true,
  //     });
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

  const MyRecipe = async () => {
    try {
      const response = await axios.get(
        "https://mama-recipe-api-nine.vercel.app/foodByUserId",
        {
          withCredentials: true,
        }
      );
      console.log(response);
      setRecipe(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row className="w-50">
        <Col lg={4} md={4} sm={4} xs={4} className="mx-auto fw-semibold">
          <a
            href="/Profile"
            style={{ textDecoration: "none", color: "#212529" }}
          >
            My Recipe
          </a>
        </Col>
        <Col lg={4} md={4} sm={4} xs={4} className="mx-auto">
          <a
            href="/Profile2"
            style={{ textDecoration: "none", color: "#212529" }}
          >
            Saved Recipe
          </a>
        </Col>
        <Col lg={4} md={4} sm={4} xs={4} className="mx-auto">
          <a
            href="/Profile3"
            style={{ textDecoration: "none", color: "#212529" }}
          >
            Liked Recipe
          </a>
        </Col>
      </Row>
      <hr></hr>
      <Row className="mt-4 mb-5 mx-auto">
        {recipe.map((item, i) => (
          <Col lg={3} md={3} sm={4} xs={6} className="mt-5" key={i}>
            <Link to={`/DetailRecipe/${item.id}`}>
              <img
                crossOrigin="anonymous"
                src={item.image}
                alt={item.name}
                className="new-img"
                style={{ objectFit: "cover", width: "300px", height: "300px" }}
              ></img>
            </Link>
            <p className="shadow-lg top-left fs-3 w-75 text-dark fw-bolder ">
              {item.name}
            </p>
            <Button
              className="btn-danger mt-3 "
              onClick={() => deleteClick(item.id)}
            >
              delete
            </Button>
            <a
              href={`/EditFood/${item.id}`}
              className="btn btn-warning mt-3 ms-3 "
            >
              edit
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MyRecipe;
