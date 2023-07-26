import React, { useState, useEffect } from "react";
import Pagination from "../Components/Pagination";
import { Container, Row, Col, Form, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const App = () => {
  const [myApi, setMyApi] = useState([]);
  const [data, setData] = useState([]); // add your data to here
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [searchUser, setSearchUser] = useState("");

  useEffect(() => {
    // fetch("https://randomuser.me/api/?results=50")
    fetch("http://localhost:4000/food")
      .then((data) => data.json())
      .then((json_result) => {
        console.log(json_result);
        setData(json_result.data); // set your data to state
        let myApi = renderData(json_result.data); // render your component
        setMyApi(myApi); // set it to state
      });
  }, []);

  const renderData = (data) => {
    return data.map((item, idx) => {
      return (
        <Col sm={12} md={4} className=" me-auto mt-5 mb-5">
          <Link
            to={`/DetailRecipe/${item.id}`}
            style={{ textDecoration: "none" }}
          >
            <img
              src={item.image}
              alt="sandwich"
              className="new-img"
              style={{ width: "300px", height: "200px" }}
            />
            <p className="top-left fs-5 w-50 text-dark fw-bold">{item.name}</p>
          </Link>
        </Col>
      );
    });
  };

  // get current post
  const indexOfLastPost = currentPage * postsPerPage; // 1 * 10 = 10
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // 10 - 10 = 0
  const currentPosts = myApi?.slice(indexOfFirstPost, indexOfLastPost); // 0 to 10

  // search users by user input
  const handleSearchInput = (event) => {
    setSearchUser(event.target.value);
    const newData = renderData(
      data.filter((item) =>
        item.name.toLowerCase().includes(event.target.value)
      )
    ); // render filtered data
    setMyApi(newData); // and set it to state
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Search onChange={handleSearchInput} />
      <Container className="bg-white w-100 popular-fy me-5 mb-5">
        <Row className="mt-5 popular me-auto">{currentPosts}</Row>
      </Container>
      <Container>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={myApi?.length}
          paginate={paginate}
        />
      </Container>
    </div>
  );
};

const Search = ({ onChange }) => {
  return (
    <Form className="">
      <Form.Group className="mb-3 mt-3 w-75 mx-auto">
        <Form.Control
          type="text"
          autoFocus={true}
          placeholder="search restaurant, food"
          onChange={onChange}
        />
      </Form.Group>
    </Form>
  );
};
export default App;
