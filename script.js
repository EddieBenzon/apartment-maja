let imgGallery = document.querySelectorAll(".grid-item");

let displayedImg = document.getElementById("current-img");

let currentNumber = 0;

let currentImg = document.getElementById("current-img");

if (imgGallery) {
  imgGallery.forEach((image) => {
    image.onclick = () => {
      let currentSrc = image.src;
      displayedImg.src = currentSrc;
      let srcSample = currentSrc.slice(-6, -4);
      if (srcSample[0] === "/") {
        currentNumber = Number(srcSample.replace("/", " "));
      } else {
        currentNumber = Number(srcSample);
      }
    };
  });
}

function nextImg() {
  if (currentNumber >= 12) return;
  displayedImg.src = `Images/${currentNumber + 1}.jpg`;
  currentNumber += 1;
}

function previousImg() {
  if (currentNumber === 0) return;
  displayedImg.src = `Images/${currentNumber - 1}.jpg`;
  currentNumber -= 1;
}

//begin writing page transitions!
