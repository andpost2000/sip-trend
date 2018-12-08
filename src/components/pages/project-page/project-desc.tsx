import * as React from 'react';
import ImgGallery from 'src/components/img-gallery';

import './project-desc.scss';

interface Props {
  buildArea: number;
  roofAngle: number;
  floor: number;
  id: number;
}

class ProjectDesc extends React.Component<Props> {
  public render(): JSX.Element {
    return (
      <div className="project__description project-desc">
        <div className="project-desc__list-wrap">
          <ul className="project-desc__list">
            <li className="project-desc__item">
              <span className="project-desc__name">Площадь застройки</span>
              <span className="project-desc__value">
                {this.props.buildArea} <i>м</i>
                <sup>2</sup>
              </span>
            </li>
            <li className="project-desc__item">
              <span className="project-desc__name">Угол крыши</span>
              <span className="project-desc__value">
                {this.props.roofAngle}
                <sup>0</sup>
              </span>
            </li>
          </ul>
          <ul className="project-desc__list">
            <li className="project-desc__item">
              <span className="project-desc__name">Первый этаж</span>
              <span className="project-desc__value">
                45.5 <i>м</i>
                <sup>2</sup>
              </span>
            </li>
            <li className="project-desc__item">
              <span className="project-desc__name">Прихожая</span>
              <span className="project-desc__value">
                3.12 <i>м</i>
                <sup>2</sup>
              </span>
            </li>
            <li className="project-desc__item">
              <span className="project-desc__name">Гостинная</span>
              <span className="project-desc__value">
                21.2 <i>м</i>
                <sup>2</sup>
              </span>
            </li>
            <li className="project-desc__item">
              <span className="project-desc__name">Терраса</span>
              <span className="project-desc__value">
                14.9 <i>м</i>
                <sup>2</sup>
              </span>
            </li>
          </ul>
          {this.props.floor === 2 ? (
            <ul className="project-desc__list">
              <li className="project-desc__item">
                <span className="project-desc__name">Второй этаж</span>
                <span className="project-desc__value">
                  25 <i>м</i>
                  <sup>2</sup>
                </span>
              </li>
              <li className="project-desc__item">
                <span className="project-desc__name">Комната</span>
                <span className="project-desc__value">
                  12.8 <i>м</i>
                  <sup>2</sup>
                </span>
              </li>
              <li className="project-desc__item">
                <span className="project-desc__name">Комната</span>
                <span className="project-desc__value">
                  14.2 <i>м</i>
                  <sup>2</sup>
                </span>
              </li>
            </ul>
          ) : null}
          <div className="project-desc__text">
            <h3>Приемущества проекта</h3>
            <ul>
              <li>
                Отсутствие остекления на боковых фасадах дает возможность
                строить такой каркасно-щитовой дом на узком участке.
              </li>
              <li>
                Наличие второго света и панорамное остекление фасада со стороны
                сада полностью компенсирует отсутствие окон по бокам строения и
                делает пространство дневной зоны хорошо освещенным и визуально
                просторнее.
              </li>
              <li>
                Спроектированный во фронтальной части первого этажа просторный
                кабинет можно адаптировать под дополнительную комнату или
                гостевую спальню.
              </li>
              <li>
                На верхнем этаже предусмотрено 3 небольших, но уютных спальни и
                компактный санузел с ванной.
              </li>
              <li>
                Повышает комфорт жизни наличие ванной комнаты на первом этаже.
              </li>
            </ul>
          </div>
        </div>
        <div className="project-desc__img-wrap">
          <ImgGallery id={this.props.id} plan={true} />
        </div>
      </div>
    );
  }
}

export default ProjectDesc;
