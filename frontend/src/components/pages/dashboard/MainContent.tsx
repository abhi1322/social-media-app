import AddPost from "../tabs/AddPost";
import Home from "../tabs/Home";
import Profile from "../tabs/Profile";

const MainContent = ({ activePage }: { activePage: string }) => {
  return (
    <div className="w-full flex flex-col items-center ">
      {activePage === "home" && <Home />}
      {activePage === "add post" && <AddPost />}
      {activePage === "profile" && <Profile />}
    </div>
  );
};

export default MainContent;
