<template>
    <div class="chromatic-container" @mouseover="hover = true" @mouseleave="hover = false">
        {{ hover }}
        {{ strength }}
        <div class="text chromatic red" :class="{ active: hover }" :style="{'left': strength}">{{ text }}</div>
        <div class="text chromatic green" :class="{ active: hover }">{{ text }}</div>
        <div class="text chromatic blue" :class="{ active: hover }" :style="{'left': negativeStrength}">{{ text }}</div>
    </div>
</template>

<script>
const abbrasionStrength = 6;

export default {
    created() {
        window.addEventListener('mousemove', this.calculateStrength, false);
    },
    beforeDestroy() {
        window.removeEventListener('mousemove', this.calculateStrength());
    },


    methods: {
        calculateStrength(event) {
            this.strengthPercent = (window.innerHeight - event.clientY) / window.innerHeight
            console.log(this.strengthPercent)

            this.strength = ((this.strengthPercent * abbrasionStrength) + "px")
            this.negativeStrength = (-(this.strengthPercent * abbrasionStrength) + "px")

            
        },
    },
    props: {
        text: String
    },
    data() {
        return {
            hover: false,
            strength: 0,
            negativeStrength:0,
            strengthPercent: 0.0
        };
    }

}
</script>

<style>
.text {
    font-size: 128px;
    font-family: "Bebas Neue", serif;
    text-align: center;
    width: 100%;
}

.chromatic {
    mix-blend-mode: screen;
    position: absolute;

}

.chromatic.red {
    color: #ff0000;
    left: -2px;
    text-shadow: 0px 0px 10px #ff0000;

}

.chromatic.green {
    color: #00ff00;
    left: 0px;
    text-shadow: 0px 0px 10px #00ff00;
}

.chromatic.blue {
    color: #0000ff;
    left: 2px;
    text-shadow: 0px 0px 10px #0000ff;
}


.chromatic.red.active {
    text-shadow: 0px 0px 10px #ff0000;
}

.chromatic.green.active {
    text-shadow: 0px 0px 10px #00ff00;
}

.chromatic.blue.active {
    text-shadow: 0px 0px 10px #0000ff;
}
</style>