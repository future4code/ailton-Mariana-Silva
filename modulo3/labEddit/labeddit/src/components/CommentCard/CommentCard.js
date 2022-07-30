import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { BsShift, BsShiftFill } from "react-icons/bs";
import Swal from "sweetalert2";
import {
  PostListContainer,
  CommentUserName,
  CommentContainer,
  CommentText,
  ButtonContainer,
  VoteContainer,
  CommentCount,
  VoteUp,
  VoteDown,
} from "./styled";

const CommentCard = (props) => {
  const createCommentVote = (id) => {
    const token = localStorage.getItem("token");
    const headers = {
      headers: {
        Authorization: token,
      },
    };
    const body = {
      direction: 1,
    };
    axios
      .post(`${BASE_URL}/comments/${id}/votes`, body, headers)
      .then((res) =>{})
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo deu errado. Tente novamente mais tarde.",
          footer: `Código do erro ${err.response.status}`,
        });
      });
  };
  const changeCommentVote = (id) => {
    const token = localStorage.getItem("token");
    const headers = {
      headers: {
        Authorization: token,
      },
    };
    const body = {
      direction: -1,
    };
    axios
      .post(`${BASE_URL}/comments/${id}/votes`, body, headers)
      .then((res) => {})
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo deu errado. Tente novamente mais tarde",
          footer: `Código do erro ${err.response.status}`,
        });
      });
  };
  const deleteCommentVote = (id) => {
    const token = localStorage.getItem("token");
    const headers = {
      headers: {
        Authorization: token,
      },
    };
    axios
      .delete(`${BASE_URL}/comments/${id}/votes`, headers)
      .then(() => {})
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo deu errado. Tente novamente mais tarde.",
          footer: `Código do erro ${err.response.status}`,
        });
      });
  };
  const UpVote = (id, userVote) => {
    if (userVote) {
      deleteCommentVote(id);
      createCommentVote(id);
    } else {
      createCommentVote(id);
    }
  };
  const DownVote = (id, userVote) => {
    if (userVote) {
      deleteCommentVote(id);
      changeCommentVote(id);
    } else if (userVote === null) {
      changeCommentVote(id);
    }
  };
  return (
    <PostListContainer key={props.id}>
      <CommentUserName>Enviado por: {props.username}</CommentUserName>

      <CommentContainer>
        <CommentText>{props.body}</CommentText>
      </CommentContainer>

      <ButtonContainer>
        <VoteContainer>
          <VoteUp onClick={() => UpVote(props.id, props.userVote)}>
            {props.userVote === 1 ? <BsShiftFill color="green" /> : <BsShift />}
          </VoteUp>
          <CommentCount>
            {props.voteSum === null ? "0" : props.voteSum}
          </CommentCount>
          <VoteDown onClick={() => DownVote(props.id, props.userVote)}>
            {props.userVote === -1 ? <BsShiftFill color="red" /> : <BsShift />}
          </VoteDown>
        </VoteContainer>
      </ButtonContainer>
    </PostListContainer>
  );
};

export default CommentCard;
