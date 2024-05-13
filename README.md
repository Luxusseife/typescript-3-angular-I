# Moment 3, _Angular I_

Den här README-filen har skapats för att beskriva momentets syfte och hur lösningen är konstruerad.

## Momentets syfte

- Få en grundläggande förståelse för Angular och dess användning som ett ramverk för att skapa dynamiska och responsiva webbapplikationer.
- Förstå hur en Angular-applikation konstrueras och hur dess olika bitar interagerar med varandra.
- Kunna använda CLI-verktyg för att testköra samt publicera optimerade filer.

## Konstruktion

Webbplatsen innehar tre undersidor; en startsida med kort information om momentet, en sida för enhetskonvertering och en om-sida med konstruktion av och slutsatser om momentet. Alla undersidor är en egen komponent och även header och footer är en egen komponent. Konverteringskomponenterna är två stycken och är infogade på undersidan **Konvertera**. I konverteringskomponenterna är _FormsModule_ importerat och _ngModel_, _ngModelChange_ och _databinding_ används för att hämta och skriva ut data. Komponenten **not-found** är även skapad för att dirigera och meddela användaren om att en felaktig sökväg angetts. Totalt utgör åtta komponenter hela webbplatsen. 

Navigeringsmenyn är en oordnad lista med länkar skapad i headerkomponenten. Modulerna _routerLink_ och _routerLinkActive_ är importerade för att navigeringen ska fungera och inte medföra sidladdning. Webbplatsen är stylad med SCSS, en del globalt som normalisering, regler för body och rubriker samt mediaqueries för body. Resterande styling är gjord för och i respektive komponents SCSS-fil. Deklarerade variabler, font och mixins ligger i en global variables.scss-fil och importeras via _@use_ på aktuella sidor. 

- På startsidan hittas kort information om momentet och två bilder som är implementerade med HTML src-taggar.
- På konverteringssidan finns kort information om den konvertering som kan göras och två komponenter är infogade som sköter konvertering av mått och temperatur. 
- På om-sidan kan man läsa om webbplatsens konstruktion (en del av denna README-fil) och mina slutsatser av momentet.

## Utveckling
Nedan följer en instruktion (på engelska) för hur skapandet och utvecklingen av ett Angular-projekt kan göras. Det förutsätter att Angular är installerat på datorn med det globala kommandot _npm install -g @angular/cli_. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

### Creating a project 
Run `ng new project-name` to create your Angular-project.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



**Skapad av Jenny Lind, jeli2308.**