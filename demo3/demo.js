

window.onload = function()
{ 
  const Items = (props) => {
    return React.createElement("h1", null, "Hi ", props.name,", current Quantity of Items in your Cart: ", props.quantity);
  }

  Items.defaultProps = {
    name: 'John',
    quantity: 0
  }

  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return React.createElement(Items, {quantity: 10, name : this.props.name});
    }
  };
  
  ReactDOM.render(
    React.createElement(ShoppingCart, { name : U_name }),
    document.getElementById('root')
  );
  
};