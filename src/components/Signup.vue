<template>

  <div>

    <!-- Créer un compte -->
    <section class="page-section" id="contact2">
        <div class="container">
            <div class="text-center">
                <h1 class="section-heading text-uppercase">Moodivity</h1>
                <h4 class="section-heading text-uppercase">-</h4>
                <h3 class="section-heading">Créer un compte</h3>
                <br><br>
            </div>
            <div class="row text-center">
              <div class="rowa">
                <div class="col-12">
                    <div class="form-group">
                        <!-- Name input-->
                        <h8 class="section-heading">Votre prénom : </h8><input class="form-control" type="text" placeholder="Prénom *"  v-model="name" />
                        <br>
                    </div>
                    <div class="form-group">
                        <!-- Birthdate input-->
                        <h8 class="section-heading">Votre date de naissance : </h8><input class="form-control" type="date" max="2021-12-1" required pattern="\d{2}-\d{2}-\d{4}" placeholder="Date de naissance *"  v-model="birthdate" />
                        <br>
                        
                    </div>
                    <div class="form-group">
                        <!-- City input-->
                        <h8 class="section-heading">Votre ville : </h8><input class="form-control" type="email" placeholder="Ville *"  v-model="city" />
                        <br>
                    </div>
                    <div class="form-group">
                        <!-- Email address input-->
                        <h8 class="section-heading">Votre adresse e-mail : </h8><input class="form-control" type="email" placeholder="Email *"  v-model="email" />
                        <br>
                    </div>
                    <div class="form-group">
                        <!-- Password input-->
                        <h8 class="section-heading">Choisissez un mot de passe : </h8><input class="form-control" type="password" placeholder="Mot de passe *" data-sb-validations="required,password" v-model="password" />
                        <br>
                    </div>  
                </div>
              </div>
            </div>
            <br>
            <!-- Submit Button-->
            <div class="text-center">
              <button class="btn btn-primary btn-xl text-uppercase" @click="signup">signup</button>
              <br><br>
              <div class="white">{{ error }}</div>
            </div>
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
  name: 'Signup',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      city: '',
      birthdate: '',
      emailUser: '',
      personnality: '',
      outings: '',
      hobbies: '',
      interests: '',
      sport: '',
      cinemaseries: '',
      books: '',
      museum: '',
      activityplace: '',
      activitypeople: '',
      cooking: '',
      handicrafts: '',

      error: '',
    }
  },
  methods: {
    signup() {
      let newUser = {
        name: this.name,
        birthdate: this.birthdate,
        city: this.city,
        email: this.email,
        password: this.password
      }
      axios.post('http://localhost:5000/signup', newUser)
        .then(res => {
          this.error = '';
          let newPersonnalityQuest = {
            emailUser: this.email,
            personnality: '',
            outings: '',
            hobbies: '',
            interests: '',
            sport: '',
            cinemaseries: '',
            books: '',
            museum: '',
            activityplace: '',
            activitypeople: '',
            cooking: '',
            handicrafts: '',
          }
          axios.post('http://localhost:5000/createpersonnalityquest', newPersonnalityQuest)
            .then(res => {
              this.error = '';
              this.$router.push('/login');
            }, err => {
              console.log(err.response)
              this.error = err.response.data.error
            })
          this.$router.push('/login');
        }, err => {
          console.log(err.response)
          this.error = err.response.data.error
        })
      
      
    }
  }
}
</script>