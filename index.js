/* State */
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.

// TODO: Add support for more colors
const maxFreeLancers = 10;
const freeLancers = [
  {
    name: "Alice",
    occupation: "Writer",
    price: 30
  },
  {
    name: "Bob",
    occupation: "Teacher",
    price: 50
  },
  {
    name: "Carol",
    occupation: "Programmer",
    price: 70
  },
];

const randomNames = [
  "Steve", "Joe", "Alex", "Roger", "Sylvia", "Anette", "Olivia", "Olivier", "Louis", "Luis", "Joshua", "Estelle", "Max", "Huxton", "Charles", "Sally", "Joana",
  "David", "James", "Ian", "Edward", "Ash", "Mary", "Chris", "Rachel", "Paula", "Paul", "John"
];

const randomOccupation = [
  "Developer", "Tester", "Artist", "Teacher", "Writer", "Programmer", "Security", "Accountant", "Editor"
];

function generateName() {
  return randomNames[Math.floor( Math.random() * randomNames.length )];
};

function generateOccupation() {
  return randomOccupation[Math.floor( Math.random() * randomOccupation.length )];
};

// `setInterval` will call `addShape` every 1000 milliseconds (1 second)
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addShapeIntervalId)` will stop the interval.
const addFreelancerId = setInterval(addFreelancer, 1000);

render(); // We call this function once to render the initial state

/**
 * Update the DOM to reflect the current state.
 * The term "render" is often used to describe this process.
 */
function render() {
  const averagePrice = document.querySelector(".average-price");
  let tempPrice = 0;
  const freeLancersList = document.querySelector("#freelancers");
  const freeLancersListElements = freeLancers.map((worker) => {
    const element = document.createElement("tr");
    element.classList.add(worker.name);
    element.innerHTML = "<td>" + worker.name + "</td>" +"<td>" + worker.occupation + "</td>" + "<td>" + worker.price + "</td>"
    tempPrice += worker.price;
    return element;
  });
  
  averagePrice.innerHTML = (tempPrice/freeLancers.length).toFixed(2);
  freeLancersList.replaceChildren(...freeLancersListElements);
}

/**
 * Add a random shape to the `shapes` array
 */
function addFreelancer() {
  const name = generateName();
  const occupation = generateOccupation();
  const price = Math.floor(Math.random() * 100);

  freeLancers.push({name, occupation, price});
  render();

  if (freeLancers.length >= maxFreeLancers) {
    clearInterval(addFreelancerId);
  }
}
