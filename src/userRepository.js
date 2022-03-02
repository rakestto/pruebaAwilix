const _users = [
  { userName: "parreno", pswd: "Garcia parreno" },
  { userName: "joseja", pswd: "Martinez Domene" },
  { userName: "niko", pswd: "Martinez Domene" },
  { userName: "ruben", pswd: "Martinez Domene" },
];

const _requestFrom = [];

const userRepository = ({ currentRequest }) => {
  return {
    find: () => {
      console.log("from repository", currentRequest);
      return currentRequest;
    },
  };
};

export default userRepository;
