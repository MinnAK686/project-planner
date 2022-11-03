<template>
  <h1 class="center">Add Project</h1>
  <div class="container">
    <form @submit.prevent="addProject">
      <h1 class="center">Create New Project</h1>
      <div class="form-container">
        <input type="text" class="form-control" placeholder="Title" v-model="title">
      </div>
      <div class="form-container">
        <input type="text" class="form-control" placeholder="Detail" v-model="detail">
      </div>
      <div>
        <button class="btn">Add Project</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      detail: "",
    }
  },
  methods: {
    addProject() {
      fetch("http://localhost:3000/projects/",{
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          title: this.title,
          detail: this.detail,
          complete: false
        })
      })
      .then(() => {
        this.$router.push("/");
      })
      .catch((err) => {
        console.error(err.message());
      })
    }
  }
}
</script>

<style>

.container {
  width: 100%;
  height: 70vh;
  display: grid;
  place-items: center;

}
form {
  width: 70%;
  margin: 2rem auto;
}
.form-container {
  position: relative;
}
.form-control {
  display: block;
  width: 90%;
  margin: 1rem auto;
  border: none;
  border-bottom: 2px solid #eee;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #555;
}
.form-control:focus {
  outline: none;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  color: #fff;
  background-color: #0051ff;
  border-radius: 0.385rem;
  display: block;
  width: 100%;
  margin: 1.5rem 0;
}
.btn:hover {
  background-color: #003fc7;
}

</style>