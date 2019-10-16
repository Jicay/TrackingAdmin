import React from 'react';
import Session from "../Session";
import EventSource from 'eventsourcemock';
import {MemoryRouter} from "react-router";
import * as Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()})

describe('Session', () => {
    it('renders correctly when home', () => {
        const match = {
            params: {
                sessionId: 10
            }
        }

        Object.defineProperty(window, 'EventSource', {
            value: EventSource,
        });

        const session = shallow(<Session match={match}/>)

        session.setState({
            page: 'home',
            x: 365,
            y: 128,
            width: 1000,
            height: 1200
        })

        const r = shallow((<MemoryRouter keyLength={0}>{session}</MemoryRouter>))

        const tree = toJSON(r);
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly when image', () => {
        const match = {
            params: {
                sessionId: 10
            }
        }

        Object.defineProperty(window, 'EventSource', {
            value: EventSource,
        });

        const session = shallow(<Session match={match}/>)

        session.setState({
            page: 'image',
            x: 365,
            y: 128,
            width: 1000,
            height: 1200
        })

        const r = shallow((<MemoryRouter keyLength={0}>{session}</MemoryRouter>))

        const tree = toJSON(r);
        expect(tree).toMatchSnapshot();
    });


    it('renders correctly when congrats', () => {
        const match = {
            params: {
                sessionId: 10
            }
        }

        Object.defineProperty(window, 'EventSource', {
            value: EventSource,
        });

        const session = shallow(<Session match={match}/>)

        session.setState({
            page: 'congrats',
            x: 365,
            y: 128,
            width: 1000,
            height: 1200
        })

        const r = shallow((<MemoryRouter keyLength={0}>{session}</MemoryRouter>))

        const tree = toJSON(r);
        expect(tree).toMatchSnapshot();
    });
})