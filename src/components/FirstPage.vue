<template>

    <!-- Med and above layout -->
    <MqResponsive target="md+">
        <div class="centered">
            <chromaticAbbrasion :text="this.name"></ChromaticAbbrasion>
        </div>
    </MqResponsive>

    <!-- small layout -->
    <MqResponsive target="sm">
        <chromaticAbbrasion :text="this.name"></ChromaticAbbrasion>
    </MqResponsive>
</template>

<script>
import ChromaticAbbrasion from './ChromaticAbbrasion.vue';
import { MqResponsive } from "vue3-mq";

export default {
    components: {
        ChromaticAbbrasion,
        MqResponsive
    },
    data() {
        return {
            name: "Paul Copeland"
        };
    }

}
</script>

<style>
body {
    background-color: black;
    color: white;
}

.centered {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-25%, -50%);
}
</style>