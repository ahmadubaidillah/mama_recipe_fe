import React, { useState } from "react";
import axios from "axios";
import JWT_decode from "jwt-decode";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { add } from "../redux/action/food";

const AddRecipeContent = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(form);
  //   // navigate("/Profile");

  //   if (form.name == "" || form.ingredients == "") {
  //     alert("semua input wajib diisi");
  //   } else {
  //     dispatch(add(form));
  //   }
  //   alert("data berhasil disimpan");
  // };

  const token = localStorage.getItem("token");
  const decode = JWT_decode(token);

  const [form, setForm] = useState({
    user_id: decode.userId,
    name: "",
    ingredients: "",
    image: "",
    video: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      const res = await axios.post(
        "http://localhost:4000/food_add",
        form,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      alert("data berhasil disimpan");
      window.location.reload();
      // navigate.push("/home");
    } catch (error) {
      console.log(error);
      console.log(error.res);
    }
  };
  return (
    <Container className="mt-5 ">
      <Row>
        <Col>
          <Form
            className="w-75 mt-5 mx-auto mb-5"
            onSubmit={(e) => onSubmit(e)}
          >
            <Form.Group controlId="formBasicEmail" className="mt-5">
              <Form.Control
                type="text"
                placeholder="Recipe Name"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="mt-4">
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Ingredients"
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
              <Button variant="warning" type="submit" className="w-50 mt-4 ">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddRecipeContent;
