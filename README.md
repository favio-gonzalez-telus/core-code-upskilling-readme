# core-code-upskilling-readme

## week 1
### tuesday
#### challenge 1
![image](https://user-images.githubusercontent.com/89661214/197918438-e5b35447-ca83-4ca3-8c3d-3bb4694a2b05.png)

#### challenge 2

![image](https://user-images.githubusercontent.com/89661214/197918300-115c74fb-1f71-43f6-a48f-0faef1643d23.png)

### wednesday
![image](https://user-images.githubusercontent.com/89661214/198167063-b47c0e02-7980-4c1a-8558-1bdcd5c33056.png)

### thursday
![image](https://user-images.githubusercontent.com/89661214/198425105-4664cc80-98c9-4e42-985a-2c743228c851.png)

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
