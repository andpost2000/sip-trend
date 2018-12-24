import * as React from 'react';
import ImageGallery from 'react-image-gallery';

import 'node_modules/react-image-gallery/styles/scss/image-gallery.scss';

interface Props {
  id: number;
  imgCount: number;
  plan?: boolean;
}
class ImgGallery extends React.Component<Props> {
  public render(): JSX.Element {
    const images = [];
    let imgI = 0;
      while(imgI++ <= this.props.imgCount - 1) {
        const img = {
          original: `/img/projects/${this.props.id}/${imgI + (!this.props.plan ? 0 : 4)}.jpg`,
          thumbnail: `/img/projects/${this.props.id}/thumb/${imgI + (!this.props.plan ? 0 : 4)}.jpg`
        }  
        images.push(img);
      }

    return (
      <ImageGallery
        thumbnailPosition={window.innerWidth > 767 ? (this.props.plan ? 'left' : 'right') : 'bottom'}
        items={images}
      />
    );
  }
}

export default ImgGallery;
