/// <reference types="Cypress" />
import {
    login,
    DashboardSubtitles, 
    DashboardOverviewIncludes,
    DashboardDataValidation,
    DashboardPropertyTypeIncludes, 
} from '../support/commands'

describe('Dashboard checks', () => {
    it('should login to the site', () => {
        login()    })

    it('should check subtitle values', () => {
        DashboardSubtitles()
    })
    it('should check the dashboard overview includes', () => {
        DashboardOverviewIncludes()        
    })
    it('should check the Property Type Selctor values', () => {
        DashboardPropertyTypeIncludes() 
    })
    it('should show data usage on dashboard', () => {
        DashboardDataValidation()
    })
    
})