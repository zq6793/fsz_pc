<!-- 组件说明 -->
<template>
  <div class="loading">
    <div class="container">
      <div class="canvas canvas2">
        <div class="spinner2"></div>
        <div class="hourHand"></div>
        <div class="dot"></div>
      </div>
    </div>
  </div>
</template>

<script>
//import x from ''
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.loading {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* background: url(../../assets/img/loading.gif) no-repeat center; */
  /* background-size:120% 100%;  */
}
body {
  background: #263238;
  background-size: cover;
  margin: 0;
  padding-top: 5em;
  padding-bottom: 5em;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 650px;
  min-width: 200px;
}

.canvas {
  align-items: center;
  background: #eeeeee;
  border-radius: 50%;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  height: 10em;
  justify-content: center;
  margin: 1em 1em 2em 1em;
  width: 10em;
}

@keyframes spinnerOne {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/* Spinner 1 ends here */

/* Spinner 2 starts here */
.canvas2 {
  position: relative;
}

.spinner2 {
  animation: spinnerTwo 1s linear infinite;
  background: #4db6ac;
  border-radius: 100px;
  height: 3em;
  transform-origin: top;
  position: absolute;
  top: 50%;
  width: 0.22em;
}

.hourHand {
  animation: spinnerTwo 7s linear infinite;
  background: #4db6ac;
  border-radius: 100px;
  height: 2em;
  transform-origin: top;
  position: absolute;
  top: 50%;
  width: 0.2em;
}

.dot {
  background: #4db6ac;
  border-radius: 100%;
  height: 0.5em;
  width: 0.5em;
}

@keyframes spinnerTwo {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spinnerThree {
  0%,
  35% {
    background: #4db6ac;
    transform: scale(1);
  }
  20%,
  50% {
    background: #80cbc4;
    transform: scale(1.3);
  }
}

@keyframes spinnerFour {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spinnerFive {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(60deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes fall {
  0% {
    transform: translateY(-15px);
  }
  25%,
  75% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-15px);
  }
}
/* Spinner 6 ends here */

@media (max-width: 600px) {
  .container {
    align-items: center;
    flex-direction: column;
  }
  .canvas {
    margin: 1em;
  }
}
</style>