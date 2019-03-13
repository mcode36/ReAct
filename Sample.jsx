// --- JSX, Comments, className, Self-Closing JSX Tags ---
const JSX = (
  // In JSX we need to use className instead of Class
  <div className="myDiv">
    {/* This is how comment looks like inside the JSX element */}
    <h2>Welcome to React!</h2> 
    {/* <br /> is called "self-closing tag. can not use <br> in JSX */}
    <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);
ReactDOM.render(JSX, document.getElementById('challenge-node'));

// --- Stateless Functional Component ---
const MyComponent = function() {
  return (
    <div className='customClass' />
  );
}
// --- React: Create a React Component ---
class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}

// --- React: Create a Component with Composition ---
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* change code below this line */ }
          <ChildComponent />
        { /* change code above this line */ }
      </div>
    );
  }
};

// --- React: Use React to Render Nested Components ---
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* change code below this line */ }
      <TypesOfFruit />
      { /* change code above this line */ }
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* change code below this line */ }
        <Fruits />
        { /* change code above this line */ }
      </div>
    );
  }
};

// --- React: Render a Class Component to the DOM ---
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <h1>Types of Food:</h1>
      <Fruits />
      <Vegetables />
      </div>
    );
  }
};
  
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));

// --- React: Pass Props to a Stateless Functional Component ---
const CurrentDate = (props) => {
  return (
    <div>
      { /* change code below this line */ }
      <p>The current date is: {props.d}</p>
      { /* change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* change code below this line */ }
        <CurrentDate d={Date()}/>
        { /* change code above this line */ }
      </div>
    );
  }
};
// ---- React: Pass an Array as Props ---
const List= (props) => {
  return (
    <p>
    {props.tasks.join(', ')}
    </p>
  )
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* change code below this line */ }
        <List tasks={["walk dog", "workout"]}/>
        <h2>Tomorrow</h2>
        <List tasks={["walk dog", "shopping", "workout"]}/>
        { /* change code above this line */ }
      </div>
    );
  }
};

// ---- React: Use Default Props ---
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// change code below this line
ShoppingCart.defaultProps = { items: 0 }

// --- React: Override Default Props ---
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* change code below this line */ }
    return <Items quantity={10}/>
    { /* change code above this line */ }
  }
};

// --- React: Use PropTypes to Define the Props You Expect ---
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// change code below this line
Items.propTypes = { quantity: PropTypes.number.isRequired }
// change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};

// --- React: Access Props Using this.props ---
class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* change code below this line */ }
            <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
            { /* change code above this line */ }
        </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          { /* change code below this line */ }
          <ReturnTempPassword tempPassword="ABCDEFGH" />
          { /* change code above this line */ }
        </div>
    );
  }
};

// --- React: Review Using Props with Stateless Functional Components ---
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// change code below this line

const Camper = (props) => {
  return (
    <div>
      Camper name:
      <p>{props.name}</p>
    </div>
  );
}

Camper.defaultProps = { name: 'CamperBot'}
Camper.propTypes = { name: PropTypes.string.isRequired }

// --- React: Create a Stateful Component ---
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // initialize state here
    this.state = {
      name : 'Mark'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

// --- React: Render State in the User Interface Another Way ---
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // change code below this line
    const name = this.state.name;
    var new_txt = this.state.name + ' rocks' ;
    // change code above this line
    return (
      <div>
        { /* change code below this line */ }
        <h1>{name}</h1>
        <p>{new_txt}</p>
        { /* change code above this line */ }
      </div>
    );
  }
};

// --- React: Set State with this.setState ---
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // change code below this line
    this.setState({
      name: 'React Rocks!'
    });
    // change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

// ---  React: Bind 'this' to a Class Method ---
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0
    };
    // change code below this line
    this.addItem = this.addItem.bind(this);
    // change code above this line
  }
  addItem() {
    this.setState({
      itemCount: this.state.itemCount + 1
    });
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
        <button onClick={this.addItem}>Click Me</button>
        { /* change code above this line */ }
        <h1>Current Item Count: {this.state.itemCount}</h1>
      </div>
    );
  }
};

// --- React: Use State to Toggle an Element ---
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // change code above this line
  }
  // change code below this line
  toggleVisibility() {
    if (this.state.visibility) {
      this.setState({
        visibility: false
      });
    } else {
      this.setState({
        visibility: true
      });
    }
  }
  // change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
};

// --- React: Write a Simple Counter ---
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // change code below this line
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);

    // change code above this line
  }
  // change code below this line
  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }
  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  }
  reset() {
    this.setState({
      count: 0
    });
  }
  // change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};

// --- React: Create a Controlled Input --- 
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // change code below this line
    this.handleChange = this.handleChange.bind(this);
    // change code above this line
  }
  // change code below this line
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  // change code above this line
  render() {
    return (
      <div>
        { /* change code below this line */}
        <input value={this.state.input} onChange = {this.handleChange.bind(this)}/>
        { /* change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};

// --- React: Create a Controlled Form ---
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // change code below this line
    event.preventDefault();
    this.setState({
      submit: this.state.input
    });
    // change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          { /* change code below this line */ }
<input value={this.state.input} onChange = {this.handleChange}/>
          { /* change code above this line */ }
          <button type='submit'>Submit!</button>
        </form>
        { /* change code below this line */ }
<h1>{this.state.submit}</h1>
        { /* change code above this line */ }
      </div>
    );
  }
};

// --- React: Pass State as Props to Child Components ---
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         <Navbar name={this.state.name} />
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <h1>Hello, my name is: {this.props.name} </h1>
    </div>
    );
  }
};

