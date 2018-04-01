import React from 'react';
import { shallow } from 'enzyme';
import Enzyme, { mount } from 'enzyme'
import { CurrenciesList } from '../CurrenciesList/CurrenciesList';

it('renders without crashing', () => {
    shallow(<CurrenciesList currencies={["USD", "AUD"]}/>);
});

it('Shows message when there are no currencies available to follow', () => {
    const currenciesList = mount(<CurrenciesList currencies={[]} />);
    expect(currenciesList.text()).toContain('There are no currencies available to follow.')
});