import * as React from 'react';

import './complect.scss';

interface Props {
  id: number;
}

class Complect extends React.Component<Props> {
  public render(): JSX.Element {
    const data = require('../../../data.json');
    const complects = data.complects;
    return (
      <React.Fragment>
        {complects.map((complect: any, index: number) =>
          this.props.id === complect.id ? (
            <div className="complect" key={index}>
              <h2 className="complect__title">{complect.name}</h2>
              <p className="complect__price">
                В данной комплектации стоимость&nbsp;
                <b>
                  от {complect.price}$ м<sup>2</sup>
                </b>
              </p>
              <p className="complect__change">Комплектацию можно менять</p>
              <div className="complect__description">
                <div className="complect__text">
                  {complect.params.map((param: any, indexParam: number) => (
                    <React.Fragment key={`param${indexParam}`}>
                      <h4>{param.name}</h4>
                      <ul>
                        {param.item.map(
                          (item: any, indexItem: number) => (
                            <ol key={`paramItem${indexItem}`}>{item}</ol>
                          )
                        )}
                      </ul>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ) : null
        )}
      </React.Fragment>
    );
  }
}

export default Complect;
