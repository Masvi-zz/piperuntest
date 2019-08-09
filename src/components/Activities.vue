<template>
  <div class="activities">
    <h2>Atividades</h2>

    <button
      type="button"
      class="btn btn-primary pull-left"
      @click.prevent.stop="createNewActivit()"
    >Adcionar nova atividade</button>

    <table id="mytable" class="table table-bordred table-striped">
      <thead>
        <th>nome</th>
        <th>Editar</th>
        <th>Concluir</th>
        <th>Excluir</th>
      </thead>
      <tbody>
        <tr v-for="item in activitiesList">
          <td>{{item.title}}</td>
          <td>
            <p data-placement="top" data-toggle="tooltip" title="Edit">
              <button
                @click.prevent.stop="updateActivity(item.id)"
                class="btn btn-primary btn-sm btn-table"
                data-title="Edit"
                data-toggle="modal"
                data-target="#edit"
              >
                <span class="button btn-sm">Editar</span>
              </button>
            </p>
          </td>
          <td>
            <p data-placement="top" data-toggle="tooltip" title="Edit">
              <button
                class="btn btn-primary btn-sm"
                data-title="Edit"
                data-toggle="modal"
                data-target="#edit"
              >
                <span class="button btn-sm">Concluir</span>
              </button>
            </p>
          </td>
          <td>
            <p data-placement="top" data-toggle="tooltip" title="Edit">
              <button
                class="btn btn-danger btn-sm"
                data-title="Edit"
                data-toggle="modal"
                data-target="#edit"
              >
                <span class="button btn-sm" @click.prevent.stop="deleteActivities(item.id)">Excluir</span>
              </button>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ActivitiesService from "../services/ActivitiesService";

export default {
  name: "Activities",
  data() {
    return {
      activitiesList: []
    };
  },
  filters: {},
  methods: {
    createNewActivit() {
      this.$router.push({ name: "CreateActivities" });
    },

    listActivities() {
      ActivitiesService.get().then(res => {
        this.activitiesList = res.data.data;
      });
    },

    deleteActivities(id) {
      ActivitiesService.delete(id).then(res => {
        this.listActivities();
      });
    },

    updateActivity(id) {
      console.log("update: " + id);
    }
  },
  mounted() {
    this.listActivities();
  }
};
</script>

<style scoped>
.activities {
  margin-left: 100px;
}
</style>

