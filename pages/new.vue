<template>
  <section class="container-fluid new">
      <div class="row">
          <div class="col-12">
              <h1>Новый источник</h1>
          </div>
      </div>
      <form>
        <div class="form-group">
            <label>Название источника</label>
            <input type="text" class="form-control" placeholder="Название">
        </div>
        <div class="form-group">
            <label>Автор</label>
            <input type="text" class="form-control" placeholder="Автор">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
  </section>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="scss">
</style>
