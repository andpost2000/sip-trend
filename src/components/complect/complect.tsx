import * as React from 'react';

import './complect.scss';

import ComplectCard from './complect-card';

class Complect extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="complect">
        <div className="container">
          <h2 className="complect__title section-title">Варианты комплектации каркасных домов</h2>
          <ul className="complect__list">
            <ComplectCard title='Домокомплект' id={3} />
            <ComplectCard title='Базовая' id={2} />
            <ComplectCard title='Стандарт' id={1} />
            <ComplectCard title='Премиум' id={4} />
          </ul>
        </div>
      </div>
    );
  }
}

export default Complect;
