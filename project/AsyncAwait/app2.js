//here we are going to talk about the parallel and sequestial request in async await

//lets study sequential request
// async function get3Pokemon() {
//   const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
//   const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
//   const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
//   //here each api is going to execute sequentially so 1st finish then 2 will finish and then 3rd one
//   console.log(poke1.data);
//   console.log(poke2.data);
//   console.log(poke3.data);
// }

//parallel request
// async function get3Pokemon() {
//   const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
//   const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
//   const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
//   //here each api is going to execute parallel roughly some time in betwn them but all the request send at same time
//   const poke1 = await prom1; //as prom1(at axios api) does not have await keyword there so it is promise not result when we add await keyword it waits for result and return that result.
//   const poke2 = await prom2;
//   const poke3 = await prom3;
//   console.log(poke1.data);
//   console.log(poke2.data);
//   console.log(poke3.data); // so 3 request send independently
// }

// get3Pokemon();

//lastly how we can use promise.all  (for parallel request)
//instead of doing await all the time we can use promise.all([array of promises])
async function get3Pokemon() {
  const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");

  //here we can do promise.all(pass array of promises above)
  const results = await Promise.all([prom1, prom2, prom3]);
  for (let element of results) {
    console.log(element.data);
  }
}
get3Pokemon();
