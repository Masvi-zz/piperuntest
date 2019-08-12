<template>
  <div class="activities">
    <h2>Atividades</h2>
    <div class="btn-group">
      <button
        type="button"
        class="btn btn-primary pull-left"
        @click.prevent.stop="createNewActivity()"
      >Adcionar nova atividade</button>
    </div>
    <date-picker
      @confirm="findByDates"
      v-model="range"
      lang="pt-br"
      range
      type="date"
      confirm
      format="DD-MM-YYYY"
    ></date-picker>

    <table id="mytable" class="table table-bordred table-striped">
      <thead>
        <th>Nome</th>
        <th>Status</th>
        <th>Conclusão</th>
        <th>Ações</th>
      </thead>
      <tbody>
        <tr v-for="item in activitiesList">
          <td>{{item.title}}</td>
          <td>{{item.status}}</td>
          <td>
            <span>{{item.end_at | datesFilter }}</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                @click.prevent.stop="updateActivity(item.id)"
                class="btn btn-primary btn-sm"
                data-title="Edit"
                data-target="#edit"
              >
                <router-link :to="{name: 'EditActivities', params: {id: item.id} }">
                  <span class="button btn-sm">Editar</span>
                </router-link>
              </button>
            </div>
            <div class="btn-group">
              <button
                class="btn btn-primary btn-sm"
                data-title="Edit"
                data-target="#edit"
                @click.prevent.stop="concludeActivity(item.id)"
              >
                <span class="button btn-sm">Concluir</span>
              </button>
            </div>
            <div class="btn-group">
              <button class="btn btn-danger btn-sm" data-title="delete" data-target="#delete">
                <span class="button btn-sm" @click.prevent.stop="deleteActivities(item.id)">Excluir</span>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ActivitiesService from "../services/ActivitiesService";
import moment from "moment";
import DatePicker from "vue2-datepicker";

export default {
  components: {
    DatePicker
  },
  filters: {},
  name: "Activities",
  data() {
    return {
      activitiesList: [],
      date: "",
      range: " ",
      lang: {}
    };
  },
  filters: {
    datesFilter(date) {
      return moment(String(date)).format("YYYY-MM-DD HH:mm:ss");
    }
  },

  methods: {
    createNewActivity() {
      this.$router.push({ name: "CreateActivities" });
    },

    listActivities() {
      ActivitiesService.get(null).then(res => {
        this.activitiesList = res.data.data;
        console.log(this.activitiesList);
      });
    },

    findByDates() {
      if (this.range.length > 0) {
        var params = {
          internal_date_start: this.formatDate(this.range[0]),
          internal_date_end: this.formatDate(this.range[1])
        };
      }
      var list = ActivitiesService.get(params);
    },

    deleteActivities(activity_id) {
      ActivitiesService.delete(activity_id).then(res => {
        this.listActivities();
      });
    },

    updateActivity(activity_id) {
      var activity_edit = this.activitiesList.filter(
        act => act.id == activity_id
      );
      this.minhaProp = activity_edit[0];
    },

    concludeActivity(activity_id) {
      ActivitiesService.updateDateConclusion(
        activity_id,
        this.formatDate(new Date())
      );
      this.listActivities();
    },

    formatDate: function(value) {
      if (value) {
        return moment(String(value)).format("YYYY-MM-DDTHH:mm:ss-03:00");
      }
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
.btn-sm a {
  color: #fff;
}
.btn-group {
  margin-right: 2px !important;
}
</style>