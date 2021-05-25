function submitData() {
  let rollNo = document.getElementById("rollNo").value;
  let name = document.getElementById("name").value;
  let cls = document.getElementById("cls").value;
  let mathsOne = document.getElementById("mathsOne").value;
  let mathsTwo = document.getElementById("mathsTwo").value;
  let scienceOne = document.getElementById("scienceOne").value;
  let scienceTwo = document.getElementById("scienceTwo").value;
  let history = document.getElementById("history").value;
  localStorage.setItem("rollNo", rollNo);
  localStorage.setItem("name", name);
  localStorage.setItem("cls", cls);
  localStorage.setItem("mathsOne", mathsOne);
  localStorage.setItem("mathsTwo", mathsTwo);
  localStorage.setItem("scienceOne", scienceOne);
  localStorage.setItem("scienceTwo", scienceTwo);
  localStorage.setItem("history", history);
}
