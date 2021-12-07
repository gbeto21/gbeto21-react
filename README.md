# gbeto21-react

Personal portfolio built with React and Node.js

## Initial setup

After clonning the repo please install the dependencies:

```bash
   npm install
```

## Backend point

The end point to get the technologyes and the projects is:

> https://gbeto21-api.herokuapp.com/graphql/

An example to get the technologyes:

```
const queryTechnologys = gql`
  query {
    technologys {
      _id
      name
    }
  }
`;
```

## Deployment

The project was deployed using <a href="https://firebase.google.com/docs/hosting" target="_blank"> Firebase hosting</a>.

In order to deploy the project follow the next steps:

1. Create the build folder with the optimized code with:

```
npm run build
```

2. Install the <a href="https://firebase.google.com/docs/cli#install_the_firebase_cli" target="_blank"> firebase cli </a> depending on your machine.

3. Login into firebase with the command:

```
firebase login
```

4. Initialize a firebase project:

```
firebase init
```

5. Deploy the project with:

```
firebase deploy
```

Or you can optionally add a comment to each of your deployments. This comment will display with the other deployment information on your project's Firebase Hosting page:

```
firebase deploy -m "Deploying the best new feature ever."
```
