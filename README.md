# core-code-upskilling-readme

## week 1


## week 2
### monday
![image](https://user-images.githubusercontent.com/89661214/199131524-d54da815-7c9d-4c81-b857-9df6cc0011b0.png)

### tuesday
![image](https://user-images.githubusercontent.com/89661214/199864676-58477a3a-cedf-4f14-9a12-37b00c537a6b.png)

### wednesday
```
import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        counter: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    // Your state
  }
  
    increment() {
        this.setState({
          counter: this.state.counter + 1
        });
      };
      
    decrement() {
      this.setState({
        counter: this.state.counter - 1
      });
    };
  
  // Your event handlers 
  render() {
    return (
      <div>
        <h1 id = "counter">{this.state.counter}</h1>
          <button id="decrement" onClick={this.decrement}>
            Decrement
          </button>
          <button id="increment" onClick={this.increment}>
            Increment
          </button>
      </div>
    )
  }
}
```
![image](https://user-images.githubusercontent.com/89661214/200453746-34334df1-1aff-4f77-923c-2923a8bfeb38.png)

### Thursday
```
const React = require("react");

class WishlistForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name : '',
      wish: '',
      priority: 1
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.send(this.state);
  }

  handleChange (change) {
    this.setState({...this.state, [change.target.id]: change.target.value})
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <input id = 'name' onChange={(e) => this.handleChange({...e, id : 'name'})}></input>
        <br></br>
        <textarea id = 'wish' onChange={(e) => this.handleChange({...e, id : 'wish'})}></textarea>
        <br></br>
        <select id = 'priority' onChange={(e) => this.handleChange({...e, id : 'priority'})}>  
          <option>1</option>  
          <option>2</option>  
          <option>3</option>  
          <option>4</option>  
          <option>5</option>  
        </select>  
        <br></br>
        <input type = 'submit' value = 'submit'></input>
      </form>
    );
  }
};

export default WishlistForm;

```
