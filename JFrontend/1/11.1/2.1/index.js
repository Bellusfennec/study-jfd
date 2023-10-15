const peopleWithVisa = [
  {
    firstName: "Stasia",
    lastName: "Ward",
    criminalRecord: true,
    passportExpiration: "19.06.2040",
  },
  {
    firstName: "Elliot",
    lastName: "Baker",
    criminalRecord: false,
    passportExpiration: "04.06.2041",
  },
  {
    firstName: "Leighann",
    lastName: "Scott",
    criminalRecord: true,
    passportExpiration: "31.07.2039",
  },
  {
    firstName: "Nick",
    lastName: "Pop",
    criminalRecord: false,
    passportExpiration: "31.12.2010",
  },
];

function allowVisa(peaple) {
  return peaple.filter((human) => {
    const [day, month, year] = human.passportExpiration.split(".");
    const passportExpiration = new Date(year, month - 1, day);
    const def = passportExpiration.getTime() - new Date().getTime();
    return human.criminalRecord && def > 0;
  });
}

const result = allowVisa(peopleWithVisa);
console.log("result", result);
