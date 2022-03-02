const userController = () => {
  return {
    getUserName: async (req, res) => {
      const userService = req.scope.cradle.userService;
      const result = await userService.getUserName(
        req.scope.cradle.userRepository
      );
      res.send(result);
    },
  };
};

export default userController;
