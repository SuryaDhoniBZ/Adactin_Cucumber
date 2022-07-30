package com.adactin.properties;

import java.io.IOException;

public class File_Reader_Manager {
	private File_Reader_Manager() {

	}

	public static File_Reader_Manager getInstance() {

		File_Reader_Manager helper = new File_Reader_Manager();

		return helper;

	}

	public Configuration_reader getInstanceCR() throws IOException {

		Configuration_reader reader = new Configuration_reader();

		return reader;

	}

}
