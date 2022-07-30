import React from "react";
import axios from "axios";
import useForm from "../../hooks/useForm";
import { GradientButton2 } from "../../constants/generalStyled";
import { CommentContainer, Comment } from "./styled";
import { BASE_URL } from "../../constants/urls";
import Swal from "sweetalert2";

const CommentForm = (props) => {
  const { form, onChange, clear } = useForm({ body: "" });

  const onSubmitComment = (event) => {
    event.preventDefault();

    comment(form, props.id, props.getPostComments, clear);
  };

  const comment = (body, id, getPostComments, clear) => {
    const token = localStorage.getItem("token");
    const headers = { headers: { Authorization: token } };

    axios
      .post(`${BASE_URL}/posts/${id}/comments`, body, headers)
      .then(() => {
        getPostComments();
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
    <CommentContainer>
      <form onSubmit={onSubmitComment}>
        <Comment
          name="body"
          value={form.body}
          onChange={onChange}
          placeholder="Adicionar comentário"
          required
        />
        <GradientButton2>Postar</GradientButton2>
      </form>
    </CommentContainer>
  );
};

export default CommentForm;
