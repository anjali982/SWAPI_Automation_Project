// Step definition file for API Testing
// Author: Anjali Sharma
// Created: 06/08/2019
package stepDefinitions;

import static org.testng.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class StepDef {

	public RequestSpecification httpRequest;
	Response response;

	@Given("^API Base URL for the Application \"([^\"]*)\"$")
	public void api_Base_URL_for_the_Application(String baseURL) throws Throwable {
		RestAssured.baseURI = baseURL;
		httpRequest = RestAssured.given();
	}

	@Given("^Header as \"([^\"]*)\"$")
	public void header_as(String header) throws Throwable {
		httpRequest.headers("Content-Type", header);

	}

	@When("^Apply get operation with resource as \"([^\"]*)\"$")
	public void apply_get_operation_with_resource_as(String resource) throws Throwable {
		response = httpRequest.get(resource);
	}

	@Then("^API should return status code <(\\d+)>$")
	public void api_should_return_status_code(int statusCode) throws Throwable {
		assertEquals(response.getStatusCode(), statusCode);
	}

	@Then("^API status line should be \"([^\"]*)\"$")
	public void api_status_line_should_be(String statusLine) throws Throwable {
		assertEquals(response.getStatusLine(), statusLine);
	}

	@Then("^Content type should be in \"([^\"]*)\" format$")
	public void content_type_should_be_in_format(String contentType) throws Throwable {
		assertEquals(response.contentType(), contentType);
	}

	@Then("^Result tag count <(\\d+)>$")
	public void result_tag_count(int tagCount) throws Throwable {
		int count = response.jsonPath().getList("results.name").size();
		assertEquals(count, tagCount);
	}

	@Then("^Total count should be <(\\d+)>$")
	public void total_count_should_be(int count) throws Throwable {

		int response_count = response.jsonPath().get("count");
		assertEquals(response_count, count);
	}

	@Then("^Name of character should be \"([^\"]*)\"$")
	public void name_of_character_should_be(String name) throws Throwable {
		String response_name = response.jsonPath().get("name");
		assertEquals(response_name, name);
	}
	
	@Then("^Name of planet should be \"([^\"]*)\"$")
	public void name_of_planet_should_be(String name) throws Throwable {
		String response_name = response.jsonPath().get("name");
		assertEquals(response_name, name);
	}

	@Then("^height of character should be \"([^\"]*)\"$")
	public void height_of_character_should_be(String height) throws Throwable {
		String response_height = response.jsonPath().get("height");
		assertEquals(response_height, height);
	}

	@Then("^mass of character should be \"([^\"]*)\"$")
	public void mass_of_character_should_be(String mass) throws Throwable {
		String response_mass = response.jsonPath().get("mass");
		assertEquals(response_mass, mass);
	}

	@Then("^rotation_period of planet should be \"([^\"]*)\"$")
	public void rotation_period_of_planet_should_be(String rotation_period) throws Throwable {
		String response_rotation_period = response.jsonPath().get("rotation_period");
		assertEquals(response_rotation_period, rotation_period);
		
	}

	@Then("^climate of planet should be \"([^\"]*)\"$")
	public void climate_of_planet_should_be(String climate) throws Throwable {
		String response_climate = response.jsonPath().get("climate");
		assertEquals(response_climate, climate);		
	}

	@Then("^diameter of planet should be \"([^\"]*)\"$")
	public void diameter_of_planet_should_be(String diameter) throws Throwable {
		String response_diameter = response.jsonPath().get("diameter");
		assertEquals(response_diameter, diameter);
	}

	@Given("^query paramter as \"([^\"]*)\" value \"([^\"]*)\"$")
	public void query_paramter_as_value(String param, String name) throws Throwable {
		httpRequest.queryParameter(param, name);
	}

	@Then("^name of planet searched should be \"([^\"]*)\"$")
	public void name_of_planet_searched_should_be(String name) throws Throwable {
		String response_name = response.jsonPath().get("results.name[0]");
		assertEquals(response_name, name);
	}

	@Then("^rotation_period of planet searched should be \"([^\"]*)\"$")
	public void rotation_period_of_planet_searched_should_be(String rotation_period) throws Throwable {
		String response_rotation_period = response.jsonPath().get("results.rotation_period[0]");
		assertEquals(response_rotation_period, rotation_period);
	}

	@Then("^climate of planet searched should be \"([^\"]*)\"$")
	public void climate_of_planet_searched_should_be(String climate) throws Throwable {
		String response_climate = response.jsonPath().get("results.climate[0]");
		assertEquals(response_climate, climate);	
	}

	@Then("^diameter of planet searched should be \"([^\"]*)\"$")
	public void diameter_of_planet_searched_should_be(String diameter) throws Throwable {
		String response_diameter = response.jsonPath().get("results.diameter[0]");
		assertEquals(response_diameter, diameter);
	}
	@Then("^name of Character searched should be \"([^\"]*)\"$")
	public void name_of_Character_searched_should_be(String name) throws Throwable {
		String response_name = response.jsonPath().get("results.name[0]");
		assertEquals(response_name, name);
	}

	@Then("^height of Character searched should be \"([^\"]*)\"$")
	public void height_of_Character_searched_should_be(String height) throws Throwable {
		String response_height = response.jsonPath().get("results.height[0]");
		assertEquals(response_height, height);
	}

	@Then("^mass searched should be \"([^\"]*)\"$")
	public void mass_searched_should_be(String mass) throws Throwable {
		String response_mass = response.jsonPath().get("results.mass[0]");
		assertEquals(response_mass, mass);
	}

}

