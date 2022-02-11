<template>
    <body id="page-top">
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars ms-1"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                    <li class="nav-item"><a class="nav-link" href="#moodivity">Qu'est-ce que Moodivity ?</a></li>
                    <li class="nav-item"><a class="nav-link" href="#portfolio">Activités</a></li>
                    <li class="nav-item"><a class="nav-link" href="#about">Fonctionnement</a></li>
                    <li class="nav-item"><a class="nav-link" href="#team">Equipe</a></li>
                    <li class="nav-item"><a class="nav-link" href="login">Se connecter</a></li>
                    <li class="nav-item"><a class="nav-link" href="signup">Créer un compte</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- Masthead-->
    <header class="masthead">
        <div class="container">
            <div class="masthead-subheading">Bienvenue sur</div>
            <div class="masthead-heading text-uppercase">Moodivity</div>
            <a class="btn btn-primary btn-xl text-uppercase" href="#moodivity">Découvrir</a>
        </div>
    </header>
    <!--Moodivity-->
    <section class="page-section" id="moodivity">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Qu'est-ce que Moodivity ?</h2>
                <h3 class="section-subheading text-muted">Le site qui propose des activités en fonction de votre humeur.</h3>
            </div>
            <div class="row text-center">
                <div class="col-md-6">
                    <span class="fa-stack fa-4x">
                        <i class="fas fa-dice"></i>
                    </span>
                    <h4 class="my-2">Des activités...</h4>
                    <p class="text-muted">Activités de tous types, aussi bien sportives que culturelles, à faire seul ou à plusieurs.</p>
                </div>
                <div class="col-md-6">
                    <span class="fa-stack fa-4x">
                        <i class="fa fa-smile"></i>
                    </span>
                    <h4 class="my-2">...Selon votre humeur !</h4>
                    <p class="text-muted">En effet, en fonction de votre humeur vous n'aurez pas forcément envie de faire les mêmes activités !</p>
                </div>
            </div>
        </div>
    </section>
    <!-- Portfolio Grid-->
    <section class="page-section bg-light" id="portfolio">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Le catalogue d'activités</h2>
                <h3 class="section-subheading text-muted">Voici les activités du moment !</h3>
            </div>
            <div class="row">
                <div class="col-lg-4 col-sm-6 mb-4" v-for="a in activities" :key="a.nameActivity">
    
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
            </div>
        </div>
    </section>
    <!-- About-->
    <section class="page-section" id="about">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Comment ça fonctionne ?</h2>
                <h3 class="section-subheading text-muted">Rien de plus simple, suivez les étapes suivnates :</h3>
            </div>
            <ul class="timeline">
                <li>
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="../assets/img/about/avatar.jpg" alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="subheading">Créez votre profil</h4>
                        </div>
                        <div class="timeline-body"><p class="text-muted">Choisissez un pseudo, un mot de passe pour créer votre profil.</p></div>
                    </div>
                </li>
                <li class="timeline-inverted">
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="../assets/img/about/quest.jpg" alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="subheading">Remplissez votre questionnaire de personnalité !</h4>
                        </div>
                        <div class="timeline-body"><p class="text-muted">Celui-ci nous permettra de vous proposer des activités qui vous plairont !</p></div>
                    </div>
                </li>
                <li class="timeline-image">
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="../assets/img/about/mood.jpg" alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="subheading">Indiquez votre humeur actuelle</h4>
                        </div>
                        <div class="timeline-body"><p class="text-muted">Votre humeur du jour nous permettra de vous proposer des activités qui vous correspondent !</p></div>
                    </div>
                </li>
                <li class="timeline-inverted">
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="../assets/img/about/activities.jpg" alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="subheading">Cliquez pour avoir vos suggestions d'activités !</h4>
                        </div>
                        <div class="timeline-body"><p class="text-muted">Le site vous propose des activités à réaliser seul ou à plusieurs.</p></div>
                    </div>
                </li>
                <li class="timeline-inverted">
                    <div class="timeline-image">
                        <h4>
                            Vous n'avez
                            <br />
                            plus qu'à
                            <br />
                            profiter !
                        </h4>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    <!-- Team-->
    <section class="page-section bg-light" id="team">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Notre équipe</h2>
                <h3 class="section-subheading text-muted">Voici l'équipe qui vous propose des activités !</h3>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="../assets/img/team/oumaima.jpg" alt="..." />
                        <h4>Oumaima LOUKILIA</h4>
                        <p class="text-muted">Developer</p>
                        <a class="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/oumaima-loukilia-106617195/"><i class="fab fa-linkedin-in"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="mailto:oumaima.loukilia@etud.univ-angers.fr"><i class="fa fa-envelope"></i></a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="../assets/img/team/marion.jpg" alt="marion" />
                        <h4>Marion WACHOWIAK</h4>
                        <p class="text-muted">Developer</p>
                        <a class="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/marionwachowiak/"><i class="fab fa-linkedin-in"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="mailto:mwachowiak@etud.univ-angers.fr"><i class="fa fa-envelope"></i></a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="../assets/img/team/nesrine.jpg" alt="..." />
                        <h4>Nesrine HAFFAR</h4>
                        <p class="text-muted">Developer</p>
                        <a class="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/nesrine-haffar-268167172/"><i class="fab fa-linkedin-in"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="mailto:nesrine.haffar@etud.univ-angers.fr"><i class="fa fa-envelope"></i></a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Chaque mois, nous vous proposons des activités, du sport, des festivals, des animations de saison (randonnées, marchés de Noël, etc.)</p></div>
                <br>
                <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Notre objectif est de vous proposer des nouveautés qui vous plaisent, de manière régulière.</p></div>
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
    
    </body>
</template>


<script>
//Core theme JS
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Import needed data
import axios from 'axios';

export default {
  name: 'HomePage',
  data() {
    return {
      activities: [],
    }
  },
  mounted() {
    axios.get('http://localhost:5000/activities', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        this.activities = res.data.activities;

        function randomArrayShuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;
            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
        }   
        randomArrayShuffle(this.activities);
      })

  }
}
</script>



