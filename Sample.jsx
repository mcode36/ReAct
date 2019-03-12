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

