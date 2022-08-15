export const goToFeedPage = (navigate) => {
  navigate("/");
};
export const goToLoginPage = (navigate) => {
  navigate("/login");
};
export const goToCommentPage = (navigate, id) => {
  navigate(`/post/${id}`);
};
export const goToSignUpPage = (navigate) => {
  navigate("/cadastro");
};
export const goToErrorPage = (navigate) => {
  navigate("/errorPage");
};
export const goBack = (navigate) => {
  navigate(-1);
};
