<template>
  <div class="demo">
      <p>领导</p>
      <li>部门1</li>
      <li>部门2</li>
      <li>部门3</li>
      <li>部门4</li>
      <li>部门5</li>
      <li>部门6</li>
      <li>部门7</li>
      <li>部门8</li>
      <li>部门9</li>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {}
};
</script>

<style scoped>
p {
  width: 100px;
  height: 100px;
  background-color: rgb(247, 80, 80);
  border-radius: 100%;
  position: absolute;
  padding: 0;
  line-height: 100px;
  list-style-type: none;
  text-align: center;
  left:700px;
  top:425px
}
li {
  list-style-type: none;
  width: 60px;
  height: 60px;
  position: absolute;
  background-color: rgb(116, 116, 74);
  border-radius: 50%;
  line-height: 60px;
  text-align: center;
  left: 50%;
  margin-left: -20px;
  margin-top: 100px;
  margin: 0 auto;
}
li:nth-of-type(2) {
  transform: rotate(22.5deg);
  transform-origin: 20px 220px;
}
li:nth-of-type(3) {
  transform: rotate(45deg);
  transform-origin: 20px 220px;
}
li:nth-of-type(4) {
  transform: rotate(67.5deg);
  transform-origin: 20px 220px;
}
li:nth-of-type(5) {
  transform: rotate(90deg);
  transform-origin: 20px 220px;
}
li:nth-of-type(6) {
  transform: rotate(112.5deg);
  transform-origin: 20px 220px;
}
li:nth-of-type(7) {
  transform: rotate(135deg);
  transform-origin: 20px 220px;
}
li:nth-of-type(8) {
  transform: rotate(157.5deg);
  transform-origin: 20px 220px;
}
li:nth-of-type(9) {
  transform: rotate(180deg);
  transform-origin: 20px 220px;
}
</style>
