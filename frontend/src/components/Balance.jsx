import { useState } from "react";
import axios from "axios";
export const Balance = ({ username, value }) => {
  const [user, setUser] = useState([]);
  const [balance, setBalance] = useState(0);
  axios
    .get("http://localhost:3000/api/v1/user/bulk?filter=" + username)
    .then((response) => {
      setUser(response.data.user._id);
    });
  axios.get("http://localhost:3000/api/v1/account/balance").then((response) => {
    setBalance();
  });
  return (
    <div className="flex">
      <div className="font-bold text-lg">Your balance</div>
      <div className="font-semibold ml-4 text-lg">Rs {value}</div>
    </div>
  );
};
