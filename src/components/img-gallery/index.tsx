import * as React from 'react';
import ImageGallery from 'react-image-gallery';

import 'node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import './index.scss';

interface Props {
  id: number;
  plan?: boolean;
}
class ImgGallery extends React.Component<Props> {
  public render(): JSX.Element {
    const images = [
      {
        original: `/img/projects/${this.props.id}/1.jpg`,
        thumbnail: `/img/projects/${this.props.id}/thumb/1.jpg`
      },
      {
        original: `/img/projects/${this.props.id}/2.jpg`,
        thumbnail: `/img/projects/${this.props.id}/thumb/2.jpg`
      },
      {
        original: `/img/projects/${this.props.id}/3.jpg`,
        thumbnail: `/img/projects/${this.props.id}/thumb/3.jpg`
      },
      {
        original: `/img/projects/${this.props.id}/4.jpg`,
        thumbnail: `/img/projects/${this.props.id}/thumb/4.jpg`
      }
    ];

    const plan = [
      {
        original: `/img/projects/${this.props.id}/5.jpg`,
        thumbnail: `/img/projects/${this.props.id}/thumb/5.jpg`
      },
      {
        original: `/img/projects/${this.props.id}/6.jpg`,
        thumbnail: `/img/projects/${this.props.id}/thumb/6.jpg`
      }
    ];

    return (
      <ImageGallery
        thumbnailPosition={this.props.plan ? 'left' : 'right'}
        items={this.props.plan ? plan : images}
      />
    );
  }
}

export default ImgGallery;
