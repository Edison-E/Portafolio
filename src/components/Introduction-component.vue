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
  <div class="aboutMe">
    <p>
      <strong>Hola mi nombre es Edison Enrique</strong>
      Actualmente estoy en mi ultimo año de un grado superior de desarrollo de
      aplicaciones web. Des del primer momento me apasionó la programación y todo lo que
      tenga que ver con este mundo. Soy un chico muy curioso, me encanta aprender nuevas cosas, y mejorar mis hablidades tecnicas.
       
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
</style>
