import autobind from 'autobind-decorator';
import * as React from 'react';

import './index.scss';

interface State {
  area50: boolean;
  area100: boolean;
}
class Filter extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      area100: false,
      area50: true,
    }
  }
  public render(): JSX.Element {
    return (
      <form action="#" className="projects__filter filter">
        <h3 className="filter__title">Фильтр</h3>
        {/* <fieldset>
          <legend className="filter__legend">По цене:</legend>
          <div className="filter__price">
          </div>
        </fieldset> */}
        <fieldset>
          <legend className="filter__legend">По площади:</legend>
          <div className="filter__area">
            <input
              id="area50"
              type="checkbox"
              onChange={this.area50}
            />
            <label className={this.state.area50 ? 'checked' : ''} htmlFor="area50">До 50 м<sup>2</sup></label>
            <input
              id="area100"
              type="checkbox"
              onChange={this.area100}
            />
            <label className={this.state.area100 ? 'checked' : ''} htmlFor="area100">50 - 100 м<sup>2</sup></label>
            <input id="area150" type="checkbox"/>
            <label htmlFor="area150">100 - 150 м<sup>2</sup></label>
            <input id="areaMax" type="checkbox"/>
            <label htmlFor="areaMax">Более 150 м<sup>2</sup></label>
          </div>
        </fieldset>
        <fieldset>
          <legend className="filter__legend">Разное:</legend>
          <div className="filter__option">
            <input id="floor1" type="checkbox"/>
            <label htmlFor="floor1">Одноэтажные</label>
            <input id="garage" type="checkbox"/>
            <label htmlFor="garage">Гараж</label>
            <input id="terrace" type="checkbox"/>
            <label htmlFor="terrace">Терраса</label>
            <input id="garden" type="checkbox"/>
            <label htmlFor="garden">Садовые</label>
          </div>
        </fieldset>
        <button className="btn">Показать</button>
      </form>
    );
  }
  @autobind
  private area50(): void {
    this.setState({area50: !this.state.area50});
  }
  @autobind
  private area100(): void {
    this.setState({area100: !this.state.area100});
  }

}

export default Filter;
