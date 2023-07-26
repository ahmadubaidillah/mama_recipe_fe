import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./style.css";
import Home from "./Pages/Home";
import MainHome from "./Pages/HomeMain";
import AddRecipe from "./Pages/AddRecipe";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import DetailRecipe from "./Pages/DetailRecipe";
import VideoStep from "./Pages/VideoStep";
import Profile from "./Pages/Profile";
import Profile2 from "./Pages/Profile2";
import Profile3 from "./Pages/Profile3";
import Edit from "./Pages/EditProfile";
import ForgotPassword from "./Pages/ForgotPassword";
import EditFood from "./Pages/EditFood";
import Recipes from "./Pages/Recipes";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (token) {
    return children;
  } else {
    return <Navigate to="/Login" />;
  }
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <MainHome />
            </PrivateRoute>
          }
        />
        <Route path="/AddRecipe" element={<AddRecipe />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/DetailRecipe/:id" element={<DetailRecipe />} />
        <Route path="/VideoStep/:id" element={<VideoStep />} />
        <Route path="/Profile/" element={<Profile />} />
        <Route path="/Profile2" element={<Profile2 />} />
        <Route path="/Profile3" element={<Profile3 />} />
        <Route path="/Edit/:id" element={<Edit />} />
        <Route path="/EditFood/:id" element={<EditFood />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
