import MainNavbar from "../Components/MainNavbar";
import ProfileContent from "../Components/ProfileContent";
import MainFooter from "../Components/MainFooter";
import SavedRecipe from "../Components/SavedRecipe";

const Profile = () => {
  return (
    <>
      <MainNavbar />
      <ProfileContent />
      <SavedRecipe />
      <MainFooter />
    </>
  );
};
export default Profile;
