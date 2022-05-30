/// <reference types="Cypress" />

import {
    login,
    NavigateToPropertiesPage,
    CreateNewPropertyNameAndType,
    CreateNewPropertyIntegrationDetails,
    CreateNewPropertyCommunicationPreference,
    CreateNewPropertyAddressAndContact,
    CreateNewPropertyAuthentication,
    CreateNewPropertyGateway,
    CreateNewPropertyInterface,
    CreateNewPropertyPortal,
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

    it('Should fill in the Authentication portion of creating a new property', () => {
        CreateNewPropertyAuthentication()
    })
    
    it('Should set the Gateway details for the new Property', () => {
        CreateNewPropertyGateway()
    })

    it('Should fill in the Interface details for the new Property', () => {
        CreateNewPropertyInterface()
    })

    it('Should select IO Digital from the list', () => {
        CreateNewPropertyPortal()
    })
});
