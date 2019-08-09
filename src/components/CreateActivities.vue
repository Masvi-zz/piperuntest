<template>
  <div class="CreateActivities">
    <div class="row">
      <div class="col-4"></div>

      <div class="col-4">
        <h4>Cadastro:</h4>
        <div class="form-group">
          <label>Titulo</label>
          <input type="text" v-model="activity.title" class="form-control" />
        </div>
        <div class="form-group">
          <label>Responsável</label>
          <input type="text" v-model="activity.owner_id" class="form-control" />
        </div>
        <div class="form-group">
          <label>Tipo</label>
          <input type="text" v-model="activity.type" class="form-control" />
        </div>
        <div class="form-group">
          <label>Status</label>
          <input type="text" v-model="activity.status" class="form-control" />
        </div>
        <div class="form-group pull-right">
          <button class="btn btn-success" @click.prevent.stop="createActivity()">Concluir</button>
        </div>
      </div>
      <div class="col-4"></div>
    </div>
  </div>
</template>

<script>
import ActivitiesService from "../services/ActivitiesService";

export default {
  name: "CreateActivities",
  data() {
    return {
      activity: {
        title: "",
        type: "",
        status: "",
        owner_id: ""
      }
    };
  },
  filters: {},
  methods: {
    createActivity() {
      ActivitiesService.create(this.activity).then(res => {
        this.$router.push({ name: "Home" });
      });
    }
  },
  mounted() {}
};
</script>

<style scoped>
.activities {
  margin-left: 100px;
}
</style>

