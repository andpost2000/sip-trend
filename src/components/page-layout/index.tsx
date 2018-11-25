import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.scss';

import Footer from '../footer';
import Header from '../header';
import ContactsPage from '../pages/contacts-page';
import IndexPage from '../pages/index-page';
import ProjectPage from '../pages/project-page/project-page';
import ProjectsPage from '../pages/projects-page';

class Page extends React.Component {
  public render(): JSX.Element {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact={true} path="/" component={IndexPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/project" component={ProjectPage} />
            <Route path="/contacts" component={ContactsPage} />
            {/* <Route component={NotFoundPage} /> */}
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default Page;
