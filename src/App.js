import React from "react";
import { Provider } from "react-redux";

import Posts from "./Components/Posts";
import PostForm from "./Components/PostForm";
import { createStore, applyMiddleware } from "redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
