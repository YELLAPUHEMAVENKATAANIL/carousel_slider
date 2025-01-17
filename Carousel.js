let image = document.querySelector(".image");
let index = 0;
let images = [
  "https://i.pinimg.com/736x/1e/d5/cc/1ed5cced8c45dd0b90d9b80f2a26a6ac.jpg",
  "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://img.freepik.com/free-photo/sunset-sky-beach-painting-background_1409-5460.jpg?semt=ais_hybrid",
  "https://wallpapercave.com/wp/wp13194405.jpg",
  "https://cdn.wallpaper.tn/large/2K-Resolution-Wallpaper-87961.jpg",
];
let last = images.length - 1;
image.setAttribute("src", images[index]);

// let id = setInterval(() => {
//   next();
// }, 3000);

function previous() {
  if (index == 0) {
    index = last;
  } else {
    index -= 1;
  }
  image.setAttribute("src", images[index]);
}

function next() {
  if (index == last) {
    index = 0;
  } else {
    index += 1;
  }
  image.setAttribute("src", images[index]);
}

// setTimeout(() => {
//   clearInterval(id);
// }, 9000);

function random_image() {
  let randomnum = Math.floor((Math.random() * 10) % 5);
  image.setAttribute("src", images[randomnum]);
}
