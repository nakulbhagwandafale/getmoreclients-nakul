import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import AboutUs from '../components/AboutUs';
import CalendarBooking from '../components/CalendarBooking';
import CallToValue from '../components/CallToValue';
import Footer from '../components/FooterSection';
import StarField from '../components/ui/StarField';

import Testimonials from '../components/Testimonials';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0a0118] via-[#1a0b2e] to-[#11052C] relative">
            <StarField />
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
