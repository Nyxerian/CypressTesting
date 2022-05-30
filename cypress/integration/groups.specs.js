/// <reference types="Cypress" />
import {
    login, 
    AddNewGroupBasicsPage, 
    AddNewGroupPropertiesPage, 
    AddNewGroupPortalPage, 
    CheckNewGroupStatus
} from '../support/commands'

describe('Groups page actions', function () {
    it('should login to the site', () => {
        login()
    })

    it('should click on the groups tab', () => {
        cy.contains('Groups', {timeout: 25000}).click()
    })

    it('should complete first step of group creation', () => {
        AddNewGroupBasicsPage()
    })

    it('should complete second step of group creation', () => {
        AddNewGroupPropertiesPage()
    })

    it('should select the IO Digital option from the dropdown', () => {
        AddNewGroupPortalPage()
    })
    it('should check the new group status on the groups page', () => {
        CheckNewGroupStatus()
    })
})