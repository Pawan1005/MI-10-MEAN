window.addEventListener("load", () => {
  let params = new URL(document.location).searchParams;
  let rollNo = params.get("rollNo");
  let name = params.get("name");
  let cls = params.get("cls");
  let mathsOne = params.get("mathsOne");
  let mathsTwo = params.get("mathsTwo");
  let scienceOne = params.get("scienceOne");
  let scienceTwo = params.get("scienceTwo");
  let history = params.get("history");
  document.getElementById("rollNo").innerHTML = rollNo;
  document.getElementById("name").innerHTML = name;
  document.getElementById("cls").innerHTML = cls;
  document.getElementById("mathsOne").innerHTML = mathsOne;
  document.getElementById("mathsTwo").innerHTML = mathsTwo;
  document.getElementById("scienceOne").innerHTML = scienceOne;
  document.getElementById("scienceTwo").innerHTML = scienceTwo;
  document.getElementById("history").innerHTML = history;
  let total =
    parseInt(mathsOne) +
    parseInt(mathsTwo) +
    parseInt(scienceOne) +
    parseInt(scienceTwo) +
    parseInt(history);
  let percentage = total / 5;
  function grade() {
    if (percentage < 40) return "No Grade";
    if (percentage < 55) return "B";
    if (percentage < 60) return "B+";
    if (percentage < 80) return "A";
    return "A+";
  }
  document.getElementById("total").innerHTML = total;
  document.getElementById("percentage").innerHTML = percentage;
  document.getElementById("grade").innerHTML = grade();
});
