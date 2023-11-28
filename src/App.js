import './App.css';
import Form from './Components/Form';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      {/* Set props value here */}
      <Navbar title="TextUtils" />
      <div className="container my-4">
        <Form heading="Enter the Text to analyze" />

      </div>

    </>
  );
}

export default App;
