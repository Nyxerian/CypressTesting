/// <reference types="Cypress" />

//**********************GLOBAL FUNCTIONS****************************//

export function login() {
    cy.visit('https://staging.hotshot.site/customer/login')
    cy.get('[data-cy="signin-email-input"]').type("danny@test.com")
    cy.get('[data-cy="signin-password-input"]').type("Password!@!@0522{enter}")
}

//***********************DASHBOARD FUNCTIONS****************************//

export function dashboardSubtitles() {
    cy.get('.self-center > .dashboard-subtitle', {timeout: 25000}).should('have.text', 'Today')
    cy.get('.col-12 > .dashboard-subtitle', {timeout: 25000}).should('have.text', 'Overview')
}

export function dashboardOverviewIncludes() {
    cy.get('[data-cy="dashboard-overview-usage-stats-1"] > .overview-text').should('have.text', 'Active Properties')
    cy.get('[data-cy="dashboard-overview-usage-stats-2"] > .overview-text').should('have.text', 'Active Internet Users')
    cy.get('[data-cy="dashboard-overview-usage-stats-3"] > .overview-text').should('have.text', 'GB Usage')
}

export function dashboardPropertyTypeIncludes() {
    cy.get('.col-4 > .q-field > .q-field__inner > .q-field__control > .q-field__control-container > .q-field__native').click()
    cy.contains('Hotel')
    cy.get('.col-4 > .q-field > .q-field__inner > .q-field__control > .q-field__control-container > .q-field__native').click()
    cy.contains('Student Accommodation')
    cy.get('.col-4 > .q-field > .q-field__inner > .q-field__control > .q-field__control-container > .q-field__native').click()
    cy.contains('Residential')
}

export function dashboardDataIncludes() {
    cy.get('[data-cy="totalAccountsActivatedChart"]').should('include.text', 'Total # of Accounts Activated')
    cy.get('[data-cy="totalDevicesChart"] > .overview-title').should('include.text', 'Total # of Devices')
    cy.get('[data-cy="gbUsageTotalChart"] > .overview-title').should('include.text', 'GB Usage Total')

}


//***********************GROUPS FUNCTIONS****************************//

export function AddNewGroupBasicsPage() {
    cy.get('.top-menu-button > .q-btn > .q-btn__wrapper > .q-btn__content').click()
    cy.get('[data-cy="name"]').type('My New Test Group22')
    cy.get('[data-cy="contact-email"]').type('my-new-test-group@io.co.za')
    cy.get('.q-stepper__nav > .q-btn > .q-btn__wrapper > .q-btn__content').click()
}

export function AddNewGroupPropertiesPage() {
    cy.get('.later-button > .q-btn__wrapper > .q-btn__content > .block').click()
}

export function AddNewGroupPortalPage() {
    cy.get('[data-cy="portal-id"]').click()
    cy.contains('IO Digital').click()
    cy.get('.q-stepper__nav > .q-btn > .q-btn__wrapper > .q-btn__content').click()
}

export function CheckNewGroupStatus() {
    cy.get('.row.q-pb-md > .col-12').should('include.text', 'My New Test Group22')
    cy.get('.row.q-pb-md > .col-12').should('include.text',  '0',)
   //TODO find out how to check the DRAFT BUTTON
    
}

//***********************PROPERTIES FUNCTIONS****************************//

export function NavigateToPropertiesPage() {
    cy.get(':nth-child(3) > .col-12 > .q-btn-group > .q-btn-dropdown__arrow-container > .q-btn__wrapper > .q-btn__content', {timeout: 25000}).click()
    cy.get('[href="/customer/properties"] > .q-item > .q-item__section > .q-item__label').click()
}

export function CreateNewPropertyNameAndType() {
    cy.get('.top-menu-button > .q-btn > .q-btn__wrapper > .q-btn__content').click()
    cy.get('[data-v-7c523294=""][data-v-4b79beaa=""] > :nth-child(1) > .q-input > .q-field__inner > .q-field__control').type('My Test Hotel')
    cy.get(':nth-child(4) > .q-field > .q-field__inner > .q-field__control').click()
    cy.contains('Hotel').click()   
}

export function CreateNewPropertyIntegrationDetails() {
    cy.get(':nth-child(4) > .q-field > .q-field__inner > .q-field__control').type('This is the External Reference')
    cy.get(':nth-child(10) > .q-field > .q-field__inner > .q-field__control').click()
    cy.contains('10GB / 10Mbps').click()
}

export function CreateNewPropertyCommunicationPreference() {
    cy.get('[data-cy="send-email"]').click()
    cy.get('[data-cy="send-sms"]').click() 
}

export function CreateNewPropertyAddressAndContact() {
    cy.get('[data-cy="street-address"]').type('141 circle road')
    cy.get('[data-cy="city"]').type('Cape Town')
    cy.get('[data-cy="zip-code"]').type('7551')
    cy.get(':nth-child(3) > .q-field > .q-field__inner > .q-field__control').type('South Africa').click()
    cy.get('[data-cy="email"]').type('test@tester.com')
    cy.get('.q-stepper__nav > .q-btn > .q-btn__wrapper > .q-btn__content').click()
}

export function CreateNewPropertyAuthentication() {
    cy.get('.col-3 > .q-field > .q-field__inner > .q-field__control').type('10')
    cy.get('.col-9 > .q-field > .q-field__inner > .q-field__control').click()
    cy.contains('Shared WiFi').click()
    cy.get('.finish-button > .q-btn__wrapper').click()
}

export function CreateNewPropertyGateway() {
    cy.get('[data-cy="gateway-type-id"]').click()
    cy.contains('Mikrotik').click()
    cy.get('[data-cy="mac-address"]').type('2C:54:91:88:C9:E3')
    cy.get('[data-cy="ip-address"]').type('17.5.7.8')
    cy.get('[data-cy="dns-name"]').type('mytest.com')
    cy.get('[data-cy="username"]').type('AdminTester13')
    cy.get('[data-cy="password"]').type('2578*&%^^%')
    cy.get('.finish-button > .q-btn__wrapper').click()
}



//***********************AUTHENTICATION FUNCTIONS****************************//

//***********************GATEWAY FUNCTIONS****************************//

//***********************INTERFACE FUNCTIONS****************************//

//***********************PORTAL FUNCTIONS****************************//


//***********************GROUP CLEAN UP FUNCTIONS****************************//

