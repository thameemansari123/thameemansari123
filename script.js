function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const { createStore, bindActionCreators } = Redux;
const { Provider, connect } = ReactRedux;

const initialState = [
{
  name: "NICE TO MEET YOU MAHADEV",
  id: uuid.v4() },

{
  name: "PLEASE ACCEPT MY ASSIGNMENT",
  id: uuid.v4() },

{
  name: "GIVE ME A CHANCE, I WILL DO BETTER",
  id: uuid.v4() }];



class App extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("section", { className: "section" }, /*#__PURE__*/
      React.createElement("h1", { className: "title" }, "Add Your Contacts"), /*#__PURE__*/
      React.createElement(AddContact, { addContact: this.props.addContact }), /*#__PURE__*/
      React.createElement(Contacts, {
        contacts: this.props.contacts })));



  }}


const Contacts = props => {
  return /*#__PURE__*/(
    React.createElement("ul", null,
    props.contacts.map((contact, id) => /*#__PURE__*/
    React.createElement("div", { key: id, className: "box" }, /*#__PURE__*/
    React.createElement("p", null, contact.name)))));




};

class AddContact extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleSubmit",



    event => {
      event.preventDefault();
      this.props.addContact(this.textInput.current.value);
    });this.textInput = React.createRef();}
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "box" }, /*#__PURE__*/

      React.createElement("form", { onSubmit: this.handleSubmit }, /*#__PURE__*/
      React.createElement("div", { className: "field" }, /*#__PURE__*/
      React.createElement("label", { className: "label" }, "Name "), /*#__PURE__*/
      React.createElement("div", { className: "control" }, /*#__PURE__*/
      React.createElement("input", {
        className: "input",
        type: "text",
        ref: this.textInput,
        placeholder: "MR.MAHADEV" }))), /*#__PURE__*/



      React.createElement("button", { type: "submit", className: "button" }, "Add contact"))));






  }}


const actions = {
  addContact: name => {
    return {
      type: "ADD_CONTACT",
      id: uuid.v4(),
      name };

  } };


const reducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      const { name } = action;
      return [{ name }, ...state];
    default:
      return state;}

};


const AppContainer = connect(
function mapStateToProps(state) {
  return {
    contacts: state };

},
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
})(
App);

const store = createStore(reducer, initialState);

ReactDOM.render( /*#__PURE__*/
React.createElement(Provider, { store: store }, /*#__PURE__*/
React.createElement(AppContainer, null)),

document.getElementById("root"));