import React from "react";
import ProjectParagraph from "../ProjectParagraph";
import "./VeilleTechnoPage.css";

const VeilleTechnoPage = () => {
  return (
    <section className="veilletech" id="veilletech">
      <h2 className="heading">
        Ma Veille <span className="hint">Technologique</span>
      </h2>

      <div className="veilletech-content">
        <ProjectParagraph title="Qu'est ce que la Veille Technologique">
          <p>
            La veille technologique est un processus de surveillance continue
            permettant de se tenir informé des évolutions, innovations et
            nouvelles tendances dans les domaines technologiques liés à
            l’informatique.
          </p>
        </ProjectParagraph>

        <ProjectParagraph title="Évolution des frameworks JavaScript (React, Vue, Angular)">
          <p>
            J’ai choisi pour ma veille technologique le thème de l’évolution des
            frameworks JavaScript. Ces frameworks jouent un rôle central dans le
            développement d’interfaces web modernes. Ils permettent de concevoir
            des applications dynamiques, interactives et performantes, tout en
            apportant une structure au code et en facilitant sa maintenance. En
            tant que futur développeur, il est essentiel de comprendre les
            différences entre les principaux frameworks — React, Vue.js et
            Angular — d’analyser leurs évolutions récentes, leur popularité
            auprès des développeurs, ainsi que leurs domaines d’application.
            Bien qu’ils dominent tous les trois le marché du développement web,
            chacun se distingue par ses spécificités techniques et ses cas
            d’usage.
          </p>
        </ProjectParagraph>

        <ProjectParagraph title="Stratégie">
          <p>
            Pour réaliser ma veille sur le thème "L’évolution des frameworks
            JavaScript (React, Vue, Angular)", j’ai mis en place une stratégie
            combinant plusieurs outils numériques afin de rester informé de
            manière régulière et efficace.
          </p>
          <br></br>
          <div className="strategie-content">
            <h4>Google Alerts</h4>
            <p>
              J’ai configuré plusieurs Google Alerts avec des mots-clés comme
              React JS, Vue 3, Angular 17 ou encore framework JavaScript pour
              recevoir par email des notifications dès qu’un article, blog ou
              publication web en parlait
            </p>
            <br></br>

            <h4>Les Newsletters</h4>
            <p>
              J’ai également suivi des newsletters spécialisées telles que{" "}
              <a href="https://javascriptweekly.com/" target="blank">
                JavaScript Weekly
              </a>{" "}
              et{" "}
              <a href="https://frontendfoc.us/" target="blank">
                Frontend Focus
              </a>
              , qui proposent chaque semaine un résumé des nouveautés et
              tendances dans l’écosystème JavaScript
            </p>
            <br></br>

            <h4>LinkedIn</h4>
            <p>
              Enfin, j’ai utilisé LinkedIn pour suivre des professionnels du
              développement web, des communautés techniques (comme Vue.js
              Developers ou React Community) et des entreprises technologiques
              qui partagent des retours d’expérience, des articles techniques ou
              des annonces de mises à jour importantes
            </p>
          </div>
        </ProjectParagraph>
      </div>
    </section>
  );
};

export default VeilleTechnoPage;
