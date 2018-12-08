import * as React from 'react';
import {connect} from 'react-redux';
// подключаем метод
import {initialize} from 'redux-form';

import Form from './form'

interface Props {
  post: any;
  initializePost: any;
}

class EditPost extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        // post = {title: " Текст заголовка ", text: " Текст статьи "}
        const {post, initializePost} = this.props;
        // инициализация
        initializePost(post);
    }
   
    public handleSubmit = (values: any) => {
        // tslint:disable-next-line:no-console
        console.log(values);
    };
    public render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit} />
            </div>
        );
    }
}
// прокидываем в props функцию для инициализации формы
function mapDispatchToProps(dispatch: any){
    return {
        initializePost (post: any){
            dispatch(initialize('post', post));
        }
    }
}
// прокидываем в props объект для инициализаци формы
function mapStateToProps(){
// function mapStateToProps(state: any, ownProps: any){
    // const id = ownProps.params.id;
    return {
       post: null
      //  post: state.posts[id]
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditPost);