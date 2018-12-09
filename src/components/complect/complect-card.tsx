import * as React from 'react';

interface Props {
  id: number;
  title: string;
}

class ComplectCard extends React.Component<Props> {
  public render(): JSX.Element {
    return (
      <li className="complect__item">
        <h3 className="complect__sub-title">{this.props.title}</h3>
        <img src={`img/projects/${this.props.id}/1m.jpg`} alt={this.props.title} className="complect__img" />
      </li>
    );
  }
}

export default ComplectCard;
