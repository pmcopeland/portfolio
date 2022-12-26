<template>
    <div>
        <button @click="getNextObj(this.curObj)"> a button </button>
        {{ this.curObj }}
        {{ this.timer }}
        <br>
        {{ this.visitedObj }}
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
    "RESET": ["q1"], // HTML4 does not allow to select el IDs that are only numbers
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
    "q6": ["RESET"],
};

const activeColor = "#444444"
const vistedColor = "#222222"



export default {
    components: {
        FlowChartSVG,
        Anime
    },
    mounted: function () {
        this.$nextTick(function () {
            this.getNextObj(this.curObj)
        })
    },
    beforeDestroy() {
        clearInterval(this.timer)
    },
    methods: {
        animateArrow(prevObj, nextObj) {
            console.log(prevObj, nextObj)
            let target = "#" + prevObj + "t" + nextObj;
            let items = document.querySelector(target).childNodes

            if (items) {
                items.forEach(async (item) => {
                    console.log(item)
                    console.log(item.getTotalLength())

                    let animationDur = 500 * (item.getTotalLength() / 100)

                    console.log(animationDur)

                    Anime({
                        targets: document.getElementById(item.id),
                        strokeDashoffset: [Anime.setDashoffset, 0],
                        easing: 'linear',
                        duration: animationDur,
                        direction: 'alternate',
                        loop: false
                    })
                    setTimeout(() => {
                        console.log(prevObj, nextObj)
                        this.visitedSVGElement(prevObj);
                        this.activeSVGElement(nextObj);
                        this.getNextObj(this.curObj)
                    },
                        animationDur + 500)

                })

            }

        },
        activeSVGElement(obj) {
            document.querySelector("#" + obj).classList.add("active")
        },
        visitedSVGElement(obj) {
            document.querySelector("#" + obj).classList.replace("active", "visited")
        },
        resetFlowChart() {
            setTimeout(() => {
                this.visitedObj.forEach(obj => document.querySelector("#" + obj).classList.remove("visited"))
                this.visitedObj.forEach(obj => document.querySelector("#" + obj).classList.remove("active"))
                this.visitedObj = []
                this.getNextObj("q1")
                this.activeSVGElement("q1");
            }, 1500)
        },
        getNextObj(prevObj) {

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
            this.visitedObj.push(prevObj)


            if (this.curObj != "RESET") {
                this.animateArrow(prevObj, nextObj)
            } else {
                this.resetFlowChart()
            }
        }
    },
    data() {
        return {
            curObj: "q1",
            visitedObj: [],
            timer: null
        }
    }
}

</script>

<style>
.visited {
    fill: #222222 !important;
}

.active {
    fill: #444444 !important;
}
</style>
