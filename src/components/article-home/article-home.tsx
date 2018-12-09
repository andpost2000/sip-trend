import * as React from 'react';

import './article-home.scss';

class ArticleHome extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="article-home">
        <div className="container">
          <h2 className="article-home__title section-title">
            Мифы и реальности каркасных домов
          </h2>
          <div className="article-home__description">
          <img src={`img/articles/1/1.jpg`} alt='Каркасный дом' className="article-home__img" />
            <div className="article-home__text">
              <p>
                Каркасная технология домостроения неоднозначно воспринимается в
                Мире. Одной из главных проблем этого является
                неинформированность потенциальных покупателей каркасных домов.
              </p>
              <p>
                Армия скептиков, которые поговаривают, что каркасный дом — это
                не слишком теплое, малонадежное и легковоспламеняемое строение.
                Что же из этого домыслы, а что — правда? Попробуем разобраться.
              </p>
              <p>
                На профильных форумах разыгрываются настоящие информационные
                войны по этому вопросу. В бой идут аргументы со всех сторон,
                доказательства и факты. Начнем с мифов.
              </p>
              <a href="/articles" className='link'>Подробнее</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleHome;
