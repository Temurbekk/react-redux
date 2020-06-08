import { FETCH_POST, NEW_POST } from "./types";
import axios from "axios";

export const fetchPosts = () => (dispatch) => {
  axios.get("https://jsonplaceholder.typicode.com/posts").then((res) =>
    dispatch({
      type: FETCH_POST,
      payload: res.data,
    })
  );
};
