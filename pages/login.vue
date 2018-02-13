<template>
  <section class="container-fluid login">
    <div class="row">
      <div class="offset-sm-4 col-12 col-sm-4">
        <div class="login-panel">
          <form>
            <div class="form-group">
              <label>Логин</label>
              <input type="email" class="form-control" placeholder="Логин">
            </div>
            <div class="form-group">
              <label>Пароль</label>
              <input type="password" class="form-control" placeholder="Пароль">
            </div>
            <button type="submit" class="btn btn-primary">Войти</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="scss">
  .login {
    .login-panel {
      border: 1px solid #ced4da;
      padding: 20px;
    }
  }
</style>
