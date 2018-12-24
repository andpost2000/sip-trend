import * as React from 'react';

import Helmet from "react-helmet";
import ArticleHome from 'src/components/article-home/article-home';
import HitProjects from 'src/components/hit-projects/hit-projects';
import Promo from 'src/components/promo/promo';
import Reviews from 'src/components/reviews';
import MainSlider from 'src/components/slider';

interface State {
  isOpen: boolean;
}

class IndexPage extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  public render(): JSX.Element {
    return (
      <React.Fragment>
        <Helmet
          title='Каркасный дом | СИП панели'
          meta={[
              {"name": "description", "content": "Строим каркасные дома и дома из СИП панелей под ключ. Собственное производство СИП панелей. Честные цены. Отличное качество материалов."},
              {"name": "keywords", "content": "Каркасный дом, Дом из сип панелей, Купить СИП панели, дома из сип панели, дома из сип панелей цена, дом из сип Минск, дом из сип Беларусь, Сип панель, строительство дома из сип панелей, дачный домик, проекты, красивые проекты, строительство, каркасный дом, энергоэффективный дом, дом под ключ, сип цена, дачный дом, построить дом, дом из сип панелей цена, дом проект"},
              {"property": "og:type", "content": "article"}
          ]}
        />
        <h1 className="visually-hidden">Строительство каркасных домов. Дома из СИП панелей</h1>
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
