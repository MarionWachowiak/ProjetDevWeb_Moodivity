<template>
  <div>

    <!-- Créer un compte -->
    <section class="page-section" id="contact2">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Moodivity</h2>
                <h4 class="section-heading text-uppercase">-</h4>
                <h3 class="section-heading">Se connecter</h3>
                <br>
            </div>
            
            <div class="rowa">
              <div class="col-12">
                  <div class="form-group">
                      <!-- Email address input-->
                      <input class="form-control" type="text" placeholder="Email *"  v-model="email" >
                      <br>
                  </div>
                  <div class="form-group">
                      <!-- Email address input-->
                      <input class="form-control" type="password" placeholder="Mot de passe *" data-sb-validations="required,password" v-model="password" >
                      <br>
                  </div>  
              </div>
            </div>
            <br>
            <!-- Submit Button-->
            <div class="text-center"><button class="btn btn-primary btn-xl text-uppercase" @click="login">login</button></div>
            {{ error }}
        </div>
        <br><br><br><br><br><br>
    </section>

    <!-- Footer-->
    <footer class="footer py-4">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4 text-lg-start"></div>
                <div class="col-lg-4 my-3 my-lg-0"></div>
                <div class="col-lg-4 text-lg-end">Copyright &copy; Polytech Angers - 2021</div>
            </div>
        </div>
    </footer>
    
    </div>

</template>


<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',

      error: '',
    }
  },
  methods: {
    login() {
      let user = {
        email: this.email,
        password: this.password
      }
      axios.post('http://localhost:5000/login', user)
        .then(res => {
          //if successfull
          if (res.status === 200) {
            localStorage.setItem('token', res.data.token);
            this.$router.push('/userprofile');
          }
        }, err => {
          console.log(err.response);
          this.error = err.response.data.error
        })
    }
  }
}
</script>

