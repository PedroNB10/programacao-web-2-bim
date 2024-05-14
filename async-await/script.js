// const people = fetch("https://swapi.dev/api/people"); // people is a promise

// people
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data.results);
//   });

// console.log("Another way to fetch data from API:");

// people2.then((response) => {
//   console.log(response);

//   const data = response.json();

//   data.then((result) => {
//     console.log(result.results);
//   });

//   console.log("This is the end of the code");
// });

// const searchPeople = async () => {
//   const people = await fetch("https://swapi.dev/api/people");
//   const data = await people.json();
//   console.log("This is the end of the code");

//   return data.results;
// };

// console.log("Another way to fetch data from API using async/await:");

// const data = searchPeople();
// console.log(data);
