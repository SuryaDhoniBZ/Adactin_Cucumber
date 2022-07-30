package com.adactin.properties;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class Configuration_reader {

	public static Properties p;

	public Configuration_reader() throws IOException {
		File f = new File(
				"C:\\Users\\WL01_ChargeInc\\eclipse-workspace\\Adactin_cucumber\\src\\test\\java\\com\\adactin\\properties\\adactin.properties");

		FileInputStream fis = new FileInputStream(f);

		p = new Properties();

		p.load(fis);

	}

	public String getBrowser() {

		String browser = p.getProperty("browser");

		return browser;

	}

	public String getUrl() {

		String url = p.getProperty("url");

		return url;
	}

}
