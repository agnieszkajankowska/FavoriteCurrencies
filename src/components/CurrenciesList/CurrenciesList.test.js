import React from 'react';
import { shallow } from 'enzyme';
import Enzyme, { mount } from 'enzyme'
import { CurrenciesList } from '../CurrenciesList/CurrenciesList';

it('renders without crashing', () => {
    shallow(<CurrenciesList currencies={["USD", "AUD"]}/>);
});

it('shows message when there are no currencies available to follow', () => {
    const currenciesList = mount(<CurrenciesList currencies={[]} />);
    expect(currenciesList.text()).toContain('There are no currencies available to follow.')
});

it('shows message when there are no currencies available to follow', () => {
    const currenciesList = mount(<CurrenciesList currencies={['USD']} />);
    expect(currenciesList.text()).not.toContain('There are no currencies available to follow.')
});


describe('list of currencies', () => {
    const currencies = ['USD', 'EUR', 'CAD'];
    const currenciesList = mount(<CurrenciesList currencies={currencies} />);

    it('shows a list of available currencies', () => {
        expect(currenciesList.find('#currenciesList option').length).toEqual(currencies.length);
    });

    currencies.forEach(currency => {
        it(`includes a name of ${currency} on the list`, () => {
            expect(currenciesList.containsMatchingElement(<option>{currency}</option>)).toEqual(true);
        })
    })
})