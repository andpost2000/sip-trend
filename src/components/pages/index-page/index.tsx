import * as React from 'react';

import ArticleHome from 'src/components/article-home/article-home';
import HitProjects from 'src/components/hit-projects/hit-projects';
import Promo from 'src/components/promo/promo';
import Reviews from 'src/components/reviews';
import MainSlider from 'src/components/slider';

interface Props {
  msg?: string;
}
interface State {
  isOpen: boolean;
}

class IndexPage extends React.Component<Props, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  public render(): JSX.Element {
    return (
      <React.Fragment>
        <MainSlider/>
        <Promo />
        <HitProjects />
        <ArticleHome />
        <Reviews />
      </React.Fragment>
    );
  }
}

export default IndexPage;
