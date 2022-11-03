<template>
  <div class="card" :class="{complete: project.complete}">
    <div class="d-flex">
      <h3 class="title" @click="isShow = !isShow">{{project.title}}</h3>
      <div class="icons">
        <i class="bi bi-trash" @click="deleteProject"></i>
        <router-link :to="{name: 'update-project', params: {id: project.id}}">
          <i class="bi bi-pen-fill"></i>
        </router-link>
        <i class="bi" :class="{'bi-check-circle-fill': this.project.complete === true, 'bi-check-circle': this.project.complete === false}" @click="completeProject"></i>
      </div>
    </div>
    <p>{{compeltion}}</p>
    <div v-if="isShow">
      <p class="detail">{{project.detail}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'project'
  ],
  data() {
    return {
      isShow: false,
      api: "http://localhost:3000/projects/",
      compeltion: ""
    }
  },
  methods: {
    
    // Complete Project
    completeProject() {
      fetch(this.api+this.project.id, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          complete: !this.project.complete
        })
      })
      .then(() => {
        this.$emit("completeProject", this.project.id);
        this.compeltionProject();
      })
      .catch((err) => {
        console.error(err.message());
      })
    },
    compeltionProject() {
      if(this.project.complete) {
        this.compeltion = "Completed";
      } else {
        this.compeltion = "Ongoing!";
      }
    },

    // Delete Project
    deleteProject() {
      fetch(this.api+this.project.id, {
        method: "DELETE"
      })
      .then(() => {
        this.$emit("delete", this.project.id);
      })
      .catch((err) => {
        console.error(err.message());
      })
    }

  },
  mounted() {
    this.compeltionProject();
  }
}
</script>

<style>

.card {
  width: 90%;
  background-color: #f2f2f2;
  padding: 0.785rem 2.785rem;
  border-radius: 0.5rem;
  margin: 0.585rem auto;
  border-left: 0.3785rem solid crimson;
}

.d-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 1.785rem;
  color: #777;
  transition: 200ms;
  cursor: pointer;
}
.title:hover {
  color: #555;
}
.icons i {
  color: #777;
  padding: 0 0.5rem;
  transition: 200ms;
  cursor: pointer;
}
.icons i:hover {
  color: #555;
}
.complete {
  border-left-color: #0bf06e !important;
}
</style>