import FuncComp from "./Component/FuncComp";
//  import FuncCompTimer from "./Component/funcCompTimer" ;
function Message() {
  return <p>This is second Functional component </p>;
}
function MessageProps({ myprops }) {
  return <p> {myprops} </p>;
}
function App() {
  return (
    <div>
      <h4>Hello everyone</h4>
      <h4>Inside first component</h4>
      <hr />
      <Message />
      <hr />
      <MessageProps myprops={"This is 3rd component using props"} />
      <hr />
      <FuncComp />
    </div>
  );
}

export default App;
