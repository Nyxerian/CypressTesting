/// <reference types="Cypress" />
import {
    login, dashboardSubtitles, dashboardOverviewIncludes,dashboardDataIncludes,dashboardPropertyTypeIncludes, 
} from '../support/commands'

describe('Dashboard checks', () => {
    it('should login to the site', () => {
        login()    })

    it('should check subtitle values', () => {
        dashboardSubtitles()
    })
    it('should check the dashboard overview includes', () => {
        dashboardOverviewIncludes()        
    })
    it('should check the Property Type Selctor values', () => {
        dashboardPropertyTypeIncludes() 
    })
    it('should show data usage on dashboard', () => {
        dashboardDataIncludes()
    })
    
})