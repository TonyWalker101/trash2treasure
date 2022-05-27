# Trash2Treasure - Front-End - version 1.0.0

Front-end app of the final project for the Lighthouse Labs Web Development Program created by [Siyi Xie](https://github.com/isissi), [Tony Walker](https://github.com/TonyWalker101) and [Marcos Spomberg](https://github.com/spomberg).

## Trash2Trasure
Trash2Treasure is a platform for users to list items (treasures) that are being left for donation in public spaces. It realies heavily on geolocation and the Google Maps API. Users are able to add and claims donations/trasures, comment on each donation and search by location and item name.

To be used in conjunction with the [back-end app](https://github.com/TonyWalker101/trash2treasure-api).

Created with React 18.1.0

## System dependencies
- Emotion/React
- Emotion/Styled
- MUI/Material UI
- Google Maps API
- Axios
- React Time Ago
- React Geocode
- React Router
- Web Vitals

## Gif Screenshots
![Index page](https://github.com/TonyWalker101/trash2treasure/blob/master/public/images/index.gif?raw=true "Index page")
Index Page
-------------------------------
![Search results](https://github.com/TonyWalker101/trash2treasure/blob/master/public/images/sesarch.gif?raw=true "Search results")
Search Results
-------------------------------
![Donation page](https://github.com/TonyWalker101/trash2treasure/blob/master/public/images/add-new.gif?raw=true "Donation page")
Add New Treasure Page
-------------------------------
![Claim donation page](https://github.com/TonyWalker101/trash2treasure/blob/master/public/images/claim.gif?raw=true "Claim donation page")
Claim Treasure Page


## [API](https://github.com/TonyWalker101/trash2treasure-api) Setup
1. cd into the directory 
2. Run `bundle install` to install required gems
3. Rename `config/local_env.example.yml` as `config/local_env.yml` and add a valid Google Maps API key string.
4. Run `rails db:setup` to create the database, load the schema and initialize the seed data.
5. Run `rails start` to start the API.

## Frontend Setup
1. cd into the directory 
2. Run `npm install` to install the dependencies.
3. Rename .env.development.example.local to .env.development.local and add a valid Google Maps API key string.
4. Run `npm start`
