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
                    <li class="nav-item"><a class="nav-link" href="#profil">Profil</a></li>
                    <li class="nav-item"><a class="nav-link" href="#questionnaire">Questionnaire de personnalité</a></li>
                    <li class="nav-item"><a class="nav-link" href="#humeur">Humeur du jour</a></li>
                    <li class="nav-item"><a class="nav-link" href="" @click="logout">Se déconnecter</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Masthead-->
    <header class="masthead">
        <div class="container">
            <div class="masthead-subheading">Bienvenue</div>
            <div class="masthead-heading text-uppercase">{{ name }} !</div>
            <a class="btn btn-primary btn-xl text-uppercase" href="#humeur">Que faire aujourd'hui ?</a>
        </div>
    </header>

    <!--Profil-->
    <section class="page-section" id="profil">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Votre profil</h2>
                <h3 class="section-subheading text-muted">Vous pouvez modifier vos informations personnelles à tout moment.</h3>
            </div>
            <div class="row text-center">
                <div class="rowa">
                    <div class="col-12">
                        <div class="form-group">
                            <!-- Name input-->
                            Votre prénom : <input class="form-control" type="text" placeholder="Prénom *"  v-model="name" >
                            <br>
                        </div>
                        <br>
                        <div class="form-group">
                            <!-- Email address input-->
                            Votre adresse e-mail : <input class="form-control" type="text" placeholder="Prénom *"  v-model="email" >
                            <br>
                        </div>
                        <br>
                        <div class="form-group">
                            <!-- DOB input-->
                            Votre date de naissance : <input class="form-control" type="date" placeholder="Date de naissance *"  v-model="birthdate" >
                            <br>
                        </div>
                        <br><div class="form-group">
                            <!-- City input-->
                            Votre ville : <input class="form-control" type="text" placeholder="Ville *" v-model="city" >
                            <br>
                        </div>
                        <br>
                    </div>
                    <!-- Submit Button-->
                    <div class="text-center"><button class="btn btn-primary btn-l text-uppercase" @click="update">Modifier</button></div>
                    {{ error }}
                </div>
            </div>
        </div>
    </section>

    <!-- Questionnaire de personnalité -->
    <section class="page-section bg-light" id="questionnaire">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Questionnaire de personnalité</h2>
                <h3 class="section-subheading text-muted">Ces quelques questions ont pour but de mieux vous connaître {{ name }}</h3>
            </div>
            <div class="rowa">
                <div class="form-group">
                    <div class="text-center">
                        <h4 class="section-heading text-uppercase">Traits de personnalité</h4><br>
                        <div class="text-center">
                            <b>Quel est votre type de personnalité ?</b> <br>
                            <input type="radio" name="personnality" v-model="personnality" value="Sociable"/> Sociable <br>
                            <input type="radio" name="personnality" v-model="personnality" value="Solitaire"/> Solitaire <br>
                        </div>
                        <br>
                        <div class="text-center">
                            <b>Etes-vous plutôt du genre ?</b> <br>
                            <input type="radio" name="outings" v-model="outings" value="Casanier"/> Casanier <br>
                            <input type="radio" name="outings" v-model="outings" value="Aimant sortir"/> Aimant sortir <br>
                        </div>
                        <br>
                        <div class="text-center">
                            <b>Avez-vous beaucoup de hobbies différents ?</b> <br>
                            <input type="radio" name="hobbies" v-model="hobbies" value="Oui"/> Oui <br>
                            <input type="radio" name="hobbies" v-model="hobbies" value="Un peu"/> Un peu <br>
                            <input type="radio" name="hobbies" v-model="hobbies" value="Non"/> Non <br>
                        </div>
                        <br>
                        <div class="text-center">
                            <b>Vos centres d'intérêts sont-ils variés ?</b> <br>
                            <input type="radio" name="interests" v-model="interests" value="Oui"/> Oui <br>
                            <input type="radio" name="interests" v-model="interests" value="Non"/> Non <br>
                        </div>
                        <br>
                        <br>
                        _______________________________________
                        <br>
                    </div>
                </div>
            </div>
            
            <br><br>
            <div class="rowa">
                <div class="form-group">
                    <div class="text-center">
                        <h4 class="section-heading text-uppercase">Centres d'intérêt</h4><br>
                        <div class="text-center">
                            <b>Aimez-vous le sport ?</b> <br>
                            <input type="radio" name="sport" v-model="sport" value="Oui"/> Oui <br>
                            <input type="radio" name="sport" v-model="sport" value="Non"/> Non <br>
                        </div>
                        <br>
                        <div class="text-center">
                            <b>Aimez-vous regarder des films/séries TV ?</b> <br>
                            <input type="radio" name="cinemaseries" v-model="cinemaseries" value="Oui"/> Oui<br>
                            <input type="radio" name="cinemaseries" v-model="cinemaseries" value="Non"/> Non <br>
                        </div>
                        <br>
                        <div class="text-center">
                            <b>Aimez-vous lire des livres ?</b> <br>
                            <input type="radio" name="books" v-model="books" value="Oui"/> Oui<br>
                            <input type="radio" name="books" v-model="books" value="Non"/> Non<br>
                        </div>
                        <br>
                        <div class="text-center">
                            <b>Pour vous, aller visiter un musée ou voir une exposition, c'est :</b> <br>
                            <input type="radio" name="museum" v-model="museum" value="Très intéressant"/> Très intéressant <br>
                            <input type="radio" name="museum" v-model="museum" value="Moyennement intéressant"/> Moyennement intéressant <br>
                            <input type="radio" name="museum" v-model="museum" value="Ennuyant"/> Ennuyant <br>
                        </div>
                        <br>
                        <div class="text-center">
                            <b>Vous aimez faire des activités :</b> <br>
                            <input type="radio" name="activityplace" v-model="activityplace" value="En intérieur"/> En extérieur <br>
                            <input type="radio" name="activityplace" v-model="activityplace" value="En extérieur"/> En intérieur <br>
                            <input type="radio" name="activityplace" v-model="activityplace" value="Les deux"/> Les deux <br>
                        </div>
                        <br>
                        <div class="text-center">
                            <b>Vous aimez faire des activités :</b> <br>
                            <input type="radio" name="activitypeople" v-model="activitypeople" value="Seul"/> Seul <br>
                            <input type="radio" name="activitypeople" v-model="activitypeople" value="En groupe"/> En groupe <br>
                            <input type="radio" name="activitypeople" v-model="activitypeople" value="Les deux"/> Les deux <br>
                            <span>Sélectionné(s) : {{ this.activitypeople }}</span>
                        </div>
                        <br>
                        <div class="text-center">
                            <b>Aimez-vous cuisiner ?</b> <br>
                            <input type="radio" name="cooking" value="Oui" v-model="cooking" /> Oui <br>
                            <input type="radio" name="cooking" value="Non" v-model="cooking" /> Non <br>
                            
                        </div>
                        <br>
                        <div class="text-center">
                            <b>Aimez-vous les activités manuelles (peinture, couture, bricolages, DIY, etc.) ?</b> <br>
                            <input type="radio" name="handicrafts" v-model="handicrafts" value="Oui"/> Oui <br>
                            <input type="radio" name="handicrafts" v-model="handicrafts" value="Non"/> Non <br>
                        </div>
                    </div>
                </div>
            </div>
            <br><br>

            
            <!-- Submit Button-->
            <div class="text-center"><button class="btn btn-primary btn-l text-uppercase" @click="validatepersonnality">Valider</button></div>
            {{ error }}
            {{ success }}
            <br>
        </div>

    </section>

    <!-- Humeur du jour-->
    <section class="page-section" id="humeur">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Quelle est votre humeur du jour ?</h2>
                <h3 class="section-subheading text-muted">Vous pouvez cocher jusqu'à 3 humeurs différentes :</h3>
            </div>
            <ul class="timeline">
                <li>
                    <div class="timeline-image">
                      <img class="rounded-circle img-fluid" src="../assets/img/humeur/joyeux.jpg" alt="..." />
                    </div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="subheading">Joyeux</h4>
                            <input type="checkbox" id="reponse" name="reponse" />
                        </div>
                    </div>
                </li>
                <li class="timeline-inverted">
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="../assets/img/humeur/triste.jpg" alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="subheading">Triste</h4>
                            <input type="checkbox" id="reponse" name="reponse" />
                        </div>
                    </div>
                </li>
                <li>
                    <div class="timeline-image">
                      <img class="rounded-circle img-fluid" src="../assets/img/humeur/calme.jpg" alt="..." />
                    </div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="subheading">Calme</h4>
                            <input type="checkbox" id="reponse" name="reponse" />
                        </div>
                    </div>
                </li>
                <li class="timeline-inverted">
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="../assets/img/humeur/colere.jpg" alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="subheading">En colère</h4>
                            <input type="checkbox" id="reponse" name="reponse" />
                        </div>
                    </div>
                </li>
                <li>
                    <div class="timeline-image">
                      <img class="rounded-circle img-fluid" src="../assets/img/humeur/energique.jpg" alt="..." />
                    </div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="subheading">Energique</h4>
                            <input type="checkbox" id="reponse" name="reponse" />
                        </div>
                    </div>
                </li>
                <li class="timeline-inverted">
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="../assets/img/humeur/fatigue.jpg" alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="subheading">Fatigué(e)</h4>
                            <input type="checkbox" id="reponse" name="reponse" />
                        </div>
                    </div>
                </li>
                <li class="timeline-image">
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="../assets/img/humeur/stresse.jpg" alt="..."/></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="subheading">Stréssée(e)</h4>
                            <input type="checkbox" id="reponse" name="reponse" />
                            
                        </div>
                    </div>
                </li>
                <li class="timeline-inverted">
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="../assets/img/humeur/detendu.jpg" alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="subheading">Détendu(e)</h4>
                            <input type="checkbox" id="reponse" name="reponse" />
                        </div>
                    </div>
                </li>
                <li class="timeline-image">
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="../assets/img/humeur/optimiste.jpg" alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="subheading">Optimiste</h4>
                            <input type="checkbox" id="reponse" name="reponse" />
                            
                        </div>
                    </div>
                </li>
                <li class="timeline-inverted">
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="../assets/img/humeur/serieux.jpg" alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="subheading">Sérieux(se)</h4>
                            <input type="checkbox" id="reponse" name="reponse" />
                        </div>
                    </div>
                </li>
                <li class="timeline-image">
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="../assets/img/humeur/seul.jpg" alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="subheading">Seul(e)</h4>
                            <input type="checkbox" id="reponse" name="reponse" />
                            
                        </div>
                    </div>
                </li>
                <li class="timeline-inverted">
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="../assets/img/humeur/grincheux.jpg" alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="subheading">Grincheux(se)</h4>
                            <input type="checkbox" id="reponse" name="reponse" />
                        </div>
                    </div>
                </li>
                <li class="timeline-image">
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="../assets/img/humeur/distrait.jpg" alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="subheading">Distrait(e)</h4>
                            <input type="checkbox" id="reponse" name="reponse" />
                            
                        </div>
                    </div>
                </li>
                <li class="timeline-inverted">
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="../assets/img/humeur/anxieux.jpg" alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="subheading">Anxieux(e)</h4>
                            <input type="checkbox" id="reponse" name="reponse" />
                        </div>
                    </div>
                </li>
                <br>
            </ul>
            <div class="text-center"><a class="btn btn-primary btn-xl text-uppercase" @click="validatemood">Valider mon humeur</a></div>
        </div>
    </section>
    <!-- Vos activités favorites -->
    

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
    <!-- Portfolio Modals-->
    <!-- Portfolio item 1 modal popup-->
    <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="../assets/img/close-icon.svg" alt="Close modal" /></div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                <!-- Project details-->
                                <h2 class="text-uppercase">Escalade</h2>
                                <p class="item-intro text-muted">Sport à pratiquer en intérieur au suaps en lien avec l'université d'Angers.</p>
                                <img class="img-fluid d-block mx-auto" src="../assets/img/activites/1.jpg" alt="..." />
                                <p>Ce sport complet permet de gagner en force, souplesse, endurance. Des créneaux sont disponibles tout au long de la semaine !</p>
                                <ul class="list-inline">
                                    <li>
                                        <strong>Catégorie :</strong>
                                        Sport
                                    </li>
                                    <li>
                                        <strong>Nombre de personnes nécessaires :</strong>
                                        2 ou plus
                                    </li>
                                </ul>
                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                    <i class="fas fa-times me-1"></i>
                                    Fermer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br><br>
   
  </body>

