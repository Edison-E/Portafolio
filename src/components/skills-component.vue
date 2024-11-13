<script>
export default {
  name: "skill-component",
  data() {
    return {
      listaVisibleFrameworks: false,
      listaVisibleTecnologias: false,
    };
  },
  methods: {
    mostrarContenidoFrameworks() {
      if (this.listaVisibleFrameworks == false) {
        this.listaVisibleFrameworks = true;
      } else {
        this.listaVisibleFrameworks = false;
      }
    },
    mostrarContenidoTecnologias() {
      if (this.listaVisibleTecnologias == false) {
        this.listaVisibleTecnologias = true;
      } else {
        this.listaVisibleTecnologias = false;
      }
    },
  },
};
</script>

<template>
  <h2 id="tituloSkills">Skills</h2>
  <div class="content-skill">
    <div class="contenido">
      <table>
        <caption>
          Front-End
        </caption>
        <tr>
          <td id="cambioBottom">JavaScript</td>
          <td>100%</td>
        </tr>
        <tr>
          <td id="cambioBottom">Html</td>
          <td>100%</td>
        </tr>
        <tr>
          <td id="cambioBottom">Css</td>
          <td>100%</td>
        </tr>
      </table>

      <table>
        <caption>
          Back-End
        </caption>
        <tr>
          <td id="cambioBottom">Java</td>
          <td>100%</td>
        </tr>
        <tr>
          <td id="cambioBottom">Visual Basic</td>
          <td>50%</td>
        </tr>
      </table>

      <table>
        <caption>
          Database Language
        </caption>
        <tr>
          <td id="cambioBottom">Sql</td>
          <td>100%</td>
        </tr>
        <tr>
          <td id="cambioBottom">Pl/sql</td>
          <td>100%</td>
        </tr>
      </table>
    </div>
    <br />

    <div id="otros_datos">
      <div id="category">
        <h4 @click="mostrarContenidoTecnologias" id="TitleCategory">TECNOLOGIAS</h4>
        <ul id="tecnologias">
          <li>
            <transition>
              <ul id="contentTecno" v-show="listaVisibleTecnologias">
                <li>XML</li>
                <li>XSD</li>
                <li>DTD</li>
                <li>XSLT</li>
                <li>XPATH</li>
              </ul>
            </transition>
          </li>
        </ul>
      </div>

      <div id="frameworksFather">
        <h4 @click="mostrarContenidoFrameworks" id="TitleFrameworks">FRAMEWORKS</h4>
        <ul id="frameworks">
          <li>
            <transition>
              <ul id="contentFrameworks" v-show="listaVisibleFrameworks">
                <li>VUE</li>
                <li>JQUERY</li>
              </ul>
            </transition>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap");
#tituloSkills {
  font-family: "Inconsolata", monospace;
  border-bottom: 1px solid black;
  width: 100px;
  text-align: center;
  margin: auto;
  margin-bottom: 20px;
  margin-top: 20px;
}

#TitleCategory,
#TitleFrameworks {
  background-color: black;
  color: white;
  padding: 10px;
}

#TitleCategory:hover,
#TitleFrameworks:hover {
  background-color: rgb(151, 147, 147);
  color: rgb(2, 2, 2);
}

.contenido {
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  gap: 20px;
}

.contenido-skill {
  max-width: 800px;
  font-family: "Inconsolata", monospace;
}

.contenido-skill h2 {
  font-family: "Inconsolata", monospace;
}

.contenido-skill {
  display: grid;
  place-items: center;
}

.contenido table caption {
  background-color: rgb(152, 149, 149);
  color: rgb(0, 0, 0);
  font-weight: bold;
  padding: 5px;
}

.contenido table {
  width: 150px;
  font-family: "Inconsolata", monospace;
  margin-left: 5px;
  border: 1px solid;
}

.contenido table :last-child {
  width: 120px;
}

#category,
#frameworksFather {
  margin-left: 25px;
}

#otros_datos {
  margin-left: 260px;
  margin-top: 15px;
  display: flex;
  font-family: "Inconsolata", monospace;
}

#tecnologias,
#frameworks {
  list-style-type: none;
}

#contentTecno,
#contentFrameworks {
  list-style-type: none;
}

table td {
  /* border-bottom: 1px solid rgb(0, 0, 0);*/
  padding: 10px 10px 10px;
}

table td:hover {
  color: black;
  background-color: rgb(223, 213, 213);
  cursor: pointer;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/* Modo Noche */
#tituloSkillsNoche {
  font-family: "Inconsolata", monospace;
  border-bottom: 1px solid rgb(255, 255, 255);
  width: 100px;
  text-align: center;
  margin: auto;
  margin-bottom: 20px;
  margin-top: 20px;
}

#tituloCompetenciaNoche {
  font-family: "Inconsolata", monospace;
  border-bottom: 1px solid rgb(255, 255, 255);
  width: 200px;
  text-align: center;
  margin: auto;
  margin-bottom: 20px;
  margin-top: 20px;
}

#TitleCategoryNoche,
#TitleFrameworksNoche {
  background-color: white;
  color: black;
  padding: 10px;
  font-family: "Inconsolata", monospace;
}

#TitleCategoryNoche:hover,
#TitleFrameworksNoche:hover {
  background-color: rgb(206, 190, 190);
  color: black;
}
</style>
