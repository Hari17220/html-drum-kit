// const wKey = document.querySelector(".w");
// const aKey = document.querySelector(".a");
// const sKey = document.querySelector(".s");
// const dKey = document.querySelector(".d");
// const jKey = document.querySelector(".j");
// const kKey = document.querySelector(".k");
// const lKey = document.querySelector(".l");

// const wClicked = () => {
//   const tone = new Audio("sounds/tom-1.mp3");
//   tone.play();
// };
// const aClicked = () => {
//   const tone = new Audio("sounds/tom-2.mp3");
//   tone.play();
// };
// const sClicked = () => {
//   const tone = new Audio("sounds/tom-3.mp3");
//   tone.play();
// };
// const dClicked = () => {
//   const tone = new Audio("sounds/tom-4.mp3");
//   tone.play();
// };
// const jClicked = () => {
//   const tone = new Audio("sounds/crash.mp3");
//   tone.play();
// };
// const kClicked = () => {
//   const tone = new Audio("sounds/kick-bass.mp3");
//   tone.play();
// };
// const lClicked = () => {
//   const tone = new Audio("sounds/snare.mp3");
//   tone.play();
// };

// document.addEventListener("keydown", (i) => {
//   if (i.key === "w") {
//     wClicked();
//   } else if (i.key === "a") {
//     aClicked();
//   } else if (i.key === "s") {
//     sClicked();
//   } else if (i.key === "d") {
//     dClicked();
//   } else if (i.key === "j") {
//     jClicked();
//   } else if (i.key === "k") {
//     kClicked();
//   } else if (i.key === "l") {
//     lClicked();
//   }
// });

// wKey.addEventListener("click", wClicked);
// aKey.addEventListener("click", aClicked);
// sKey.addEventListener("click", sClicked);

// dKey.addEventListener("click", dClicked);
// jKey.addEventListener("click", jClicked);
// kKey.addEventListener("click", kClicked);
// lKey.addEventListener("click", lClicked);

// ///////////////////////////////////////////////////////////////////////////////////////////

const numOfButtuns = document.querySelectorAll(".drum").length;
const allDrums = document.querySelectorAll(".drum");

const clicked = (value) => {
  const tone = new Audio(`sounds/${value}.mp3`);
  tone.play();
};
// -----------------This is FOR loop-------------
// for (let i = 0; i < numOfButtuns; i++) {
//   const drum = document.querySelectorAll(".drum")[i];
//   console.log(drum);
// }

function makeSound(val) {
  if (val === "w") {
    clicked("tom-1");
  } else if (val === "a") {
    clicked("tom-2");
  } else if (val === "s") {
    clicked("tom-3");
  } else if (val === "d") {
    clicked("tom-4");
  } else if (val === "j") {
    clicked("snare");
  } else if (val === "k") {
    clicked("crash");
  } else if (val === "l") {
    clicked("kick-bass");
  } else {
    return;
  }
}

// Function for the Animation
const animate = (press) => {
  document.querySelector(`.${press}`).classList.add("pressed");
  setTimeout(() => {
    document.querySelector(`.${press}`).classList.remove("pressed");
  }, 200);
};

// ----------------------This is FOR OF loop-----------------

for (const allDrum of allDrums) {
  allDrum.addEventListener("click", function () {
    const val = this.innerHTML;

    animate(val);
    makeSound(val);
  });
}

document.addEventListener("keydown", function (e) {
  animate(e.key);
  makeSound(e.key);
});
