<script>
import skill from "./skills-component.vue";
import competence from "./competences-component.vue";

export default {
  name: "introduction-component",
  components: {
    skill,
    competence,
  },
};
</script>

<template>
  <div id="presentacion">
    <div class="saludo">
      <h1>HOLA, ME LLAMO</h1>
      <h1><span>E</span>DISON <span>E</span>NRIQUE</h1>
    </div>
    <div id="aboutMe">
      <p>
        ACUTALMENTE ESTOY EN MI ULTIMO AÑO DE UN GRADO SUPERIOR DE
        <span>DESARROLLO DE APLICACIONES WEB</span>. DES DEL PRIMER MOMENTO ME APASIONÓ LA
        PROGRAMACION Y TODO LO QUE TENGA QUE VER CON ESTE MUNDO.
      </p>
      <p>
        SOY UN CHICO MUY CURIOSO, ME ENCANTA APRENDER NUEVAS COSAS Y MEJORAR MIS
        HABILIDADES TECNICAS.
      </p>
      <p>
        ESTOY ABIERTO A OPORTUNIDADES LABORALES DONDE PUEDA CONTRIBUIR, APRENDER Y CRECER.
      </p>
    </div>
  </div>

  <br />
  <div id="skills">
    <skill></skill>
  </div>
  <br />
  <div id="competence">
    <competence></competence>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap");

#skills {
  border: 1px solid black;
}

#competence {
  border: 1px solid black;
}

#aboutMe {
  font-family: "Inconsolata", monospace;
  text-align: justify;
  max-width: 800px;
}

#aboutMe {
  display: grid;
  place-items: center;
}

#aboutMe p {
  line-height: 1.6;
}

#aboutMe p:first-child span {
  color: orange;
}

#aboutMe p:last-child {
  font-weight: bold;
}
.saludo {
  font-family: "Inconsolata", monospace;
  font-size: 20px;
  display: grid;
  place-items: left;
}

.saludo h1 {
  margin-top: 0px;
  margin-bottom: 0px;
}

.saludo h1 span {
  text-shadow: 3px 0px 0px orange;
}

/*Modo noche*/
#nocheSkills {
  border: 1px solid white;
}

#nocheCompetence {
  border: 1px solid white;
}
</style>
