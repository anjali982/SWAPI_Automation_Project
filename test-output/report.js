$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CharacterAndPlanetSearch.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Feature file to test Star Wars API for Character and Planet Search"
    },
    {
      "line": 2,
      "value": "# Author: Anjali Sharma"
    },
    {
      "line": 3,
      "value": "# Created: 06/08/2019"
    }
  ],
  "line": 4,
  "name": "Star Wars API Testing for searching a character or a planet",
  "description": "",
  "id": "star-wars-api-testing-for-searching-a-character-or-a-planet",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 6,
      "value": "# Test Case to validate search for a Star Wars Clanet"
    }
  ],
  "line": 8,
  "name": "Validate that user is able to search a Star Wars Planet",
  "description": "",
  "id": "star-wars-api-testing-for-searching-a-character-or-a-planet;validate-that-user-is-able-to-search-a-star-wars-planet",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@StarPlanet"
    },
    {
      "line": 7,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "API Base URL for the Application \"https://swapi.co/api/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Header as \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "query paramter as \"search\" value \"\u003cName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Apply get operation with resource as \"\u003cResource\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "API should return status code \u003c200\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "API status line should be \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Content type should be in \"application/json\" format",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "name of planet searched should be \"\u003cName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "rotation_period of planet searched should be \"\u003crotation_period\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "climate of planet searched should be \"\u003cclimate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "diameter of planet searched should be \"\u003cdiameter\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "star-wars-api-testing-for-searching-a-character-or-a-planet;validate-that-user-is-able-to-search-a-star-wars-planet;",
  "rows": [
    {
      "cells": [
        "Resource",
        "Name",
        "rotation_period",
        "climate",
        "diameter"
      ],
      "line": 22,
      "id": "star-wars-api-testing-for-searching-a-character-or-a-planet;validate-that-user-is-able-to-search-a-star-wars-planet;;1"
    },
    {
      "cells": [
        "/planets",
        "Alderaan",
        "24",
        "temperate",
        "12500"
      ],
      "line": 23,
      "id": "star-wars-api-testing-for-searching-a-character-or-a-planet;validate-that-user-is-able-to-search-a-star-wars-planet;;2"
    },
    {
      "cells": [
        "/planets",
        "Dagobah",
        "23",
        "murky",
        "8900"
      ],
      "line": 24,
      "id": "star-wars-api-testing-for-searching-a-character-or-a-planet;validate-that-user-is-able-to-search-a-star-wars-planet;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Validate that user is able to search a Star Wars Planet",
  "description": "",
  "id": "star-wars-api-testing-for-searching-a-character-or-a-planet;validate-that-user-is-able-to-search-a-star-wars-planet;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@StarPlanet"
    },
    {
      "line": 7,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "API Base URL for the Application \"https://swapi.co/api/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Header as \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "query paramter as \"search\" value \"Alderaan\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Apply get operation with resource as \"/planets\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "API should return status code \u003c200\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "API status line should be \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Content type should be in \"application/json\" format",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "name of planet searched should be \"Alderaan\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "rotation_period of planet searched should be \"24\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "climate of planet searched should be \"temperate\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "diameter of planet searched should be \"12500\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://swapi.co/api/",
      "offset": 34
    }
  ],
  "location": "StepDef.api_Base_URL_for_the_Application(String)"
});
formatter.result({
  "duration": 610651900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 11
    }
  ],
  "location": "StepDef.header_as(String)"
});
formatter.result({
  "duration": 152353100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "search",
      "offset": 19
    },
    {
      "val": "Alderaan",
      "offset": 34
    }
  ],
  "location": "StepDef.query_paramter_as_value(String,String)"
});
formatter.result({
  "duration": 8864100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/planets",
      "offset": 38
    }
  ],
  "location": "StepDef.apply_get_operation_with_resource_as(String)"
});
formatter.result({
  "duration": 4024865200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 31
    }
  ],
  "location": "StepDef.api_should_return_status_code(int)"
});
formatter.result({
  "duration": 4218000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HTTP/1.1 200 OK",
      "offset": 27
    }
  ],
  "location": "StepDef.api_status_line_should_be(String)"
});
formatter.result({
  "duration": 173000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 27
    }
  ],
  "location": "StepDef.content_type_should_be_in_format(String)"
});
formatter.result({
  "duration": 153100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alderaan",
      "offset": 35
    }
  ],
  "location": "StepDef.name_of_planet_searched_should_be(String)"
});
formatter.result({
  "duration": 528797800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24",
      "offset": 46
    }
  ],
  "location": "StepDef.rotation_period_of_planet_searched_should_be(String)"
});
formatter.result({
  "duration": 11756600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temperate",
      "offset": 38
    }
  ],
  "location": "StepDef.climate_of_planet_searched_should_be(String)"
});
formatter.result({
  "duration": 9425500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12500",
      "offset": 39
    }
  ],
  "location": "StepDef.diameter_of_planet_searched_should_be(String)"
});
formatter.result({
  "duration": 10291900,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Validate that user is able to search a Star Wars Planet",
  "description": "",
  "id": "star-wars-api-testing-for-searching-a-character-or-a-planet;validate-that-user-is-able-to-search-a-star-wars-planet;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@StarPlanet"
    },
    {
      "line": 7,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "API Base URL for the Application \"https://swapi.co/api/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Header as \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "query paramter as \"search\" value \"Dagobah\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Apply get operation with resource as \"/planets\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "API should return status code \u003c200\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "API status line should be \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Content type should be in \"application/json\" format",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "name of planet searched should be \"Dagobah\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "rotation_period of planet searched should be \"23\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "climate of planet searched should be \"murky\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "diameter of planet searched should be \"8900\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://swapi.co/api/",
      "offset": 34
    }
  ],
  "location": "StepDef.api_Base_URL_for_the_Application(String)"
});
formatter.result({
  "duration": 529200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 11
    }
  ],
  "location": "StepDef.header_as(String)"
});
formatter.result({
  "duration": 461000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "search",
      "offset": 19
    },
    {
      "val": "Dagobah",
      "offset": 34
    }
  ],
  "location": "StepDef.query_paramter_as_value(String,String)"
});
formatter.result({
  "duration": 237600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/planets",
      "offset": 38
    }
  ],
  "location": "StepDef.apply_get_operation_with_resource_as(String)"
});
formatter.result({
  "duration": 7890605600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 31
    }
  ],
  "location": "StepDef.api_should_return_status_code(int)"
});
formatter.result({
  "duration": 307700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HTTP/1.1 200 OK",
      "offset": 27
    }
  ],
  "location": "StepDef.api_status_line_should_be(String)"
});
formatter.result({
  "duration": 208500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 27
    }
  ],
  "location": "StepDef.content_type_should_be_in_format(String)"
});
formatter.result({
  "duration": 137000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dagobah",
      "offset": 35
    }
  ],
  "location": "StepDef.name_of_planet_searched_should_be(String)"
});
formatter.result({
  "duration": 39159300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23",
      "offset": 46
    }
  ],
  "location": "StepDef.rotation_period_of_planet_searched_should_be(String)"
});
formatter.result({
  "duration": 24727100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "murky",
      "offset": 38
    }
  ],
  "location": "StepDef.climate_of_planet_searched_should_be(String)"
});
formatter.result({
  "duration": 23466500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8900",
      "offset": 39
    }
  ],
  "location": "StepDef.diameter_of_planet_searched_should_be(String)"
});
formatter.result({
  "duration": 12457400,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 27,
      "value": "# Test Case to validate search for a Star Wars Character"
    }
  ],
  "line": 29,
  "name": "Validate that user is able to search a Star Wars Character",
  "description": "",
  "id": "star-wars-api-testing-for-searching-a-character-or-a-planet;validate-that-user-is-able-to-search-a-star-wars-character",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@StarCharacter"
    },
    {
      "line": 28,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "API Base URL for the Application \"https://swapi.co/api/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "Header as \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "query paramter as \"search\" value \"\u003cName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Apply get operation with resource as \"\u003cResource\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "API should return status code \u003c200\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "API status line should be \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Content type should be in \"application/json\" format",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "name of Character searched should be \"\u003cName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "height of Character searched should be \"\u003cheight\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "mass searched should be \"\u003cmass\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "star-wars-api-testing-for-searching-a-character-or-a-planet;validate-that-user-is-able-to-search-a-star-wars-character;",
  "rows": [
    {
      "cells": [
        "Resource",
        "Name",
        "height",
        "mass"
      ],
      "line": 42,
      "id": "star-wars-api-testing-for-searching-a-character-or-a-planet;validate-that-user-is-able-to-search-a-star-wars-character;;1"
    },
    {
      "cells": [
        "/people",
        "R2-D2",
        "96",
        "32"
      ],
      "line": 43,
      "id": "star-wars-api-testing-for-searching-a-character-or-a-planet;validate-that-user-is-able-to-search-a-star-wars-character;;2"
    },
    {
      "cells": [
        "/people",
        "C-3PO",
        "167",
        "75"
      ],
      "line": 44,
      "id": "star-wars-api-testing-for-searching-a-character-or-a-planet;validate-that-user-is-able-to-search-a-star-wars-character;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 43,
  "name": "Validate that user is able to search a Star Wars Character",
  "description": "",
  "id": "star-wars-api-testing-for-searching-a-character-or-a-planet;validate-that-user-is-able-to-search-a-star-wars-character;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@StarCharacter"
    },
    {
      "line": 28,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "API Base URL for the Application \"https://swapi.co/api/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "Header as \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "query paramter as \"search\" value \"R2-D2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Apply get operation with resource as \"/people\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "API should return status code \u003c200\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "API status line should be \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Content type should be in \"application/json\" format",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "name of Character searched should be \"R2-D2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "height of Character searched should be \"96\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "mass searched should be \"32\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://swapi.co/api/",
      "offset": 34
    }
  ],
  "location": "StepDef.api_Base_URL_for_the_Application(String)"
});
formatter.result({
  "duration": 1859100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 11
    }
  ],
  "location": "StepDef.header_as(String)"
});
formatter.result({
  "duration": 532400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "search",
      "offset": 19
    },
    {
      "val": "R2-D2",
      "offset": 34
    }
  ],
  "location": "StepDef.query_paramter_as_value(String,String)"
});
formatter.result({
  "duration": 295900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/people",
      "offset": 38
    }
  ],
  "location": "StepDef.apply_get_operation_with_resource_as(String)"
});
formatter.result({
  "duration": 8088284200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 31
    }
  ],
  "location": "StepDef.api_should_return_status_code(int)"
});
formatter.result({
  "duration": 295000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HTTP/1.1 200 OK",
      "offset": 27
    }
  ],
  "location": "StepDef.api_status_line_should_be(String)"
});
formatter.result({
  "duration": 129200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 27
    }
  ],
  "location": "StepDef.content_type_should_be_in_format(String)"
});
formatter.result({
  "duration": 126000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "R2-D2",
      "offset": 38
    }
  ],
  "location": "StepDef.name_of_Character_searched_should_be(String)"
});
formatter.result({
  "duration": 42028700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "96",
      "offset": 40
    }
  ],
  "location": "StepDef.height_of_Character_searched_should_be(String)"
});
formatter.result({
  "duration": 51198500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 25
    }
  ],
  "location": "StepDef.mass_searched_should_be(String)"
});
formatter.result({
  "duration": 17527600,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Validate that user is able to search a Star Wars Character",
  "description": "",
  "id": "star-wars-api-testing-for-searching-a-character-or-a-planet;validate-that-user-is-able-to-search-a-star-wars-character;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@StarCharacter"
    },
    {
      "line": 28,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "API Base URL for the Application \"https://swapi.co/api/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "Header as \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "query paramter as \"search\" value \"C-3PO\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Apply get operation with resource as \"/people\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "API should return status code \u003c200\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "API status line should be \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Content type should be in \"application/json\" format",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "name of Character searched should be \"C-3PO\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "height of Character searched should be \"167\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "mass searched should be \"75\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://swapi.co/api/",
      "offset": 34
    }
  ],
  "location": "StepDef.api_Base_URL_for_the_Application(String)"
});
formatter.result({
  "duration": 441600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 11
    }
  ],
  "location": "StepDef.header_as(String)"
});
formatter.result({
  "duration": 876500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "search",
      "offset": 19
    },
    {
      "val": "C-3PO",
      "offset": 34
    }
  ],
  "location": "StepDef.query_paramter_as_value(String,String)"
});
formatter.result({
  "duration": 276800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/people",
      "offset": 38
    }
  ],
  "location": "StepDef.apply_get_operation_with_resource_as(String)"
});
formatter.result({
  "duration": 4445330400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 31
    }
  ],
  "location": "StepDef.api_should_return_status_code(int)"
});
formatter.result({
  "duration": 246800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HTTP/1.1 200 OK",
      "offset": 27
    }
  ],
  "location": "StepDef.api_status_line_should_be(String)"
});
formatter.result({
  "duration": 172800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 27
    }
  ],
  "location": "StepDef.content_type_should_be_in_format(String)"
});
formatter.result({
  "duration": 207900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C-3PO",
      "offset": 38
    }
  ],
  "location": "StepDef.name_of_Character_searched_should_be(String)"
});
formatter.result({
  "duration": 31143800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "167",
      "offset": 40
    }
  ],
  "location": "StepDef.height_of_Character_searched_should_be(String)"
});
formatter.result({
  "duration": 27858000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "75",
      "offset": 25
    }
  ],
  "location": "StepDef.mass_searched_should_be(String)"
});
formatter.result({
  "duration": 26657400,
  "status": "passed"
});
formatter.uri("StarWarsCharacter.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Feature file to test Star Wars API for specified Character"
    },
    {
      "line": 2,
      "value": "# Author: Anjali Sharma"
    },
    {
      "line": 3,
      "value": "# Created: 06/08/2019"
    }
  ],
  "line": 4,
  "name": "Star Wars API Testing for specified characters",
  "description": "",
  "id": "star-wars-api-testing-for-specified-characters",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 6,
      "value": "# Test case to validate the details of a specified Star Wars Planet."
    }
  ],
  "line": 8,
  "name": "Validate the details of a specified Star Wars character",
  "description": "",
  "id": "star-wars-api-testing-for-specified-characters;validate-the-details-of-a-specified-star-wars-character",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@StarCharacter"
    },
    {
      "line": 7,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "API Base URL for the Application \"https://swapi.co/api/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Header as \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Apply get operation with resource as \"/people/1\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "API should return status code \u003c200\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "API status line should be \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Content type should be in \"application/json\" format",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Name of character should be \"Luke Skywalker\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "height of character should be \"172\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "mass of character should be \"77\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://swapi.co/api/",
      "offset": 34
    }
  ],
  "location": "StepDef.api_Base_URL_for_the_Application(String)"
});
formatter.result({
  "duration": 570500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 11
    }
  ],
  "location": "StepDef.header_as(String)"
});
formatter.result({
  "duration": 626500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/people/1",
      "offset": 38
    }
  ],
  "location": "StepDef.apply_get_operation_with_resource_as(String)"
});
formatter.result({
  "duration": 1947770100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 31
    }
  ],
  "location": "StepDef.api_should_return_status_code(int)"
});
formatter.result({
  "duration": 201500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HTTP/1.1 200 OK",
      "offset": 27
    }
  ],
  "location": "StepDef.api_status_line_should_be(String)"
});
formatter.result({
  "duration": 216400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 27
    }
  ],
  "location": "StepDef.content_type_should_be_in_format(String)"
});
formatter.result({
  "duration": 180500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luke Skywalker",
      "offset": 29
    }
  ],
  "location": "StepDef.name_of_character_should_be(String)"
});
formatter.result({
  "duration": 24164400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "172",
      "offset": 31
    }
  ],
  "location": "StepDef.height_of_character_should_be(String)"
});
formatter.result({
  "duration": 33784000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "77",
      "offset": 29
    }
  ],
  "location": "StepDef.mass_of_character_should_be(String)"
});
formatter.result({
  "duration": 24986100,
  "status": "passed"
});
formatter.uri("StarWarsCharacterList.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Feature file to test Star Wars API for Character List"
    },
    {
      "line": 2,
      "value": "# Author: Anjali Sharma"
    },
    {
      "line": 3,
      "value": "# Created: 06/08/2019"
    }
  ],
  "line": 4,
  "name": "Star Wars API Testing for list of characters",
  "description": "",
  "id": "star-wars-api-testing-for-list-of-characters",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 6,
      "value": "# Test Case to Validate the response of API for the Star Wars Character list"
    }
  ],
  "line": 8,
  "name": "Validate the response of API for the Star Wars Character list",
  "description": "",
  "id": "star-wars-api-testing-for-list-of-characters;validate-the-response-of-api-for-the-star-wars-character-list",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@StarPlanet"
    },
    {
      "line": 7,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "API Base URL for the Application \"https://swapi.co/api/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Header as \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Apply get operation with resource as \"/people\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "API should return status code \u003c200\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "API status line should be \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Content type should be in \"application/json\" format",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://swapi.co/api/",
      "offset": 34
    }
  ],
  "location": "StepDef.api_Base_URL_for_the_Application(String)"
});
formatter.result({
  "duration": 1089300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 11
    }
  ],
  "location": "StepDef.header_as(String)"
});
formatter.result({
  "duration": 1209500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/people",
      "offset": 38
    }
  ],
  "location": "StepDef.apply_get_operation_with_resource_as(String)"
});
formatter.result({
  "duration": 2253359500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 31
    }
  ],
  "location": "StepDef.api_should_return_status_code(int)"
});
formatter.result({
  "duration": 228100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HTTP/1.1 200 OK",
      "offset": 27
    }
  ],
  "location": "StepDef.api_status_line_should_be(String)"
});
formatter.result({
  "duration": 145500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 27
    }
  ],
  "location": "StepDef.content_type_should_be_in_format(String)"
});
formatter.result({
  "duration": 118600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 16,
      "value": "# Test Case to Validate the result list for the Star Wars Characters"
    }
  ],
  "line": 18,
  "name": "Validate the result list for the Star Wars Characters",
  "description": "",
  "id": "star-wars-api-testing-for-list-of-characters;validate-the-result-list-for-the-star-wars-characters",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@StarPlanet"
    },
    {
      "line": 17,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "API Base URL for the Application \"https://swapi.co/api/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Header as \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Apply get operation with resource as \"/people\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Result tag count \u003c10\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Total count should be \u003c87\u003e",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://swapi.co/api/",
      "offset": 34
    }
  ],
  "location": "StepDef.api_Base_URL_for_the_Application(String)"
});
formatter.result({
  "duration": 1083700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 11
    }
  ],
  "location": "StepDef.header_as(String)"
});
formatter.result({
  "duration": 977800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/people",
      "offset": 38
    }
  ],
  "location": "StepDef.apply_get_operation_with_resource_as(String)"
});
formatter.result({
  "duration": 3156367300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 18
    }
  ],
  "location": "StepDef.result_tag_count(int)"
});
formatter.result({
  "duration": 71372200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "87",
      "offset": 23
    }
  ],
  "location": "StepDef.total_count_should_be(int)"
});
formatter.result({
  "duration": 49371400,
  "status": "passed"
});
formatter.uri("StarWarsPlanet.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Feature file to test Star Wars API for specified Planet"
    },
    {
      "line": 2,
      "value": "# Author: Anjali Sharma"
    },
    {
      "line": 3,
      "value": "# Created: 06/08/2019"
    }
  ],
  "line": 4,
  "name": "Star Wars API Testing for specified planet",
  "description": "",
  "id": "star-wars-api-testing-for-specified-planet",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 6,
      "value": "# Test Case to Validate the details of a specified Star Wars Planet"
    }
  ],
  "line": 8,
  "name": "Validate the details of a specified Star Wars Planet",
  "description": "",
  "id": "star-wars-api-testing-for-specified-planet;validate-the-details-of-a-specified-star-wars-planet",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@StarPlanet"
    },
    {
      "line": 7,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "API Base URL for the Application \"https://swapi.co/api/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Header as \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Apply get operation with resource as \"\u003cResource\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "API should return status code \u003c200\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "API status line should be \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Content type should be in \"application/json\" format",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Name of planet should be \"\u003cName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "rotation_period of planet should be \"\u003crotation_period\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "climate of planet should be \"\u003cclimate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "diameter of planet should be \"\u003cdiameter\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "star-wars-api-testing-for-specified-planet;validate-the-details-of-a-specified-star-wars-planet;",
  "rows": [
    {
      "cells": [
        "Resource",
        "Name",
        "rotation_period",
        "climate",
        "diameter"
      ],
      "line": 22,
      "id": "star-wars-api-testing-for-specified-planet;validate-the-details-of-a-specified-star-wars-planet;;1"
    },
    {
      "cells": [
        "/planets/2",
        "Alderaan",
        "24",
        "temperate",
        "12500"
      ],
      "line": 23,
      "id": "star-wars-api-testing-for-specified-planet;validate-the-details-of-a-specified-star-wars-planet;;2"
    },
    {
      "cells": [
        "/planets/5",
        "Dagobah",
        "23",
        "murky",
        "8900"
      ],
      "line": 24,
      "id": "star-wars-api-testing-for-specified-planet;validate-the-details-of-a-specified-star-wars-planet;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Validate the details of a specified Star Wars Planet",
  "description": "",
  "id": "star-wars-api-testing-for-specified-planet;validate-the-details-of-a-specified-star-wars-planet;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@StarPlanet"
    },
    {
      "line": 7,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "API Base URL for the Application \"https://swapi.co/api/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Header as \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Apply get operation with resource as \"/planets/2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "API should return status code \u003c200\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "API status line should be \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Content type should be in \"application/json\" format",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Name of planet should be \"Alderaan\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "rotation_period of planet should be \"24\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "climate of planet should be \"temperate\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "diameter of planet should be \"12500\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://swapi.co/api/",
      "offset": 34
    }
  ],
  "location": "StepDef.api_Base_URL_for_the_Application(String)"
});
formatter.result({
  "duration": 429200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 11
    }
  ],
  "location": "StepDef.header_as(String)"
});
formatter.result({
  "duration": 1037600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/planets/2",
      "offset": 38
    }
  ],
  "location": "StepDef.apply_get_operation_with_resource_as(String)"
});
formatter.result({
  "duration": 486713900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 31
    }
  ],
  "location": "StepDef.api_should_return_status_code(int)"
});
formatter.result({
  "duration": 225400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HTTP/1.1 200 OK",
      "offset": 27
    }
  ],
  "location": "StepDef.api_status_line_should_be(String)"
});
formatter.result({
  "duration": 139500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 27
    }
  ],
  "location": "StepDef.content_type_should_be_in_format(String)"
});
formatter.result({
  "duration": 108400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alderaan",
      "offset": 26
    }
  ],
  "location": "StepDef.name_of_planet_should_be(String)"
});
formatter.result({
  "duration": 22833800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24",
      "offset": 37
    }
  ],
  "location": "StepDef.rotation_period_of_planet_should_be(String)"
});
formatter.result({
  "duration": 22141300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temperate",
      "offset": 29
    }
  ],
  "location": "StepDef.climate_of_planet_should_be(String)"
});
formatter.result({
  "duration": 26538300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12500",
      "offset": 30
    }
  ],
  "location": "StepDef.diameter_of_planet_should_be(String)"
});
formatter.result({
  "duration": 23588200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Validate the details of a specified Star Wars Planet",
  "description": "",
  "id": "star-wars-api-testing-for-specified-planet;validate-the-details-of-a-specified-star-wars-planet;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@StarPlanet"
    },
    {
      "line": 7,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "API Base URL for the Application \"https://swapi.co/api/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Header as \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Apply get operation with resource as \"/planets/5\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "API should return status code \u003c200\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "API status line should be \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Content type should be in \"application/json\" format",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Name of planet should be \"Dagobah\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "rotation_period of planet should be \"23\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "climate of planet should be \"murky\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "diameter of planet should be \"8900\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://swapi.co/api/",
      "offset": 34
    }
  ],
  "location": "StepDef.api_Base_URL_for_the_Application(String)"
});
formatter.result({
  "duration": 622100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 11
    }
  ],
  "location": "StepDef.header_as(String)"
});
formatter.result({
  "duration": 971000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/planets/5",
      "offset": 38
    }
  ],
  "location": "StepDef.apply_get_operation_with_resource_as(String)"
});
formatter.result({
  "duration": 951371700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 31
    }
  ],
  "location": "StepDef.api_should_return_status_code(int)"
});
formatter.result({
  "duration": 263000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HTTP/1.1 200 OK",
      "offset": 27
    }
  ],
  "location": "StepDef.api_status_line_should_be(String)"
});
formatter.result({
  "duration": 130600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 27
    }
  ],
  "location": "StepDef.content_type_should_be_in_format(String)"
});
formatter.result({
  "duration": 125600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dagobah",
      "offset": 26
    }
  ],
  "location": "StepDef.name_of_planet_should_be(String)"
});
formatter.result({
  "duration": 22902200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23",
      "offset": 37
    }
  ],
  "location": "StepDef.rotation_period_of_planet_should_be(String)"
});
formatter.result({
  "duration": 21308400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "murky",
      "offset": 29
    }
  ],
  "location": "StepDef.climate_of_planet_should_be(String)"
});
formatter.result({
  "duration": 21360600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8900",
      "offset": 30
    }
  ],
  "location": "StepDef.diameter_of_planet_should_be(String)"
});
formatter.result({
  "duration": 21401600,
  "status": "passed"
});
formatter.uri("StarWarsPlanetList.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Feature file to test Star Wars API for list of planets"
    },
    {
      "line": 2,
      "value": "# Author: Anjali Sharma"
    },
    {
      "line": 3,
      "value": "# Created: 06/08/2019"
    }
  ],
  "line": 4,
  "name": "Star Wars API Testing for list of planets",
  "description": "",
  "id": "star-wars-api-testing-for-list-of-planets",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 6,
      "value": "# Test Case to Validate the response for the Star Wars Planets"
    }
  ],
  "line": 8,
  "name": "Validate the response for the Star Wars Planets",
  "description": "",
  "id": "star-wars-api-testing-for-list-of-planets;validate-the-response-for-the-star-wars-planets",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@StarPlanet"
    },
    {
      "line": 7,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "API Base URL for the Application \"https://swapi.co/api/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Header as \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Apply get operation with resource as \"/planets\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "API should return status code \u003c200\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "API status line should be \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Content type should be in \"application/json\" format",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://swapi.co/api/",
      "offset": 34
    }
  ],
  "location": "StepDef.api_Base_URL_for_the_Application(String)"
});
formatter.result({
  "duration": 1047500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 11
    }
  ],
  "location": "StepDef.header_as(String)"
});
formatter.result({
  "duration": 1579900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/planets",
      "offset": 38
    }
  ],
  "location": "StepDef.apply_get_operation_with_resource_as(String)"
});
formatter.result({
  "duration": 952820700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 31
    }
  ],
  "location": "StepDef.api_should_return_status_code(int)"
});
formatter.result({
  "duration": 231100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HTTP/1.1 200 OK",
      "offset": 27
    }
  ],
  "location": "StepDef.api_status_line_should_be(String)"
});
formatter.result({
  "duration": 128800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 27
    }
  ],
  "location": "StepDef.content_type_should_be_in_format(String)"
});
formatter.result({
  "duration": 114600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 16,
      "value": "# Test Case to Validate the response list for the Star Wars Planets"
    }
  ],
  "line": 18,
  "name": "Validate the response list for the Star Wars Planets",
  "description": "",
  "id": "star-wars-api-testing-for-list-of-planets;validate-the-response-list-for-the-star-wars-planets",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@StarPlanet"
    },
    {
      "line": 17,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "API Base URL for the Application \"https://swapi.co/api/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Header as \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Apply get operation with resource as \"/planets\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Result tag count \u003c10\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Total count should be \u003c61\u003e",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://swapi.co/api/",
      "offset": 34
    }
  ],
  "location": "StepDef.api_Base_URL_for_the_Application(String)"
});
formatter.result({
  "duration": 859200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 11
    }
  ],
  "location": "StepDef.header_as(String)"
});
formatter.result({
  "duration": 822700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/planets",
      "offset": 38
    }
  ],
  "location": "StepDef.apply_get_operation_with_resource_as(String)"
});
formatter.result({
  "duration": 2207135800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 18
    }
  ],
  "location": "StepDef.result_tag_count(int)"
});
formatter.result({
  "duration": 11195700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "61",
      "offset": 23
    }
  ],
  "location": "StepDef.total_count_should_be(int)"
});
formatter.result({
  "duration": 9787800,
  "status": "passed"
});
});