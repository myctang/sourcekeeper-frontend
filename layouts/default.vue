<template>
  <div>
    <nav class="navbar navbar-expand-lg justify-content-between navbar-dark bg-primary">
      <nuxt-link to="/" class="navbar-brand">SourceKeeper</nuxt-link>
      <nuxt-link v-if="!this.$store.state.user.id" class="navbar-login-link" to="/login">Войти</nuxt-link>
      <div v-if="this.$store.state.user.id" class="user-buttons">
        <nuxt-link v-if="this.$store.state.user.admin" to="/new" class="btn btn-success">Новый источник</nuxt-link>
        <nuxt-link to="/accounts/logout" class="btn btn-success">Выйти</nuxt-link>
      </div>
    </nav>
    <nuxt/>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
  .navbar {
    margin-bottom: 20px;
  }

  .navbar-login-link {
    color: white;
  }

  .navbar-login-link:hover {
    color: white;
  }

  nav .user-buttons {
    .btn:not(:last-child) {
      margin-right: 10px;
    }
  }

  .block {
    background-color: #efefef;
    -webkit-box-shadow: 3px 3px 0px 0px rgba(201,201,201,1);
    -moz-box-shadow: 3px 3px 0px 0px rgba(201,201,201,1);
    box-shadow: 3px 3px 0px 0px rgba(201,201,201,1);
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
  }

  .block-header {
    margin-bottom: 10px;
  }

  input {
    border-radius: 0 !important;
  }
</style>
