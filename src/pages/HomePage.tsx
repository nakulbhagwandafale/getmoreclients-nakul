import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import AboutUs from '../components/AboutUs';
import CalendarBooking from '../components/CalendarBooking';
import CallToValue from '../components/CallToValue';
import Footer from '../components/FooterSection';


import Testimonials from '../components/Testimonials';

const HomePage = () => {
    return (
        <div className="min-h-screen relative">
            <Navbar />
            <main>
                <Hero />
                <Services />
                <Testimonials />
                <WhyChooseUs />
                <AboutUs />
                <CalendarBooking />
                <CallToValue />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
