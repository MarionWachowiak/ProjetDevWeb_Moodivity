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
            <div class="masthead-subheading text-uppercase">Découvrez les activités que nous avons sélectionnées pour vous !</div>
        </div>
    </header>

    <!-- Activités proposées -->
    <section class="page-section bg-light" id="portfolio">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Voici les activités que nous vous proposons pour les humeurs :</h2>
                <h3 class="section-subheading text-muted">{{ moods }}</h3>
                <br>
            </div>
            <div class="row">
               <div class="col-lg-4 col-sm-6 mb-4" v-for="a in selectedactivities" :key="a.nameActivity">
    
                    <!-- Portfolio items -->
                    <div class="portfolio-item"   >
                        <a>
                            <img class="img-fluid" :src="require('../assets/img/activites/' + a.image + '.png')" alt="..." />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">{{ a.nameActivity }}</div>
                            <div class="portfolio-caption-subheading text-muted">{{ a.description }}</div>
                        </div>
                    </div>                   

                </div>

                <div class="text-center">
                <h2 class="section-heading text-uppercase"></h2>
                <h3 class="section-subheading text-muted">ENJOY !</h3>
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
                <div class="col-lg-4 text-lg-end">Copyright &copy; Polytech Angers - 2021</div>
            </div>
        </div>
    </footer>
    <br><br>
   
  </body>

</template>

<script>
import axios from 'axios';

export default {
  name: 'UserActivities',
  data() {
    return {
      name: '',
      email: '',
      moods: '',

      activities: [],
      selectedactivities: [],
    }
  },
  created() {
    //user is not authorized
    if (localStorage.getItem('token') === null) {
      this.$router.push('/login');
    }
    this.moods = localStorage.getItem('moods');
  },
  mounted() {
    axios.get('http://localhost:5000/user', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        this.name = res.data.user.name;
        this.email = res.data.user.email;
      }),

    axios.get('http://localhost:5000/activities', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        this.activities = res.data.activity;

        //Sélection des activités à proposer 
        this.selectedactivities.push(this.activities[Math.floor(Math.random() * 31)]);
        this.selectedactivities.push(this.activities[Math.floor(Math.random() * 31)]);
        this.selectedactivities.push(this.activities[Math.floor(Math.random() * 31)]);
      })
    
    
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
