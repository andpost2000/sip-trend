import * as React from 'react';
import { connect } from 'react-redux';
import { initialize } from 'redux-form';

import './index.scss';

import FilterForm from './filter-form';


interface Props {
  post: any;
  initializePost: any;
}

class FilterComponent extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    // post = {title: " Текст заголовка ", text: " Текст статьи "}
    const { post, initializePost } = this.props;
    // инициализация
    initializePost(post);
  }

  public render() {
    return <FilterForm />;
  }
}
// прокидываем в props функцию для инициализации формы
function mapDispatchToProps(dispatch: any) {
  return {
    initializePost(post: any) {
      dispatch(initialize('post', post));
    }
  };
}
// прокидываем в props объект для инициализаци формы
function mapStateToProps() {
  // function mapStateToProps(state: any, ownProps: any){
  // const id = ownProps.params.id;
  return {
    post: null
    //  post: state.posts[id]
  };
}

const Filter = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterComponent);

export default Filter;
