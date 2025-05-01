import React from "react";
import "./HomePage.css";
import LinkButton from "../LinkButton";
import ProjectPreview from "../ProjectPreview";
import Button from "../Button";

const HomePage = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="about-img">
          <img
            src={`${import.meta.env.BASE_URL}/headshot.png`}
            alt="Headshot Image"
          ></img>
        </div>

        <div className="about-content">
          <h1>Donovan Blocus</h1>
          <h3>
            Étudiant <span className="hint">BTS SIO SLAM</span>
          </h3>
          <p>
            Passionnée par la programmation, j’ai décidé de reprendre mes études
            en 2023 en intégrant un BTS SIO option SLAM (Solutions Logicielles
            et Applications Métiers). Cette formation me permet de consolider
            mes compétences techniques et de me préparer à la poursuite de mon
            parcours en Licence 3 Informatique.
          </p>

          <div className="social-media">
            <LinkButton href="#" type="social-media">
              <i className="bx bxl-linkedin"></i>
            </LinkButton>
            <LinkButton href="#" type="social-media">
              <i className="bx bxl-github"></i>
            </LinkButton>
          </div>

          <LinkButton href="#">Consulter mon CV</LinkButton>
        </div>
      </section>

      <section className="skills" id="skills">
        <h2 className="heading">
          Mes <span className="hint">Compétences</span>
        </h2>
      </section>

      <section className="projects" id="projects">
        <h2 className="heading">
          Mes <span className="hint">Projets</span>
        </h2>

        <div className="projects-container">
          <ProjectPreview title="Évolution d'une Application Web Symfony" />
          <ProjectPreview />
        </div>
      </section>

      <section className="bts" id="bts">
        <h2 className="heading">
          Le <span className="hint">BTS SIO</span>
        </h2>
      </section>

      <section className="contact" id="contact">
        <h2 className="heading">
          <span className="hint">Contacter Moi</span>
        </h2>

        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Nom et Prénom"></input>
            <input
              type="email"
              name="Email"
              placeholder="Adresse Email"
            ></input>
          </div>

          <div className="input-box">
            <input type="number" placeholder="Numéro de téléphone"></input>
            <input type="text" placeholder="Objet"></input>
          </div>

          <textarea
            name="message"
            id=""
            cols={30}
            rows={10}
            placeholder="Votre Message"
          ></textarea>
          <Button type="submit">Envoyer</Button>
        </form>
      </section>
    </>
  );
};

export default HomePage;
