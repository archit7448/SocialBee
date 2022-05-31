import { useEffect } from "react";
import { Sidebar } from "../../Components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AddPost } from "../../reducer/postSlice";

export const Explore = () => {
  const { post } = useSelector((store) => store.posts);
  console.log(post);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/posts");
        console.log(response);
        dispatch(AddPost(response.data.posts));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <main>
      <Sidebar />
    </main>
  );
};
