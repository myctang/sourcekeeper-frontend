<template>
  <section class="container-fluid new">
    <div class="row">
      <div class="col-12">
        <h2>Редактировать источник</h2>
      </div>
    </div>
    <form enctype="multipart/form-data" method="POST">
      <div class="row">
        <div class="col-12 col-sm-8 col-md-6 col-lg-4">
          <div class="form-group">
            <label>Название источника</label>
            <input v-model="this.sourcename" type="text" class="form-control" placeholder="Название">
          </div>
          <div class="form-group">
            <label>Автор</label>
            <input v-model="this.author" type="text" class="form-control" placeholder="Автор">
          </div>
          <div class="form-group">
            <label>Ключевые слова</label>
            <input v-model="this.keywords" type="text" class="form-control" placeholder="Ключевые слова">
          </div>
          <div class="form-group">
            <label>Группа</label>
            <ColorPicker v-on:color-change="colorChange"/>
          </div>
          <button @click.prevent type="submit" class="btn btn-primary">Сохранить</button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import ColorPicker from '~/components/ColorPicker.vue'

export default {
  components: {
    ColorPicker
  },

  data () {
    return {
      sourcename: "",
      author: "",
      keywords: "",
      group: ""
    }
  },

  methods: {
    colorChange (color) {
      this.group = color
    }
  }
}
</script>

<style lang="scss">
  .new {
    input[type='file'] {
      display: block;
    }
  }
</style>
