import axios from "axios";
const differentUsers = ["parreno", "joseja", "niko", "ruben", "marina"];
let response = [];

const makeRequests = async (numberOfRequest) => {
  for (let i = 0; i < numberOfRequest; i++) {
    axios
      .get(`http://localhost:4000/user/${differentUsers[i]}`)
      .catch((err) => console.log(err));
  }
};

const checkRequest = async () => {
  await makeRequests(differentUsers.length);
  console.table(response);
};

checkRequest();
