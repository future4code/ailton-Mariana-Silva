import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import { goToCommentPage } from "../../routes/coordinator";
import { FiMessageSquare } from "react-icons/fi";
import { BsShift, BsShiftFill } from "react-icons/bs";
import Swal from "sweetalert2"
import {
  CommentContainer,
  PostListContainer,
  ButtonContainer,
  VoteContainer,
  VoteUp,
  VoteDown,
  UserName,
  TitleAndPost,
  VoteSum,
  CommentCount,
  PostContainer,
} from "./styled";

const PostCommentCard = (props) => {
  const navigate = useNavigate();
  const UpVote = (id, userVote) => {
    if (userVote) {
      {
        const token = localStorage.getItem("token");
        const headers = { headers: { Authorization: token } };

        axios
          .delete(`${BASE_URL}/posts/${id}/votes`, headers)
          .then(() => {})
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Algo deu errado. Tente novamente mais tarde.",
              footer: `Código do erro ${err.response.status}`,
            });
          });
      }
      {
        const token = localStorage.getItem("token");
        const headers = { headers: { Authorization: token } };
        const body = { direction: 1 };

        axios
          .post(`${BASE_URL}/posts/${id}/votes`, body, headers)
          .then((res) => {})
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Algo deu errado. Tente novamente mais tarde.",
              footer: `Código do erro ${err.response.status}`,
            });
          });
      }
    } else {
      const token = localStorage.getItem("token");
      const headers = { headers: { Authorization: token } };
      const body = { direction: 1 };

      axios
        .post(`${BASE_URL}/posts/${id}/votes`, body, headers)
        .then((res) => {})
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo deu errado. Tente novamente mais tarde.",
            footer: `Código do erro ${err.response.status}`,
          });
        });
    }
  };

  const DownVote = (id, userVote) => {
    if (userVote) {
      {
        const token = localStorage.getItem("token");
        const headers = {
          headers: {
            Authorization: token,
          },
        };

        axios
          .delete(`${BASE_URL}/posts/${id}/votes`, headers)
          .then(() => {})
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Algo deu errado. Tente novamente mais tarde.",
              footer: `Código do erro ${err.response.status}`,
            });
          });
      }
      {
        const token = localStorage.getItem("token");
        const headers = { headers: { Authorization: token } };
        const body = { direction: -1 };

        axios
          .post(`${BASE_URL}/posts/${id}/votes`, body, headers)
          .then((res) => {})
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Algo deu errado. Tente novamente mais tarde.",
              footer: `Código do erro ${err.response.status}`,
            });
          });
      }
    } else if (userVote === null) {
      const token = localStorage.getItem("token");
      const headers = { headers: { Authorization: token } };
      const body = { direction: -1 };

      axios
        .post(`${BASE_URL}/posts/${id}/votes`, body, headers)
        .then((res) => {})
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo deu errado. Tente novamente mais tarde.",
            footer: `Código do erro ${err.response.status}`,
          });
        });
    }
  };

  return (
    <PostListContainer key={props.id}>
      <PostContainer onClick={() => goToCommentPage(navigate, props.id)}>
        <UserName>Enviado por: {props.username}</UserName>

        <TitleAndPost>
          <h3>{props.title}</h3>
          <p>{props.body}</p>
        </TitleAndPost>
      </PostContainer>
      <ButtonContainer>
        <VoteContainer>
          <VoteUp onClick={() => UpVote(props.id, props.userVote)}>
            {props.userVote === 1 ? <BsShiftFill color="green" /> : <BsShift />}
          </VoteUp>
          <VoteSum>{props.voteSum === null ? "0" : props.voteSum}</VoteSum>
          <VoteDown onClick={() => DownVote(props.id, props.userVote)}>
            {props.userVote === -1 ? <BsShiftFill color="red" /> : <BsShift />}
          </VoteDown>
        </VoteContainer>
        <CommentContainer>
          <FiMessageSquare color="black" onClick={() => goToCommentPage(navigate, props.id)}/>
          <CommentCount>
            {props.commentCount === null ? "0" : props.commentCount}
          </CommentCount>
        </CommentContainer>
      </ButtonContainer>
    </PostListContainer>
  );
};

export default PostCommentCard;
