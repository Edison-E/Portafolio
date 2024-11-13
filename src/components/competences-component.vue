<script>
export default {
  name: "competences-component",
};
</script>

<template>
  <h2 id="tituloCompetencia">Competencias</h2>
  <div class="content-competence">
    <div class="primero">
      <p>RESPONSABLE</p>
      <p>ORGANIZADO</p>
    </div>

    <div class="segundo">
      <p>TRABAJO EQUIPO</p>
      <p>ADAPTABILIDAD</p>
    </div>
  </div>
</template>

<style>
#tituloCompetencia {
  font-family: "Inconsolata", monospace;
  border-bottom: 1px solid black;
  width: 200px;
  text-align: center;
  margin: auto;
  margin-bottom: 20px;
  margin-top: 20px
}

.content-competence {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inconsolata", monospace;
}

.content-competence .primero {
  margin-right: 25px;
}

.primero p:hover,
.segundo p:hover {
  color: black;
  background-color: rgb(223, 213, 213);
  cursor: pointer;
}

.primero p,
.segundo p {
  border-bottom: 1px solid rgb(0, 0, 0);
  padding: 10px 10px 10px;
}
</style>
