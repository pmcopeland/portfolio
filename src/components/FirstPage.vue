<template>

    <!-- Med and above layout -->
    <MqResponsive target="md+" class="desktop-container">
        <chromaticAbbrasion :text="this.name"></ChromaticAbbrasion>
        <div class="infobox">
            <h1>Hey there!</h1>
            <p>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
                visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used
                as a placeholder before final copy is available. It is also used to temporarily replace text in a
                process called greeking, which allows designers to consider the form of a webpage or publication,
                without the meaning of the text influencing the design.</p>
        </div>

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

}

.h1 {
    margin: 5% !important
}

.desktop-container {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    height: 100% !important;

}

.infobox {
    font-family: "Roboto", serif;
    background-color: #2C3333;
    width: 33%;
    min-width: 50rem;
    height: fit-content;
    line-height: 1.8;
    padding: 2rem;
    border-radius: 15px;
}
</style>