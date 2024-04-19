//this is when the DOM content is fully loaded, this event listener triggers
document.addEventListener("DOMContentLoaded", () => {
  //When this element is clicked, it initiates the following actions.
  document.getElementById("solveRoom1").addEventListener("click", () => {
    //a fetch request is  made to retrieve data from "books.json".
    fetch("books.json")
      //when the data is recieved, it is converted to JSON format.
      .then((response) => response.json())
      //once the JSON data is obtained, the following actions are performed.
      .then((books) => {
        //the function findMostRecentBook() is called to find the most recent book.
        const mostRecentBook = findMostRecentBook(books);
        // to display a message containing the title of the most recent book.
        document.getElementById(
          "room1Result"
        ).textContent = `The key to the next room is: ${mostRecentBook.title}`;
      });
  });

  //when this element is clicked, the following actions are initiated
  document.getElementById("solveRoom2").addEventListener("click", () => {
    //a set containing JavaScript concepts is created
    const jsConcepts = new Set(["closure", "scope", "hoisting", "async"]);
    // a set containing React concepts is created
    const reactConcepts = new Set(["components", "jsx", "hooks", "async"]);
    // the functions findIntersection() is called with the sets of JavaScript and React concepts.
    //It should find the common concepts between the two sets
    const commonConcepts = findIntersection(jsConcepts, reactConcepts);
    
    //the content of the HTML element with the ID "room2Result" is updated
    //to display a message containing the common concepts found between JavaScript and React.
    document.getElementById(
      "room2Result"
    ).textContent = `The code to unlock the door is: ${Array.from(
      commonConcepts
    ).join(", ")}`;
  });

  //an event listener is attached to the element with the ID "solveRoom3"
  //when this element is clicked, the following asynchronous actions are innituated.
  document.getElementById("solveRoom3").addEventListener("click", async () => {
    try {
      const response = await fetch("directions.json"); //a fetch request is made to retrieve data from "directions.json".
      const directions = await response.json();   //the response is converted to  JSON format.
      const message = await navigateLabyrinth(directions);    //the function navigateLabyrinth() is called with the obtained directions and it navigates through the labyrinth asynchronously.
      document.getElementById("room3Result").innerHTML = message;   //to display a message indicating the successful completion of the labyrinth.
    } catch (error) {
      // if any errors occur during the above operation, they are caught and handled here.
      console.error(error);
    }
  });
});

function findMostRecentBook(books) {
  // 🪲 Bug: Logic error
  return books.reduce((mostRecent, book) =>
    new Date(book.published) > new Date(mostRecent.published)
      ? book
      : mostRecent
  );
}

function findIntersection(setA, setB) {
  // 🪲 Bug: Incorrect logic
  const intersection = new Set([...setA].filter((elem) => setB.has(elem)));
  return intersection;
}

async function navigateLabyrinth(directions) {
  for (let direction of directions) {
    // 🪲 Bug: No delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`Navigating: ${direction.step}`);
  }
  return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}
