<template>
  <section class="container-fluid login">
    <div class="row">
      <div class="offset-sm-4 col-12 col-sm-4">
        <div class="login-panel">
          <form>
            <div class="form-group">
              <label>Логин</label>
              <input v-model="login" type="email" class="form-control" placeholder="Логин">
            </div>
            <div class="form-group">
              <label>Пароль</label>
              <input v-model="password" type="password" class="form-control" placeholder="Пароль">
            </div>
            <button @click.prevent="sendLogin" class="btn btn-primary">Войти</button>
            <button @click.prevent="sendRegister" class="btn btn-primary">Зарегистрироваться</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  components: {
  },

  data () {
    return {
      login: "",
      password: ""
    }
  },

  methods: {
    sendLogin () {
      axios.post('/accounts/login', {
        login: this.login,
        password: this.password
      }).then((response) => {
        this.$store.commit('setUser', {
          id: response.id,
          admin: response.admin
        })
      }).catch((err) => {
        console.log(err)
      })
    },

    sendRegister () {
      axios.post('/accounts/register', {
        login: this.login,
        password: this.password
      }).then((response) => {
        this.$store.commit('setUser', {
          id: response.id,
          admin: response.admin
        })
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss">
  .login {
    .login-panel {
      border: 1px solid #ced4da;
      padding: 20px;
    }

    button:not(:last-child) {
      margin-right: 10px;
    }
  }
</style>
