import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import AboutUs from '../components/AboutUs';
import CalendarBooking from '../components/CalendarBooking';
import Footer from '../components/FooterSection';
import HowItWorks from '../components/HowItWorks';


import Testimonials from '../components/Testimonials';

const HomePage = () => {
    return (
        <div className="min-h-screen relative">
            <Navbar />
            <main>
                <Hero />
                <Services />
                <HowItWorks />
                <Testimonials />
                <WhyChooseUs />
                <AboutUs />
                <CalendarBooking />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
