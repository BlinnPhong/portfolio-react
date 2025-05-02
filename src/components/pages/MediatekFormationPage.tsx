import React from "react";
import "./MediatekFormationPage.css";
import { Link } from "react-router-dom";

const MediatekFormationPage = () => {
  return (
    <section className="mediatekformation" id="bts">
      <h2 className="heading">
        MediatekFormation<span className="hint"></span>
      </h2>

      <div className="mediatekformation-content">
        {/* Contexte */}
        <div
          className="mediatekformation-content-depot-distant
          mediatekformation-content-section"
        >
          {" "}
          <h3>Contexte</h3>
          <p>
            MediatekFormation est un site web développé avec Symfony 6.4, qui
            permet d'accéder aux vidéos d'auto-formation proposées par une
            chaîne de médiathèques et qui sont aussi accessibles sur YouTube.
            Actuellement, seule la partie front office du site a été mise en
            œuvre.
          </p>
        </div>

        {/* Demande */}
        <div
          className="mediatekformation-content-depot-distant
          mediatekformation-content-section"
        >
          {" "}
          <h3>Demande</h3>
          <p>
            Plusieurs missions m'ont été confiées, notamment la correction de
            bugs, l’ajout de nouvelles fonctionnalités, le développement de la
            partie back office et le déploiement du site.
          </p>
          <p></p>
        </div>

        {/* Langage et technologies utilisés */}
        <div
          className="mediatekformation-content-depot-distant
          mediatekformation-content-section"
        >
          {" "}
          <h3>Langages et technologies utilsés</h3>
          <p>Symfony, PHP, HTML&#40;Twig&#41;&#47;CSS, SQL, Bootstrap</p>
        </div>

        {/* Documents */}
        <div
          className="mediatekformation-content-depot-distant
          mediatekformation-content-section"
        >
          {" "}
          <h3>Documents</h3>
          <div className="links">
            {" "}
            <ul>
              <li>
                <a
                  href={`${
                    import.meta.env.BASE_URL
                  }/documents/mediatekformations/contexte.pdf`}
                  target="blank"
                >
                  Contexte officiel
                </a>
              </li>
              <li>
                <a
                  href={`${
                    import.meta.env.BASE_URL
                  }/documents/mediatekformations/contratDeveloppement.pdf`}
                  target="blank"
                >
                  Contrat de développement
                </a>
              </li>
              <li>
                <a
                  href={`${
                    import.meta.env.BASE_URL
                  }/documents/mediatekformations/cahier_des_charges.pdf`}
                  target="blank"
                >
                  Cahier des charges
                </a>
              </li>
              <li>
                <a
                  href={`${
                    import.meta.env.BASE_URL
                  }/documents/mediatekformations/AP1_missions.pdf`}
                  target="blank"
                >
                  Missions
                </a>
              </li>
              <li>
                <a
                  href={`${
                    import.meta.env.BASE_URL
                  }/documents/mediatekformations/bilan_atelier1.pdf`}
                  target="blank"
                >
                  Compte rendu
                </a>
              </li>
              <li>
                <a
                  href={`${
                    import.meta.env.BASE_URL
                  }/documents/mediatekformations/pv_recette.pdf`}
                  target="blank"
                >
                  PV de recette
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Dépot distant */}
        <div
          className="mediatekformation-content-depot-distant
          mediatekformation-content-section"
        >
          <h3>Dépôt distant</h3>
          <a
            href="https://github.com/BlinnPhong/mediatekformation"
            target="blank"
          >
            Dépôt GitHub
          </a>
        </div>

        {/* Site */}
        <div
          className="mediatekformation-content-depot-distant
          mediatekformation-content-section"
        >
          <h3>Site</h3>
          <a href="https://mediatekformationbis.kesug.com/" target="blank">
            mediatekformationbis.kesug.com
          </a>
        </div>

        {/* Documentation technique */}
        <div
          className="mediatekformation-content-documentation
          mediatekformation-content-section"
        >
          <h3>Documentation Technique</h3>
        </div>

        {/* Video */}
        <div
          className="mediatekformation-content-video
          mediatekformation-content-section"
        >
          <h3>Documentation Utilisateur</h3>
          <video controls width="640">
            <source
              src={`${import.meta.env.BASE_URL}/video/avoine.mp4`}
              type="video/mp4"
            />
          </video>
        </div>

        {/* Liste compétences*/}
        <div
          className="mediatekformation-content-competences
          mediatekformation-content-section"
        >
          <h3>Liste des compétences couvertes</h3>
          <p>B1.1 : Gérer le patrimoine informatique</p>

          <p>
            B1.2 : Répondre aux incidents et aux demandes d’assistance et
            d’évolution
          </p>

          <p>B1.3 : Développer la présence en ligne de l’organisation</p>

          <p>B1.4 : Travailler en mode projet</p>

          <p>
            B1.5 : Mettre à disposition des utilisateurs un service informatique
          </p>

          <p>B2.1 : Concevoir et développer une solution applicative</p>
          <ul className="liste-competences">
            <li>Analyser un besoin exprimé et son contexte juridique</li>
            <li>
              Participer à la conception de l’architecture d’une solution
              applicative
            </li>
            <li>Modéliser une solution applicative</li>
            <li>Exploiter les ressources du cadre applicatif (framework)</li>
            <li>
              Identifier, développer, utiliser ou adapter des composants
              logiciels
            </li>
            <li>
              Exploiter les technologies Web pour mettre en œuvre les échanges
              entre applications, y compris de mobilité
            </li>
            <li>Utiliser des composants d’accès aux données</li>
            <li>Intégrer en continu les versions d’une solution applicative</li>
            <li>
              Réaliser les tests nécessaires à la validation ou à la mise en
              production d’éléments adaptés ou développés
            </li>
            <li>
              Rédiger des documentations technique et d’utilisation d’une
              solution applicative
            </li>
            <li>
              Exploiter les fonctionnalités d’un environnement de développement
              et de tests
            </li>
          </ul>

          <p>
            B2.2 : Assurer la maintenance corrective ou évolutive d’une solution
            applicative
          </p>
          <ul className="liste-competences">
            <li>
              Recueillir, analyser et mettre à jour les informations sur une
              version d’une solution applicative
            </li>
            <li>Évaluer la qualité d’une solution applicative</li>
            <li>Analyser et corriger un dysfonctionnement</li>
          </ul>

          <p>B2.3 : Gérer les données</p>
          <ul className="liste-competences">
            <li>Exploiter des données à l’aide d’un langage de requêtes</li>
            <li>Administrer et déployer une base de données</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MediatekFormationPage;
