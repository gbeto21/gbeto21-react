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
