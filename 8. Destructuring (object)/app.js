const bob = {
  first: "bob",
  last: "sanders",
  city: "chicago",
  siblings: {
    sister: "jane",
  },
};

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

const {
  last: testing,
  first,
  city,
  zip,
  siblings: { sister: favourite },
} = bob;
//if we use alias, we have to stick with alisas
// in our case, we have to use testing instead of last

console.log(first, city, zip, testing, favourite);

const printPerson = ({ first, last, city, siblings: { sister } }) => {
  console.log(first, last, city, sister);
};

printPerson(bob);
