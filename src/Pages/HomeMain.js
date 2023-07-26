import MainNavbar from "../Components/MainNavbar2";
import HomeContent from "../Components/HomeContent";
import PopularForYou from "../Components/PopularForYou";
import NewRecipe from "../Components/NewRecipe";
import PopularRecipe from "../Components/PopularRecipe";
import MainFooter from "../Components/MainFooter";

function Home() {
  return (
    <>
      <MainNavbar />
      <HomeContent />
      <PopularForYou />
      <NewRecipe />
      <PopularRecipe />
      <MainFooter />
    </>
  );
}

export default Home;
