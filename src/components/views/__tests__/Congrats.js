import React from 'react';
import renderer from 'react-test-renderer';
import Congrats from "../Congrats";

it('renders correctly', () => {
    const tree = renderer
        .create(<Congrats/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});