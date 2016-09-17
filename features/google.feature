Feature: Example feature
  As a user of Cucumber.js
  I want to search google

  @Google-Doodle
  Scenario Outline: Searching on google doodles
    Given I am on the google page
    When I click on "<Button>"
    Then I should see google page with "<Logo>"
    And I search on page for "<Text>"
      | key    | value |
      | Sample | Test  |

    Examples:
      | Button | Logo | Text                              |
      | btnI   | logo | Henrietta Edwards' 165th Birthday |
