import React from 'react'
import Header from './Header'

describe('<Header />', () => {
	it('renders', () => {
		cy.mount(<Header />);
		cy.get("[data-cy=header]").should("have.text", "Hola Crayola");
	});
});