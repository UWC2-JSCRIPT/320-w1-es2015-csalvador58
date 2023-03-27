import people from './people.json';

// Using template literals
// people.forEach((person) => {
//   const names = person.name.split(' ');
//   const firstName = names[0];
//   const lastName = names[1];
//   const email = person.email;
//   const phone = person.phone;

//   console.log(`
//   First name: ${firstName}
//   Last name: ${lastName}
//   Email: ${email}
//   Phone number: ${phone}
//   `);
// });

// Using Object destructuring
// people.forEach((person) => {
//   const { name, email, phone } = person;
//   const names = name.split(' ');
//   const firstName = names[0];
//   const lastName = names[1];

//   console.log(`
//   First name: ${firstName}
//   Last name: ${lastName}
//   Email: ${email}
//   Phone number: ${phone}
//   `);
// });

// Using Array destructuring
const [person1, ...rest] = people;

const names = person1.name.split(' ');
const firstName = names[0];
const lastName = names[1];

console.log(`
First name: ${firstName}
Last name: ${lastName}
Email: ${person1.email}
Phone number: ${person1.phone}
`);

rest.forEach((person) => {
  const { name, email, phone } = person;
  const firstLast = name.split(' ');
  const first = firstLast[0];
  const last = firstLast[1];

  console.log(`
  First name: ${first}
  Last name: ${last}
  Email: ${email}
  Phone number: ${phone}
  `);
});
