import React from 'react';
import renderer from 'react-test-renderer';
import ImageForm from "../ImageForm";

it('renders correctly', () => {
    const tree = renderer
        .create(<ImageForm/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});