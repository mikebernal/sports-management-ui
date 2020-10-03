# SportsManagementUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Completed:

1. ~~Add route guard.~~
2. ~~Reset route if authState is signedOut~~
3. ~~Create service layer for:~~
   1. ~~api~~
   2. ~~auth~~
   3. ~~admin~~
      1. ~~games~~
         1. ~~get~~
         2. ~~post~~
         3. ~~put~~
         4. ~~delete~~
      2. ~~competitors~~
         1. ~~get~~
         2. ~~post~~
         3. ~~put~~
         4. ~~delete~~
   3. ~~event manager~~
      1. ~~events~~
         1. ~~get~~
         2. ~~post~~
         3. ~~put~~
         4. ~~delete~~
      2. ~~reports~~
         1. ~~get~~
         2. ~~post~~
         3. ~~put~~
         4. ~~delete~~
4. ~~Create Games component~~
5. ~~Create Competitors component~~
6. ~~Create Events component~~
7. ~~Create Report component~~
8. ~~Create Games module with routing~~
9. ~~Create Competitors module with routing~~
10. ~~Create Events module with routing~~
11. ~~Create Report module with routing~~
12. ~~Use lazy loading~~
13. ~~Add Forbidden page 403~~
14. ~~Add Page not found 404~~
15. ~~Added logo from https://www.olympic.org/~~

## To do

1. Persist user credentials using localStorage
2. Remove Create Account components' link
3. Set Sign In Buttons' width to 100%
4. Take a refresher course about RxJS, Subscriptions, Observables
5. Research about Webcomponents slots
6. Research about AWS Amplify Auth class for AmplifyUIAngularModule 
7. Create Games child components:
   1. AddGame component
   2. UpdateGame component
   3. GameDetails component
8. Create Competitors child components:
   1. AddCompetitor component
   2. UpdateCompetitor component
   3. CompetitorDetails component
9. Create Events child components:
   1. AddEvent component
   2. UpdateEvent component
   3. EvenDetails component
10. Create Reports child components:
    1. AddReport component
    2. UpdateReport component
    3. ReportDetails component

## To debug

1. Make role a subscription
2. Redirect to homepage is page is refresh
3. Remove home active link in router
4. Fix forbidden component load by adding isAuthenticating
5. ~~Fix 404 height~~


## Upcoming milestone

1. ~~Oct 3, 2020 - Created client shell~~
2. Oct 4, 2020 - Games child components created(AddGame, UpdateGame).
3. Oct 5, 2020 - Able to view all games in Games dashboard(GamesComponent).
