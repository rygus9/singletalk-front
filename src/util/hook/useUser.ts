export const useUser = async () => {
  const userId = localStorage.getItem("userId");
  if (userId) {
    return userId;
  }
};
