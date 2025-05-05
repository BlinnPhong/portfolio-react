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
            <LinkButton
              isExternal={true}
              href="https://www.linkedin.com/in/donovan-blocus-72519832a/?originalSubdomain=fr"
              type="social-media"
            >
              <i className="bx bxl-linkedin"></i>
            </LinkButton>
            <LinkButton
              isExternal={true}
              href="https://github.com/BlinnPhong"
              type="social-media"
            >
              <i className="bx bxl-github"></i>
            </LinkButton>
          </div>

          <LinkButton
            isExternal={true}
            href={`${import.meta.env.BASE_URL}/documents/CV.pdf`}
          >
            Consulter mon CV
          </LinkButton>
        </div>
      </section>

      <section className="education" id="education">
        <h2 className="heading">
          Mon Parcours <span className="hint">Scolaire</span>
        </h2>
        <div className="education-container-wrapper">
          <div className="education-container">
            <div className="education-container-formation">
              <i className="bx bx-disc"></i>
              <div className="formation-content">
                <h3 className="year">2023 - 2025</h3>
                <p className="title">
                  BTS SIO, spécilaité Solutions Logicielles et Applications
                  Métiers
                </p>
                <p className="location">CNED</p>
              </div>
            </div>
            <div className="education-container-formation">
              <i className="bx bx-disc"></i>
              <div className="formation-content">
                <h3 className="year">2020</h3>
                <p className="title">L1 Histoire</p>
                <p className="location">Sorbonne Université</p>
              </div>
            </div>
            <div className="education-container-formation">
              <i className="bx bx-disc"></i>
              <div className="formation-content">
                <h3 className="year">2018</h3>
                <p className="title">
                  Baccalauréat Scientifique, spécialité Informatique et Sciences
                  du Numérique
                </p>
                <p className="location">Lycée Emmanuel Mounier</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills" id="skills">
        <h2 className="heading">
          Mes <span className="hint">Compétences</span>
        </h2>
        <div className="skills-container">
          <i className="devicon-symfony-original-wordmark"></i>
          <i className="devicon-react-original-wordmark colored"></i>
          <i className="devicon-csharp-plain colored"></i>
          <i className="devicon-cplusplus-plain colored"></i>
          <i className="devicon-php-plain colored"></i>
          <i className="devicon-python-plain-wordmark colored"></i>
          <i className="devicon-java-plain-wordmark colored"></i>
          <i className="devicon-mysql-plain-wordmark colored"></i>
          <i className="devicon-git-plain-wordmark colored"></i>
          <i className="devicon-opengl-plain colored"></i>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2 className="heading">
          Contacter<span className="hint"> Moi</span>
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
