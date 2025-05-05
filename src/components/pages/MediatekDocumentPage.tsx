import React from "react";
import ListGroup from "../ListGroup";
import ProjectParagraph from "../ProjectParagraph";
import "./MediatekDocumentPage.css";

const MediatekDocumentPage = () => {
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
      }/documents/mediatekdocuments/cahier_des_charges_AP2.pdf`}
      target="blank"
    >
      CahierDesCharges.pdf
    </a>,
    <a
      href={`${
        import.meta.env.BASE_URL
      }/documents/mediatekdocuments/AP2_missions.pdf`}
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
      }/documents/mediatekdocuments/pv_recette_AP2.pdf`}
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
    <p>Identifier, développer, utiliser ou adapter des composants logiciels</p>,
    <p>
      Exploiter les technologies Web pour mettre en œuvre les échanges entre
      applications, y compris de mobilité
    </p>,
    <p>Utiliser des composants d’accès aux données</p>,
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
    <p>
      Mettre à jour des documentations technique et d’utilisation d’une solution
      applicative
    </p>,
    <p>Élaborer et réaliser les tests des éléments mis à jour</p>,
  ];
  const competence_b23 = [
    <p>Exploiter des données à l’aide d’un langage de requêtes</p>,
    <p>
      Développer des fonctionnalités applicatives au sein d’un système de
      gestion de base de données (relationnel ou non)
    </p>,
    <p>Concevoir ou adapter une base de données</p>,
    <p>Administrer et déployer une base de données</p>,
  ];

  return (
    <>
      <section className="mediatekdocument" id="mediatekdocument">
        <h2 className="heading">
          Mediatek<span className="hint">Document</span>
        </h2>

        <div className="mediatekdocument-content">
          <ProjectParagraph title="Contexte">
            <p>
              Ce projet fait partie des ateliers de professionnalisation
              réalisés dans le cadre de ma formation en BTS SIO, spécialité
              SLAM. Il s’agit d’une mise en situation professionnelle réaliste,
              conçue pour me permettre de mettre en œuvre concrètement mes
              compétences techniques dans un contexte similaire à celui d’une
              entreprise.
              <br></br>Dans ce contexte, j'occupe le rôle de technicien
              développeur junior au sein de l'ESN InfoTech Services 86, qui a
              été chargée par le réseau de médiathèques de la Vienne, MediaTek
              86, de la réalisation de plusieurs applications.
            </p>
          </ProjectParagraph>

          <ProjectParagraph title="Existant">
            <p>
              MediatekDocuments est une application de bureau développée en C#
              avec Visual Studio 2019, destinée à la gestion des documents d'une
              médiathèque (livres, DVD, revues). Elle communique avec une base
              de données MySQL via une API REST. Actuellement, l'application est
              partiellement développée et propose les fonctionnalités suivantes
              : recherche et affichage des informations relatives aux documents,
              ainsi que la réception de nouveaux numéros de revues.
            </p>
          </ProjectParagraph>

          <ProjectParagraph title="Demande">
            <p>
              Les missions qui m'ont été confiées consistent à implémenter de
              nouvelles fonctionnalités, notamment la gestion des documents, des
              commandes, ainsi que des limitations d'accès selon le service
              auquel appartient l'utilisateur. Une fois ces fonctionnalités
              ajoutées, il faudra intégrer des tests, générer la documentation
              technique, déployer l’API REST, créer un installeur pour
              l’application C#, et mettre en place un système de sauvegarde des
              données.
            </p>
          </ProjectParagraph>

          <ProjectParagraph title="Langages et technologies utilsés">
            <p>
              Visual Studio 2019, C#, Apache NetBeans IDE 21, PHP, SQL, Postman,
              Hostinger(Hébergeur)
            </p>
          </ProjectParagraph>

          <ProjectParagraph title="Documents" className="documents">
            <ListGroup items={documents} className="list-none" />
          </ProjectParagraph>

          <ProjectParagraph title="Dépot distant" className="depot-distant">
            <div>
              <a
                href="https://github.com/BlinnPhong/MediaTekDocuments"
                target="blank"
              >
                Lien vers le dépôt GitHub de l'application MediaTekDocuments
              </a>
            </div>

            <div>
              <a
                href="https://github.com/BlinnPhong/rest_mediatekdocuments"
                target="blank"
              >
                Lien vers le dépôt GitHub de l'API REST rest_mediatekdocuments
              </a>
            </div>
          </ProjectParagraph>

          <ProjectParagraph title="API REST en ligne">
            <p>
              URL de l'API en ligne :{" "}
              <span className="hint-snd">
                https://api.mediatekdocuments.com/rest_mediatekdocuments
              </span>
            </p>
            <p>
              Le mode opératoire pour l'utiliser est dans le README du dépôt
              Github correspondant
            </p>
          </ProjectParagraph>

          <ProjectParagraph title="Documentation technique">
            <a
              href="https://api.mediatekdocuments.com/rest_mediatekdocuments/rest_mediatekdocumentsdocs/"
              target="blank"
            >
              Lien vers la documentation technique de l'API
            </a>
            <p>
              La documentation technique de l'application C# se trouve dans le
              dépot Github correspondant
            </p>
          </ProjectParagraph>

          <ProjectParagraph title="Documentation utilisateur">
            <div>
              <iframe
                width="854"
                height="480"
                src="https://www.youtube.com/embed/aLhzLLVBjQ8"
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

            <p>B1.4 : Travailler en mode projet</p>
            <ListGroup items={competence_b14} className="pl-3" />

            <p>
              B1.5 : Mettre à disposition des utilisateurs un service
              informatique
            </p>
            <ListGroup items={competence_b15} className="pl-3" />

            <br></br>

            <p>B2.1 : Concevoir et développer une solution applicative</p>
            <ListGroup items={competence_b21} className="pl-3" />

            <p>
              B2.2 : Assurer la maintenance corrective ou évolutive d’une
              solution applicative
            </p>
            <ListGroup items={competence_b22} className="pl-3" />

            <p>B2.3 : Gérer les données</p>
            <ListGroup items={competence_b23} className="pl-3" />
          </ProjectParagraph>
        </div>
      </section>
    </>
  );
};

export default MediatekDocumentPage;
