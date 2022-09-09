/// <reference types="cypress" />

describe('api tests framework', () => {

// before(() => {
//     cy.intercept('GET', 'https://dummy.restapiexample.com/api/v1/employees', {fixture: 'employee.json'})
// })


it('retrieves all employees and counts the number of employees with age number higher than 30', () => {
    let bigger30_count = 0
    cy.fixture("employes").then(employes => {
        cy.wrap(employes.data).each((employee) => {
            if(employee.employee_age > 30) {
                bigger30_count += 1
            }
        }).then (() => {
            cy.log("Total number of employees with age > 30:" + bigger30_count)
        })
    })
})

it('adds new employee with age higher than 30 and updates the employee file', () => {
    cy.readFile('cypress/fixtures/employes.json').then((data) => {
        cy.log(data)
        data.newKey = {
            "id": 25,
            "employee_name": "anamaria slabu",
            "employee_salary": 100000,
            "employee_age": 34,
            "profile_image": ""
            }
        cy.writeFile('cypress/fixtures/employes.json', JSON.stringify(data))
        cy.readFile('cypress/fixtures/employes.json').then((data) => {
            expect(data.employee_age).to.equal('34')
        })
    })
})



})


    



  



