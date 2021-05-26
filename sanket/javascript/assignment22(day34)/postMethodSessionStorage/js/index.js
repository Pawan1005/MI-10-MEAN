function submitData() {
  let rollNo = document.getElementById("rollNo").value;
  let name = document.getElementById("name").value;
  let cls = document.getElementById("cls").value;
  let mathsOne = document.getElementById("mathsOne").value;
  let mathsTwo = document.getElementById("mathsTwo").value;
  let scienceOne = document.getElementById("scienceOne").value;
  let scienceTwo = document.getElementById("scienceTwo").value;
  let history = document.getElementById("history").value;
  sessionStorage.setItem("rollNo", rollNo);
  sessionStorage.setItem("name", name);
  sessionStorage.setItem("cls", cls);
  sessionStorage.setItem("mathsOne", mathsOne);
  sessionStorage.setItem("mathsTwo", mathsTwo);
  sessionStorage.setItem("scienceOne", scienceOne);
  sessionStorage.setItem("scienceTwo", scienceTwo);
  sessionStorage.setItem("history", history);
}
