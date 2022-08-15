import React from "react";
import axios from "axios";
import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../constants/urls";
import { PostContainer, Post, PostTitle } from "./styled";
import { GradientButton2 } from "../../constants/generalStyled";
import Swal from "sweetalert2"

const PostForm = (props) => {
  const { form, onChange, clear } = useForm({ 
    title: "", 
    body: "" 
  });

  const onSubmitPost = (event) => {
    event.preventDefault();

    post(form, props.getPosts, clear);
  };
  const post = (body, getPosts, clear) => {
    const token = localStorage.getItem("token");
    const headers = {
      headers: {
        Authorization: token,
      },
    };
    axios
      .post(`${BASE_URL}/posts`, body, headers)
      .then(() => {
        getPosts();
        clear();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo deu errado. Tente novamente mais tarde.",
          footer: `Código do erro ${err.response.status}`,
        });
      });
  };
  return (
    <PostContainer>
      <form onSubmit={onSubmitPost}>
        <PostTitle
          name="title"
          value={form.title}
          onChange={onChange}
          placeholder="Título"
          required
        />
        <Post
          name="body"
          value={form.body}
          onChange={onChange}
          placeholder="Escreva seu post..."
          required
        />
        <GradientButton2>Postar</GradientButton2>
      </form>
    </PostContainer>
  );
};

export default PostForm;
