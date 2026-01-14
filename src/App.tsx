import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import CalendarBooking from './components/CalendarBooking'
import CallToValue from './components/CallToValue'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-dark-500">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <CalendarBooking />
        <CallToValue />
      </main>
      <Footer />
    </div>
  )
}

export default App
