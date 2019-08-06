$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Character\u0026PlanetSearch.feature");
formatter.feature({
  "line": 2,
  "name": "User should be able to search for the details of a Star Wars character or planet",
  "description": "",
  "id": "user-should-be-able-to-search-for-the-details-of-a-star-wars-character-or-planet",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Search"
    }
  ]
});
formatter.before({
  "duration": 472070200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Endpoint Configuration",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The endpoint is already configured",
  "keyword": "Given "
});
formatter.match({
  "location": "characterPlanetSearch.the_endpoint_is_already_configured()"
});
formatter.result({
  "duration": 307239100,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "User should be ale to search details of a character",
  "description": "",
  "id": "user-should-be-able-to-search-for-the-details-of-a-star-wars-character-or-planet;user-should-be-ale-to-search-details-of-a-character",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User creates a Get request to serach a planet character",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Status code \"200\" should be returned by the API",
  "keyword": "Then "
});
formatter.match({
  "location": "characterPlanetSearch.user_creates_a_Get_request_to_serach_a_planet_character()"
});
formatter.result({
  "duration": 8272408800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 13
    }
  ],
  "location": "characterPlanetSearch.status_code_should_be_returned_by_the_API(String)"
});
formatter.result({
  "duration": 36468100,
  "status": "passed"
});
});