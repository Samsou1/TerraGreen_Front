export const validateComment = (comment) => {
  return comment.match(/^[^<>/\\{}*]{3,}$/);
};
