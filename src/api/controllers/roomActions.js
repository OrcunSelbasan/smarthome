const axios = require("axios");

const headers = {
  Accept: "*/*",
  "Content-Type": "application/json",
};

export const toggleAction = (url, room, func, targetValue) => {
  console.log(room);
  let successValue = null;
  fetch(url, {
          method: "POST",
          headers: {
            "Accept": "*/*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            room: `${room}`,
            func: `${func}`,
            targetValue: targetValue,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            successValue = data.success;
            return successValue;
          })
          .catch((err) => console.log(err));
};

export const togglePassword= (url, oldPassword, newPassword) => {
  let successValue = null;
  fetch(url, {
          method: "POST",
          headers: {
            "Accept": "*/*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            oldPassword,
            newPassword
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            successValue = data.success;
            return successValue;
          })
          .catch((err) => console.log(err));
};

export const toggleLoginPassword= (url, password,targetValue) => {
  let successValue = null;
  fetch(url, {
          method: "POST",
          headers: {
            "Accept": "*/*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
            targetValue: targetValue
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            successValue = data.success;
            return successValue;
          })
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
