<template>

  <body id="page-top">

    <!-- Navigation bar -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars ms-1"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                    <li class="nav-item"><a class="nav-link" href="#portfolio">Activités proposées</a></li>
                    <li class="nav-item"><a class="nav-link" href="" @click="returnprofile">Mon profil</a></li>
                    <li class="nav-item"><a class="nav-link" href="" @click="logout">Se déconnecter</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Masthead-->
    <header class="masthead">
        <div class="container">
            <div class="masthead-heading">{{ name }},  </div>
        </div>
    </header>

    <!-- Activités proposées -->
    <section class="page-section bg-light" id="portfolio">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Merci d'avoir sélectionné l'activité :</h2>
                <br>
                <h2 class="section-sheading">{{ selectedactivity }}</h2>
                <br><br><br>
            </div>
            <div class="row">
                <div class="centered-element">
                    <br><br><br><br>
                    <!-- Update Button-->
                    <div class="text-center"><button class="btn btn-primary btn-l text-uppercase" @click="returnprofile">Retour à mon profil</button>
                    </div>
                </div>
            </div>

        </div>

    </section>


    
    <!-- Footer-->
    <footer class="footer py-4">
      
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4 text-lg-start"></div>
                <div class="col-lg-4 my-3 my-lg-0"></div>
                <div class="col-lg-4 text-lg-end">Copyright &copy; Polytech Angers - 2022</div>
            </div>
        </div>
    </footer>
    <br><br>
   
  </body>

</template>


<script>
import axios from 'axios';

export default {
  name: 'ChosenActivity',
  data() {
    return {
      //user
      name: '',
      email: '',

      //moods
      mood1: '',
      mood2: '',
      mood3: '',
    
      //Activities
      activities: '',

      //selected activity
      selectedactivity: ''
    }
  },
  mounted() {
    axios.get('http://localhost:5000/user', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        this.name = res.data.user.name;
        this.city = res.data.user.city;
        this.birthdate = res.data.user.birthdate;
        this.email = res.data.user.email;
      })

    axios.get('http://localhost:5000/activities', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        this.activities = res.data.activities;
      })
  },
  created() {
    //user is not authorized
    if (localStorage.getItem('token') === null) {
      this.$router.push('/login');
    }
    this.mood1 = localStorage.getItem('mood1');
    this.mood2 = localStorage.getItem('mood2');
    this.mood3 = localStorage.getItem('mood3');

    this.selectedactivity = localStorage.getItem('selectedactivity');
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/');
    },
    returnprofile() {
      this.$router.push('/userprofile')
    }
  }
}
</script>
