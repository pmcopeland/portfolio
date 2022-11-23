<template>
    <MqResponsive target="md">
        <chromaticAbbrasion text="Sample Text" ></ChromaticAbbrasion>
    </MqResponsive>
</template>

<script>
import ChromaticAbbrasion from './ChromaticAbbrasion.vue';
import { MqResponsive } from "vue3-mq";

export default {
    components: {
        ChromaticAbbrasion,
    MqResponsive},
    
}
</script>

<style>
body {
    background-color: black;
    color: white;
}
</style>