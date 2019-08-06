@Characterlist
Feature: API should be able to return a list of all the Star Wars characters

Scenario:  User should be get response for the Star Wars Characters
Given User creates a Get request to get character list
Then API should return status code "200"
And API status line should be "HTTP/1.1 200 OK"
And Content type should be in "application/json" format


Scenario:  User should get correct response for the Star Wars Character List
Given User creates a Get request to get character list
Then API response should be in JSON format
And API response should contain character count "87"
