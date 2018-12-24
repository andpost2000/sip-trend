import * as React from 'react';

import './promo.scss';

import PromoSlider from './promo-slider';

class Promo extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="promo">
        <div className="container">
          <h2 className="promo__title section-title">
            Готовые проекты каркасных домов, домов из СИП панелей
          </h2>
          <div className="promo__inner">
            <PromoSlider />
          </div>
        </div>
      </div>
    );
  }
}

export default Promo;
