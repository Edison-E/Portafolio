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
      <div id="tecnologiasFather">
        <h4 @click="mostrarContenidoTecnologias">TECNOLOGIAS</h4>
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
        <h4 @click="mostrarContenidoFrameworks">FRAMEWORKS</h4>
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
  display: grid;
  place-items: center;
}
.contenido {
  display: flex;
  align-items: center;
  justify-content: center;
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

.contenido table caption{
  font-weight: bold;
}

.contenido table {
  font-family: "Inconsolata", monospace;
  margin-top: 20px;
  margin-left: 25px;
}

.contenido table :last-child {
   width: 120px;
}

#otros_datos {
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inconsolata", monospace;
}

#tecnologias,
#frameworks {
  list-style-type: none;
}

#tecnologiasFather h4,
#frameworksFather h4 {
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 20px;
  color: white;
  background-color: black;
  padding: 10px 10px 10px;
}

#tecnologiasFather h4:hover,
#frameworksFather h4:hover {
  color: black;
  background-color: rgb(223, 213, 213);
}

#frameworksFather {
  margin-left: 50px;
}

#contentTecno,
#contentFrameworks {
  list-style-type: none;
}

table td {
  border-bottom: 1px solid rgb(0, 0, 0);
  padding: 10px 10px 10px;
}

table td:hover {
  color: black;
  background-color: rgb(223, 213, 213);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
