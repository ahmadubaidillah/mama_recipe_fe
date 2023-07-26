import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { DefaultPlayer as Video } from "react-html5video";
import video from "../asset/video/videoplayback.mp4";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getFoodById } from "../redux/action/food";

const VideoStep = () => {
  // const food = useSelector((state) => {
  //   return state.food.foodId;
  // });
  const { id } = useParams();

  useEffect(() => {
    // dispatch(getFoodById(id));
    MyRecipe();
  }, []);

  const [recipe, setRecipe] = useState([]);
  console.log(recipe);

  const MyRecipe = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/food/${id}`,
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
        <Col className="mt-5 text-center">
          {recipe.map((item, i) => (
            <iframe
              key={i}
              className=" w-75"
              height="500px"
              src={item.video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
export default VideoStep;
