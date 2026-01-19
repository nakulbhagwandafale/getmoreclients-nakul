import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/FooterSection';
import HeroSection from '@/components/service-detail/HeroSection';
import PerformanceSection from '@/components/service-detail/PerformanceSection';
import WorkflowSection from '@/components/service-detail/WorkflowSection';
import ProcessExecutionSection from '@/components/service-detail/ProcessExecutionSection';
import ComparisonSection from '@/components/service-detail/ComparisonSection';
import TrustSection from '@/components/service-detail/TrustSection';
import ShowcaseSection from '@/components/service-detail/ShowcaseSection';
import { getServiceById } from '@/data/services';

const ServiceDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    // Retrieve service data
    const service = getServiceById(id || '');

    // Handle 404
    useEffect(() => {
        if (!service) {
            navigate('/services', { replace: true });
        }
    }, [service, navigate]);

    // Scroll to top on mount/id change to ensure we land on the Hero Section
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) return null; // Or a loading spinner

    return (
        <div className="min-h-screen bg-transparent relative font-sans text-white">
            {/* StarField handled globally */}
            <Navbar />

            <HeroSection service={service} />
            <PerformanceSection service={service} />
            <WorkflowSection service={service} />
            <ProcessExecutionSection service={service} />
            <ComparisonSection service={service} />
            <TrustSection service={service} />
            <ShowcaseSection service={service} />


            <Footer />
        </div>
    );
};

export default ServiceDetailPage;
