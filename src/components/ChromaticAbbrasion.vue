<template>
    <div class="chromatic-container" @mouseover="hover = true" @mouseleave="hover = false">
        {{ hover }}
        {{ strength }}
        {{ runAnimation }}
        <div class="text chromatic red" :class="{ active: hover, animate: runAnimation }"> {{ text }}</div>
        <div class="text chromatic green" :class="{ active: hover, animate: runAnimation }">{{ text }}</div>
        <div class="text chromatic blue" :class="{ active: hover, animate: runAnimation }">{{ text }}</div>
    </div>
</template>

<script>
const abbrasionStrength = 5; //offset by one, will probably revisit later

export default {
    created() {
        window.addEventListener('mousemove', this.calculateStrength, false);
    },
    beforeDestroy() {
        window.removeEventListener('mousemove', this.calculateStrength());
    },


    methods: {
        calculateStrength(event) {
            this.strengthPercent = event.clientY / window.innerHeight;
            this.strength = ((this.strengthPercent * abbrasionStrength) + 2 + "px");
            this.negativeStrength = (-(this.strengthPercent * abbrasionStrength) - 2 + "px");
        },

        triggerAnimation() {
            console.log("trigger animation")
            this.runAnimation = true;
        },
        resetAnimation() {
            console.log("reset animation")
            this.runAnimation = false;
        },

        onbodyClassChange(classAttrValue) {
            const classList = classAttrValue.split(' ');

            if (classList.includes('fp-viewing-welcome')) {
                console.log('worked! fp-viewing-welcome');
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

.red {
    color: #ff0000;
    left: -2px;
    text-shadow: 0px 0px 10px #ff0000;
}

.red.animate {
    animation: 3s ease-in-out 0s chromaticRed;
}



.green {
    color: #00ff00;
    text-shadow: 0px 0px 10px #00ff00;

}

.green.animate {
    animation: 3s ease-in-out 0s chromaticGreen;
}


.blue {
    color: #0000ff;
    left: 2px;
    text-shadow: 0px 0px 10px #0000ff;
}

.blue.animate {
    animation: 3s ease-in-out 0s chromaticBlue;
}




/* animation testing  */
@keyframes chromaticRed {
    0% {

        left: -60px;
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
        left: 60px;
        text-shadow: 0px 0px 30px #0000ff;
    }

    100% {
        left: 2px;
        text-shadow: 0px 0px 10px #0000ff;
    }
}
</style>