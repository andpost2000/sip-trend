import * as React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';


class ComponentForm extends React.Component<InjectedFormProps> {
  // функция, которая возвращает свою реализацию
  
  public renderField = ({ id, input, label, type }: any) => (
    <div>
      <input id={id} {...input} placeholder={label} type={type} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
  public render() {
    const { handleSubmit, reset } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        {/* принимает функцию с реализацией поля*/}
        <Field
          name="title"
          component={this.renderField}
          label="Заголовок"
          type="text"
        />
        <Field
          name="text"
          component={this.renderField}
          label="Текст"
          type="text"
        />
        <Field
          name="Checkbox"
          component={this.renderField}
          label="Checkbox"
          type="checkbox"
          id={1}
        />
        <Field
          name="Checkbox-2"
          component={this.renderField}
          label="Checkbox-2"
          type="checkbox"
          id={2}
        />
        <div>
          <button type="button" onClick={reset}>
            Очистить форму
          </button>
          <button type="submit">Отправить форму</button>
        </div>
      </form>
    );
  }
}
const Form = reduxForm({
  form: 'post'
})(ComponentForm);

export default Form;
