import React, { useContext, useEffect } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage ";
import PostCard from "../../components/PostCard/PostCard";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import CircularProgress from "@mui/material/CircularProgress";
import { Pagination } from "@mui/material";
import PostForm from "./PostForm";
import {
  Container,
  ContentContainer,
  Line,
  LoaderContainer,
} from "../../constants/generalStyled";

const FeedPage = () => {
  useProtectedPage();

  const { states, setters, requests } = useContext(GlobalStateContext);
  const { loading } = states;

  const onChange = (event, value) => {
    setters.setCurrentPage(value);
  };

  useEffect(() => {
    requests.getPosts();
  }, [requests]);

  return (
    <Container>
      <ContentContainer>
        <PostForm getPosts={requests.getPosts} />

        <Line />
        <Pagination
          count={50}
          onChange={onChange}
          page={setters.currentPage}
          variant="outlined"
          shape="rounded"
          size="small"
        />
        <br />

        {!loading ? (
          <>
            {states.posts.map((post) => {
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

export default FeedPage;
