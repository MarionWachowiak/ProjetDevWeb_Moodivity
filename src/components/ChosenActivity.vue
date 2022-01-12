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

    <!-- Chosen activity -->
    <section class="page-section bg-light" id="portfolio">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Merci d'avoir sélectionné l'activité :</h2>
                
            </div>
            <div class="row">
                <div class="centered-element">
                    
                    <!-- Portfolio items -->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" :src="require('../assets/img/activites/' + chosenactivity.image + '.png')" alt="..." />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">{{ chosenactivity.nameActivity }}</div>
                            <div class="portfolio-caption-subheading text-muted">{{ chosenactivity.description }}</div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </section>

    <!-- Portfolio Grid-->
    <section class="page-section bg-light" id="portfolio">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Les dernières activités que vous avez sélectionné sont :</h2>
            </div>
            <div class="row">
                <div class="col-lg-4 col-sm-6 mb-4" v-for="a in sixactivitieshistory.slice().reverse()" :key="a.nameActivity">
                    
                    <!-- Portfolio items -->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" :src="require('../assets/img/activites/' + a.image + '.png')" alt="..." />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">{{ a.nameActivity }}</div>
                            <div class="portfolio-caption-subheading text-muted">{{ a.description }}</div>
                        </div>
                    </div>                   

                </div>
            </div>
        </div>
    </section>

    <!-- Chosen activity -->
    <section class="page-section bg-light" id="portfolio">
        <div class="container">
            <div class="text-center">
                
            </div>
            <div class="row">
                <div class="centered-element">
                    
                  <!-- Return to profile Button-->
                  <div class="text-center"><button class="btn btn-primary btn-l text-uppercase" @click="returnprofile">Retour à mon profil</button></div>
                
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

      chosenactivity: [],

      //History of the chosen activities
      fullactivitieshistory: [],
      sixactivitieshistory: []
    }
  },
  created() {
    //user is not authorized
    if (localStorage.getItem('token') === null) {
      this.$router.push('/login');
    }
    this.selectedactivity = localStorage.getItem('selectedactivity');
  },
  mounted() {
    axios.get('http://localhost:5000/user', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        this.name = res.data.user.name;
        this.email = res.data.user.email;
      })

    axios.get('http://localhost:5000/activitieshistory', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        this.fullactivitieshistory = res.data.activitieshistory;

        // Pop the last activity in the last : the chosen activity
        this.chosenactivity = this.fullactivitieshistory.pop();
        
        // Select the last 6 chosen activities 
        for(let i=this.fullactivitieshistory.length-6;i<this.fullactivitieshistory.length;i++)
        {
          this.sixactivitieshistory.push(this.fullactivitieshistory[i]);
        }
        
      })
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/');
    },
    returnprofile() {
      this.$router.push('/userprofile')
    },
    
  }
}
</script>
