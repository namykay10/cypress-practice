import{addComputer} from "../support/Comp-Selector.cy";

describe('Landing Page', () => {
  it('Should take me to landing page', () => {
    cy.visit('/')
    cy.wait(3000)
    cy.get(addComputer.addComputerIcon).click({force:true})
  });
  
  //it('Confirm user is on landing page', () => {
    //cy.get(homepage.homeHeader).should('exist')
    //cy.get(homepage.homeContent).should('exist')
  //})

  it('Empty Fields - I should not be able to add computer without filling form (test should fail)', () => {
    cy.visit('/new')
    cy.wait(2000)
    cy.get(addComputer.computerNameInput).clear().type(addComputer.computerNameText1)
    cy.get(addComputer.introducedInput).clear().type(addComputer.introducedText1)
    cy.get(addComputer.discontinuedInput).clear().type(addComputer.discontinuedText1)
    cy.get(addComputer.companyDropdown).select()
    cy.get(addComputer.createComputerBtn).click({force:true})
  })

  it ('Computer Name (Special Char) - Should not be able to add computer', () => {
    cy.visit('/new')
    cy.get(addComputer.computerNameInput).clear().type(addComputer.computerNameText5)
    cy.get(addComputer.introducedInput).clear().type(addComputer.introducedText2)
    cy.get(addComputer.discontinuedInput).clear().type(addComputer.discontinuedText2)
    cy.get(addComputer.companyDropdown).select(5)
    cy.get(addComputer.createComputerBtn).click({force:true})
  })

  it ('Wrong date format for introduced date (test should fail)', () => {
    cy.visit('/new')
    cy.get(addComputer.computerNameInput).clear().type(addComputer.computerNameText2)
    cy.get(addComputer.introducedInput).clear().type(addComputer.introducedText5)
    cy.get(addComputer.discontinuedInput).clear().type(addComputer.discontinuedText3)
    cy.get(addComputer.companyDropdown).select(6)
    cy.get(addComputer.createComputerBtn).click({force:true})
    cy.wait(3000)
  })

  it ('Add computer with existing computer name (test should fail)', () => {
    cy.visit('/new')
    cy.get(addComputer.computerNameInput).clear().type(addComputer.computerNameText4)
    cy.get(addComputer.introducedInput).clear().type(addComputer.introducedText4)
    cy.get(addComputer.discontinuedInput).clear().type(addComputer.discontinuedText4)
    cy.get(addComputer.companyDropdown).select(0)
    cy.get(addComputer.createComputerBtn).click({force:true})
    cy.wait(3000)
  })

  it ('Discontinued date is less than introduced date (test should fail)', () => {
    cy.visit('/new')
    cy.get(addComputer.computerNameInput).clear().type(addComputer.computerNameText2)
    cy.get(addComputer.introducedInput).clear().type(addComputer.introducedText2)
    cy.get(addComputer.discontinuedInput).clear().type(addComputer.discontinuedText3)
    cy.get(addComputer.companyDropdown).select(2)
    cy.get(addComputer.createComputerBtn).click({force:true})
    cy.wait(3000)
    cy.get(addComputer.cancelBtn).click({force:true})
  })

  
})