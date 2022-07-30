import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { GlobalStateContext } from "./GlobalStateContext";

const GlobalState = (props) => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getPosts = () => {
    const token = localStorage.getItem("token");
    const headers = {
      headers: {
        Authorization: token,
      },
    };
    axios
      .get(`${BASE_URL}/posts?page=${currentPage}&size=15`, headers)
      .then((res) => {
        setLoading(false);
        setPosts(res.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  const getPostComments = (id) => {
    const token = localStorage.getItem("token");
    const headers = {
      headers: {
        Authorization: token,
      },
    };
    axios
      .get(`${BASE_URL}/posts/${id}/comments?page=${currentPage}&size=5`, headers)
      .then((res) => {
        setLoading(false);
        setComments(res.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getPosts();
    getPostComments();
  }, [])

  const states = { posts, comments, currentPage, loading };
  const setters = { setPosts, setComments, setCurrentPage, setLoading };
  const requests = { getPosts, getPostComments };

  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
