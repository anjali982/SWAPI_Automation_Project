# Feature file to test Star Wars API for Character and Planet Search
# Author: Anjali Sharma
# Created: 06/08/2019
Feature: Star Wars API Testing for searching a character or a planet

    # Test Case to validate search for a Star Wars Clanet
	@StarPlanet  @Regression 
	Scenario Outline: Validate that user is able to search a Star Wars Planet 
		Given API Base URL for the Application "https://swapi.co/api/" 
		And Header as "application/json"
		And query paramter as "search" value "<Name>"
		When Apply get operation with resource as "<Resource>" 
		Then API should return status code <200> 
		And API status line should be "HTTP/1.1 200 OK" 
		And Content type should be in "application/json" format 
		And name of planet searched should be "<Name>" 
		And rotation_period of planet searched should be "<rotation_period>" 
		And climate of planet searched should be "<climate>" 
		And diameter of planet searched should be "<diameter>" 
		
		Examples: 
			| Resource | Name | rotation_period | climate | diameter |
			| /planets    | Alderaan | 24 | temperate | 12500 |
			| /planets    | Dagobah | 23 | murky | 8900 |


    # Test Case to validate search for a Star Wars Character
	@StarCharacter @Regression		
	Scenario Outline: Validate that user is able to search a Star Wars Character  
		Given API Base URL for the Application "https://swapi.co/api/" 
		And Header as "application/json"
		And query paramter as "search" value "<Name>"
		When Apply get operation with resource as "<Resource>" 
		Then API should return status code <200> 
		And API status line should be "HTTP/1.1 200 OK" 
		And Content type should be in "application/json" format 
		And name of Character searched should be "<Name>" 
		And height of Character searched should be "<height>" 
		And mass searched should be "<mass>" 
		
		Examples: 
			| Resource | Name | height | mass | 
			| /people    | R2-D2 | 96 | 32 |
			| /people    | C-3PO | 167 | 75 | 