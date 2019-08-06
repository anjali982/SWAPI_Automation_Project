package stepDefinitions;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class PlanetList {

	private Response response;
	private RequestSpecification request;
	private String baseURL = "https://swapi.co/api";
	
	
	@Given("^User creates a Get request to get planet list$")
	public void user_creates_a_Get_request_to_get_character_list() throws Throwable {
	
		request= given().param("/planet");
		response = request.when().get(baseURL);
	}

	@Then("^API should return the status code \"([^\"]*)\"$")
	public void api_should_return_status_code(int statusCode) throws Throwable {
		response.then().statusCode(statusCode);
	}

	@Then("^API statusline should be \"([^\"]*)\"$")
	public void api_status_line_should_be(String statusLine) throws Throwable {
		response.then().statusLine(statusLine);

	}

	@Then("^the Content type must be in \"([^\"]*)\" format$")
	public void content_type_must_be_in_format(String format) throws Throwable {
	   response.then().contentType(format);
	}


	
	@Then("^API response must contain character count \\\"([^\\\"]*)\\\"$")
	public void api_response_must_contain_character_count(int count) throws Throwable {
	response.then().assertThat().body("count", equalTo(count));
		/*request= given().param("/people");
		response = request.when().get(baseURL);
		ResponseBody body = response.getBody();
		String bodyStringValue = body.asString();
		System.out
		Assert.assertTrue(bodyStringValue.contains("firstName"));*/
	  	
		 
	}
}
