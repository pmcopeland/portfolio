<template>
  <div id="app">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <FirstPage></FirstPage>
      </div>
      <div class="section">
        <AboutMe></AboutMe>
      </div>
      <div class="section">
        <Projects></Projects>
      </div>
      <div class="section">
        <ContactMe></ContactMe>
      </div>
    </full-page>
  </div>
</template>

<script>
import FirstPage from "./components/FirstPage.vue";
import AboutMe from "./components/AboutMe.vue";
import Projects from "./components/Projects.vue";
import ContactMe from "./components/ContactMe.vue";
import infoForNerds from "./assets/infoForNerds.md?raw"


export default {
  components: {
    FirstPage,
    AboutMe,
    Projects,
    ContactMe
  },
  mounted() {
    console.log(infoForNerds)
  },

  data() {
    return {
      options: {
        // There is no way to use fullpage without hardcoding keys
        licenseKey: '14K1J-QQW0I-50CK9-J2TS6-NORAO',
        anchors: ['welcome', 'aboutMe', 'moreDetails', 'contactMe'],
      },

    }
  }
}
</script>

<style>

</style>
