/// <reference types="Cypress" />

import {
    login,
    DeleteTestGroup,
    DeleteTestProperty
} from '../support/commands'

describe('Should delete new Test group and Test property', () => {
    it('should login to site and navigate to groups', () => {
        login()
        cy.contains('Groups', {timeout: 25000}).click()
    })

    it('Should go to Test Groups manage Page and Delete Group', () => {
        DeleteTestGroup()
    })

   it('Should go to test properties tab and delete it', () => {
        DeleteTestProperty()
   })
});