console.log("it works ");

function adult() {
  const ageinput = document.getElementById("age").value;

  if (ageinput >= 18) {
    console.log("sie sind über18");
  } else {
    console.log("sie sind unter 18");
  }
}

function wetterqualitat() {
  const wetter = document.getElementById("wetter-qualitat").value;

  if (wetter <= 10) {
    console.log("schlecht und kalt");
  } else {
    console.log("gut und sonnig");
  }
}
