describe('Load Page', () => {
  it('should navigate to homepage', () => {
    cy.visit('https://computer-database.gatling.io/computers')
  })
})