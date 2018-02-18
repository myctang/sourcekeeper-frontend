<template>
  <section class="container-fluid new">
    <div class="row">
      <div class="col-12">
        <h2>Новый источник</h2>
      </div>
    </div>
    <form enctype="multipart/form-data" method="POST">
      <div class="row">
        <div class="col-12 col-sm-8 col-md-6 col-lg-4">
          <div class="form-group">
            <label>Название источника</label>
            <input v-model="sourcename" type="text" class="form-control" placeholder="Название">
          </div>
          <div class="form-group">
            <label>Тип</label>
            <select v-model="category" class="form-control">
              <option value="article">Статья</option>
              <option value="book">Книга</option>
              <option value="lection">Лекция</option>
            </select>
          </div>
          <div class="form-group">
            <label>Автор</label>
            <input v-model="author" type="text" class="form-control" placeholder="Автор">
          </div>
          <div class="form-group">
            <label>Ключевые слова</label>
            <input v-model="keywords" type="text" class="form-control" placeholder="Ключевые слова">
          </div>
          <div class="form-group">
            <label>Группа</label>
            <ColorPicker v-on:color-change="colorChange"/>
          </div>
          <div class="form-group">
            <label>Введите URL</label>
            <input v-model="url" class="form-control" type="text">
          </div>
          <div class="form-group">
            <label>Или выберите фаил</label>
            <input @change="fileChange($event)" type="file">
          </div>
          <button @click.prevent="addSource" type="submit" class="btn btn-primary">Добавить</button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import ColorPicker from '~/components/ColorPicker.vue'
import axios from 'axios'

export default {
  components: {
    ColorPicker
  },

  data () {
    return {
      sourcename: "",
      author: "",
      keywords: "",
      group: "article",
      file: "",
      url: "",
      category: ""
    }
  },

  methods: {
    colorChange (color) {
      this.group = color
    },

    fileChange (e) {
      this.file = e.target.files[0]

      if (this.sourcename == "") {
        this.sourcename = this.file.name
      }
    },

    addSource () {
      const config = { headers: { 'Content-Type': 'multipart/form-data' } }

      let data = new FormData()

      data.append('title', this.sourcename)
      data.append('author', this.author)
      data.append('keywords', this.keywords)
      data.append('group', this.group)
      data.append('category', this.category)
      data.append('url', this.url)
      data.append('file', this.file)

      axios.post('/sources/add', data, config).then((response) => {
        this.$store.commit('setSources', JSON.parse(response))
      }).catch((err) => {
        console.log(err)
      })
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
