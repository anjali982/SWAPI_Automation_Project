package runner;
import java.io.File;
import org.testng.annotations.AfterClass;
import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(
		//features="C:\\Users\\16479\\eclipse-workspace\\SWAPI_Automation_Project\\src\\test\\resources\\features\\", tags="@Characterlist,@PlanetList,@Search"
		features="C:\\Users\\16479\\eclipse-workspace\\SWAPI_Automation_Project\\src\\test\\resources\\features\\", tags="@Search"
		,glue= {"stepDefinitions"},
		format= {"pretty","html:test-output"},
		 plugin = {"json:target/positive/cucumber.json", "html:target/positive/cucumber.html","com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"}
			
		)

public class TestRunner  extends AbstractTestNGCucumberTests{

	 @AfterClass
	    public static void writeExtentReport() {
	
	        Reporter.loadXMLConfig(new File("C:\\Users\\16479\\eclipse-workspace\\SWAPI_Automation_Project\\src\\test\\java\\extent-config.xml"));
	    
	    }
	}
