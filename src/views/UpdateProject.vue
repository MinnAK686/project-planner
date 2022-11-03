<template>
  <h1 class="center">Update Project {{id}}</h1>
  <div class="container">
    <form @submit.prevent="updateProject">
      <h1 class="center">Modify Project</h1>
      <div class="form-container">
        <input type="text" class="form-control" placeholder="Title" v-model="title">
      </div>
      <div class="form-container">
        <input type="text" class="form-control" placeholder="Detail" v-model="detail">
      </div>
      <div>
        <button class="btn">Update</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      title: "",
      detail: ""
    }
  },
  methods: {
    updateProject() {
      fetch("http://localhost:3000/projects/"+this.id, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          title: this.title,
          detail: this.detail
        })
      })
      .then(() => {
        this.$router.push("/")
      })
      .catch((err) => {
        console.error(err.message())
      })
    }
  }
}
</script>

<style>

</style>