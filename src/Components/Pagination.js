import React from "react";
import { Link } from "react-router-dom";
import { Pagination, Container } from "react-bootstrap";

const Paginations = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    // <Container>
    <Pagination className="d-flex justify-content-center">
      {pageNumbers.map((number) => (
        <Link
          onClick={() => paginate(number)}
          href="!#"
          className="item-item text-dark"
          style={{ textDecoration: "none", color: "dark" }}
        >
          <Pagination.Item style={{ color: "dark" }}>{number}</Pagination.Item>
        </Link>
      ))}
      {/* </li> */}
    </Pagination>
    // </Container>
    //   </ul>
    // </div>
  );
};

export default Paginations;
