# Crypto test

This project is a test assignment to build token price chart using [BitQuery](https://bitquery.io/).

# How to start

- Create `.env` file in project root folder. It must have `REACT_APP_API_KEY` environment variable specified. You can copy `.env.example` into `.env` and change your API key.
  **Note: Do not commit yout API key in public repositories**

```
cp .env.example .env
```

- To get `REACT_APP_API_KEY` value go to [BitQuery GraphQL Documentation](https://graphql.bitquery.io/) and login/register. Click on user avatar on top right, there you can find API key in corresponding menu option.
- Make sure you have `node.js` and `npm` installed and configured in your PATH.
- Install node modules

```
npm i
```

- Run start script

```
npm run start
```

- App will start in your web browser at http://localhost:3000/

# Technogies

- React
- Typescript
- Apollo
- GraphQL
- Styled Components
- Eslint
- Prettier
- Create react app

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run lint`

Will run eslint against all files configured by `.eslintrc.json` and check for issues.

### `npm run lint:fix`

Will run eslint with same configuration as `npm run lint` but will attempt to fix all issues that can be resolved automatically.

### `npm run pretty`

Will run prettier against all files in a project and fix code style according to configuration defined in `.prettierrc`.
