import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import HorizontalNav from './HorizontalNav';
// import VerticalNav from './VerticalNav';

const Landing = () => <h1> Landing </h1>;
const Dashboard = () => <h1> Dashboard </h1>;
const Questions = () => <h1> Questions </h1>;
const Answers = () => <h1> Answers </h1>;
const HorizontalNav = () => <header />;
const VerticalNav = () => <nav />;

class App extends Component {
  render() {
    return (
      <main>
        <HorizontalNav />
        <div>
          <VerticalNav />
          <BrowserRouter>
            <section>
              <Route path="/" component={Landing} exact />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/questions" component={Questions} />
              <Route path="/answers" component={Answers} />
            </section>
          </BrowserRouter>
        </div>
      </main>
    );
  }
}

export default App;
