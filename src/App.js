import './App.css';
import ServiceCard from './components/Services/ServiceCard';
import data from "./data.json"

function App() {
  return (
    <>
      <div className='h-full d-flex all-center large'>Scroll ⬇️</div>
      <div className="services grid">
        <h1 className="pb-5">Let's Collaborate</h1>
        {data.map((elem, index) => (
          <ServiceCard key={elem + index} {...elem} />
        ))}
      </div>
    </>
  );
}

export default App;
