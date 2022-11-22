<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bebas+Neue">
  <div id="app">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <FirstPage></FirstPage>
      </div>
      <div class="section">
        <AboutMe></AboutMe>
      </div>
      <div class="section">
        <MoreDetails></MoreDetails>
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
import MoreDetails from "./components/MoreDetails.vue";
import ContactMe from "./components/ContactMe.vue";

export default {
  components: {
    FirstPage,
    AboutMe,
    MoreDetails,
    ContactMe
  },

  data() {
    return {
      options: {
        // There is no way to use fullpage without hardcoding keys
        licenseKey: '14K1J-QQW0I-50CK9-J2TS6-NORAO',
        anchors: ['welcome', 'aboutMe', 'moreDetails', 'contactMe'],
        scrollBar: true,
      },

    }
  }
}
</script>

<style>

</style>
