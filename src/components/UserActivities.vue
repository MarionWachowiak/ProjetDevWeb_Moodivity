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
                <h2 class="section-heading text-uppercase">Nous vous proposons les activités suivantes selon les humeurs :</h2>
                <h5 class="section-subheading text-muted">{{ mood1}}, {{ mood2 }} et {{ mood3 }}</h5>
                <!-- <h5 class="section-subheading text-muted"> M:{{matchingactivities}} M2:{{matchingactivities2}} S:{{selectedactivities}}</h5> -->
                <br>
                <h2 class="section-sheading text-lowercase">Et selon votre personnalité ! </h2>
                <br><br><br>
            </div>
            <div class="row">
               <div class="col-lg-4 col-sm-6 mb-4" v-for="a in selectedactivities" :key="a.nameActivity">
    
                    <!-- Portfolio item 1 -->
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
  name: 'UserActivities',
  data() {
    return {
      //user
      name: '',
      email: '',

      //personnality quest
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

      //moods
      mood1: '',
      mood2: '',
      mood3: '',

      //list with the whole activities 
      activities: [],
      //list with the matching activities
      matchingactivities: [],
      matchingactivities2: [],
      //list with the selected activities
      selectedactivities: [],
    }
  },
  created() {
    //user is not authorized
    if (localStorage.getItem('token') === null) {
      this.$router.push('/login');
    }
    this.mood1 = localStorage.getItem('mood1');
    this.mood2 = localStorage.getItem('mood2');
    this.mood3 = localStorage.getItem('mood3');
  },
  mounted() {
    axios.get('http://localhost:5000/user', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        this.name = res.data.user.name;
        this.email = res.data.user.email;
      }),

    axios.get('http://localhost:5000/personnalityquest', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        this.emailUser = res.data.personnalityquest.emailUser;
        this.personnality = res.data.personnalityquest.personnality;
        this.outings = res.data.personnalityquest.outings;
        this.hobbies = res.data.personnalityquest.hobbies;
        this.interests = res.data.personnalityquest.interests;
        this.sport = res.data.personnalityquest.sport;
        this.cinemaseries = res.data.personnalityquest.cinemaseries;
        this.books = res.data.personnalityquest.books;
        this.museum = res.data.personnalityquest.museum;
        this.activityplace = res.data.personnalityquest.activityplace;
        this.activitypeople = res.data.personnalityquest.activitypeople;
        this.cooking = res.data.personnalityquest.cooking;
        this.handicrafts = res.data.personnalityquest.handicrafts;
      }),

    axios.get('http://localhost:5000/activities', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        this.activities = res.data.activities;

        //SELECTION OF THE ACTIVITIES TO BE PROPOSED
        for(let i=0 ; i < this.activities.length ; i++)
        {
          //With mood
          if(this.activities[i].mood===this.mood1 || this.activities[i].mood===this.mood2 || this.activities[i].mood===this.mood3)
          {
            this.matchingactivities.push(this.activities[i]);
          }  
        }
         
        for(let i=0 ; i < this.matchingactivities.length ; i++)
        {
          for(let j=0 ; j < this.activities.length ; j++)
          {
            if(this.matchingactivities[i].type === this.activities[j].type)
            {
              if(!this.matchingactivities2.includes(this.matchingactivities[i]))
              {
                this.matchingactivities2.push(this.matchingactivities[i]);
              }
              
            } 
          }
        }


        //Choose 3 activitues in the list : matchingactivities
        while(a1==a2 || a1==a3 || a2==a3)
        {
            var a1 = Math.floor(Math.random() * this.matchingactivities2.length)
            var a2 = Math.floor(Math.random() * this.matchingactivities2.length)
            var a3 = Math.floor(Math.random() * this.matchingactivities2.length)
        }

        //Put them in the list : selectedactivities
        this.selectedactivities.push(this.matchingactivities2[a1]);
        this.selectedactivities.push(this.matchingactivities2[a2]);
        this.selectedactivities.push(this.matchingactivities2[a3]);
         
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
