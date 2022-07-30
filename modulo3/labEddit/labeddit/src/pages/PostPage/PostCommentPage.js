import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { useProtectedPage } from "../../hooks/useProtectedPage ";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import CommentForm from "./CommentForm";
import CommentCard from "../../components/CommentCard/CommentCard";
import PostCard from "../../components/PostCard/PostCard";
import { Pagination } from "@mui/material";
import {
  Container,
  ContentContainer,
  Line,
  LoaderContainer,
} from "../../constants/generalStyled";

const PostPage = () => {
  useProtectedPage();

  const pathParams = useParams();
  const { states, setters, requests } = useContext(GlobalStateContext);
  const { loading } = states;

  const onChange = (event, value) => {
    setters.setCurrentPage(value);
  };

  const filterPost = states.posts.filter((post) => {
    return post.id === pathParams.id;
  });

  useEffect(() => {
    requests.getPostComments(pathParams.id);
  }, [requests]);

  return (
    <Container>
      <ContentContainer>
        {filterPost.map((post) => {
          return (
            <PostCard
              key={post.id}
              id={post.id}
              username={post.username}
              title={post.title}
              body={post.body}
              voteSum={post.voteSum}
              commentCount={post.commentCount}
              userVote={post.userVote}
            />
          );
        })}

        <CommentForm
          id={pathParams.id}
          getPostComments={requests.getPostComments}
        />
        <Line />
        <Pagination
          count={30}
          onChange={onChange}
          page={setters.currentPage}
          variant="outlined"
          shape="rounded"
          size="small"
        />
        <br />
        {!loading ? (
          <>
            {states.comments.map((comment) => {
              return (
                <CommentCard
                  key={comment.id}
                  id={comment.id}
                  username={comment.username}
                  title={comment.title}
                  body={comment.body}
                  voteSum={comment.voteSum}
                  commentCount={comment.commentCount}
                  userVote={comment.userVote}
                />
              );
            })}
          </>
        ) : (
          <LoaderContainer>
            <CircularProgress style={{ color: "orange" }} />
          </LoaderContainer>
        )}
      </ContentContainer>
    </Container>
  );
};

export default PostPage;
