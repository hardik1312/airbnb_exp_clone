import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

function App(){
  const clone_elements = data.map(element=>{
    return <Card
            key={element.id} 
            {...element}
            />
  })
  return(
    <div>
    <Navbar />
    <Hero />
    <section className="cards-list">
    {clone_elements}
    </section>
    </div>
  )
}

export default App;