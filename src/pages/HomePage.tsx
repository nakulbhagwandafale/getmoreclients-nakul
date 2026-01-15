import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import CalendarBooking from '../components/CalendarBooking';
import CallToValue from '../components/CallToValue';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0a0118] via-[#1a0b2e] to-[#11052C]">
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
    );
};

export default HomePage;
