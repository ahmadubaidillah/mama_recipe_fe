import axios from "axios";

export const add = (form) => {
  return {
    type: "ADD",
    payload: new Promise((resolve, reject) => {
      axios
        .post(
          `${process.env.REACT_APP_BACKEND_URL}/food_add`,
          form,
          {
            headers: { "Content-Type": "multipart/form-data" },
          },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          console.log(response);
          // handleSuccess(response.data);
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
          reject(error.response);
        });
    }),
  };
};

export const getFood = () => {
  return {
    type: "GET_FOOD",
    payload: new Promise((resolve, reject) => {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/food`)
        .then((response) => {
          console.log(response);
          resolve(response.data);
        })
        .catch((err) => {
          reject(err);
        });
    }),
  };
};

export const getFoodById = (id) => {
  return {
    type: "GET_FOOD_BY_ID",
    payload: new Promise((resolve, reject) => {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/food/${id}`)
        .then((response) => {
          console.log(response);
          resolve(response.data);
        })
        .catch((err) => {
          reject(err);
        });
    }),
  };
};

export const deleteFood = async (id) => {
  try {
    await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/food_delete/${id}`
    );
    alert("delete succes");
    window.location.reload();
    console.log("succes");
  } catch (error) {
    console.log(error);
  }
};

export const editFood = (form) => {
  return {
    type: "EDIT_FOOD",
    payload: new Promise((resolve, reject) => {
      axios
        .put(`${process.env.REACT_APP_BACKEND_URL}/food_edit/:id`, form)
        .then((response) => {
          console.log(response);
          // handleSuccess(response.data);
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    }),
  };
};
