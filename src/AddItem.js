import React, {Component} from 'react';

class AddItem extends Component {
  state = {
    value: ''
  }
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  }
  inputIsEmpty = () => {
    return this.state.value.length === 0;
  }
  addItem = event => {
    event.preventDefault();
    this.props.onAddItem(this.state.value);
  };
  render() {
    return (
      <form onSubmit={this.addItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button disabled={this.inputIsEmpty()}>Add</button>
      </form>
    )
  }
}

export default AddItem;