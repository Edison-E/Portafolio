<script>
import cargandoComponenet from "./cargando-componenet.vue";
export default {
  name: "panelInformativo-component",
  components: cargandoComponenet,
  methods: {
    cambiarColorFondo() {
      
      var estilos = window.getComputedStyle(document.body);
      var colorFondoActual = estilos.backgroundColor;
      var colorTextoActual = estilos.color;

      if (
        colorFondoActual == "rgb(255, 255, 255)" &&
        colorTextoActual == "rgb(0, 0, 0)"
      ) {
        document.body.style.backgroundColor = "Black";
        document.body.style.color = "white";
        document.getElementById("modoNocturnoDia").innerText = "☼";
      } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.getElementById("modoNocturnoDia").innerText = "☽";
      }
    },
    redirectLinkedin() {
      window.open("https://www.linkedin.com/in/edisonenriquedev", "_blank");
    },
    mostrarManga() {
      const data = null;

      const xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
          console.log(this.responseText);
        }
      });

      xhr.open(
        "GET",
        "https://mangaverse-api.p.rapidapi.com/manga/fetch?page=1&genres=Harem%2CFantasy&nsfw=true&type=all"
      );
      xhr.setRequestHeader(
        "x-rapidapi-key",
        "dfa44317abmshf4032bd655040a8p1d862djsn96130dd57b9f"
      );
      xhr.setRequestHeader("x-rapidapi-host", "mangaverse-api.p.rapidapi.com");

      xhr.send(data);
    },
    toggleCargandoComponent() {
      this.mostrarCargandoComponent = !this.mostrarCargandoComponent;
    }
  },
};
</script>

<template>
  <div class="panel_informativo">
    <button @click="cambiarColorFondo" id="modoNocturnoDia">☽</button>
    <br /><br />
    <button @click="redirectLinkedin">In</button>
    <br /><br />
    <button @click="mostrarManga">M</button>
    <cargandoComponenet v-if="mostrarCargandoComponent"></cargandoComponenet>
  </div>
</template>

<style>
.panel_informativo {
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 0 10px 10px 0;
  box-shadow: 2px 2px 10px rgb(0, 0, 0, 0.2);
}

.panel_informativo button {
  width: 40px;
  height: 40px;
  background-color: black;
  color: white;
  border: 1px solid;
  border-radius: 50%;
  font-size: 25px;
}

.panel_informativo button:hover {
  background-color: white;
  border: 2px solid black;
  color: black;
}
</style>
