import React from "react";
import "./IdiaTechStagePage.css";
import ProjectParagraph from "../ProjectParagraph";
import ListGroup from "../ListGroup";

const IdiaTechStagePage = () => {
  const documents = [
    <a
      href={`${
        import.meta.env.BASE_URL
      }/documents/stages/DepotCamp_compte_rendu.pdf`}
      target="blank"
    >
      CompteRendu.pdf
    </a>,
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
  ];
  const competence_b16 = [
    <p>Mettre en place son environnement d’apprentissage personnel</p>,
  ];

  return (
    <section className="idiatech-stage" id="idiatech-stage">
      <h2 className="heading">
        Mon stage chez <span className="hint">idIA Tech</span>
      </h2>
      <div className="idiatech-stage-content">
        <ProjectParagraph title="Introduction">
          <p>
            Durant ma deuxième année de BTS Services Informatiques aux
            Organisations (option SLAM), j’ai eu l’opportunité d’effectuer un
            stage de deux mois au sein de l’entreprise idIA Tech, spécialisée
            dans le web mining. Avant cette expérience, je connaissais peu ce
            domaine, qui consiste à extraire des données stratégiques à partir
            du Web profond, souvent inaccessibles via une navigation classique.
            Cette spécialisation m’a tout de suite interpellé, car elle combine
            à la fois des enjeux techniques complexes et des problématiques
            actuelles liées à la donnée.
            <br></br>
            <br></br>Si j’ai choisi de postuler chez idIA Tech, c’est avant tout
            parce que je suis animé par une forte curiosité et une envie
            constante de progresser dans des domaines variés de l’informatique.
            Je voyais dans cette entreprise un environnement propice à
            l'apprentissage, à la fois innovant, exigeant et ouvert à la
            transmission de savoirs. Ce stage représentait donc bien plus qu’une
            simple obligation scolaire : il était pour moi une occasion
            précieuse de sortir de ma zone de confort, de découvrir des outils
            professionnels de haut niveau, mais aussi d’expérimenter un autre
            regard sur les enjeux liés à l’intelligence artificielle et à la
            maîtrise des données.
            <br></br>
            <br></br>Tout au long de ces deux mois, j’ai été pleinement intégré
            à une équipe dynamique et passionnée, où l’entraide et le partage de
            connaissances occupent une place centrale. Accompagné par mon maître
            de stage et soutenu par mes collègues, j’ai pu approfondir mes
            compétences en programmation, découvrir le fonctionnement du
            crawleur développé par l’entreprise, ainsi que le langage Grimport,
            utilisé pour automatiser l’extraction de données. J’ai également été
            sensibilisé à des valeurs fortes, comme l’engagement en faveur des
            logiciels libres, l’indépendance technologique des utilisateurs, ou
            encore l’accessibilité des outils numériques pour le plus grand
            nombre. Cette immersion au sein d’idIA Tech a donc enrichi non
            seulement mes compétences techniques, mais aussi ma réflexion sur le
            rôle de l’informatique dans notre société.
          </p>
        </ProjectParagraph>

        <ProjectParagraph title="Présentation de l'entreprise">
          <p>
            idIA Tech est une entreprise technologique française à la pointe de
            l’innovation, spécialisée dans le web-mining, c’est-à-dire
            l’extraction automatique d’informations à partir de données issues
            d’Internet. Plus précisément, elle concentre son expertise sur le
            Web profond, une partie largement inexplorée du Web, composée de
            contenus non indexés par les moteurs de recherche traditionnels,
            souvent dissimulés derrière des formulaires d’identification, des
            filtres multicritères, ou une structure arborescente complexe. Ce
            type de données, en raison de leur difficulté d’accès, est
            particulièrement stratégique pour les entreprises, car il contient
            des informations à forte valeur ajoutée, souvent ignorées ou
            sous-exploitées.
            <br></br>
            <br></br>Pour répondre aux enjeux techniques de cette exploration en
            profondeur, idIA Tech a développé un crawleur avancé : un outil
            automatisé capable de naviguer à travers toutes les pages d’un site
            web, quelles que soient leur structure ou les barrières d’accès, et
            d’y exécuter des scripts personnalisés d’extraction de données. Ce
            processus est rendu possible grâce à l’utilisation de Grimport, un
            langage de programmation maison, spécifiquement conçu par idIA Tech
            pour être à la fois simple d’utilisation et très puissant. Grimport
            est pensé pour les besoins concrets des professionnels, en
            particulier ceux du e-commerce, un secteur où la récupération
            précise et ciblée d’informations est essentielle à la compétitivité.
            <br></br>
            <br></br>Mais idIA Tech ne se distingue pas uniquement par ses
            compétences techniques. Elle se revendique également comme une
            entreprise socialement engagée, profondément attachée aux principes
            du logiciel libre et de l’indépendance technologique. Contrairement
            à de nombreuses entreprises du numérique qui enferment leurs clients
            dans des écosystèmes fermés et des abonnements contraignants, idIA
            Tech propose des solutions accessibles, sans abonnement, et qui
            laissent à l’utilisateur la pleine maîtrise de ses outils. Cette
            philosophie vise à démocratiser l’accès aux technologies de
            datamining et d’intelligence artificielle, souvent réservées à des
            grands groupes capables d’imposer leurs conditions. En ce sens, idIA
            Tech défend une vision éthique de l’innovation : plus ouverte, plus
            équitable, et tournée vers l’intérêt général.
          </p>
        </ProjectParagraph>

        <ProjectParagraph title="Mon role en tant que stagiaire développeur chez idIA Tech">
          Après une semaine de formation intensive dispensée par mon maître de
          stage, durant laquelle j’ai pu me familiariser avec le logiciel et le
          langage Grimport, j’ai progressivement intégré les équipes techniques
          de idIA Tech afin de participer activement aux projets en cours. Cette
          phase d’apprentissage m’a permis de comprendre le fonctionnement des
          outils internes, ainsi que les attentes précises des clients de
          l’entreprise.
          <br></br>
          <br></br>Les projets sur lesquels j’ai travaillé étaient
          majoritairement commandités par des sous-distributeurs confrontés à un
          problème récurrent : les catalogues produits mis à leur disposition
          par leurs fournisseurs étaient souvent incomplets, mal structurés, ou
          obsolètes. Malgré la disponibilité de certains produits sur les sites
          web des fournisseurs, ceux-ci n’étaient pas correctement reflétés dans
          les fichiers catalogues transmis, ce qui entraînait des manques à
          gagner et une mauvaise gestion des stocks.
          <br></br>
          <br></br>Pour répondre à ce besoin, idIA Tech proposait le
          développement de crawlers sur mesure capables d’extraire
          automatiquement et de manière fiable l’ensemble des produits présents
          sur les sites des fournisseurs. Ces données étaient ensuite traitées,
          nettoyées et importées dans les systèmes de gestion des boutiques
          e-commerce des clients, principalement sous Prestashop ou WordPress
          (WooCommerce). Cette automatisation leur permettait de maintenir à
          jour leur catalogue sans intervention manuelle fastidieuse.
          <br></br>
          <br></br>C’est dans ce cadre que j’ai été amené à intervenir. Mon rôle
          principal consistait à concevoir et développer des scripts
          d’importation conformes aux cahiers des charges définis avec chaque
          client. Cela impliquait de respecter des contraintes techniques
          précises, les règles de correspondance des catégories, les formats
          d’image, ou encore la gestion des variations de produits.
          <br></br>
          <br></br>Au fil des semaines, j’ai eu l’opportunité de travailler sur
          plusieurs projets aux problématiques variées, chacun m’ayant permis
          d’approfondir mes compétences en automatisation, en traitement de
          données, ainsi qu’en communication avec les clients pour affiner les
          spécifications. Vous trouverez dans la section "Documents" un compte
          rendu détaillé de l’un de ces projets, qui illustre de manière
          concrète les missions que j’ai pu réaliser.
        </ProjectParagraph>

        <ProjectParagraph title="Documents" className="documents">
          <ListGroup items={documents} className="list-none" />
        </ProjectParagraph>

        <ProjectParagraph title="Liens" className="liens">
          <a href="https://www.idia-tech.com/index.php" target="blank">
            Lien vers le site de la société idIA Tech
          </a>
        </ProjectParagraph>

        <ProjectParagraph title="Remerciements">
          <p>
            Je tiens à remercier sincèrement toute l’équipe d’idIA Tech pour
            m’avoir accueilli et pour m’avoir offert un cadre de travail aussi
            stimulant qu’enrichissant. Cette expérience m’a permis de développer
            mes compétences dans un domaine technologique pointu, tout en
            découvrant les valeurs fortes portées par l’entreprise. J’adresse un
            remerciement tout particulier à mon maître de stage, pour son
            accompagnement attentif, sa pédagogie et sa disponibilité tout au
            long de ma mission. Je remercie également l’ensemble de mes
            collègues pour leur soutien, leur bonne humeur et les échanges
            constructifs. Leur esprit d’équipe et leur enthousiasme ont
            largement contribué à faire de ce stage une expérience humaine et
            professionnelle très marquante.
          </p>
        </ProjectParagraph>

        <ProjectParagraph
          className="liste-competences"
          title="Liste des compétences couvertes"
        >
          <p>
            B1.2 : Répondre aux incidents et aux demandes d’assistance et
            d’évolution
          </p>
          <ListGroup items={competence_b12} className="pl-3" />

          <p>B1.4 : Travailler en mode projet</p>
          <ListGroup items={competence_b14} className="pl-3" />

          <p>
            B1.5 : Mettre à disposition des utilisateurs un service informatique
          </p>
          <ListGroup items={competence_b15} className="pl-3" />

          <p>B1.6 : Organiser son développement professionnel</p>
          <ListGroup items={competence_b16} className="pl-3" />
        </ProjectParagraph>
      </div>
    </section>
  );
};

export default IdiaTechStagePage;
