import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from "react-router";
import Sessions from "../Sessions";

it('renders correctly', () => {
    const sessions = [{
        id: 45,
        creationDate: '2017-02-12 12:52:23'
    }, {
        id: 85,
        creationDate: '2019-03-29 21:45:10'
    }]

    const tree = renderer
        .create(<MemoryRouter><Sessions getSessions={jest.fn()} sessions={sessions}/></MemoryRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});