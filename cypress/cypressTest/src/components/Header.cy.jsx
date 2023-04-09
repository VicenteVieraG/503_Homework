import React from 'react'
import Header from './Header'

describe('<Header />', () => {
	it('renders', () => {
		cy.mount(<Header />);
		cy.get("[data-cy=span]").should("have.text", " Cypress ");
	});
});