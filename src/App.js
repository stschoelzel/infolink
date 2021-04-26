// import logo from './logo.svg'; //faviocon machen finden bla

import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

import { Dynamic } from "./components/Dynamic";
import { Static } from "./components/Static";

const link = createHttpLink({
  uri: "https://infocafe.org/graphql",
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <Static />
      <Dynamic />
    </div>
  );
}

export default App;
