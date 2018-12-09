import * as React from 'react';

import './hit-card.scss';

interface Props {
  id: number;
  totalArea: number;
  price: number;
  discount: number;
}

class HitCard extends React.Component<Props> {
  public render(): JSX.Element {
    return (
      <li className="hit-projects__item hit-card">
        <a href="#" className="hit-card__link">
          <img
            src={`img/projects/${this.props.id}/1m.jpg`}
            alt={`Проект ${this.props.id}`}
            className="hit-card__img"
          />
          <div className="hit-card__description">
            <div className="hit-card__price">
              <p>
                Цена от: <s>{this.props.price} $</s>
              </p>
              <div className="hit-card__sale">
                {this.props.price - this.props.discount} $
              </div>
            </div>
            <h3 className="hit-card__title">
              Проект дома из СИП №{this.props.id}
            </h3>
          </div>
        </a>
      </li>
    );
  }
}

export default HitCard;
