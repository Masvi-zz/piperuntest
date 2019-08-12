<template>
  <div class="CreateActivities">
    <div class="row">
      <div class="col-4"></div>
      <div class="col-4">
        <form v-on:submit="createActivity">
          <h4 v-if="!$route.params.id">Cadastrar:</h4>
          <h4 v-else>Editar:</h4>

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
            <input type="text" v-model="activity.activity_type" class="form-control" />
          </div>
          <div class="form-group">
            <label>Status</label>
            <input type="text" v-model="activity.status" class="form-control" />
          </div>
          <div class="form-group pull-right">
            <button class="btn btn-success" type="submit">Concluir</button>
          </div>
        </form>
      </div>

      <div class="col-4"></div>
    </div>
  </div>
</template>

<script>
import ActivitiesService from "../services/ActivitiesService";
export default {
  props: {
    id: {
      type: String
    }
  },
  name: "CreateActivities",
  data() {
    return {
      activity: {
        type: "1",
        title: "",
        status: "",
        owner_id: "",
        account_id: "",
        activity_type: ""
      }
    };
  },
  filters: {},
  methods: {
    createActivity() {
      console.log("aquii");
      if (!this.$route.params.id) {
        ActivitiesService.create(this.activity).then(res => {
          this.$router.push({ name: "Home" });
        });
      } else {
        console.log("ELSE");
        console.log(this.activity);

        ActivitiesService.updateActivity(
          this.$route.params.id,
          this.activity
        ).then(res => {
          this.$router.push({ name: "Home" });
        });
      }
    }
  },
  mounted() {
    if (this.$route.params.id) {
      ActivitiesService.findById(this.$route.params.id).then(res => {
        var item = res.data.data;
        this.activity.title = item.title;
        this.account_id = item.account_id;
        this.activity.status = item.status;
        this.activity.owner_id = item.owner_id;
        this.activity.activity_type = item.activity_type;
      });
    }
  }
};
</script>

<style scoped>
.activities {
  margin-left: 100px;
}
</style>