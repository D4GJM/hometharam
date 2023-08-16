import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

import image1 from "./img/intro-carousel/1.jpg";
import image2 from "./img/intro-carousel/2.jpg";
import image3 from "./img/intro-carousel/3.jpg";
import image4 from "./img/intro-carousel/4.jpg";
import image5 from "./img/intro-carousel/5.jpg";
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
                    <h1>IYKONS</h1>
                    <p>
                      <h2>Welcome to IYKONS</h2>
                      IYKONS offers complete financial, IT, and business support
                      solutions for companies and individuals across three
                      continents. Our excellent team of specialists can help you
                      and your business with your financial, IT, and business
                      support needs. Our mission is to meet the needs of SMEs
                      under one roof. We relish the challenges of finding the
                      best solutions for you, and we thrive on making our
                      clients happy. To find out more about our services, please
                      do not hesitate to contact us online or at your nearest
                      local office.
                    </p>

                  
                  </div>
                </div>
              </div>
              <div
                className="carousel-item"
                style={{ backgroundImage: { image2 } }}
              >
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h1>IYKONS</h1>
                    <p>
                      <h2>Welcome to IYKONS</h2>
                      IYKONS offers complete financial, IT, and business support
                      solutions for companies and individuals across three
                      continents. Our excellent team of specialists can help you
                      and your business with your financial, IT, and business
                      support needs. Our mission is to meet the needs of SMEs
                      under one roof. We relish the challenges of finding the
                      best solutions for you, and we thrive on making our
                      clients happy. To find out more about our services, please
                      do not hesitate to contact us online or at your nearest
                      local office.
                    </p>
                  
                  </div>
                </div>
              </div>
              <div
                className="carousel-item"
                style={{ backgroundImage: { image3 } }}
              >
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h1>IYKONS</h1>
                    <p>
                      <h2>Welcome to IYKONS</h2>
                      IYKONS offers complete financial, IT, and business support
                      solutions for companies and individuals across three
                      continents. Our excellent team of specialists can help you
                      and your business with your financial, IT, and business
                      support needs. Our mission is to meet the needs of SMEs
                      under one roof. We relish the challenges of finding the
                      best solutions for you, and we thrive on making our
                      clients happy. To find out more about our services, please
                      do not hesitate to contact us online or at your nearest
                      local office.
                    </p>
                  
                  </div>
                </div>
              </div>
              <div
                className="carousel-item"
                style={{ backgroundImage: { image4 } }}
              >
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h1>IYKONS</h1>
                    <p>
                      <h2>Welcome to IYKONS</h2>
                      IYKONS offers complete financial, IT, and business support
                      solutions for companies and individuals across three
                      continents. Our excellent team of specialists can help you
                      and your business with your financial, IT, and business
                      support needs. Our mission is to meet the needs of SMEs
                      under one roof. We relish the challenges of finding the
                      best solutions for you, and we thrive on making our
                      clients happy. To find out more about our services, please
                      do not hesitate to contact us online or at your nearest
                      local office.
                    </p>
                  
                  </div>
                </div>
              </div>
              <div
                className="carousel-item"
                style={{ backgroundImage: { image5 } }}
              >
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h1>IYKONS</h1>
                    <p>
                      <h2>Welcome to IYKONS</h2>
                      IYKONS offers complete financial, IT, and business support
                      solutions for companies and individuals across three
                      continents. Our excellent team of specialists can help you
                      and your business with your financial, IT, and business
                      support needs. Our mission is to meet the needs of SMEs
                      under one roof. We relish the challenges of finding the
                      best solutions for you, and we thrive on making our
                      clients happy. To find out more about our services, please
                      do not hesitate to contact us online or at your nearest
                      local office.
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
            <div className="content-wrapper">
              <div className="text-content">
                <h1>Welcome to IYKONS</h1>
                <h6>
                  <p>
                    {/* Your paragraph content */}
                    <p>
                      IYKONS offers complete financial, IT, and business support
                      solutions for companies and individuals across three
                      continents.
                    </p>
                    <p>
                      Our excellent team of specialists can help you and your
                      business with your financial, IT, and business support
                      needs. Our mission is to meet the needs of SMEs under one
                      roof. We relish the challenges of finding the best
                      solutions for you, and we thrive on making our clients
                      happy.
                    </p>
                    <p>
                      To find out more about our services, please do not
                      hesitate to contact us online or at your nearest local
                      office.
                    </p>
                    <p>We are based in</p>
                    <ul>
                      <li>Chessington, Greater London, United Kingdom</li>
                      <li>Chennai, Tamil Nadu, India</li>
                      <li>Sydney, Australia</li>
                    </ul>
                    <p>
                      IYKONS is an ACCA-accredited chartered accountancy firm.
                      We undertake all aspects of Accountancy and Tax work.
                    </p>
                    <p>
                      Contact IYKONS to find out about other bespoke solutions
                      we offer.
                    </p>
                  </p>
                </h6>
              </div>
              <div className="image-content">
                <img src={image1} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="facts-img"></div>
          </header>
        </div>
      </section>
      {/* #facts */}
      {/*==========================
About Us Section
    ============================*/}
      <section id="about">
        <div className="container">
          <header className="section-header">
            <h1>IYKONS Products</h1>
            <p>
              <br></br>
              <hr></hr>
              <br></br>
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
                  <a href="#">Fintech Services And Solutions</a>
                </h2>
                <p>
                  We create new or improve existing financial solutions for our
                  customers based on our nearly 20 years of experience in
                  banking and financial software development. We are prepared to
                  do market research and provide an effective fintech solution
                  for your company for the right financial management.
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
                  <a href="#">IYConnect</a>
                </h2>
                <p>
                  IYCONNECT is a collaborative practice management platform to
                  manage the workflow, communicate with the team, and deliver
                  exceptional client work. IYCONNECT brings a total
                  transformation across the entire practice, allowing any firm
                  to maximize efficiencies, streamline processes and optimize
                  the scale.
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
                  <a href="#">IYPay</a>
                </h2>
                <p>
                  HR Software for SMEs that is easy and economical Are you a
                  small or medium-sized firm seeking an easy-to-use, low-cost HR
                  Management System? We help you streamline your HR operations
                  by eliminating the need for time-consuming manual processes
                  with our simple-to-implement system, leaving you more time to
                  focus on what matters
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
        <div className="container text-left">
          <div className="content-wrapper">
            <div className="text-content">
              <h3>Our History</h3>
              <br></br>
              <h6>
                <p>
                  Jey Founded IYKONS in 2008 after observing a significant gap
                  in the SME market for a one-stop solution for aspiring
                  business people. The IYKONS organisation and team were created
                  to address the various challenges that running a business
                  entails. We have a proven track record of successfully
                  supporting hundreds of businesses across three continents.
                </p>
              </h6>
              <p>
                IYKONS manages over 500 portfolios across a variety of sectors,
                from not-for-profit to aeronautical industries.
              </p>
              <p>What Makes Us the Best Choice?</p>
              <ul>
                <li>Cost-effective fixed fee services.</li>
                <li>A wide range of industry expertise</li>
                <li>Fully accredited and regulated.</li>
                <li>
                  We follow strict regulatory standards to safeguard our clients
                </li>
                <li>We are focused on customer needs and timely delivery.</li>
                <li>
                  Personalised services with laser-focused attention for every
                  client.
                </li>
              </ul>
              <a className="cta-btn" href="#">
                Contact US
              </a>
            </div>
            <div className="image-content">
              <img src={image1} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      {/* #call-to-action */}

      <section id="skills">
        <div className="container">
          <header className="section-header">
            <h3>Our Skills</h3>
            <p>fill in the blanks</p>
          </header>
        </div>
      </section>
      {/*==========================
Services Section
    ============================*/}

      <section id="services">
        <div className="container">
          <header className="section-header wow fadeInUp">
            <h1>Services</h1>
            <br />
            <hr />
            <p>We are offering</p>
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
                <a href="">Accounting & Finance</a>
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
                <a href="">Technology & Innovation</a>
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
                <a href="">Digital Marketing & Branding</a>
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
                <a href="">Business & Personal Finance</a>
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
                <a href="">Business Support & Consultancy</a>
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
                <a href="">IT Infrastructure Management</a>
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
