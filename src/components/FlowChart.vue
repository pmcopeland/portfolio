<template>
    <div>
        <button @click="getNextObj(this.curObj)"> a button </button>
        {{ this.curObj }}
    </div>
</template>
<script>
import VueAnime from 'vue-animejs';

const order = {
    "1": ["2"],
    "2": ["3", "3a"],
    "3": ["4"],
    "3a": ["3a1", "3a2"],
    "3a1": ["2"],
    "3a2": ["END"],
    "4": ["END"]
};

// let curObj = "1"

export default {
    methods: {
        getNextObj(prevObj) {
            // debugger;
            if (prevObj == "END") {
                this.curObj = "1"
            } else {
                let possibleObjs = order[prevObj]
                let nextObj = ""
                if (possibleObjs.length > 1) {
                    let objPos = Math.floor(Math.random() * (possibleObjs.length))
                    console.log(objPos)
                    nextObj = possibleObjs[objPos]
                } else {
                    nextObj = possibleObjs[0]
                }
                console.log("NextObj: ", nextObj);
                this.curObj = nextObj;
            }
        },

    },
    data() {
        return {
            curObj: "1"
        }
    }
}

</script>


