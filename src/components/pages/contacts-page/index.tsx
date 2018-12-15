import * as React from 'react';

import './index.scss';

class ContactsPage extends React.Component {
  public render(): JSX.Element {
    return (
      <React.Fragment>
        <div className="contacts">
          <div className="container">
            <div className="contacts__title section-title">Наши контакты</div>
            <h3 className="contacts__sub-title">
              Общество с Ограниченной Ответственностью "СипТренд"
            </h3>
            <div className="contacts__inner">
              <ul className="contacts__list">
                <li className="contacts__item">
                  <h3>Адресс:</h3>
                  <p>
                    Беларусь, 211875
                    <br />
                    г. Поставы,
                    <br />
                    ул. Космонавтов д. 66 офис 6
                  </p>
                </li>
                <li className="contacts__item">
                  <h3>УНП:</h3>
                  <p>391627764</p>
                </li>
                <li className="contacts__item">
                  <h3>Реквизиты:</h3>
                  <p>
                    р/с BY35BAPB30126521100100000000
                    <br />
                    код BAPBBY2X
                    <br />
                    ОАО "БЕЛАГРОПРОМБАНК"
                    <br />г. Минск
                  </p>
                </li>
                <li className="contacts__item">
                  <h3>e-mail:</h3>
                  <p>trendsip@trendsip.by</p>
                </li>
                <li className="contacts__item">
                  <h3>Телефоны:</h3>
                  <p>
                    +375 (33) 320 90 08
                    <br />
                    +375 (29) 000 00 00
                  </p>
                </li>
                <li className="contacts__item">
                  <h3>Работаем:</h3>
                  <p>
                    с 9:00 до 20:00
                    <br />
                    кроме воскресенья
                  </p>
                </li>
              </ul>
              <div className="contacts__map">
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A73c28a5aae138832f1ccc97f3272300c95c85f541af7ac436f1ed4fedba7b26d&amp;source=constructor" width="100%" height="500"/>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactsPage;
