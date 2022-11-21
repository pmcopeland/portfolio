<template>
    <div class="chromatic-container" @mouseover="hover = true" @mouseleave="hover = false">
        {{ hover }}
        <div class="text chromatic red" :class="{ active: hover }">{{ text }}</div>
        <div class="text chromatic green" :class="{ active: hover }" >{{ text }}</div>
        <div class="text chromatic blue" :class="{ active: hover }">{{ text }}</div>
    </div>
</template>

<script>
export default {
    props: {
        text: String
    },
    data() {
    return {
      hover: false,
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
    text-shadow: 0px 0px 5px #ff0000;

}

.chromatic.green {
    color: #00ff00;
    left: 0px;
    text-shadow: 0px 0px 5px #00ff00;
}

.chromatic.blue {
    color: #0000ff;
    left: 2px;
    text-shadow: 0px 0px 5px #0000ff;
}


.chromatic.red.active {
    left: -5px
}
.chromatic.green.active {
    left: 0px
}
.chromatic.blue.active {
    left: 5px
}

</style>