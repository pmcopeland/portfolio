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
</style>
