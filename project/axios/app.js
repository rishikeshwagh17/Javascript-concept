//axios is very useful library for making the HTTP request
//we dont need to parse data of response from promise like we do in fetch thats why it is very useful

//also incase of axios incase od error status code 400 series or 500 we dont need to handle as in case of fetch we need to handle it, here it automatically enter the catch block
// const res = axios.get("https://swapi.dev/api/people/1/");
// res
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log("Failed!!!"); //it will enter as soon as status code is not 200
//     console.log(err);
//   });

//chaining of axios request
axios
  .get("https://swapi.dev/api/people/1/")
  .then((res) => {
    console.log(res?.data?.films);
    const firstFilm = res?.data?.films[0];
    return axios.get(firstFilm);
  })
  .then((res) => {
    console.log("film data", res.data);
  })
  .catch((err) => {
    console.log("IN CATCH BLOCK!!");
    console.log(err);
  });
