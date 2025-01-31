@LoginTest  @RegressionTest
Feature: Login tests 
    As a customer, I want to test the login functionalities on PG - Desktop

    Background:
        Given I'm on the login page

    @Login @Desk @Mobile @Tablet
    Scenario: Login with valid e-mail and password
        When I do login using correct email and password
        And The page is full loaded
        Then I must be logged on the site

    @Login @Desk @Mobile @Tablet
    Scenario: Loggout
        # When I do login using correct email and password
        # And I must be logged
        # And Set cookies
        And I must be logged on the site
        When I do Loggout from the site
        Then I must not be logged into the site

    

