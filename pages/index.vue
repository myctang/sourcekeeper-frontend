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
              <input type="text" class="form-control" placeholder="Поиск">
            </div>
          </div>
          <div class="form-group">
            <div class="row">
              <div class="col-12 col-sm-4">
                <label>Группа</label>
                <input type="text" class="form-control" placeholder="Группа">
              </div>
              <div class="col-12 col-sm-4">
                <label>Тип</label>
                <select class="form-control">
                  <option>Статья</option>
                  <option>Книга</option>
                  <option>Лекция</option>
                </select>
              </div>
              <div class="col-12 col-sm-4">
                <label>Язык</label>
                <select class="form-control">
                  <option>Английский</option>
                  <option>Русский</option>
                </select>
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
            <th>Название</th>
            <th class="d-none d-sm-table-cell">Автор</th>
            <th class="d-none d-sm-table-cell">Тип</th>
            <th>Группа</th>
            <th>Действия</th>
          </thead>
          <tbody>
            <tr v-for="source in $store.state.sources" v-bind:key="source.id">
              <td><a href="#">{{ source.title }}</a></td>
              <td class="d-none d-sm-table-cell">{{ source.author }}</td>
              <td class="d-none d-sm-table-cell">{{ source.category }}</td>
              <td>
                <div v-bind:class="'group-mark group-' + source.group"></div>
              </td>
              <td>
                <a class="btn btn-outline-primary btn-sm" href="#" title="Редактировать"><span class="icon-pencil"></span></a>
                <a class="btn btn-outline-danger btn-sm" href="#" title="Удалить"><span class="icon-trash"></span></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      group: "",
      category: 0,
      language: 0
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
    background-color: rgb(18, 136, 38);
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
