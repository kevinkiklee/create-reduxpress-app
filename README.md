# Create-Reduxpress-App

Boilerplate for React/Redux frontend and Node/Express backend API.
 
Based-on the [Create-React-App with a Server](https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/) article.  

The frontend client utilizes [Create-Redux-App](https://github.com/kevinkiklee/create-redux-app) which has been bootstrapped by [Create-React-App](https://github.com/facebookincubator/create-react-app). The backend API server only contains an Express skeleton, and is DB agnostic.  

## Usage / Deployment

- Clone the repository

  `git clone https://github.com/kevinkiklee/create-reduxpress-app.git`

- Install dependencies

  `npm install`

- Run the frontend and backend server on localhost

  `npm start`

- Deploy to Heroku (Replace `$APP_NAME` with your app name)

  ```
  git init
  heroku create $APP_NAME --buildpack https://github.com/mars/create-react-app-buildpack.git
  git add .
  git commit -m "Initial Commit"
  git push heroku master
  heroku open
  ```
  
  For more information about the Heroku create-react-app buildpack, please visit [Here](https://github.com/mars/create-react-app-buildpack).
  
## Implementation

- express
- babel-cli
- babel-core
- fs
- react
- react-dom
- react-redux
- redux
- redux-thunk
- redux-logger
- styled-components

## Structure

Many sample files have been included for easy modification.

### Backend (Node/Express)

- `/`
  - contains `server.js` file that initializes the Express server
  - contains `client.js` file that initializes the client React/Redux server

- `/data`
  - contains a sample JSON file that is served through Express at `api/quotes` route.

### Frontend (React/Redux)

- `/client/src`
  - contains `index.js` entry file

- `/client/src/actions`
  - for Redux actions files
  - a sample `dataActions` has been included

- `/client/src/assets`
  - contains assets, such as images
  - a sample SVG logo has been included

- `/client/src/components`
  - contains React `App` and `Root`components
  - sample `Data`, `DataContainer` and `Header` components have been included

- `/client/src/reducers`
  - contains React `RootReducer`
  - a sample `DataReducer` has been included

- `/client/src/store`
  - contains Redux `store`

- `/client/src/styles`
  - contains `reset.css`

- `/client/src/utils`
  - contains a sample `fetchUtil` for fetching a JSON file
    - a sample `data.json` file can be found in `/public/data` folder
  - contains a sample `selectors`

## Notes

- `styled-components` is used for CSS management.  More information can be found [Here](https://github.com/styled-components/styled-components)

## Todos

- [ ] Add a bash script
