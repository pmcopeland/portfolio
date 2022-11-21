<template>
        <div class="text chromatic red">{{ text }}</div>
        <div class="text chromatic green">{{ text }}</div>
        <div class="text chromatic blue">{{ text }}</div>
</template>

<script>
export default {
    props: {
        text: String
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
    left: -5px;
    text-shadow: 0px 0px 5px #ff0000;

}

.chromatic.green {
    color: #00ff00;
    left: 0px;
    text-shadow: 0px 0px 5px #00ff00;
}

.chromatic.blue {
    color: #0000ff;
    left: 5px;
    text-shadow: 0px 0px 5px #0000ff;
}

</style>