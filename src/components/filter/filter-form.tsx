import classNames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

interface ReduxProps {
  radioCheck: string;
}

interface Props extends ReduxProps, InjectedFormProps {}

class ComponentForm extends React.Component<Props> {
  // функция, которая возвращает свою реализацию

  public renderField = ({ id, input, label, labelSup, type, className }: any) => (
    <div className={className}>
      <input id={id} {...input} placeholder={label} type={type} />
      <label htmlFor={id}>
        {label}
        <sup>{labelSup}</sup>
      </label>
    </div>
  );
  public render() {
    const { handleSubmit, radioCheck } = this.props;
    // tslint:disable-next-line:no-console
    console.log(this.props.radioCheck)

    return (
      <form className="projects__filter filter" onSubmit={handleSubmit}>
        <h3 className="filter__title">Фильтр</h3>
        <fieldset>
          <legend className="filter__legend">По площади:</legend>
          <div className="filter__area">
            <Field
              className={classNames("filter__area-radio", {checked: radioCheck === '50'})}
              name="Area"
              value={50}
              type="radio"
              component={this.renderField}
              label="До 50 м"
              labelSup="2"
              id={50}
            />
            <Field
              className={classNames("filter__area-radio", {checked: radioCheck === '100'})}
              name="Area"
              type="radio"
              value={100}
              component={this.renderField}
              label="От 50 до 100  м"
              labelSup="2"
              id={100}
            />
            <Field
              className={classNames("filter__area-radio", {checked: radioCheck === '150'})}
              name="Area"
              type="radio"
              value={150}
              component={this.renderField}
              label="Более 100  м"
              labelSup="2"
              id={150}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend className="filter__legend">Дополнительно:</legend>
          <div className="filter__area">
            <Field
              name="oneFloor"
              component={this.renderField}
              label="Одноэтажные"
              labelSup=""
              type="checkbox"
              id={'oneFloor'}
            />
            <Field
              name="Garage"
              component={this.renderField}
              label="С гаражом"
              labelSup=""
              type="checkbox"
              id={'garage'}
            />
            <Field
              name="Terrace"
              component={this.renderField}
              label="С террасой"
              labelSup=""
              type="checkbox"
              id={'terrace'}
            />
          </div>
        </fieldset>
        {/* <button className="btn" type="submit">
          Показать
        </button>
        <fieldset>
          <legend className="filter__legend">По цене:</legend>
          <div className="filter__price">
          </div>
        </fieldset> */}
      </form>
    );
  }
}
const mapStateToProps = (state: any): ReduxProps => {
  return {
    radioCheck: state.form.post.values ? state.form.post.values.Area : null
  }
}
const ReduxForm = connect(mapStateToProps)(ComponentForm);
const Form = reduxForm({
  form: 'post'
})(ReduxForm);

export default Form;
