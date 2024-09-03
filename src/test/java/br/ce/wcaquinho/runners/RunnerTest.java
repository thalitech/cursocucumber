package br.ce.wcaquinho.runners;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/cadastrar_contas.feature",
		glue = "br.ce.wcaquinho.steps",
		 tags = {"~@ignore"},
		
		/*{"@tipo1 , @tipo2"} , "~@ignore", @esse ;"@tipo1" | "@tipo1 @tipo2"
		 * | {"@tipo1 , @tipo2"} | {"@tipo1" , "@tipo2"} |
		 */	
		 plugin = {"pretty", "html:target/report-html", "json:target/report.json"},
		monochrome = true,  /* true retira as cores do terminal, mas formata o resultado corretamente*/
		snippets = SnippetType.CAMELCASE,
		dryRun = false,        /*valida as etapas primeiramente se estao corretas antes de abrir navegadorse estiver como true*/
		strict = false      /*verifica se esta faltando um passo e como true informa como erro*/
)
public class RunnerTest {
		
	@BeforeClass public static void reset() {
		ChromeOptions options = new ChromeOptions();
		  options.addArguments("--headless");
	 System.setProperty("webdriver.chrome.driver",
	 "C:\\drivers\\chromedriver.exe"); WebDriver driver = new ChromeDriver(options);
	 driver.get("https://srbarriga.herokuapp.com");
	 driver.findElement(By.id("email")).sendKeys("thalita.lilita@gmail.com");
	 driver.findElement(By.name("senha")).sendKeys(".billiejoe.");
	 driver.findElement(By.tagName("button")).click();
	 driver.findElement(By.linkText("reset")).click(); driver.quit(); }
	 
}
