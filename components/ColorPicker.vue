<template>
  <div class="color-picker-comp">
    <div @click="changeColor('white')" v-bind:class="'color color-white ' + (color == 'white' ? 'color-active' : '')"></div>
    <div @click="changeColor('green')" v-bind:class="'color color-green ' + (color == 'green' ? 'color-active' : '')"></div>
    <div @click="changeColor('red')" v-bind:class="'color color-red ' + (color == 'red' ? 'color-active' : '')"></div>
    <div @click="changeColor('yellow')" v-bind:class="'color color-yellow ' + (color == 'yellow' ? 'color-active' : '')"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        color: "white",
      }
    },

    methods: {
      changeColor (color) {
        this.color = color
        this.$emit("color-change", color)
      }
    }
  }
</script>

<style lang="scss">
  .color-picker-comp {
    .color {
      display: inline-block;
      cursor: pointer;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: solid 1px rgba(128, 128, 128, 0.568);
      margin: 3px 3px;
    }

    .color-white {
      background-color: white;
    }

    .color-green {
      background-color: rgb(96, 143, 104);
    }

    .color-red {
      background-color: rgb(202, 135, 135);
    }

    .color-yellow {
      background-color: rgb(212, 212, 120);
    }

    .color-active {
      border-color: #2C3E50;
      border-width: 2px;
    }
  }
</style>
