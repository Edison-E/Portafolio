<script>
 export default {
    name: "competences-component"
 }
</script>

<template>
  <h2 id="tituloCompetencia">Competencias</h2>
  <div class="content-competence">
    <div class="primero">
      <div class="circulo_uno">RESPONSABLE</div>
      <div class="circulo_dos">ORGANIZADO</div>
    </div>

    <div class="segundo">
      <div class="circulo_tres">TRABAJO EQUIPO</div>
      <div class="circulo_cuatro">ADAPTABILIDAD</div>
    </div>
  </div>
</template>

<style>
  #tituloCompetencia {
    display: grid;
    place-items: center;
  }

  .content-competence {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content-competence .primero {
    margin-right: 25px;
  }
</style>
