<script>
export default {
  name: "skill-component",
};
</script>

<template>
  <div class="content-skill">
    <h2>Skills</h2>
    <div class="contenido">
      <table>
        <caption>
          Front-End
        </caption>
        <tr>
          <td>JavaScript</td>
          <td>Html</td>
          <td>Css</td>
        </tr>
      </table>
      <br />
      <table>
        <caption>
          Back-End
        </caption>
        <tr>
          <td>Java</td>
          <td>Visual Basic</td>
        </tr>
      </table>
      <br />
      <table>
        <caption>
          Database Language
        </caption>
        <tr>
          <td>Sql</td>
          <td>Pl/sql</td>
        </tr>
      </table>
    </div>
    <br />
    <div id="otros_datos">
      <div id="tecno">
        <h4>TECNOLOGIAS</h4>
        <p>XML | XSD | DTD | XSLT | XPATH</p>
      </div>
      <div id="frameworks">
        <h4>FRAMEWORKS</h4>
        <p>VUE | JQUERY</p>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap");

.contenido-skill {
  text-align: justify;
  max-width: 800px;
}

.contenido-skill h2 {
  font-family: "Inconsolata", monospace;
}

.contenido-skill {
  display: grid;
  place-items: center;
}

.contenido table {
  margin-top: 20px;
}
table {
  font-family: "Inconsolata", monospace;
}
table td {
  background-color: black;
  color: white;
  border: 1px solid white;
  border-radius: 20px;
  padding: 10px 10px 10px;
}

table td:hover {
  color: black;
  background-color: rgb(223, 213, 213);
}
</style>
