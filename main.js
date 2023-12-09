let submit = document.querySelector("button");
submit.addEventListener("click", function () {
  let coeficient1 = Number(document.querySelector("input.coeficient1").value);
  let coeficient2 = Number(document.querySelector("input.coeficient2").value);
  let coeficient3 = Number(document.querySelector("input.coeficient3").value);
  let coeficient4 = Number(document.querySelector("input.coeficient4").value);
  let coeficient5 = Number(document.querySelector("input.coeficient5").value);
  let coeficient6 = Number(document.querySelector("input.coeficient6").value);
  let maths = Number(document.querySelector("input.maths").value);
  let Geometry = Number(document.querySelector("input.Geometry").value);
  let Biology = Number(document.querySelector("input.Biology").value);
  let History = Number(document.querySelector("input.History").value);
  let Chemistry = Number(document.querySelector("input.Chemistry").value);
  let Geography = Number(document.querySelector("input.Geography").value);
  if (
    maths >= 0 &&
    maths <= 20 &&
    Geometry >= 0 &&
    Geometry <= 20 &&
    Biology >= 0 &&
    Biology <= 20 &&
    History >= 0 &&
    History <= 20 &&
    Chemistry >= 0 &&
    Chemistry <= 20 &&
    Geography >= 0 &&
    Geography <= 20
  ) {
    let Average = document.querySelector("input.Average");
    Average.value =
      (maths * coeficient1 +
        Geometry * coeficient2 +
        Biology * coeficient3 +
        History * coeficient4 +
        Chemistry * coeficient5 +
        Geography * coeficient6) /
      (coeficient1 +
        coeficient2 +
        coeficient3 +
        coeficient4 +
        coeficient5 +
        coeficient6);
    let result = Average.value;
    Average.innerHTML = result;
  } else {
    alert("Insert Numbers Within 0 to 20");
  }
});
