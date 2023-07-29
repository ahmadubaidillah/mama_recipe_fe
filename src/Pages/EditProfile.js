import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../redux/action/user";

const EditProfile = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  // const dispatch = useDispatch();

  // const user = useSelector((state) => {
  //   return state.user.myUser;
  // });

  // const [form, setForm] = useState({
  //   id: `${id}`,
  //   email: `${email}`,
  //   name: "",
  //   password: `${password}`,
  // });
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  console.log(image);
  console.log(file.name);
  console.log(name);
  useEffect(() => {
    refreshToken();
    // getUsers();
  }, []);
  const refreshToken = async () => {
    try {
      const response = await axios.get(
        "https://mama-recipe-api-nine.vercel.app/token",
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      // console.log(response.data);
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      console.log(decoded.name);
      console.log(decoded.id);
      // setName(decoded.name);
      // setID(decoded.id);
      // setImage(decoded.image);
      setExpire(decoded.exp);
    } catch (error) {
      console.log(error);
      if (error.response) {
        console.log(error.response);
        // navigate("/");
      }
    }
  };

  // const token = localStorage.getItem("token");
  // const decode = jwt_decode(token);
  // const auth = `Baerer ${token}`;
  // const content = "multipart/form-data";

  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);

    if (file && file.type.startsWith("image/")) {
      // Lakukan sesuatu dengan file gambar
      const reader = new FileReader();
      reader.onload = (e) => {
        // setImageSrc(e.target.result);
        // setHidden("hidden");
        setImage(`url(${reader.result})`);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", file);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    };
    axios
      .put("https://mama-recipe-api-nine.vercel.app/user_image", data, config)
      .then((response) => {
        console.log(response);
        navigate("/profile");
        alert("edit foto berhasil");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmit2 = (e) => {
    e.preventDefault();
    const config2 = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    axios
      .put(
        "https://mama-recipe-api-nine.vercel.app/user_edit",
        {
          name: name,
        },
        config2
      )
      .then((response) => {
        console.log(response);
        alert("edit berhasil");
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // try {

  //   const res = await axios.put(
  //     "http://localhost:4000/user_image",
  //     data

  //     // {
  //     //   headers: { "Content-Type": content, Accept: "application/json" },
  //     // }
  //   );
  //   console.log(res);
  //   alert("edit foto success");
  //   navigate("/profile");
  // } catch (error) {
  //   console.log(error);
  // }

  return (
    <Container className="mt-5 ">
      <Row>
        <Col md={6}>
          <Form
            className="w-75 mt-5 mx-auto mb-5"
            onSubmit={(e) => onSubmit2(e)}
          >
            <Form.Group controlId="formBasicEmail" className="mt-5">
              <Form.Control
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            {/* <Form.Group controlId="formFile" className="mt-4">
              <Form.Label>Image :</Form.Label>
              <Form.Control aria-label="Default" type="file" />
            </Form.Group> */}
            <div className="text-center mt-2">
              <Button variant="warning" type="submit" className="w-50 mt-4 ">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
        <Col md={6}>
          <Form
            controlId="formFile"
            className="w-75 mt-2 mx-auto mb-5"
            onSubmit={(e) => onSubmit(e)}
          >
            <Form.Label>Edit Foto Profil</Form.Label>
            <Form.Control
              type="file"
              // ref={filseInputRef}
              accept="image/*"
              // onChange={handleFileChange}
              // accept="image/png, image/jpeg"
              onChange={(e) => setFile(e.target.files[0])}
            />
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

export default EditProfile;
