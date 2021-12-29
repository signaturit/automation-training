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

  @test-2
  Scenario: Complete user name, password and comment fields in HTML form
    When I enter "Agus bosso" in "username" field
    And I enter "corona123" in "password" field
    And I enter "HTML uses form elements with sub input, label, textarea, select and option elements." in "textarea comment" field
    And I deselect all the option
    And I select checkbox "1" in checkbox items section
    And I select checkbox "3" in checkbox items section
    And I select "Drop Down Item 4" from dropdown
    And I deselect all options in multiple selects value
    And I select "Selection Item 2" from multiple selection
    And I select "Selection Item 4" from multiple selection
    And I click on "Submit" button
    Then "You submitted a form" message is displayed
    And "username" submitted value is "Agus bosso"
    And "password" submitted value is "corona123"
    And "comments" submitted value is "HTML uses form elements with sub input, label, textarea, select and option elements."