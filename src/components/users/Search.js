import React, { Component } from 'react';

class Search extends Component {
  state = {
    text: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert(' Please enter something');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { clearUsers, showClear } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form mt-3">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
            className="form-control"
          />
          <input
            type="submit"
            value="Search"
            className="btn form-control btn-info mt-3"
          />
        </form>
        {showClear && (
          <button
            className="btn btn-light form-control mt-3"
            onClick={clearUsers}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
