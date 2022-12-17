const axios = require("axios");

const headers = {
  Accept: "*/*",
  "Content-Type": "application/json",
};

export const toggleAction = (url, room, func, targetValue) => {
  const body = { room, func, targetValue };
  axios
    .post(url, body, { headers })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

// if (buttonName === "Power") {
//     console.log("initiate", room, buttonName);
//     fetch("http://172.20.10.12:52170/room", {
//       method: "POST",
//       headers: {
//         "Accept": "*/*",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         room: `${room}`,
//         func: "power",
//         targetValue: !isEnabled,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .catch((err) => console.log(err));
//   } else if (buttonName === "Window") {
//     console.log("initiate", room, buttonName);
//     fetch("http://172.20.10.12:52170/room", {
//       method: "POST",
//       headers: {
//         Accept: "*/*",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         room: `${room}`,
//         func: "window",
//         targetValue: !isEnabled,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .catch((err) => console.log(err));
//   }