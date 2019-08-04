<!-- 组件说明 -->
<template>
  <div class="error">
    <div class="box"></div>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
  }
};
</script>

<style scoped>
body {
  width: 100%;
  height: 100%;
  position: fixed;
  padding: 0;
  margin: 0;
}
.error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  background: url(../../assets/img/404.jpg) no-repeat center;
  background-size: 600px 400px;
}
.box {
}
</style>