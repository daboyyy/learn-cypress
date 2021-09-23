/// <reference types="cypress" />

const snack = ["Chips", "Popcorn", "M&M", "Rice Cakes", "Jerky"]

context("Snacks", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/snacks")
    })

    it("Check our snacks", () => {
        cy.get(".snacks>li").each((item,index) => {
            cy.wrap(item).should("contain.text", snack[index])
        })
    })
})
