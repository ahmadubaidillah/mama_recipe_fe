import MainNavbar from "../Components/MainNavbar";
import ProfileContent from "../Components/ProfileContent";
import MainFooter from "../Components/MainFooter";
import LikedRecipe from "../Components/LikedRecipe";

const Profile = () => {
  return (
    <>
      <MainNavbar />
      <ProfileContent />
      <LikedRecipe />
      <MainFooter />
    </>
  );
};
export default Profile;
