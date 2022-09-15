<template>
<div>
  <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section"><FirstPage></FirstPage></div>
    <div class="section"><AboutMe></AboutMe></div>
    <div class="section"><MoreDetails></MoreDetails></div>
    <div class="section"><ContactMe></ContactMe></div>
  
  </full-page>
</div>
</template>

<script setup>
import FirstPage from "./components/FirstPage.vue";
import AboutMe from "./components/AboutMe.vue";
import MoreDetails from "./components/MoreDetails.vue";
import ContactMe from "./components/ContactMe.vue";

  
  </script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
