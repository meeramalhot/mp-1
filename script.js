
function addition() {
  //get numbers from input
  const one = document.getElementById("first-number").value;
  const firstNum = Number(one);

  const two = document.getElementById("second-number").value;
  const twoNum = Number(two);

  //check if valid format
  if (!isNaN(firstNum) && !isNaN(twoNum)) {
    let sum = firstNum + twoNum;

    //style red if sum is negative
    if (sum < 0) {
      document.getElementById("output").innerHTML = String(sum);
      document.getElementById("output").style.color="red";

    } else {
      document.getElementById("output").innerHTML = String(sum);
      document.getElementById("output").style.color="black";
    }
  } else {
    console.log("Invalid input.");
    document.getElementById("output").innerHTML = "Please enter valid numbers.";
  }
}


function subtraction() {
  //get number from input
  const one = document.getElementById("first-number").value;
  const firstNum = Number(one);

  const two = document.getElementById("second-number").value;
  const twoNum = Number(two);

  //check if valid format
  if (!isNaN(firstNum) && !isNaN(twoNum)) {
    let minus = firstNum - twoNum;
    //style red if difference is negative
    if (minus < 0) {
      document.getElementById("output").innerHTML = String(minus);
      document.getElementById("output").style.color="red";

    } else {
      document.getElementById("output").innerHTML = String(minus);
      document.getElementById("output").style.color="black";

    }
  } else {
    document.getElementById("output").innerHTML = "Please enter valid numbers";
  }

}

function mult() {
  //get number from input
  const one = document.getElementById("first-number").value;
  const firstNum = Number(one);

  const two = document.getElementById("second-number").value;
  const twoNum = Number(two);

  //check if valid format
  if (!isNaN(firstNum) && !isNaN(twoNum)) {
    let product = firstNum * twoNum;

    //style red if product is negative
    if (product < 0) {
      document.getElementById("output").innerHTML = String(product);
      document.getElementById("output").style.color="red";

    } else {
      document.getElementById("output").innerHTML = String(product);
      document.getElementById("output").style.color="black";
    }

  } else {
    document.getElementById("output").innerHTML = "Please enter valid numbers";
  }
}

function division () {
  //get numbers from input
  const one = document.getElementById("first-number").value;
  const firstNum = Number(one);

  const two = document.getElementById("second-number").value;
  const twoNum = Number(two);

  //check if valid format
  if (!isNaN(firstNum) && !isNaN(twoNum)) {
    let division = firstNum / twoNum;

    //style red if division is negative
    if (division < 0) {
      document.getElementById("output").innerHTML = String(division);
      document.getElementById("output").style.color="red";

    } else {
      console.log("here");
      document.getElementById("output").innerHTML = String(division);
      document.getElementById("output").style.color="black";
    }
    
  } else {
    document.getElementById("output").innerHTML = "Please enter valid numbers";
  }
}

function power () {
  //get numbers from input
  const one = document.getElementById("first-number").value;
  const firstNum = Number(one);

  const two = document.getElementById("second-number").value;
  const twoNum = Number(two);
  
  //check if valid format
  if (!isNaN(firstNum) && !isNaN(twoNum)) {
    //calculate power
    let exponent = 1;
    for (let i = 0; i < twoNum; i++) {
      exponent = exponent * firstNum;
    }
    
    //style red if exponent is negative
    if (exponent < 0) {
      document.getElementById("output").innerHTML = String(exponent);
      document.getElementById("output").style.color="red";

    } else {
      document.getElementById("output").innerHTML = String(exponent);
      document.getElementById("output").style.color="black";
    }

  } else {
    document.getElementById("output").innerHTML = "Please enter valid numbers";
  }

}

function clearout() {
  //clear number by setting values to empty and reset insert numbers for output id
    document.getElementById("first-number").value = '';
    document.getElementById("second-number").value = '';
    document.getElementById("output").innerHTML = "Insert Numbers for Calculation!";
  }

