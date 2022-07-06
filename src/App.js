// import logo from './logo.svg'; //faviocon machen finden bla

import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "react-apollo";
import { Dynamic } from "./components/Dynamic";
import { Header } from "./components/Header";
import { Impressum } from "./components/Impressum";
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
    <ApolloProvider client={client}>
      <Header />
      <Static />
      <Dynamic />
      <Impressum />
    </ApolloProvider>
  );
}

export default App;