// --- React: Pass a Callback as Props ---
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* change code below this line */ }
<GetInput input={this.state.inputValue} handleChange={this.handleChange} />
<RenderInput input={this.state.inputValue} />
        { /* change code above this line */ }
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};

// React lifecycle methods (or, lifecycle hooks)
componentWillMount()
componentDidMount()
componentWillReceiveProps()
shouldComponentUpdate()
componentWillUpdate()
componentDidUpdate()
componentWillUnmount()

More detail: https://developmentarc.gitbooks.io/react-indepth/content/life_cycle/introduction.html

// --- React: Use the Lifecycle Method componentWillMount
// --- React: Use the Lifecycle Method componentDidMount
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: 0
    };
  }
  componentDidMount() {
    setTimeout( () => {
      this.setState({
        activeUsers: 1273
      });
    }, 3500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
};

// --- React: Add Event Listeners
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // change code below this line
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }
  // change code above this line
  handleEnter() {
    this.setState({
      message: this.state.message + 'You pressed the enter key! '
    });
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};

// --- React: Manage Updates with Lifecycle Methods ---
class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillUpdate() {
    console.log('Component is about to update...');
  }
  // change code below this line
  componentWillReceiveProps(nextProps) {
    console.log(this.props,nextProps)
  }
  componentDidUpdate() {
    console.log('the component has been updated')
  }
  // change code above this line
  render() {
    return <h1>{this.props.message}</h1>
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'First Message'
    };
    this.changeMessage = this.changeMessage.bind(this);
  }
  changeMessage() {
    this.setState({
      message: 'Second Message'
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.changeMessage}>Update</button>
        <Dialog message={this.state.message}/>
      </div>
    );
  }
};

// --- React: Optimize Re-Renders with shouldComponentUpdate
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
     // change code below this line
    if (nextProps.value % 2 == 0) {
        return true;
      }
      return false;
     // change code above this line
  }
  componentWillReceiveProps(nextProps) {
    console.log('Receiving new props...');
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState({
      value: this.state.value + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value}/>
      </div>
    );
  }
};

// --- React: Introducing Inline Styles ---
class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: "red", fontSize: 72}}>Big Red</div>
    );
  }
};

// --- React: Add Inline Styles in React
const my_styles = {
  color: "purple", 
  fontSize: 40,
  border: "2px solid purple"
}
// change code above this line
class Colorful extends React.Component {
  render() {
    // change code below this line
    return (
      <div style={my_styles}>Style Me!</div>
    );
    // change code above this line
  }
};

// --- React: Use Advanced JavaScript in React Render Method
const inputStyle = {
  width: 235,
  margin: 5
}

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    }
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt', 
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      'Don\'t count on it', 
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    
    var answer = possibleAnswers[this.state.randomIndex]
    return (
      <div>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle} /><br />
        <button onClick={this.ask}>
          Ask the Magic Eight Ball!
        </button><br />
        <h3>Answer:</h3>
        <p>
          { /* change code below this line */ }
          {answer}
          { /* change code above this line */ }
        </p>
      </div>
    );
  }
};

// --- React: Render with an If/Else Condition
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  render() {
    // change code below this line
    if (this.state.display) {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Displayed!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
      );
    }

  }
};

// --- React: Use && for a More Concise Conditional
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  render() {
    // change code below this line
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};

// --- React: Use a Ternary Expression for Conditional Rendering ---

const inputStyle = {
  width: 235,
  margin: 5
}

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line
    this.state = {
      input: '',
      userAge: ''
    }
    // change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState({
      userAge: this.state.input
    });
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type="number"
          value={this.state.input}
          onChange={this.handleChange} /><br />

        {
          this.state.input == '' ? buttonOne : 
        (this.state.input < 18 ? buttonThree : buttonTwo )
        }
        
        
      </div>
    );
  }
};

// Another logic is to use this.state.userAge variable instead of this.state.input
// (this.state.userAge >= 18) ? buttonTwo : (this.state.userAge== '')? buttonOne: buttonThree

// --- React: Render Conditionally from Props
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>
      {
        (this.props.fiftyFifty > 0.5) ? "You Win!" : "You Lose!"
      }
      </h1>
    )
  };
};

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  render() {
    let expression = Math.random();
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        { /* change code below this line */ }
        <Results fiftyFifty={expression}/>
        { /* change code above this line */ }
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
};

// --- React: Change Inline CSS Conditionally Based on Component State
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // change code below this line
    if (this.state.input.length > 15) {
      inputStyle = {
         border: '3px solid red'
      }
    }
    // change code above this line
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};

// --- React: Use Array.map() to Dynamically Render Elements
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line
    this.state = {
      userInput: '',
      toDoList: []
    };
    // change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map(i => <li>{i}</li>);
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas" /><br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
};

// --- React: Give Sibling Elements a Unique Key Attribute
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map(
      (item) =>
      <li key={item+1}>{item}</li>
   );
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};

// --- React: Use Array.filter() to Dynamically Filter an Array
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    }
  }
  render() {
    const usersOnline = this.state.users.filter(i => i.online == true); 
    const renderOnline = usersOnline.map((i) => <li key={i.username + 1}>{i.username}</li>); 

    return (
       <div>
         <h1>Current Online Users:</h1>
         <ul>
           {renderOnline}
         </ul>
       </div>
    );
  }
};

// --- React: Render React on the Server with renderToString
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      Hi there
      </div>
    )
  }
};

// change code below this line
ReactDOMServer.renderToString(<App />);