const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    sleep: function () {
      console.log(`${this.name} needs a nap. Zzzz.`);
      this.isTired = 1;
    },
    play: function () {
      if (this.isTired === 10) {
        console.log(`${this.name} is to tired to play.`);
        this.sleep();
      } else {
        console.log(`Yay ${this.name} loves to play!`);
        this.isTired += 1;
      }
    }
  };
  return pet;
};

const sora = createPet("sora", "ferret");

const clover = createPet("clover", "rabbit");

const baxter = createPet("baxter", "hamster");

const cleo = createPet("cleo", "rat");

const francine = createPet("francine", "turtle");

//console.log(sora, clover, baxter, cleo, francine);

//clover.sleep();
//baxter.play();

//console.log(clover, baxter);
