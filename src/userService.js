//Functional approach because me apetece

const createUserService = ({ userRepository }) => {
  return {
    getUserName: async (repo) => {
      return await repo.find();
    },
  };
};

export default createUserService;
