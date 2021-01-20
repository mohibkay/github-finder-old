import { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
// import { Router } from 'react-router-dom';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };
  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   const res = await axios.get('https://api.github.com/users');

  //   this.setState({ users: res.data, loading: false });
  // }
  searchUsers = async (text) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );

    this.setState({ users: res.data.items, loading: false });
  };
  clearUsers = () => {
    this.setState({
      users: [],
      loading: false,
    });
  };
  setAlert = (msg) => {
    this.setState({ alert: { msg } });

    setTimeout(() => {
      this.setState({ alert: null });
    }, 3000);
  };
  render() {
    const { loading, users } = this.state;
    return (
      <div className="App">
        <Navbar title="GithubFinder" icon="fab fa-github" />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length ? true : false}
            setAlert={this.setAlert}
          />
          <div className="container">
            <Users loading={loading} users={users} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
