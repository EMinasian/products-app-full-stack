const getAllComments = async () => {
  const response = await fetch("http://localhost:4000/comments");
  return await response.json();
};

export default getAllComments;
