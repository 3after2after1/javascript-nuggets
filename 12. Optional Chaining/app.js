const people = [
  {
    name: "bob",
    location: { street: "123 main street", timezone: { offset: "+7:00" } },
  },
  { name: "peter", location: { street: "123 Pine street" } },
  {
    name: "susan",
    location: { street: "123 Apple street", timezone: { offset: false } },
  },
];

//solution before optional chaining
console.log(true && "hello world");

people.forEach((person) => {
  // solution before optional chaining
  //   console.log(
  //     person.location &&
  //       person.location.timezone &&
  //       person.location.timezone.offset
  //   );
});

people.forEach((person) => {
  // solution before optional chaining
  //default value is "Hello World"
  //! this solution still an issue as the value 0 and false will be treated as false;
  //   console.log(person?.location?.timezone?.offset || "Hello World");
  //? this will be the best solution
  console.log(person?.location?.timezone?.offset ?? "better now");
});
