# Feature file to test Star Wars API for Character List
# Author: Anjali Sharma
# Created: 06/08/2019
Feature: Star Wars API Testing for list of characters

    # Test Case to Validate the response of API for the Star Wars Character list
    @StarPlanet @Regression
    Scenario: Validate the response of API for the Star Wars Character list
        Given API Base URL for the Application "https://swapi.co/api/"
        And Header as "application/json"
        When Apply get operation with resource as "/people"
        Then API should return status code <200>        
		And API status line should be "HTTP/1.1 200 OK"
		And Content type should be in "application/json" format
 
    # Test Case to Validate the result list for the Star Wars Characters
    @StarPlanet @Regression
    Scenario: Validate the result list for the Star Wars Characters
        Given API Base URL for the Application "https://swapi.co/api/"
        And Header as "application/json"
        When Apply get operation with resource as "/people"
        Then Result tag count <10>        
		And Total count should be <87>
		

		
		