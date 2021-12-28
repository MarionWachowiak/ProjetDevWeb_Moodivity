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
                        <i class="fas fa-circle fa-stack-2x text-primary"></i>
                        <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 class="my-2">Des activités...</h4>
                    <p class="text-muted">Activités de tous types, aussi bien sportives que culturelles, à faire seul ou à plusieurs.</p>
                </div>
                <div class="col-md-6">
                    <span class="fa-stack fa-4x">
                        <i class="fas fa-circle fa-stack-2x text-primary"></i>
                        <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
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
                <div class="col-lg-4 col-sm-6 mb-4">
                    <!-- Portfolio item 1-->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" src="../assets/img/activites/escalade.png" alt="Escalade" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">{{ nameActivity }}</div>
                            <div class="portfolio-caption-subheading text-muted">{{ description }}</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4">
                    <!-- Portfolio item 2-->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" src="../assets/img/activites/marchenoel.png" alt="Marché de Noël" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Marché de Noël</div>
                            <div class="portfolio-caption-subheading text-muted">Organisé par la ville d'Angers, ce marché ravira petits et grands !</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4">
                    <!-- Portfolio item 3-->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" src="../assets/img/activites/cinema.png" alt="Cinéma" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Cinéma</div>
                            <div class="portfolio-caption-subheading text-muted">Film Kaamelot, actuellement en salle !</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                    <!-- Portfolio item 4-->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" src="../assets/img/activites/randonnee.png" alt="Randonnée" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Randonnée</div>
                            <div class="portfolio-caption-subheading text-muted">Une superbe randonnée pour découvrir ou redécouvrir les bords de Loire.</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                    <!-- Portfolio item 5-->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" src="../assets/img/activites/patinoire.png" alt="Patiner" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Patinage artistique</div>
                            <div class="portfolio-caption-subheading text-muted">Partez à la découverte de cette discipline peu connue, proposée à l'Iceparc d'Angers.</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <!-- Portfolio item 6-->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" src="../assets/img/activites/chateau.png" alt="Château d'Angers" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Visite du château d'Angers</div>
                            <div class="portfolio-caption-subheading text-muted">Un magnifique château, situé dans le centre ville d'Angers.</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <!-- Portfolio item 7-->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" src="../assets/img/activites/patisserie.png" alt="Pâtisserie" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Atelier pâtisserie</div>
                            <div class="portfolio-caption-subheading text-muted">Organisé dans une boulangerie du centre ville d'Angers, cet atelier vous apprendra à réaliser de magnifiques pâtisseries !</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <!-- Portfolio item 8-->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" src="../assets/img/activites/diy.png" alt="Bricolage DIY" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Bricolage DIY</div>
                            <div class="portfolio-caption-subheading text-muted">Réalisation de petits objets pour simplifier son quotidien ou pour décorer son intérieur.</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <!-- Portfolio item 9-->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" src="../assets/img/activites/jeuxdesociete.png" alt="Jeux de société" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Soirée jeux de sociétés</div>
                            <div class="portfolio-caption-subheading text-muted">Invitez quelques amis et affrontez-vous lors de parties de petits chevaux, de Puissance 4 ou même de Monopoly !</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <!-- Portfolio item 10-->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" src="../assets/img/activites/jardinage.png" alt="Jardiner" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Jardinage</div>
                            <div class="portfolio-caption-subheading text-muted">Prenez le temps de prendre soin de vos plantes ou d'en cultiver de nouvelles !</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <!-- Portfolio item 11-->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" src="../assets/img/activites/natation.png" alt="Natation" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Natation</div>
                            <div class="portfolio-caption-subheading text-muted">Allez vous dépenser à la piscine en pratiquant ce sport complet !</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <!-- Portfolio item 12-->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" src="../assets/img/activites/bowling.png" alt="Bowling" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Bowling</div>
                            <div class="portfolio-caption-subheading text-muted">Appelez deux ou trois amis et allez faire quelques parties !</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <!-- Portfolio item 13-->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" src="../assets/img/activites/meditation.png" alt="Méditer" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Méditation</div>
                            <div class="portfolio-caption-subheading text-muted">Asseyez-vous et détendez-vous en écoutant les bruits autour de vous.</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <!-- Portfolio item 14-->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" src="../assets/img/activites/jeuvideo.png" alt="Jeux vidéos" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Jouer à un jeu vidéo</div>
                            <div class="portfolio-caption-subheading text-muted">Dégainez vos manettes et divertissez-vous en jouant à votre jeu préféré !</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <!-- Portfolio item 15-->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" src="../assets/img/activites/lecture.png" alt="Lire" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Lecture</div>
                            <div class="portfolio-caption-subheading text-muted">Préparez-vous une boisson chaude et installez-vous confortablement avec le livre de votre choix !</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <!-- Portfolio item 16-->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" src="../assets/img/activites/chant.png" alt="Cours de chant" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Prendre un cours de chant</div>
                            <div class="portfolio-caption-subheading text-muted">Vous revez d'apprendre à chanter juste ? C'est le moment !</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <!-- Portfolio item 17-->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" src="../assets/img/activites/dessin.png" alt="Dessiner" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Dessiner</div>
                            <div class="portfolio-caption-subheading text-muted">Asseyez-vous, sortez du papier et quelques crayons et c'est parti !</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <!-- Portfolio item 18-->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" src="../assets/img/activites/benevolat.png" alt="Faire du bénévolat" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Faire du bénévolat</div>
                            <div class="portfolio-caption-subheading text-muted">Vous souhaitez offrir de votre temps à d'autres personnes ? Faites du bénévolat !</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <!-- Portfolio item 19-->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" src="../assets/img/activites/film.png" alt="Film+popcorn" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Film + popcorn</div>
                            <div class="portfolio-caption-subheading text-muted">Regardez le film de votre choix accompagné de popcorn !</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <!-- Portfolio item 20-->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" src="../assets/img/activites/cuisine.png" alt="Cuisiner des repas" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Cuisiner des repas</div>
                            <div class="portfolio-caption-subheading text-muted">Préparez vos repas pour les prochains jours et gagnez du temps !</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <!-- Portfolio item 21-->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" src="../assets/img/activites/parcattractions.png" alt="Parc d'attractions" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Parc d'attractions</div>
                            <div class="portfolio-caption-subheading text-muted">Prévoyez la journée entière et amusez-vous !</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <!-- Portfolio item 22-->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" src="../assets/img/activites/volley.png" alt="Volley" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Volley</div>
                            <div class="portfolio-caption-subheading text-muted">Répartissez vous en deux équipes et que la meilleure gagne !</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <!-- Portfolio item 23-->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" src="../assets/img/activites/festival.png" alt="Aller à un festival" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Festival</div>
                            <div class="portfolio-caption-subheading text-muted">Renseignez-vous sur les festivals de la région et foncez !</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <!-- Portfolio item 24-->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" src="../assets/img/activites/soiree.png" alt="Organiser une soirée" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Organiser une soirée</div>
                            <div class="portfolio-caption-subheading text-muted">Réfléchissez à la prochaine soirée que vous pouvez organiser avec vos amis !</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <!-- Portfolio item 25-->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" src="../assets/img/activites/proche.png" alt="Voir un proche" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Voir un proche</div>
                            <div class="portfolio-caption-subheading text-muted">Allez voir un proche que vous n'avez pas vu depuis un moment !</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <!-- Portfolio item 26-->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" src="../assets/img/activites/course.png" alt="Course à pieds" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Course à pieds</div>
                            <div class="portfolio-caption-subheading text-muted">Chaussez votre paire de baskets et donnez-vous à fond !</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <!-- Portfolio item 27-->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" src="../assets/img/activites/vacances.png" alt="Organiser ses vacances" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Organiser ses prochaines vacances</div>
                            <div class="portfolio-caption-subheading text-muted">Choississez le lieu de vos prochaines vacances et prévoyez ce que vous souhaitez découvrir et visiter !</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <!-- Portfolio item 28-->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" src="../assets/img/activites/rangement.png" alt="Rangement" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Ranger son logement</div>
                            <div class="portfolio-caption-subheading text-muted">Votre logement est rempli d'affaires éparpillées dans tous les coins ? Il est peut-être temps de faire du rangement !</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <!-- Portfolio item 29-->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" src="../assets/img/activites/recette.png" alt="Nouvelle recette" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Tester une nouvelle recette</div>
                            <div class="portfolio-caption-subheading text-muted">Cherchez une nouvelle recette et testez-la (vous nous en direz des nouvelles !)</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <!-- Portfolio item 30-->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" src="../assets/img/activites/parc.png" alt="Promenade dans un parc" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Se promener dans un parc</div>
                            <div class="portfolio-caption-subheading text-muted">Balladez-vous et profitez de la nature dans un parc.</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <!-- Portfolio item 31-->
                    <div class="portfolio-item">
                        <a>
                            <img class="img-fluid" src="../assets/img/activites/musee.png" alt="Musée" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Visiter un musée</div>
                            <div class="portfolio-caption-subheading text-muted">Sélectionnez un musée qui vous intéresse et cultivez-vous.</div>
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
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="../assets/img/team/marion.jpg" alt="..." />
                        <h4>Marion WACHOWIAK</h4>
                        <p class="text-muted">Developer</p>
                        <a class="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/marionwachowiak/"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="../assets/img/team/nesrine.jpg" alt="..." />
                        <h4>Nesrine HAFFAR</h4>
                        <p class="text-muted">Developer</p>
                        <a class="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/nesrine-haffar-268167172/"><i class="fab fa-linkedin-in"></i></a>
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

<!-- Bootstrap core JS-->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
<!-- Core theme JS-->
<script src="../js/scripts.js"></script>

<script>
import axios from 'axios';

export default {
  name: 'HomePage',
  data() {
    return {
      nameActivity: '',
      type: '',
      place: '',
      city: '',
      moodActivity: '',
      description: '',
      image: '',
    }
  },
  mounted() {
    axios.get('http://localhost:5000/activities', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        this.nameActivity = res.data.activity.nameActivity;
        this.type = res.data.activity.type;
        this.place = res.data.activity.place;
        this.city = res.data.activity.city;
        this.description = res.data.activity.description;
        this.moodActivity = res.data.activity.mood;
        this.image = res.data.activity.image;
      })

  }
}
</script>
