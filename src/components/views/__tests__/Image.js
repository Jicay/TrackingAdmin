import React from 'react';
import renderer from 'react-test-renderer';
import Image from "../Image";

it('renders correctly when home', () => {
    const tree = renderer
        .create(<Image image='skfjlsf/psdofispdofi'/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});