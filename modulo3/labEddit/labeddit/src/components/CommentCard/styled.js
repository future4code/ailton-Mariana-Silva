import styled from "styled-components";

export const PostListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  gap: 18px;
  width: 100%;
  background: #fbfbfb;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  margin-bottom: 10px;
`;
export const CommentUserName = styled.p`
  font-family: "IBM Plex Sans";
  font-weight: 400;
  font-size: 12px;
  color: #6f6f6f;
`;
export const CommentContainer = styled.div`
  display: flex;
  overflow-wrap: break-word;
  width: 100%;
`;
export const CommentText = styled.p`
  font-family: "IBM Plex Sans";
  word-break: break-all;
  font-weight: 400;
  font-size: 18px;
  max-width: 100%;
  overflow-wrap: break-word;
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  height: 30px;
`;
export const VoteContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100px;
  border: 1px solid #ececec;
  border-radius: 28px;
`;
export const CommentCount = styled.p`
  font-family: "IBM Plex Sans";
  word-break: break-all;
  font-weight: 400;
  font-size: 12px;
  color: #6f6f6f;
`;
export const VoteUp = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 18px;
  border: none;
  background-color: #fbfbfb;
  :hover {
    cursor: pointer;
  }
`;
export const VoteDown = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 18px;
  border: none;
  background-color: #fbfbfb;
  transform: rotate(180deg);
  :hover {
    cursor: pointer;
  }
`;
