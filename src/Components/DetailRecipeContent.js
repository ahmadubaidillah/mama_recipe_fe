import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import imgSandwich from "../asset/images/4da51338c06dd21688b82eae3bc9dfa6.jpg";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { getFoodById } from "../redux/action/food";

const DetailRecipeContent = () => {
  // const food = useSelector((state) => {
  //   return state.food.foodId;
  // });
  // console.log(food);
  const { id } = useParams();

  // console.log(user.user[0].name);
  // console.log(food);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getFoodById(id));
  // }, []);

  useEffect(() => {
    // dispatch(getFoodById(id));
    MyRecipe();
  }, []);

  // const token = localStorage.getItem("token");
  // const decode = JWT_decode(token);
  const [recipe, setRecipe] = useState([]);
  console.log(recipe);

  const MyRecipe = async () => {
    try {
      const response = await axios.get(
        `https://mama-recipe-api-nine.vercel.app/food/${id}`,
        // { headers: { Authorization: `Baerer ${token}` } },
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
      <Row>
        {recipe.map((item, index) => (
          <Col
            md={12}
            sm={4}
            className="mt-5"
            key={index}
            //   style={{ height: "550px" }}
          >
            <h1
              className="text-center fw-semibold"
              style={{ color: "#2E266F" }}
            >
              {item.name}
            </h1>
            <img
              crossOrigin="anonymous"
              src={item.image}
              alt="imgSandwich"
              className="  mt-4 h-25  w-50 rounded mx-auto d-block "
              style={{
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
            <div className="w-100  mt-5 justify-content-center">
              <h3 className="fw-semibold ms-5 ">Ingredients</h3>
              <p className="mb-5 mt-4 ms-5 fs-3">{item.ingredients}</p>
              <br />
              <h3 className="ms-5 mt-5 fw-semibold">Video Step</h3>
              <Button
                href={`/Videostep/${item.id}`}
                variant="primary"
                type="Log In"
                className="btn-warning text-white w-25 ms-5 mt-3 mb-5"
              >
                <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
              </Button>
            </div>
            <Form className=" w-75 mx-auto">
              <Form.Group
                className="mb-3 mt-5"
                controlId="exampleForm.ControlInput1"
              ></Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Coment :"
                  className=""
                  style={{ height: "200px" }}
                />
                <div className="text-center">
                  <Button
                    variant="primary"
                    type="Log In"
                    className="btn-warning text-white w-50  mt-3 "
                  >
                    Send
                  </Button>
                </div>
              </Form.Group>
            </Form>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default DetailRecipeContent;
