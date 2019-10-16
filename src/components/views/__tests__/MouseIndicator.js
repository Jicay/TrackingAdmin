import React from 'react';
import renderer from 'react-test-renderer';
import MouseIndicator from "../MouseIndicator";

it('renders correctly', () => {
    const tree = renderer
        .create(<MouseIndicator top={10} left={87}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});