package com.pom_Addactin;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Select_Hotel {
	public static WebDriver driver;

	@FindBy(id = "radiobutton_0")
	private WebElement radioButton;

	@FindBy(id = "continue")
	private WebElement ContinueBtn;

	public Select_Hotel(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	public WebElement getRadioButton() {
		return radioButton;
	}

	public WebElement getContinueBtn() {
		return ContinueBtn;
	}

}
