import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent } from "./slice/ContentSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);
  const contents = useSelector((state) => state.content.contents);
  const isLoading = useSelector((state) => state.content.isLoading);
  const error = useSelector((state) => state.content.error);

  if (isLoading) {
    return "loading....";
  }

  if (error) {
    return error;
  }

  return (
    <div className="container">
      <div className="images">
        {contents.map((content) => (
          <div key={content.id}>
            <img src={`content.images`} alt="images"/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
