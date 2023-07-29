import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editFood } from "../redux/action/food";
import { getFoodById } from "../redux/action/food";

const EditFood = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const user = useSelector((state) => {
  //   return state.user.myUser;
  // });
  // const food = useSelector((state) => {
  //   return state.food.foodId[0];
  // });
  // console.log(food);
  const { id } = useParams();

  const [form, setForm] = useState({
    id: `${id}`,
    name: "",
    ingredients: "",
    image: "",
    video: "",
  });

  useEffect(() => {
    // dispatch(getFoodById(id));
    MyRecipe();
  }, []);

  // const token = localStorage.getItem("token");
  // const decode = JWT_decode(token);
  const [recipe, setRecipe] = useState("");
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
      setRecipe(response.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=<calculated when request is sent>",
        // Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    };
    axios
      .put(
        `https://mama-recipe-api-nine.vercel.app/food_edit/${id}`,
        form,
        config
      )
      .then((response) => {
        console.log(response);
        alert("edit recipe berhasil");
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container className="mt-5 ">
      <Row>
        <Col>
          {/* {recipe.map((item, i) => ( */}
          <Form
            className="w-75 mt-5 mx-auto mb-5"
            onSubmit={(e) => onSubmit(e)}
            // key={i.id}
          >
            <Form.Group controlId="formBasicEmail" className="mt-5">
              <Form.Control
                type="text"
                placeholder="Recipe Name"
                defaultValue={recipe.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="mt-4">
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Ingredients"
                // defaultValue={recipe.ingredients}
                onChange={(e) =>
                  setForm({ ...form, ingredients: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mt-4">
              <Form.Label>Image :</Form.Label>
              <Form.Control
                aria-label="Default"
                type="file"
                onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mt-4">
              <Form.Control
                type="text"
                placeholder="Video Step"
                onChange={(e) => setForm({ ...form, video: e.target.value })}
              />
            </Form.Group>
            <div className="text-center mt-2">
              <Button
                variant="warning"
                type="submit"
                className="w-50 mt-4 "
                // onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </Form>
          {/* ))} */}
        </Col>
      </Row>
    </Container>
  );
};

export default EditFood;
