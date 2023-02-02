
import Navbar from './Navbar';
import Homepage from './Home';
function App() {
  // const Head="We are Blue!";
  // const Like=50;
  // const link="https://google.com";
  return (
    <div className="App">
      <Navbar/>

     <div className='content'>
      <Homepage/>
      {/* <h1>{Head}</h1>
      <p>Likes {Like}</p>
      <a href={link}>Site</a> */}
     </div>
    </div>
  );
}

export default App;
