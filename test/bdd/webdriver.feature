Feature: Use browser inside steps

  As a developer
  I want to have webdriver available to me in my steps
  So that I don't have to configure my world object and I focus on testing

  @watch, @focus
  Scenario: Visit Angular Testing App
    When  I visit "http://localhost:8080"
    Then  I see the title of "Angular Material - Starter App"
