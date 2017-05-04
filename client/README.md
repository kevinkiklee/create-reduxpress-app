# Create-Reduxpress-App

This is the React/Redux frontend `client` folder.

## Implementation

- react
- react-dom
- react-redux
- redux
- redux-thunk
- redux-logger
- styled-components

## Structure
Many sample files have been included for easy modification.

- `/src`
  - contains `index.js` entry file

- `/src/actions`
  - for Redux actions files
  - a sample `dataActions` has been included

- `/src/assets`
  - contains assets, such as images
  - a sample SVG logo has been included

- `/src/components`
  - contains React `App` and `Root`components
  - sample `Data`, `DataContainer` and `Header` components have been included

- `/src/reducers`
  - contains React `RootReducer`
  - a sample `DataReducer` has been included

- `/src/store`
  - contains Redux `store`

- `/src/styles`
  - contains `reset.css`

- `/src/utils`
  - contains a sample `fetchUtil` for fetching a JSON file
    - a sample `data.json` file can be found in `/public/data` folder
  - contains a sample `selectors`

## Notes

- `styled-components` is used for CSS management.  More information can be found [Here](https://github.com/styled-components/styled-components)
