<template>
  <div>
    <nav class="navbar navbar-expand-lg justify-content-between navbar-dark bg-primary">
      <nuxt-link class="navbar-brand" to="#">SourceKeeper</nuxt-link>
      <nuxt-link class="navbar-login-link" to="/login">Войти</nuxt-link>
    </nav>
    <nuxt/>
  </div>
</template>

<style>
  .navbar {
    margin-bottom: 20px;
  }

  .navbar-login-link {
    color: white;
  }

  .navbar-login-link:hover {
    color: white;
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
