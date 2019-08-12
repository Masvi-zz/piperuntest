<template>
  <div class="container">
    <div class="row">
      <div class="col-sm"></div>
      <div class="col-sm login">
        <form v-on:submit.prevent="authentication(form)">
          <h1 class="h3 mb-3 font-weight-normal">Login</h1>
          <p>Piperun test app</p>
          <div class="form-group">
            <label for="inputEmail" class="sr-only"></label>
            <input
              v-model="user"
              type="email"
              id="inputEmail"
              class="form-control"
              placeholder="E-mail"
              required
              autofocus
            />
          </div>
          <div class="form-group">
            <label for="inputPassword" class="sr-only">Password</label>
            <input
              v-model="password"
              type="password"
              id="password"
              class="form-control"
              placeholder="Senha"
              required
            />
          </div>
          <button
            class="btn btn-lg btn-primary btn-block"
            type="submit"
            @click.prevent.stop="authentication()"
          >Logar</button>
        </form>
      </div>
      <div class="col-sm"></div>
    </div>
  </div>
</template>

<script>
import Authentication from "../services/Authentication";

export default {
  name: "Login",
  data() {
    return {
      user: "jeanmasvi@gmail.com",
      password: "kde01tux%",
      token: " "
    };
  },
  filters: {},
  methods: {
    async authentication() {
      if (this.user != " " && this.password != " ") {
        var user = Authentication.login(this.user, this.password);
        if (localStorage.token) this.$router.push({ name: "Home" });
      }
    }
  }
};
</script>
<style scoped>
.login {
  margin-top: 150px;
}
</style>
