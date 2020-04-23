# CreatePdf

This project was generated with Angular CLI version 9.0.2. you will make a bill from the zero to endpoint, if you wanna be pro in this just download this project,you will become a pro dev pdf in angular,it's free.

at fisrt:

Using browser print function: It is an easy option when you want to print a complete web page as a pdf. You can also customize pdf up to some limits. limitation of this approach is we don’t have strong control on format and design of pdf. Generating PDF using Backend application or third-party reporting tools and download it on client-side: You have more control over pdf formatting and design and you can process large amounts of data. Though this type of pdf generation approach required a separate API call for generating the pdf. We can solve the limitations of both ways by generating pdf at client side. We can format and design pdf as per our requirement without calling separate API.

Following are the one popular open-source javascript libraries available for client-side pdf generation.

PDFMake

how we can dowland it :

npm install --save pdfmake

in code just add this in you compenent that you will work in it:

import pdfMake from 'pdfmake/build/pdfmake'; import pdfFonts from 'pdfmake/build/vfs_fonts'; pdfMake.vfs = pdfFonts.pdfMake.vfs;

##Fisrt test: if you wanna test this ,just be sure that you complete adding all informations in form i mean ,it's should add something in input.

ok,if you do this you will show the button name "Imprimer" in frensh that means print in english.

just click in it and you will see the result.

![Image description]("src/assets/Designed BY_ Abdellah ABAIR.png")

# Development server
Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

# Code scaffolding
Run ng generate component component-name to generate a new component. You can also use ng generate directive|pipe|service|class|guard|interface|enum|module.

# Build
Run ng build to build the project. The build artifacts will be stored in the dist/ directory. Use the --prod flag for a production build.

# Running unit tests
Run ng test to execute the unit tests via Karma.

# Running end-to-end tests
Run ng e2e to execute the end-to-end tests via Protractor.

# Further help
To get more help on the Angular CLI use ng help or go check out the Angular CLI README.
