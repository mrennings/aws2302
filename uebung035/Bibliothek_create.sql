CREATE TABLE Bibliothek.Autor (Autor_ID INT NOT NULL PRIMARY KEY,
	Autor_Name VARCHAR(30) NOT null
);

CREATE TABLE Bibliothek.Verlag(Verlag_ID INT NOT NULL PRIMARY KEY,
	Verlag_Name VARCHAR(30) NOT null
);

CREATE TABLE Bibliothek.Kategorie(Kategorie_ID INT NOT NULL PRIMARY KEY,
	Kategorie_Name VARCHAR(30) NOT null
);

CREATE TABLE Bibliothek.PLZ(PLZ SMALLINT NOT NULL PRIMARY KEY,
	Stadt VARCHAR(30) NOT null
);

CREATE TABLE Bibliothek.Kunde(Kundennummer INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	Name VARCHAR(30) NOT NULL,
	Vorname VARCHAR(30) NOT NULL,
	Straße VARCHAR(30) NOT NULL,
	Hausnr SMALLINT NOT NULL,
	PLZ SMALLINT NOT NULL,
	FOREIGN KEY (PLZ) REFERENCES PLZ(PLZ)
);


CREATE TABLE Bibliothek.Verleihdaten(Vorgangsnummer INT NOT NULL PRIMARY KEY,
	Datum DATE NOT NULL,
	ISBN BIGINT NOT NULL,
	Ausgeliehen boolean NOT NULL DEFAULT false,
	Kundennummer INT NOT NULL,
	FOREIGN KEY (Kundennummer) REFERENCES Kunde(Kundennummer),
    FOREIGN KEY (ISBN) REFERENCES Buch(ISBN)
);	


CREATE  TABLE  Bibliothek.Buch(ISBN BIGINT NOT NULL PRIMARY KEY, 
	Autor_ID INT NOT NULL ,
	Titel VARCHAR(30) NOT NULL,
	EJahr YEAR,
	Verlag_ID INT NOT NULL,
	Kategorie_ID INT NOT NULL,
	FOREIGN KEY (Autor_ID) REFERENCES Autor(Autor_ID),
	FOREIGN KEY (Verlag_ID) REFERENCES Verlag(Verlag_ID),
	FOREIGN KEY (Kategorie_ID) REFERENCES Kategorie(Kategorie_ID)
);
