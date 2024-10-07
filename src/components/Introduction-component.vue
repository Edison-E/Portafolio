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
  <div class="saludo">
    <h1>Hola</h1>
    <h1>Mi nombre es <span>E</span>dison <span>E</span>nrique</h1>
    <h1>Y soy dessarrollador web</h1>
  </div>
  <div class="aboutMe">
    <p>
      Actualmente estoy en mi ultimo año de un grado superior de desarrollo de
      aplicaciones web. Des del primer momento me apasionó la programación y todo lo que
      tenga que ver con este mundo. Soy un chico muy curioso, me encanta aprender nuevas
      cosas, y mejorar mis hablidades tecnicas.
    </p>
    <p>
      Ha sido un recorrido duro pero me encantaría aprender más y crecer con esto que
      tanto me apasiona.Estoy abierto a oportunidades laborales donde pueda contribuir,
      aprender y crecer.
    </p>
  </div>
  <br />
  <div class="skills">
    <skill></skill>
  </div>
  <br />
  <div class="competence">
    <competence></competence>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap");
.aboutMe {
  font-family: "Inconsolata", monospace;
  text-align: justify;
  max-width: 800px;
}

.aboutMe {
  display: grid;
  place-items: center;
}

.aboutMe p {
  line-height: 1.6;
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
 text-shadow: 3px 0px 0px orange
}
</style>
