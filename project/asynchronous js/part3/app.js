//promise chaining in javascript
const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, username: "rishi" },
          { id: 2, username: "rishi" },
        ],
        "/users/1": {
          id: 1,
          username: "rishikesh",
          upvotes: 360,
          city: "nashik",
          topPostId: 422007,
        },
        "/users/2": {
          id: 2,
          username: "atharva",
          upvotes: 390,
          city: "karanja",
          topPostId: 411041,
        },
        "/posts/422007": {
          id: 422007,
          title: "Lets go and buy some air jordan 1",
        },
      };
      const data = pages[url];
      if (data) {
        resolve({ status: 200, data });
      } else {
        reject({ status: 404 });
      }
    }, 1000);
  });
};

//what previously people do is
// fakeRequest("/users")
//   .then((res) => {
//     console.log(res);
//     const id = res.data[0].id;
//     fakeRequest(`/users/${id}`)
//       .then((res) => {
//         console.log(res);
//         const topPostId = res.data.topPostId;
//         fakeRequest(`/posts/${topPostId}`)
//           .then((res) => {
//             console.log(res);
//           })
//           .catch((res) => {
//             console.log("post url api fail", res);
//           });
//       })
//       .catch((res) => {
//         console.log("user id api fail", res);
//       });
//   })
//   .catch((res) => {
//     console.log("user api fail", res);
//   });

//after promise chain we can do we this same functionality like
fakeRequest("/users")
  .then((res) => {
    console.log(res);
    const id = res.data[0].id;
    return fakeRequest(`/users/${id}`);
  })
  .then((res) => {
    console.log(res);
    const topPostId = res.data.topPostId;
    return fakeRequest(`/posts/${topPostId}`);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log("API Failed");
    console.log(res);
  });

  //wrong api(url) calling
//   fakeRequest("/dogs")
//   .then((res) => {
//     console.log(res);
//     const id = res.data[0].id;
//     return fakeRequest(`/users/${id}`);
//   })
//   .then((res) => {
//     console.log(res);
//     const topPostId = res.data.topPostId;
//     return fakeRequest(`/posts/${topPostId}`);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log("API Failed");
//     console.log(res);
//   });