import * as React from 'react';

import './index.scss';

class Reviews extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="reviews">
        <div className="container">
          <h2 className="reviews__title section-title">
            Отзывы наших клиентов
          </h2>
          <div className="reviews__video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/BZx62K-7pHM"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            />
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ofWZ-Ig5ufI"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;
