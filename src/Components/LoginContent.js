import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import imgLogin from "../asset/images/aaa.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { login } from "../redux/action/user";

const LoginContent = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [msg, setMsg] = useState("");
  // const navigate = useNavigate();
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const Auth = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      const res = await axios.post(
        "https://mama-recipe-api-nine.vercel.app/user_login",
        form,
        {
          withCredentials: true,
        }
      );
      console.log(res);
      localStorage.setItem("token", res.data.accessToken);
      navigate("/home");
    } catch (error) {
      console.log(error);
      console.log(error.res);
    }
  };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(form);

  //   const handleSuccess = (data) => {
  //     localStorage.setItem("token", data.token);
  //     // localStorage.setItem("id", data.data.id);
  //     // localStorage.setItem("data", JSON.stringify(data));
  //     console.log(data);
  //     const check =
  //       data.token == null
  //         ? alert("email or password is wrong")
  //         : navigate(`/home/${data.data.id}`);
  //     return check;
  //   };

  //   if (form.email == "" || form.password == "") {
  //     alert("semua input wajib diisi");
  //   } else {
  //     dispatch(login(form, handleSuccess));
  //   }
  //   // axios
  //   //   .post(`${process.env.REACT_APP_BACKEND_URL}/user_login`, form)
  //   //   .then((response) => {
  //   //     console.log(response);
  //   //     navigate("/Profile");
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log("ini gagal");
  //   //   });
  //   // }
  // };
  return (
    <section className="vh-100">
      <Container fluid>
        <Row>
          <Col sm={6} className="px-0 d-none d-sm-block ">
            <img
              src={imgLogin}
              className="img-login w-100  vh-100"
              alt=""
              style={{ objectFit: "cover", objectPosition: "left" }}
            />
            <svg
              width="148"
              height="182"
              viewBox="0 0 148 182"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="svg-login"
            >
              <path
                d="M57.3169 41.9465C60.2616 41.9465 62.6489 39.5592 62.6489 36.6146C62.6489 33.1367 63.368 32.1603 64.8012 30.2141C68.8059 24.7759 71.2511 20.2309 71.2511 13.1696C71.2511 9.19058 69.9835 5.75752 68.8791 3.21169C67.7071 0.510172 64.5663 -0.73075 61.8658 0.442279C59.1643 1.61424 57.9244 4.75405 59.096 7.45557C59.7903 9.05586 60.5872 11.1517 60.5872 13.1693C60.5872 17.6264 58.9489 20.1755 56.2143 23.8904C54.33 26.4494 51.9854 29.6336 51.9854 36.6142C51.985 39.5592 54.3723 41.9465 57.3169 41.9465Z"
                fill="white"
              />
              <path
                d="M82.0807 41.9464C85.0254 41.9464 87.4127 39.5592 87.4127 36.6145C87.4127 33.137 88.1318 32.1602 89.565 30.214C93.5761 24.7669 96.0149 20.2166 96.0149 13.1696C96.0149 9.19087 94.7473 5.75816 93.6433 3.21198C92.4717 0.510103 89.3308 -0.729752 86.6303 0.441854C83.9285 1.61382 82.6886 4.75362 83.8602 7.45514C84.5544 9.05579 85.3514 11.1516 85.3514 13.1692C85.3514 17.6228 83.7169 20.1693 80.9785 23.8907C79.0941 26.4493 76.7495 29.6336 76.7495 36.6141C76.7488 39.5592 79.1361 41.9464 82.0807 41.9464Z"
                fill="white"
              />
              <path
                d="M106.088 148.606L100.735 129.742C97.4623 131.191 94.0904 132.369 90.6509 133.271L95.8307 151.525C91.4514 154.54 88.5732 159.585 88.5732 165.292C88.5732 174.504 96.0678 181.999 105.28 181.999C114.492 181.999 121.987 174.504 121.987 165.292C121.987 156.351 114.926 149.029 106.088 148.606Z"
                fill="white"
              />
              <path
                d="M73.9997 124.769C94.6781 124.769 112.913 113.255 123.505 95.8496H24.4937C35.0865 113.255 53.3214 124.769 73.9997 124.769Z"
                fill="white"
              />
              <path
                d="M142.249 51.5439H5.75089C2.80623 51.5439 0.418945 53.9312 0.418945 56.8759C0.418945 59.8205 2.80623 62.2078 5.75089 62.2078H14.8038C14.9684 70.3263 16.5396 78.0768 19.2631 85.1857H128.737C131.46 78.0768 133.031 70.3263 133.196 62.2078H142.249C145.193 62.2078 147.581 59.8205 147.581 56.8759C147.581 53.9312 145.193 51.5439 142.249 51.5439Z"
                fill="white"
              />
              <path
                d="M37.5326 175.429C36.7342 178.774 39.2704 182 42.7234 182C45.1345 182 47.321 180.353 47.9053 177.904L58.4882 133.566C55.026 132.724 51.6285 131.599 48.3269 130.206L37.5326 175.429Z"
                fill="white"
              />
              <path
                d="M68.668 135.206V176.667C68.668 179.612 71.0553 181.999 73.9999 181.999C76.9446 181.999 79.3319 179.612 79.3319 176.667V135.206C75.6407 135.508 72.3666 135.509 68.668 135.206Z"
                fill="white"
              />
            </svg>
            <p className="login-title text-white fs-5">Mama Recipe.</p>
          </Col>
          <Col sm={6} className="">
            <div className="px-5 ms-xl-5 mt-5">
              <h1
                className="text-center mt-5 fw-bold"
                style={{ color: "#EFC81A" }}
              >
                Welcome
              </h1>
              <p className="text-center mt-4 mb-5">
                Log in into your exiting account
              </p>
            </div>

            <Form className="w-75 mx-auto" onSubmit={(e) => Auth(e)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Example@gmail.com"
                  className=""
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="I agree to terms & conditions"
                  className=""
                />
              </Form.Group>
              <Button
                variant="primary"
                type="Log In"
                className="btn-warning text-white w-100"
              >
                Log In
              </Button>
              <p className="mb-5 mt-3 text-end">
                <a
                  className="text-muted"
                  href="/ForgotPassword"
                  style={{ textDecoration: "none" }}
                >
                  Forgot password ?
                </a>
              </p>
              <p className="mb-5 mt-3 text-center">
                Don’t have an account ? &nbsp;
                <a
                  className="fw-bold"
                  href="/Signup"
                  style={{ textDecoration: "none", color: "#EFC81A" }}
                >
                  Sign Up
                </a>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default LoginContent;
