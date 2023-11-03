import './App.css'
import Navbar from './components/Navbar.jsx'
// import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import data from './data'

const cards = data.map((item, i) => {
  return (
    <div key={item.id}>
      <Card item={item} />
      {i<data.length-1 && <hr className='cards--hr'/>} 
    </div>
  )
});

function App() {
  return (
    <div>
      <Navbar />
      <section className='cards--list'>
        {cards}
     </section>
    </div>
  )
}

export default App
