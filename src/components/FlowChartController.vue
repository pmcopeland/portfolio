<template>
    <div>
        <button @click="getNextObj(this.curObj)"> a button </button>
        {{ this.curObj }}
        <br>
        <FlowChartSVG />
    </div>
</template>
<script>
import Anime from 'animejs';
import { svg } from 'd3-fetch';
import FlowChartSVG from './FlowChartSVG.vue';


/* TEST DRAWING */

// const order = {
//     "1": ["2"],
//     "2": ["3", "3a"],
//     "3": ["4"],
//     "3a": ["3a1", "3a2"],
//     "3a1": ["2"],
//     "3a2": ["END"],
//     "4": ["END"]
// };



/* Flow */
const order = {
    "START": ["q1"], // HMTL4 does not allow to select el IDs that are only numbers
    "q1": ["q2"],    // so everything starts with q
    "q2": ["q3", "q2A"],
    "q2A": ["q2A2"],
    "q2A2": ["q5"],
    "q3": ["q4", "q3A"],
    "q3A": ["q3A2", "q1"],
    "q3A2": ["q3A3"],
    "q3A3": ["q5"],
    "q4": ["q5"],
    "q5": ["q6"],
    "q6": ["END"]
};





export default {
    components: {
        FlowChartSVG,
        svg
    },
    methods: {
        highlightSVGElement(prevObj, nextObj) {
            try {
                document.querySelector("#" + prevObj).style.fill = "#333333";
            } catch { }
            try {
                document.querySelector("#" + nextObj).style.fill = "white";
            } catch { }
        },
        getNextObj(prevObj) {
            // debugger;
            if (prevObj == "END") {
                this.curObj = "START"
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
                this.highlightSVGElement(prevObj, nextObj)
            }
        },
    },
    data() {
        return {
            curObj: "START"
        }
    }
}

</script>

<style>
.visited {
    fill: darkgrey;
}

.active {
    fill: white;
}
</style>
