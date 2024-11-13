export function cambioColor(colorFondoActual, colorTextoActual) {
  if (
    colorFondoActual == "rgb(255, 255, 255)" &&
    colorTextoActual == "rgb(0, 0, 0)"
  ) {
    document.body.style.backgroundColor = "Black";
    document.body.style.color = "white";
    document.getElementById("modoNocturnoDia").innerText = "☼";

    document.getElementById("tituloSkills").id = "tituloSkillsNoche";
    document.getElementById("tituloCompetencia").id = "tituloCompetenciaNoche";
    document.getElementById("TitleFrameworks").id = "TitleFrameworksNoche";
    document.getElementById("TitleCategory").id = "TitleCategoryNoche";
    document.getElementById("skills").id = "nocheSkills";
    document.getElementById("competence").id = "nocheCompetence";

  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementById("modoNocturnoDia").innerText = "☽";

    document.getElementById("tituloSkillsNoche").id = "tituloSkills";
    document.getElementById("tituloCompetenciaNoche").id = "tituloCompetencia";
    document.getElementById("TitleFrameworksNoche").id = "TitleFrameworks";
    document.getElementById("TitleCategoryNoche").id = "TitleCategory";
    document.getElementById("nocheSkills").id = "skills";
    document.getElementById("nocheCompetence").id = "competence";
  }
}


export function mostrarComponenteVisible(esVisible, mostrarComponenteCargando) {
  if (esVisible == "hidden") {
    mostrarComponenteCargando.style.visibility = "visible";
  } else {
    mostrarComponenteCargando.style.visibility = "hidden";
  }
}