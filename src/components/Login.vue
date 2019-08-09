<template>
  <div class="container">
    <div class="row">
      <div class="col-sm"></div>
      <div class="col-sm">
        <h1 class="h3 mb-3 font-weight-normal">Login</h1>
        <div class="form-group">
          <label for="inputEmail" class="sr-only"></label>
          <input
            v-model="user"
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
          />
        </div>
        <div class="form-group">
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            v-model="password"
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
          />
        </div>
        <button
          class="btn btn-lg btn-primary btn-block"
          type="submit"
          @click.prevent.stop="authentication()"
        >Logar</button>
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
      user: " ",
      password: " ",
      token: " "
    };
  },
  filters: {},
  methods: {
    authentication() {
      if (this.user != " " && this.password != " ") {
        const user = Authentication.login(this.user, this.password);
        if (localStorage.token) this.$router.push({ name: "Home" });

        console.log(localStorage.token);
      }
    }
  }
};
</script>
