import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.scss';

import Footer from '../footer';
import Header from '../header';
import ArticlesPage from '../pages/articles-page';
import ComplectPage from '../pages/complect-page';
import ContactsPage from '../pages/contacts-page';
import IndexPage from '../pages/index-page';
import NotFoundPage from '../pages/not-found-page';
import ProjectPage from '../pages/project-page/project-page';
import ProjectsPage from '../pages/projects-page';
import ScrollToTop from './scroll-to-top';

class Page extends React.Component {
  public render(): JSX.Element {
    return (
      <Router>
        <React.Fragment>
          <ScrollToTop>
            <Header />
            <Switch>
              <Route exact={true} path="/" component={IndexPage} />
              <Route path="/projects" component={ProjectsPage} />
              <Route path="/project" component={ProjectPage} />
              <Route path="/articles" component={ArticlesPage} />
              <Route path="/complect" component={ComplectPage} />
              <Route path="/contacts" component={ContactsPage} />
              <Route component={NotFoundPage} />
            </Switch>
            <Footer />
          </ScrollToTop>
        </React.Fragment>
      </Router>
    );
  }
}

export default Page;
