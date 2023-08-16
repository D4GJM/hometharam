import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import image1 from "./img/intro-carousel/1.jpg";
import image2 from "./img/intro-carousel/2.jpg";
import image3 from "./img/intro-carousel/3.jpg";
import image4 from "./img/intro-carousel/4.jpg";
import image5 from "./img/intro-carousel/5.jpg";
import imagefact from "./img/facts-img.png";
import aboutmisson from "./img/about-mission.jpg";
import aboutplan from "./img/about-plan.jpg";
import aboutvision from "./img/about-vision.jpg";
import team1 from "./img/team-1.jpg";
import team2 from "./img/team-2.jpg";
import team3 from "./img/team-3.jpg";
import team4 from "./img/team-4.jpg";
import "./Icons/css/ionicons.min.css";
export default function Home() {
  return (
    <>
      <section id="intro">
        <div className="intro-container">
          <div
            id="introCarousel"
            className="carousel  slide carousel-fade"
            data-ride="carousel"
          >
            <ol className="carousel-indicators" />
            <div className="carousel-inner" role="listbox">
              <div
                className="carousel-item active"
                style={{ backgroundImage: { image1 } }}
              >
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2>We are professional</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <a
                      href="#featured-services"
                      className="btn-get-started scrollto"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="carousel-item"
                style={{ backgroundImage: { image2 } }}
              >
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2>At vero eos et accusamus</h2>
                    <p>
                      Nam libero tempore, cum soluta nobis est eligendi optio
                      cumque nihil impedit quo minus id quod maxime placeat
                      facere possimus, omnis voluptas assumenda est, omnis dolor
                      repellendus. Temporibus autem quibusdam et aut officiis
                      debitis aut.
                    </p>
                    <a
                      href="#featured-services"
                      className="btn-get-started scrollto"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="carousel-item"
                style={{ backgroundImage: { image3 } }}
              >
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2>Temporibus autem quibusdam</h2>
                    <p>
                      Beatae vitae dicta sunt explicabo. Nemo enim ipsam
                      voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt omnis iste natus error sit
                      voluptatem accusantium.
                    </p>
                    <a
                      href="#featured-services"
                      className="btn-get-started scrollto"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="carousel-item"
                style={{ backgroundImage: { image4 } }}
              >
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2>Nam libero tempore</h2>
                    <p>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non numquam
                      eius modi tempora incidunt ut labore et dolore magnam
                      aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                      nostrum.
                    </p>
                    <a
                      href="#featured-services"
                      className="btn-get-started scrollto"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="carousel-item"
                style={{ backgroundImage: { image5 } }}
              >
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2>Magnam aliquam quaerat</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <a
                      href="#featured-services"
                      className="btn-get-started scrollto"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#introCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon ion-chevron-left"
                aria-hidden="true"
              />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#introCarousel"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon ion-chevron-right"
                aria-hidden="true"
              />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
      {/* #intro */}
      {/*==========================
Facts Section
    ============================*/}
      <section id="facts" className="wow fadeIn">
        <div className="container">
          <header className="section-header">
            <h3>Facts</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque
            </p>
          </header>
          <div className="facts-img">
            <img src={imagefact} alt="" className="img-fluid" />
          </div>
        </div>
      </section>
      {/* #facts */}
      {/*==========================
About Us Section
    ============================*/}
      <section id="about">
        <div className="container">
          <header className="section-header">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </header>
          <div className="row about-cols">
            <div className="col-md-4 wow fadeInUp">
              <div className="about-col">
                <div className="img">
                  <img src={aboutmisson} alt="" className="img-fluid" />
                  <div className="icon">
                    <i className="ion-ios-speedometer-outline" />
                  </div>
                </div>
                <h2 className="title">
                  <a href="#">Our Mission</a>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                  tempor ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="about-col">
                <div className="img">
                  <img src={aboutplan} alt="" className="img-fluid" />
                  <div className="icon">
                    <i className="ion-ios-list-outline" />
                  </div>
                </div>
                <h2 className="title">
                  <a href="#">Our Plan</a>
                </h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                  illo inventore veritatis et quasi architecto beatae vitae
                  dicta sunt explicabo.
                </p>
              </div>
            </div>
            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
              <div className="about-col">
                <div className="img">
                  <img src={aboutvision} alt="" className="img-fluid" />
                  <div className="icon">
                    <i className="ion-ios-eye-outline" />
                  </div>
                </div>
                <h2 className="title">
                  <a href="#">Our Vision</a>
                </h2>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aut odit aut
                  fugit, sed quia magni dolores eos qui ratione voluptatem sequi
                  nesciunt Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* #about */}
      {/*==========================
Call To Action Section
    ============================*/}
      <section id="call-to-action" className="wow fadeIn">
        <div className="container text-center">
          <h3>Call To Action</h3>
          <p>
            {" "}
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <a className="cta-btn" href="#">
            Call To Action
          </a>
        </div>
      </section>
      {/* #call-to-action */}
      <section id="skills">
        <div className="container">
          <header className="section-header">
            <h3>Our Skills</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </p>
          </header>
        </div>
      </section>
      {/*==========================
Services Section
    ============================*/}
      <section id="services">
        <div className="container">
          <header className="section-header wow fadeInUp">
            <h3>Services</h3>
            <p>
              Laudem latine persequeris id sed, ex fabulas delectus quo. No vel
              partiendo abhorreant vituperatoribus, ad pro quaestio laboramus.
              Ei ubique vivendum pro. At ius nisl accusam lorenta zanos
              paradigno tridexa panatarel.
            </p>
          </header>
          <div className="row">
            <div
              className="col-lg-4 col-md-6 box wow bounceInUp"
              data-wow-duration="1.4s"
            >
              <div className="icon">
                <i className="ion-ios-analytics-outline" />
              </div>
              <h4 className="title">
                <a href="">Lorem Ipsum</a>
              </h4>
              <p className="description">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi sint occaecati cupiditate non provident
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 box wow bounceInUp"
              data-wow-duration="1.4s"
            >
              <div className="icon">
                <i className="ion-ios-bookmarks-outline" />
              </div>
              <h4 className="title">
                <a href="">Dolor Sitema</a>
              </h4>
              <p className="description">
                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat tarad limino ata
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 box wow bounceInUp"
              data-wow-duration="1.4s"
            >
              <div className="icon">
                <i className="ion-ios-paper-outline" />
              </div>
              <h4 className="title">
                <a href="">Sed ut perspiciatis</a>
              </h4>
              <p className="description">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 box wow bounceInUp"
              data-wow-delay="0.1s"
              data-wow-duration="1.4s"
            >
              <div className="icon">
                <i className="ion-ios-speedometer-outline" />
              </div>
              <h4 className="title">
                <a href="">Magni Dolores</a>
              </h4>
              <p className="description">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 box wow bounceInUp"
              data-wow-delay="0.1s"
              data-wow-duration="1.4s"
            >
              <div className="icon">
                <i className="ion-ios-barcode-outline" />
              </div>
              <h4 className="title">
                <a href="">Nemo Enim</a>
              </h4>
              <p className="description">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 box wow bounceInUp"
              data-wow-delay="0.1s"
              data-wow-duration="1.4s"
            >
              <div className="icon">
                <i className="ion-ios-people-outline" />
              </div>
              <h4 className="title">
                <a href="">Eiusmod Tempor</a>
              </h4>
              <p className="description">
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* #services */}
      {/*==========================
Team Section
    ============================*/}
      <section id="team">
        <div className="container">
          <div className="section-header wow fadeInUp">
            <h3>Team</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque
            </p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 wow fadeInUp">
              <div className="member">
                <img src={team1} className="img-fluid" alt="" />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                    <div className="social">
                      <a href="">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="">
                        <i className="fa fa-google-plus" />
                      </a>
                      <a href="">
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="member">
                <img src={team2} className="img-fluid" alt="" />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                    <div className="social">
                      <a href="">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="">
                        <i className="fa fa-google-plus" />
                      </a>
                      <a href="">
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="member">
                <img src={team3} className="img-fluid" alt="" />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                    <div className="social">
                      <a href="">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="">
                        <i className="fa fa-google-plus" />
                      </a>
                      <a href="">
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="member">
                <img src={team4} className="img-fluid" alt="" />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                    <div className="social">
                      <a href="">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="">
                        <i className="fa fa-google-plus" />
                      </a>
                      <a href="">
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* #team */}
    </>
  );
}
