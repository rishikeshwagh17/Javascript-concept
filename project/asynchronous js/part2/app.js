//one most problem we face is callBack hell when we add callback to function
// const btn = document.querySelector("button");
// setTimeout(() => {
//   btn.style.transform = `translateX(100px)`;
//   //but now i want to move this button again i would do
//   setTimeout(() => {
//     btn.style.transform = `translateX(200px)`;
//     setTimeout(() => {
//       btn.style.transform = `translateX(300px)`; //this is callback hell, in this code one callback has another callback inside it
//       setTimeout(() => {
//         btn.style.transform = `translateX(400px)`;
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//to solve this problem we have promises in javascript
//a promise in a javascript is an object representing the eventual completion or failure of an async functionality
// const willGetYouADog = new Promise((resolve, reject) => {
//      resolve();  status of promise is resolved
//   reject(); status of promise is rejected
//  until we get resolve or reject status value is pending
// });

// const willResolveOrReject = new Promise((resolve, reject) => {
//   const rand = Math.random();
//   if (rand < 0.5) {
//     resolve();
//   } else {
//     reject();
//   }
// });
// willResolveOrReject
//   .then(() => {
//     console.log("yayyy promise resolved");
//   })
//   .catch(() => {
//     console.log("ohhh oh promise rejected");
//   });

// const willResolveOrReject = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const rand = Math.random();
//     if (rand < 0.5) {
//       resolve();
//     } else {
//       reject();
//     }
//   }, 5000);
// });
// willResolveOrReject
//   .then(() => {
//     console.log("yayyy promise resolved");
//   })
//   .catch(() => {
//     console.log("ohhh oh promise rejected");
//   });

//lets make a fakeRequest
const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, username: "Rishi" },
          {
            id: 2,
            username: "Atharva",
          },
        ],
        "/about": "this is about page",
      };
      const data = pages[url];
      if (data) {
        resolve({ status: 200, data });
      } else {
        reject({ status: 404 });
      }
    }, 3000);
  });
};

fakeRequest("/about")
  .then((res) => {
    console.log(res);
    console.log("REQUEST RESOLVED");
  })
  .catch((res) => {
    console.log(res.status);
    console.log("REQUEST REJECT");
  });


  //promise chaining
  
