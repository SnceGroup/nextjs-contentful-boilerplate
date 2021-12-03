# Snce Next.js App

## Repo organization explanation
Quick explanation of project folder structure

### components
The components directory contains all the layout parts: elements, modules, templates, and layouts. 

- _elements_ :
This directory contains all the basic building blocks for modules and page layout.
For example a button or nav menu navigation.

- _modules_ :
All modules based on project guidelines, basically a module contains one or more _elements_

- _templates_ :
Contains the page template related to specific page. For example Error page, NewsList page etc..

- _layouts_ :
Base layout of the websites: layouts are used to wrap the templates

- _toolbars_ :
Contains the preview toolbar

### context
Contains the React Context (https://it.reactjs.org/docs/context.html)

### doc
Documentation folder

### pages
All the routes of Next.js application will be placed in this directory. For each route, we will have a separate file, which is named as the route

- _api_ :
all the API of the app

### public
Next.js uses this directory to statically serve files like the robots.txt or the favicon.ico.
Here there are also translations and static data
- _config_ :
Contains feature flag config file

### scripts
This folder contains scripts for generate JSON feed from contentful API response

### services
This folder contains the JS function for retrieve and fetch data from source (Contentful or static file)

### styles
All the files for SCSS and CSS 

### utils
This folder contains a set of JS helper, for example SEO data, React hooks etc. 
Contain also all the constant variable.
