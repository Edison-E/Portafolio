<script>
export default {
    name: "cargando-component"
}

</script>
<template>
  <div class="mensajeCargando">
   <div class="spinner"></div>
  </div>
</template>
<style>

.mensajeCargando {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.7);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border-left-color: rgb(0, 51, 255);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
