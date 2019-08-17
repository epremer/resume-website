import React from "react";
import Navbar from "./../../components/Navbar";
import HomePage from "./../home";
import SkillsPage from "./../skills";
import ExperiencePage from "./../experience";
import ContactPage from "./../contact";
import CakeCreationsPage from "./../cakecreations";
import CsPortfolioPage from "./../csportfolio";
import UxPortfolioPage from "./../uxportfolio";
import { Switch, Route, Router } from "./../../util/router.js";
import Divider from "./../../components/Divider";
import Footer from "./../../components/Footer";
import analytics from "./../../util/analytics.js";
import { ProvideAuth } from "./../../util/auth.js";
import "./styles.scss";

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <>
          <Navbar
            color="white"
            spaced={true}
            logo="https://uploads.divjoy.com/logo.svg"
          />

          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route exact path="/skills" component={SkillsPage} />

            <Route exact path="/experience" component={ExperiencePage} />

            <Route exact path="/contact" component={ContactPage} />

            <Route exact path="/cake-creations" component={CakeCreationsPage} />

            <Route exact path="/cs-portfolio" component={CsPortfolioPage} />

            <Route exact path="/ux-portfolio" component={UxPortfolioPage} />

            <Route
              component={({ location }) => {
                return (
                  <div
                    style={{
                      padding: "50px",
                      width: "100%",
                      textAlign: "center"
                    }}
                  >
                    The page <code>{location.pathname}</code> could not be
                    found.
                  </div>
                );
              }}
            />
          </Switch>

          <Divider color="light" />
          <Footer
            color="white"
            size="normal"
            logo="https://uploads.divjoy.com/logo.svg"
            copyright="© 2019 Company"
          />
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;
