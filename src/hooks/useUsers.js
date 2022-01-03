import useLocalStorage from "./useLocalStorage";

function useUsers() {

  const {
    item: users,
    saveItem: AddReaction,
    saveReaction,
    loading,
    error,
    data,
  } = useLocalStorage("USERS_V1");


  const likePerson = (name) => {
    const userIndex = users.findIndex((user) => user.name === name);
    const newUser = [...users];
    saveReaction("LIKED_USERS_v1", users[userIndex])
    newUser[userIndex].likedPerson = true;
    newUser.splice(userIndex, 1);
    AddReaction(newUser);
  };

  const superLikePerson = (name) => {
    const userIndex = users.findIndex((user) => user.name === name);
    const newUser = [...users];
    saveReaction("SUPER_LIKED_USERS_V1", users[userIndex])
    newUser[userIndex].superLikedPerson = true;
    newUser.splice(userIndex, 1);
    AddReaction(newUser);
  };  

  const dislikePerson = (name) => {
    const userIndex = users.findIndex((user) => user.name === name);
    saveReaction("DISLIKED_USERS_V1", users[userIndex])
    const newUser = [...users];
    newUser[userIndex].dislikedPerson = true;
    newUser.splice(userIndex, 1);
    AddReaction(newUser);
  };

  const resetData = () => {
    AddReaction(data)
  };


  return {
    resetData,
    users,
    loading,
    error,
    likePerson,
    superLikePerson,
    dislikePerson,
  };
}

export default useUsers;
