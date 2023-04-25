import {filterList} from "../support/Comp-Selector.cy";

describe('Given that I am on the landing page', () => {

    it('Empty Field - I should not be able to filter list on table (test should fail)', () => {
        cy.visit('/')
        cy.wait(2000)
        cy.get(filterList.filterCompBox).clear().type(filterList.filterCompBoxInput1)
        cy.get(filterList.filterBtn).click({force:true})
      })
    
    it('Invalid - When I filter by date, error should be dis[played ', () => {
      cy.visit('/')
      cy.wait(2000)
      cy.get(filterList.filterCompBox).clear().type(filterList.filterCompBoxInput4)
      cy.get(filterList.filterBtn).click({force:true})
    })

    it('Invalid - When I filter by computer name that does not exist, I should be notified that no record exists', () => {
        cy.visit('/')
        cy.wait(2000)
        cy.get(filterList.filterCompBox).clear().type(filterList.filterCompBoxInput6)
        cy.get(filterList.filterBtn).click({force:true})
      })
  
    it ('Valid input - I want to be able to filter computer list by computer name', () => {
      cy.visit('/')
      cy.wait(2000)
      cy.get(filterList.filterCompBox).clear().type(filterList.filterCompBoxInput2)
      cy.get(filterList.filterBtn).click({force:true})
    })
    
  })