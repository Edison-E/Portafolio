<script>
import introduction from "./Introduction-component.vue";
import panelInformativo from "./panelInformativo-component.vue";
import cargandoComponent from "./cargando-component.vue";

export default {
  name: "presentacion-component",
  components: {
    introduction,
    panelInformativo,
    cargandoComponent,
  },
  data() {
    return {
      contenidoVisible: false,
      botonVisible: true
    };
  },
  methods: {
    mostrarContenido() {
      this.botonVisible = false;
      this.contenidoVisible = true;
    },
  },
};
</script>

<template>
  <div class="presentacion">
    <div id="mostrarComponenteCargando">
      <cargandoComponent></cargandoComponent>
    </div>

    <panelInformativo></panelInformativo>
    <img src="../assets/post.png" id="poste" v-show="botonVisible" />
    <h1 @click="mostrarContenido" v-show="botonVisible">COMENZAR</h1>

    <div class="content" v-show="contenidoVisible">
      <introduction></introduction>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap");

.presentacion {
  margin-top: 20px;
  display: grid;
  place-items: center;
  position: relative;
}
.presentacion h1 {
  font-family: "Inconsolata", monospace;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  animation: cambio-de-color 3s infinite alternate;
  text-shadow: 1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black,
    -1px -1px 0px black;
  color: white;
}

.presentacion h1:hover {
  color: rgb(223, 213, 213);
  text-shadow: 1px 1px 0px rgb(68, 64, 64), -1px 1px 0px rgb(68, 64, 64),
    1px -1px 0px rgb(68, 61, 61), -1px -1px 0px rgb(68, 62, 62);
}

#mostrarComponenteCargando {
  visibility: hidden
}

#poste {
  width: 600px;
  height: 500px;
}

@keyframes cambio-de-color {
  0% {
    filter: drop-shadow(10px 10px 10px rgb(223, 67, 243));
  }
  25% {
    filter: drop-shadow(10px 10px 10px rgb(91, 21, 255));
  }
  50% {
    filter: drop-shadow(10px 10px 10px rgb(1, 154, 255));
  }
  75% {
    filter: drop-shadow(10px 10px 10px rgb(3, 255, 192));
  }
  100% {
    filter: drop-shadow(10px 10px 10px rgb(0, 255, 0));
  }
}
</style>
