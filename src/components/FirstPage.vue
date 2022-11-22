<template>
    <div style="height: 100%">
        <chromaticAbbrasion text="Sample Text" :triggerAnimation="triggerAnimation"></ChromaticAbbrasion>
        <chromaticAbbrasion text="Paul Copeland"></ChromaticAbbrasion>
    </div>
</template>

<script>
import ChromaticAbbrasion from './ChromaticAbbrasion.vue';

export default {
    components: { ChromaticAbbrasion },
    
}
</script>

<style>
body {
    background-color: black;
    color: white;
}
</style>