# Feature file to test Star Wars API for specified Planet
# Author: Anjali Sharma
# Created: 06/08/2019
Feature: Star Wars API Testing for specified planet	

    # Test Case to Validate the details of a specified Star Wars Planet
	@StarPlanet @Regression 
	Scenario Outline: Validate the details of a specified Star Wars Planet 
		Given API Base URL for the Application "https://swapi.co/api/" 
		And Header as "application/json" 
		When Apply get operation with resource as "<Resource>" 
		Then API should return status code <200> 
		And API status line should be "HTTP/1.1 200 OK" 
		And Content type should be in "application/json" format 
		And Name of planet should be "<Name>" 
		And rotation_period of planet should be "<rotation_period>" 
		And climate of planet should be "<climate>" 
		And diameter of planet should be "<diameter>" 
		
		
		Examples: 
			| Resource | Name | rotation_period | climate | diameter |
			| /planets/2    | Alderaan | 24 | temperate | 12500 |
			| /planets/5    | Dagobah | 23 | murky | 8900 |
		