</template>


<script>
import axios from 'axios';

export default {
  name: 'UserProfile',
  data() {
    return {
        name: '',
        city: '',
        birthdate: '',
        email: '',
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
  created() {
    //user is not authorized
    if (localStorage.getItem('token') === null) {
      this.$router.push('/login');
    }
  },
  mounted() {
    axios.get('http://localhost:5000/user', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        this.name = res.data.user.name;
        this.city = res.data.user.city;
        this.birthdate = res.data.user.birthdate;
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
      })
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/');
    },

    validatepersonnality() {
      let newPersonnalityQuest = {
        emailUser: this.email,
        personnality: this.personnality,
        outings: this.outings,
        hobbies: this.hobbies,
        interests: this.interests,
        sport: this.sport,
        cinemaseries: this.cinemaseries,
        books: this.books,
        museum: this.museum,
        activityplace: this.activityplace,
        activitypeople: this.activitypeople,
        cooking: this.cooking,
        handicrafts: this.handicrafts,
      }
      axios.post('http://localhost:5000/userprofile', newPersonnalityQuest)
        .then(res => {
          this.error = '';
          localStorage.setItem('token', res.data.token);
          this.$router.push('/userprofile');
        }, err => {
          console.log(err.response)
          this.error = err.response.data.error
        })
    },
    
    validatemood() {
      this.$router.push('/useractivities');
    },

    update() {
    }

  }
}
</script>

