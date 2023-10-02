import { Route, Routes } from "react-router-dom";
import { MainPage } from "@/pages/main";
import { PostPage } from "@/pages/post";

function Routing() {
    return (
    <Routes>
      <Route path={'/:id'} element={<PostPage />} />
      <Route path={'*'} element={<MainPage />}/>
    </Routes>
    );
};

export default Routing;