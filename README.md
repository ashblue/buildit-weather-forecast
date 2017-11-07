# BuilditWeatherForecast

You can view a live version of this project at [https://ashblue.github.io/buildit-weather-forecast/].

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## How to use this project

### Quick-Start

1. Install Node.js (recommended version 8.7.0)
1. Clone this repo
1. Run `npm install` in the cloned repo's root
1. Run `npm run start` to view the site

### Development server

Run `npm run start` for a dev server. Page should automatically open, but you can navigate to `http://localhost:4200/`
if you want to manually open the page. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `npm run build` to build the project for production. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Deploy to GitHub pages

In order to do this you must have read/write access to this repo. You must also have the 
[angular-cli-ghpages](https://github.com/angular-buch/angular-cli-ghpages) dependency installed.

`npm run build-gh-pages`

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Project notes

Notes that were requested as per original instructions for this project.

### Thought process when creating this solution

When building this project my first step was to create a MindMap with XMind and throw all of my ideas into it and
potential solutions. This included reviewing existing weather sites, reviewing the API, and identifying any potential
edge cases. After that I re-organized my ideas and come up with the dependencies / tools required to find
the shortest path to properly completing this project. 

I then hosted my code on GitHub and wrote the solution with Angular CLI to speedily produce a front-end app with
built-in testing. In my Angular app I focused most of my testing on the services since they're the main hub of data flow
and the most re-usable part of this project. I then used Bootstrap to quickly craft a decent user experience with the 
UI. Lastly I deployed everything through GitHub pages since it's built into GitHub and a server isn't required.

### Any tradeoffs that were made

* The UI could have been more appealing, but was sacrificed in favor of better JS app structure and formatting
* The originally instructed API to use for this app (16 day) is for paid only now. Used the 5 day forecast which seems
to return odd results sometimes (day times aren't always consistent)
* Search form was squished into the header instead of potentially pushing content below the fold

### Things to implement with more time

* Better error formatting for search
* Separate pages for weather day forecast
* End-2-end tests for a better testing pipeline
* Better user experience with day foldouts
* Better search tools
* Icons based upon current weather type
* 404 error page
* Better cache location data for faster lookup (location API can be very slow)
* Wrap the API key behind a server
  * Create a node.js middleware layer to help hide this
* Root models to support JSON data transformation mapping with `new` keyword. Example `new ModelFoo(fooObject)` turns
fooObject into ModelFoo properties. This would allow for helper methods to be placed directly on models for better
re-usability across the app
* Better standardization of services HTTP error handling
* Home page logic could possibly be broken up into 1 or 2 components for re-usability elsewhere
