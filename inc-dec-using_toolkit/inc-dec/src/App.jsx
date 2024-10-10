import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./Components/Heading";
import Counter from "./Components/Counter";
import Buttons from "./Components/Buttons";
import Container from "./Components/Container";
import { useSelector } from "react-redux";
import Message from "./Components/message";
function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <div className="px-4 py-5 my-5 text-center">
      <div className="col-lg-6 mx-auto">
        <Container>
          <Heading></Heading>
          {privacy ? <Message /> : <Counter />}
          <Buttons></Buttons>
        </Container>
      </div>
    </div>
  );
}

export default App;
