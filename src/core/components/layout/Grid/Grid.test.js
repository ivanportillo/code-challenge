import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Grid from './Grid';

describe('Grid', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Grid columns={3} gutter={2} spaceBetween={2}>
        <div key="1">Element 1</div>
        <div key="2">Element 2</div>
        <div key="3">Element 3</div>
        <div key="4">Element 1</div>
        <div key="5">Element 2</div>
        <div key="6">Element 3</div>
      </Grid>, div);
  });

  it('should render a grid', () => {
    const grid = shallow(
      <Grid columns={3} gutter={2} spaceBetween={2}>
        <div key="1">Element 1</div>
        <div key="2">Element 2</div>
        <div key="3">Element 3</div>
        <div key="4">Element 1</div>
        <div key="5">Element 2</div>
        <div key="6">Element 3</div>
      </Grid>);

    expect(grid).toMatchSnapshot();
  });
});
