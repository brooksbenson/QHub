import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './DashboardSection';
import './styles/App.css';

const Landing = () => <h1> Landing </h1>;
const Questions = () => <h1> Questions </h1>;
const Answers = () => <h1> Answers </h1>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
  }

  onMenuButtonClick() {
    this.setState(({ sidebarOpen }) => ({ sidebarOpen: !sidebarOpen }));
  }

  render() {
    const { sidebarOpen } = this.state;
    return (
      <BrowserRouter>
        <main className="main">
          <Header onMenuButtonClick={this.onMenuButtonClick} />
          <div className="main__body">
            <Sidebar open={sidebarOpen} />
            <section
              className={`main__content ${
                sidebarOpen ? '' : 'main__content--full'
              }`}
            >
              <Switch>
                <Route path="/" component={Landing} exact />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/questions" component={Questions} />
                <Route path="/answers" component={Answers} />
              </Switch>
            </section>
          </div>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
