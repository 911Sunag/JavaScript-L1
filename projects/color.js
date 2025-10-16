const generateBtn = document.getElementById("generate-btn");
const paletteContainer =  document.querySelector(".palette-container");
//5
// const copyBtn = document.querySelector(".copy-btn");

generateBtn.addEventListener("click", generatePalette);

//4
paletteContainer.addEventListener("click", function(e) {
    if(e.target.classList.contains("copy-btn")){
        const hexValue = e.target.previousElementSibling.textContent

        navigator.clipboard
        .writeText(hexValue)
        .then(() => showCopySuccesss(e.target))
        .catch((err) => console.log(err));
    }else if(e.target.classList.contains("color"))
        {
           const hexValue = e.target.nextElementSibling.querySelector(".hex-value").textContent;
           navigator.clipboard
           .writeText(hexValue)
           .then(() => showCopySuccesss(e.target.nextElementSibling.querySelector(".copy-btn")))
           .catch((err) => console.log(err));
    }
});


//5
function showCopySuccesss (element){
    element.classList.remove("far", "fa-copy");
    element.classList.add("fa", "fa-check");
    

    element.style.color = "#fe0000ff"
    setTimeout (() => {
       element.classList.remove("fa", "fa-check");
       element.classList.add("far", "fa-copy");
       element.style.color = "";
       alert("Saved to clipboard");
    }, 2000 )
}


// 1
function generatePalette() {
  const colors = [];

  for (let i = 0; i < 5; i++) {
    colors.push(generateRandomColor());
  }

  updatePaletteDisplay(colors);
}

// 2
function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
//3
function updatePaletteDisplay(colors) {
    const colorBoxes =  document.querySelectorAll(".color-box");

    colorBoxes.forEach((box, index) => {
        const color = colors[index];
        const colorDiv = box.querySelector(".color");
        const hexValue = box.querySelector(".hex-value");

        colorDiv.style.backgroundColor = color;
        hexValue.textContent = color;

    });

}

// generatePalette();