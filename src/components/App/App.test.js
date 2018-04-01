import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import CurrenciesList from '../CurrenciesList/CurrenciesList';
import FavoritesList from '../FavoritesList/FavoritesList';

it('renders without crashing', () => {
    shallow(<App />);
});

it('includes CurrenciesList', () => {
    const app = shallow(<App />);
    expect(app.containsMatchingElement(<CurrenciesList />)).toEqual(true)
});

it('includes FavoritesList', () => {
    const app = shallow(<App />);
    expect(app.containsMatchingElement(<FavoritesList />)).toEqual(true)
});