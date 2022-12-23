<template>
    <div class="container text" @mouseover="hover = true" @mouseleave="hover = false">
        <!-- ITEMS MOVE RELATIVE TO GREEN -->
        <div class="chromatic green" :class="{ active: hover, animate: runAnimation }">{{ text }} <div
                class="chromatic red" :class="{ active: hover, animate: runAnimation }"> {{ text }}</div>
            <div class="chromatic blue" :class="{ active: hover, animate: runAnimation }">{{ text }}</div>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        triggerAnimation() {
            this.runAnimation = true;
        },
        resetAnimation() {
            this.runAnimation = false;
        },

        onbodyClassChange(classAttrValue) {
            const classList = classAttrValue.split(' ');

            if (classList.includes('fp-viewing-welcome')) {
                this.triggerAnimation();
            } else {
                this.resetAnimation();
            }
        }
    },
    mounted() {
        this.observer = new MutationObserver(mutations => {
            for (const m of mutations) {
                const newValue = m.target.getAttribute(m.attributeName);
                this.$nextTick(() => {
                    this.onbodyClassChange(newValue, m.oldValue);
                });
            }
        });

        this.observer.observe(document.body, {
            attributes: true,
            attributeOldValue: true,
            attributeFilter: ['class'],
        });
    },
    beforeDestroy() {
        this.observer.disconnect();
    },


    props: {
        text: String

    },
    data() {
        return {
            hover: false,
            strength: 0,
            negativeStrength: 0,
            strengthPercent: 0.0,
            runAnimation: true

        };
    }

}
</script>

<style>
.container {
    position: relative;
    display: relative;
}


.text {
    font-size: 8em;
    font-family: "Bebas Neue", serif;
    text-align: center;
    white-space: nowrap;
}

.chromatic {
    mix-blend-mode: screen;

}

.red {
    color: #ff0000;
    left: -2px;
    top: 0px;
    text-shadow: 0px 0px 10px #ff0000;
    position: absolute
}

.red.animate {
    animation: 2s ease-in-out 0s chromaticRed;
}



.green {
    color: #00ff00;
    left: 0;
    text-shadow: 0px 0px 10px #00ff00;
    position: relative
}

.green.animate {
    animation: 2s ease-in-out 0s chromaticGreen;
}


.blue {
    color: #0000ff;
    left: 2px;
    top: 0px;
    text-shadow: 0px 0px 10px #0000ff;
    position: absolute
}

.blue.animate {
    animation: 2s ease-in-out 0s chromaticBlue;
}




/* animation testing  */
@keyframes chromaticRed {
    0% {

        left: -8px;
        text-shadow: 0px 0px 30px #ff0000;
    }

    100% {
        left: -2px;
        text-shadow: 0px 0px 10px #ff0000;

    }
}

@keyframes chromaticGreen {
    0% {
        text-shadow: 0px 0px 30px #00ff00;
    }

    100% {
        text-shadow: 0px 0px 10px #00ff00;
    }
}

@keyframes chromaticBlue {
    0% {
        left: 8px;
        text-shadow: 0px 0px 30px #0000ff;
    }

    100% {
        left: 2px;
        text-shadow: 0px 0px 10px #0000ff;
    }
}
</style>