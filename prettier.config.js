module.exports = {
 printWidth: 140, // określa długość linii, jeśli ilość znaków w linii przekroczy
                     140 kod będzie zawijany
 tabWidth: 2,     // określa liczbę spacji na poziomie wcięcia
 useTabs: false,  // wcięcia linii z tabulatorami zamiast spacji
 semi: true,      // dodaje średniki na końcu linii 
 singleQuote: true, // używaj pojedynczych cudzysłowów zamiast podwójnych
 trailingComma: 'none', // dodaje przecinki obiekty, tablice
 bracketSpacing: true,  // dodaje spacje w obiektach między nawiasami otwartymi 
                            { foo: bar }
 bracketSameLine: false, // umieść zamknięcie elementu html > na końcu ostatniego
                            wiersza
 arrowParens: 'avoid', // uwzględniaj nawiasy wokół pojedynczego parametru funkcji    
                          (x) =>  
 rangeStart: 0, // formatuj pliki od początku
 rangeEnd: Infinity, // formatuj pliki od końca wybranego ciągu
 requirePragma: false, // prettier może ograniczyć się do formatowania plików,   
                    które zawierają specjalny komentarz, zwany pragmą u góry pliku
 insertPragma: false, // wstawia specjalny @format znacznik na górze plików
 proseWrap: 'preserve', // zawijanie tekstu tak jak jest, opcja
                      ‘always’ jeśli przekracza szerokość 140 znaków w linii
};