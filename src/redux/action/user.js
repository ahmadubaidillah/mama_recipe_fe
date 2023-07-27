import axios from "axios";

// export const login = (form, handleSuccess) => {
//   return {
//     type: "LOGIN",
//     payload: new Promise((resolve, reject) => {
//       axios
//         .post(`${process.env.REACT_APP_BACKEND_URL}/user_login`, form)
//         .then((response) => {
//           console.log(response);
//           handleSuccess(response.data);
//           resolve(response.data);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     }),
//   };
// };

export const register = (form) => {
  return {
    type: "REGISTER",
    payload: new Promise((resolve, reject) => {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/user_register`, form)
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

// const getToken = localStorage.getItem("token");

// export const getList = (id) => {
//   return {
//     type: "GET_LIST_USER",
//     payload: new Promise((resolve, reject) => {
//       axios
//         .get(`${process.env.REACT_APP_BACKEND_URL}/getuser/${id}`, {
//           headers: { token: getToken },
//         })
//         .then((response) => {
//           console.log(response);
//           resolve(response.data);
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     }),
//   };
// };

// export const editUser = (form) => {
//   return {
//     type: "EDIT",
//     payload: new Promise((resolve, reject) => {
//       axios
//         .put(`${process.env.REACT_APP_BACKEND_URL}/user_edit`, form)
//         .then((response) => {
//           console.log(response);
//           // handleSuccess(response.data);
//           resolve(response.data);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     }),
//   };
// };
