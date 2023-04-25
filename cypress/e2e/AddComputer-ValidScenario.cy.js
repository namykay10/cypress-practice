import{addComputer} from "../support/Comp-Selector.cy";

describe('Given that I am on the add computer page', () => {

  it('Valid Inputs (no discontd date) - I should be able to add a computer', () => {
    cy.visit('/new')
    cy.wait(3000)
    cy.get(addComputer.computerNameInput).clear().type(addComputer.computerNameText3)
    cy.get(addComputer.introducedInput).clear().type(addComputer.introducedText3)
    
    cy.get(addComputer.companyDropdown).select(7)
    cy.get(addComputer.createComputerBtn).click({force:true})
  })

  it ('Valid Inputs - I should be able to add a computer', () => {
    cy.visit('/new')
    cy.wait(3000)
    cy.get(addComputer.computerNameInput).clear().type(addComputer.computerNameText2)
    cy.get(addComputer.introducedInput).clear().type(addComputer.introducedText2)
    cy.get(addComputer.discontinuedInput).clear().type(addComputer.discontinuedText2)
    cy.get(addComputer.companyDropdown).select(9)
    cy.get(addComputer.createComputerBtn).click({force:true})
  })
  
})