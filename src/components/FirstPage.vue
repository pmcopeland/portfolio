<template>

    <!-- Med and above layout -->
    <MqResponsive target="md+" class="desktop-container">
            <chromaticAbbrasion :text="this.name"></ChromaticAbbrasion>
            <div style="background-color: #2C3333; width:33%; height:90%" :v-html="PageText"></div>

    </MqResponsive>

    <!-- small layout -->
    <MqResponsive target="sm">
        <chromaticAbbrasion :text="this.name"></ChromaticAbbrasion>
            <div style="background-color: #2C3333; width:33%; height:90%"> sample div lol</div>
    </MqResponsive>
</template>

<script>
import ChromaticAbbrasion from './ChromaticAbbrasion.vue';
import { MqResponsive } from "vue3-mq";
import Copy from "../assets/pageText/home.html?raw";

export default {
    components: {
        ChromaticAbbrasion,
        MqResponsive
    },
    data() {
        return {
            name: "Paul Copeland",
            PageText: Copy
        };
    }

}
</script>

<style>
body {
    background-color: #181818;
    color: white;
    height: max-content;
    
}

.desktop-container {
    display: flex;
    flex:1;
    flex-direction: column;
    gap:20px;
    align-items: center;
    justify-content: center;
    height: 100% !important;

}
</style>