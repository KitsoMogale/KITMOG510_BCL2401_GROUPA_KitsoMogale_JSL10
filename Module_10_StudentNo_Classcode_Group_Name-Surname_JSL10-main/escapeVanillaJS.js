document.addEventListener("DOMContentLoaded", () => {
    // 🪲 Bug: Incorrect ID used for attaching the event listener
    document.getElementById("solveRoom1").addEventListener("click",() => {
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                // 🪲 Bug: Incorrect element ID
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

    document.getElementById("solveRoom2").addEventListener("click", () => {
        const jsConcepts = new Set(['closure', 'scope', 'hoisting',"async"]);
        // 🪲 Bug: What's mssing from JS concepts?
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        // 🪲 Bug: Incorrect function call
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

    // 🪲 Bug: Asynchronous function ?
    document.getElementById("solveRoom3").addEventListener("click", () => {
        fetch('directions.json') 
            .then(response => response.json())
            .then(directions => {
                navigateLabyrinth(directions)
                    .then(message => {
                        // 🪲 Bug: Incorrect method
                        document.getElementById("room3Result").innerHTML = message;
                    });
            });
    });
});

function findMostRecentBook(books) {
    // 🪲 Bug: Logic error

    // initial value of mostRecent
    let initial = books[0];
    // console.log(a.published)
    return books.reduce((mostRecent, book) =>
     {return new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent},initial);
}

function findIntersection(setA, setB) {
    // 🪲 Bug: Incorrect logic

    //get each parameter object and create a new set from each object
    const intersection_0 = new Set([...setA]);
    const intersection_1 = new Set([...setB]);
    
    //variable to store all intersections
    let intersection = [];
    
     //loop trough the first set and check with the has method
    intersection_1.forEach((item)=>{
       if(intersection_0.has(item)){
          intersection.push(item)
       } ;
    })
   

    return intersection;
}

async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        // 🪲 Bug: No delay

        //apply await to wait for the promise to resolve
        await new Promise(resolve => setTimeout(resolve, 1000))
        console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}

