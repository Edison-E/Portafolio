<script>
export default {
  name: "panelInformativo-component",
  methods: {
    cambiarColorFondo() {
      alert("cambiando...");

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
    redirectLinkedin(){
     window.open("www.linkedin.com/in/edisonenriquedev", "LinkedinEdison")
    }
  },
};
</script>

<template>
  <div class="panel_informativo">
    <button @click="cambiarColorFondo" id="modoNocturnoDia">☽</button>
    <br><br>
    <button @click="redirectLinkedin">In</button>
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
