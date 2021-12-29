Feature: Accessing HTML form test
  As a customer
  I want to access to HTML form test
  So that I can complete all fields and submit form

  Background:
    Given I am on the index page
    And I click on "HTML form example" option

  @test-1
  Scenario: Validate the redirection to html form example page
    Then I validate the page title is "Basic HTML Form example"