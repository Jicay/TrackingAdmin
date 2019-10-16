import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from "react-router";
import SessionInfo from "../SessionInfo";

it('renders correctly', () => {
    const tree = renderer
        .create(<MemoryRouter><SessionInfo id={10} date='2019-10-03 12:35:45'/></MemoryRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});