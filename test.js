// 1 - white rabbit
const rabbit = { 
  color: "white",
  checkWatch() {
    console.log(`A ${this.color} rabbit checks his watch and exclaims, 'I\'m late!'`);
  }
};
rabbit.checkWatch();

// 2 - spaceship
const spaceship = { 
    name: "Apollo",
    launch() {
      console.log(`You have launched ${this.name}.`);
    }
  // your code here - uncomment the spaceship.launch() line below when done
};
 spaceship.launch(); 

// 3 - shopping cart
const cart = {
  // your code here - uncomment the two lines below this object when done
  contents: [],
  addItem(item){
    let contents = [];
    contents.push(item);
  }
};
cart.addItem("laptop");
console.log("The cart contains:", cart.contents);

// 4 - lever
const lever = {
  stamp: "ACME",
  pull(){
    comsole.log(`An anvil stamped ${this.stamp} drops on your head.`);
  }
}
// your code here - uncomment the line below when done
lever.pull();

// 5 - Your object here
const house = {
  rentals: [],
  addRental(rental){
    this.push(rental);
  }
}

console.log("Here are the available properties: ", this.rentals);