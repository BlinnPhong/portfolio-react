import React from "react";
import "./MediatekFormationPage.css";
import { Link } from "react-router-dom";
import ListGroup from "../ListGroup";
import ProjectParagraph from "../ProjectParagraph";

const MediatekFormationPage = () => {
  const documents = [
    <a
      href={`${
        import.meta.env.BASE_URL
      }/documents/mediatekformations/contexte.pdf`}
      target="blank"
    >
      ContexteOfficiel.pdf
    </a>,
    <a
      href={`${
        import.meta.env.BASE_URL
      }/documents/mediatekformations/contratDeveloppement.pdf`}
      target="blank"
    >
      ContratDeDéveloppement.pdf
    </a>,
    <a
      href={`${
        import.meta.env.BASE_URL
      }/documents/mediatekformations/cahier_des_charges.pdf`}
      target="blank"
    >
      CahierDesCharges.pdf
    </a>,
    <a
      href={`${
        import.meta.env.BASE_URL
      }/documents/mediatekformations/AP1_missions.pdf`}
      target="blank"
    >
      Missions.pdf
    </a>,
    <a
      href={`${
        import.meta.env.BASE_URL
      }/documents/mediatekformations/bilan_atelier1.pdf`}
      target="blank"
    >
      CompteRendu.pdf
    </a>,
    <a
      href={`${
        import.meta.env.BASE_URL
      }/documents/mediatekformations/pv_recette.pdf`}
      target="blank"
    >
      PV_Recette.pdf
    </a>,
  ];

  const competence_b11 = [
    <p>
      Mettre en place et vérifier les niveaux d’habilitation associés à un
      service
    </p>,
    <p>Gérer des sauvegardes</p>,
  ];
  const competence_b12 = [
    <p>Traiter des demandes concernant les applications</p>,
  ];
  const competence_b13 = [
    <p>
      Participer à l’évolution d’un site Web exploitant les données de
      l’organisation.
    </p>,
  ];
  const competence_b14 = [
    <p>Analyser les objectifs et les modalités d’organisation d’un projet</p>,
    <p>Planifier les activités</p>,
    <p>Évaluer les indicateurs de suivi d’un projet et analyser les écarts</p>,
  ];
  const competence_b15 = [
    <p>Réaliser les tests d’intégration et d’acceptation d’un service</p>,
    <p>Déployer un service</p>,
    <p>Accompagner les utilisateurs dans la mise en place d’un service</p>,
  ];

  const competence_b21 = [
    <p>Analyser un besoin exprimé et son contexte juridique</p>,
    <p>
      Participer à la conception de l’architecture d’une solution applicative
    </p>,
    <p>Modéliser une solution applicative</p>,
    <p>Exploiter les ressources du cadre applicatif &#40;framework&#41;</p>,
    <p>Identifier, développer, utiliser ou adapter des composants logiciels</p>,
    <p>
      Exploiter les technologies Web pour mettre en œuvre les échanges entre
      applications, y compris de mobilité
    </p>,
    <p>Utiliser des composants d’accès aux données</p>,
    <p>Intégrer en continu les versions d’une solution applicative</p>,
    <p>
      Réaliser les tests nécessaires à la validation ou à la mise en production
      d’éléments adaptés ou développés
    </p>,
    <p>
      Rédiger des documentations technique et d’utilisation d’une solution
      applicative
    </p>,
    <p>
      Exploiter les fonctionnalités d’un environnement de développement et de
      tests
    </p>,
  ];
  const competence_b22 = [
    <p>
      Recueillir, analyser et mettre à jour les informations sur une version
      d’une solution applicative
    </p>,
    <p>Évaluer la qualité d’une solution applicative</p>,
    <p>Analyser et corriger un dysfonctionnement</p>,
  ];
  const competence_b23 = [
    <p>Exploiter des données à l’aide d’un langage de requêtes</p>,
    <p>Administrer et déployer une base de données</p>,
  ];

  return (
    <section className="mediatekformation" id="mediatekformation">
      <h2 className="heading">
        Mediatek<span className="hint">Formation</span>
      </h2>

      <div className="mediatekformation-content">
        <ProjectParagraph title="Contexte">
          <p>
            Ce projet fait partie des ateliers de professionnalisation réalisés
            dans le cadre de ma formation en BTS SIO, spécialité SLAM. Il s’agit
            d’une mise en situation professionnelle réaliste, conçue pour me
            permettre de mettre en œuvre concrètement mes compétences techniques
            dans un contexte similaire à celui d’une entreprise.
            <br></br>Dans ce contexte, j'occupe le rôle de technicien
            développeur junior au sein de l'ESN InfoTech Services 86, qui a été
            chargée par le réseau de médiathèques de la Vienne, MediaTek 86, de
            la réalisation de plusieurs applications.
          </p>
        </ProjectParagraph>

        <ProjectParagraph title="Existant">
          <p>
            MediatekFormation est un site web développé avec Symfony 6.4, qui
            permet d'accéder aux vidéos d'auto-formation (également accessibles
            su Youtube) proposées par la chaîne de médiathèques MediaTek86.
            <br></br>Actuellement, seule la partie front office du site a été
            mise en œuvre et Voici les fonctionnalités globales disponible à ce
            stade : consulter l'accueil, consulter les liste de
            formations/playlists, consulter une formation/playlist spécifique,
            consulter les CGU
          </p>
        </ProjectParagraph>

        <ProjectParagraph title="Demande">
          <p>
            Plusieurs missions m'ont été confiées, notamment la correction de
            bugs, l’ajout de nouvelles fonctionnalités, le développement de la
            partie back office et le déploiement du site.
          </p>
        </ProjectParagraph>

        <ProjectParagraph title="Langages et technologies utilsés">
          <p>
            Symfony, PHP, HTML&#40;Twig&#41;&#47;CSS, SQL, Bootstrap, Apache
            NetBeans IDE 21, InfinityFree(Hébergeur)
          </p>
        </ProjectParagraph>

        <ProjectParagraph title="Documents" className="documents">
          <ListGroup items={documents} className="list-none" />
        </ProjectParagraph>

        <ProjectParagraph title="Dépot distant">
          <a
            href="https://github.com/BlinnPhong/mediatekformation"
            target="blank"
          >
            Dépôt GitHub
          </a>
        </ProjectParagraph>

        <ProjectParagraph title="Site">
          <a href="https://mediatekformationbis.kesug.com/" target="blank">
            Lien vers le site web
          </a>
          <p>
            Voici les identifiants pour la partie admin &#40;ces identifiants ne
            sont présent sur cette page que temporairement pour l'examen du BTS
            SIO&#41; :
          </p>
          <p>login : admin</p>
          <p>password : admin</p>
        </ProjectParagraph>

        <ProjectParagraph title="Documentation technique">
          <a
            href="https://mediatekformationbis.kesug.com/public/mediatekformationdoc/index.html"
            target="blank"
          >
            Lien vers la documentation technique
          </a>
        </ProjectParagraph>

        <ProjectParagraph title="Documentation utilisateur">
          {/*<video controls width="640">
            <source
              src={`${import.meta.env.BASE_URL}/video/avoine.mp4`}
              type="video/mp4"
            />
          </video>*/}

          <div>
            <iframe
              className="video-user"
              width="854"
              height="480"
              src="https://www.youtube.com/embed/yuU1ouy-2TE"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </ProjectParagraph>

        <ProjectParagraph
          className="liste-competences"
          title="Liste des compétences couvertes"
        >
          <p>B1.1 : Gérer le patrimoine informatique</p>
          <ListGroup items={competence_b11} className="pl-3" />

          <p>
            B1.2 : Répondre aux incidents et aux demandes d’assistance et
            d’évolution
          </p>
          <ListGroup items={competence_b12} className="pl-3" />

          <p>B1.3 : Développer la présence en ligne de l’organisation</p>
          <ListGroup items={competence_b13} className="pl-3" />

          <p>B1.4 : Travailler en mode projet</p>
          <ListGroup items={competence_b14} className="pl-3" />

          <p>
            B1.5 : Mettre à disposition des utilisateurs un service informatique
          </p>
          <ListGroup items={competence_b15} className="pl-3" />

          <br></br>

          <p>B2.1 : Concevoir et développer une solution applicative</p>
          <ListGroup items={competence_b21} className="pl-3" />

          <p>
            B2.2 : Assurer la maintenance corrective ou évolutive d’une solution
            applicative
          </p>
          <ListGroup items={competence_b22} className="pl-3" />

          <p>B2.3 : Gérer les données</p>
          <ListGroup items={competence_b23} className="pl-3" />
        </ProjectParagraph>
      </div>
    </section>
  );
};

export default MediatekFormationPage;
