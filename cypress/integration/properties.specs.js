/// <reference types="Cypress" />

import {
    login,
    NavigateToPropertiesPage,
    CreateNewPropertyNameAndType,
    CreateNewPropertyIntegrationDetails,
    CreateNewPropertyCommunicationPreference,
    CreateNewPropertyAddressAndContact,
} from '../support/commands'

describe('Login to site and navigate to properties', () => {
    it('should login to the site', () => {
        login()    })

    it('should click on the properties tab and select "properties"', () => {
        NavigateToPropertiesPage()
    })

    it('Should click on the "+Create New Property" Button and fill in first page', () => {
        CreateNewPropertyNameAndType()
    })

    it('Should add the integration details', () => {
        CreateNewPropertyIntegrationDetails()
    })

    it('Should fill the check boxes for Communication Preferences', () => {
        CreateNewPropertyCommunicationPreference()
    })

    it('Should fill in the property address and contact information', () => {
        CreateNewPropertyAddressAndContact()
    })

});