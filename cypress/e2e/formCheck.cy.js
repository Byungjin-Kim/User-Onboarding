// write tests here
describe("Quotes App", () => {
    beforeEach (() => {
        // Each test needs fresh state!
        // Tests shouldn't rely on other tests - it should be independent. so you do not want one test to affect the outcome of another one.
        // Every test should work in isolation!

        cy.visit("http://localhost:3000/") // CAREFUL!
    })

    //Helpers (ie Getters)
    const userNameInput = () => cy.get("input[name=username]");
    const emailInput = () => cy.get("input[name=email]");
    const passwordInput = () => cy.get("input[name=password]");
    const TOSInput = () => cy.get("input[name=TOS]");
    const submitBtn = () => cy.get(`input[type="submit"]`)
    

    it("sanity check to make sure tests work", () => {
        expect(1+2).to.equal(3);
        expect(2+2).not.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({}); // ==
    })

    

    it("the proper elements are showing.", () => {
        userNameInput().should("exist");
        emailInput().should("exist");
        passwordInput().should("exist");
        TOSInput().should("exist");
        submitBtn().should("exist");
    })


    it("can type in the inputs", () => {
        userNameInput()
            .should("have.value", "")
            .type("softwareEngineer")
            .should("have.value", "softwareEngineer")

        emailInput()
            .should("have.value","")
            .type("fullstack@fullstack.com")
            .should("have.value","fullstack@fullstack.com")
        
        passwordInput()
            .should("have.value","")
            .type("1234567")
            .should("have.value","1234567")
        
        TOSInput()
            .click();
            
    })

    it("the submit button enable when both inputs are filled out", () => {
        userNameInput().type("BJKIM");
        passwordInput().type("This is so hard! but You can do it!")
        submitBtn().should("not.be.disabled")
    })

    it("the submit button is working to see if a user can submit the form data", () => {
        userNameInput()
            .should("have.value", "")
            .type("softwareEngineer")

        emailInput()
            .should("have.value","")
            .type("fullstack@fullstack.com")
        
        passwordInput()
            .should("have.value", "")
            .type("1234567")

        TOSInput()
            .click();

        submitBtn()
            .click();
        
        cy.contains("fullstack@fullstack.com")
    })
})

