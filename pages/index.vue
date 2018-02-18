<template>
  <section class="container-fluid index">
    <div class="row">
      <div class="col-12">
        <form>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><span class="icon-magnifier"></span></span>
              </div>
              <input v-model="this.search" type="text" class="form-control" placeholder="Поиск">
            </div>
          </div>
          <div class="form-group">
            <div class="row">
              <div class="col-12 col-sm-2">
                <label>Группа</label>
                <ColorPicker v-on:color-change="colorChange" />
              </div>
              <div class="col-12 col-sm-5">
                <label>Тип</label>
                <select v-model="this.category" class="form-control">
                  <option value="any">Любой</option>
                  <option value="article">Статья</option>
                  <option value="book">Книга</option>
                  <option value="lection">Лекция</option>
                </select>
              </div>
              <div class="col-12 col-sm-5">
                <label>Автор</label>
                <input type="text" class="form-control">
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <table class="table">
          <thead>
            <tr>
              <th>Название</th>
              <th class="d-none d-sm-table-cell">Автор</th>
              <th class="d-none d-sm-table-cell">Тип</th>
              <th>Группа</th>
              <th v-if="this.$store.state.user.admin">Действия</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="source in $store.state.sources" v-bind:key="source.id">
              <td><a href="#">{{ source.title }}</a></td>
              <td class="d-none d-sm-table-cell">{{ source.author }}</td>
              <td class="d-none d-sm-table-cell">{{ type(source.category) }}</td>
              <td>
                <div v-bind:class="'group-mark group-' + source.group"></div>
              </td>
              <td v-if="$store.state.user.admin">
                <nuxt-link to="/edit" class="btn btn-outline-primary btn-sm" title="Редактировать"><span class="icon-pencil"></span></nuxt-link>
                <a @click.prevent="removeSource(source.id)" class="btn btn-outline-danger btn-sm" href="#" title="Удалить"><span class="icon-trash"></span></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
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
      search: "",
      group: "white",
      category: "any"
    }
  },

  methods: {
    colorChange (color) {
      this.group = color
    },

    type (category) {
      return {
        article: 'Статья',
        book: 'Книга',
        lection: 'Лекция'
      }[category]
    },

    removeSource (id) {
      axios.delete('/sources/' + id).then((response) => {
        this.$store.commit('setSources', JSON.parse(response))
      }).catch((err) => {

      })
    }
  }
}
</script>

<style lang="scss">
  table .btn {
    margin: 5px 5px;
  }

  .group-mark {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 3px 3px;
    border: solid 1px rgba(128, 128, 128, 0.568);
  }

  .group-white {
    background-color: #fff;
  }

  .group-green {
    background-color: rgb(96, 143, 104);
  }

  .group-yellow {
    background-color: rgb(212, 212, 120);
  }

  .group-red {
    background-color: rgb(202, 135, 135);
  }

  .index {
    padding-top: 10px;

    form {
      margin-bottom: 30px;
      padding: 20px;
      border: 1px solid #ced4da;
    }

    table {
      min-width: 100%;

      span {
        font-size: 16px;
      } 

      a.btn {
        width: 32px;
        height: 32px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0;
      }

      td {
        vertical-align: middle;
      }
    }
  }
</style>
