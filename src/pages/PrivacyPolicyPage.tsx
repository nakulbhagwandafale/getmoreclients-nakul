import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/FooterSection';
import { useEffect } from 'react';

const PrivacyPolicyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-transparent relative font-sans text-gray-200">
            <Navbar />

            <article className="relative z-10 pt-32 pb-24">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-purple-300 hover:text-white mb-8 transition-colors text-sm font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                            <Shield className="w-7 h-7 text-white" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
                            <p className="text-gray-400 mt-1">Last updated: January 19, 2026</p>
                        </div>
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12"
                >
                    <div className="prose prose-lg prose-invert prose-purple max-w-none
                        prose-headings:font-bold prose-headings:text-white prose-headings:mt-10 prose-headings:mb-4
                        prose-h2:text-2xl prose-h2:border-b prose-h2:border-purple-500/20 prose-h2:pb-3
                        prose-p:text-gray-300 prose-p:leading-relaxed
                        prose-ul:text-gray-300 prose-li:text-gray-300
                        prose-strong:text-white">

                        <p className="text-xl text-gray-300 leading-relaxed">
                            At GetMoreClients, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                        </p>

                        <h2>Information We Collect</h2>
                        <p>We may collect information about you in a variety of ways:</p>
                        <ul>
                            <li><strong>Personal Data:</strong> Name, email address, phone number, and company information that you voluntarily provide when contacting us or using our services.</li>
                            <li><strong>Usage Data:</strong> Information about how you access and use our website, including IP address, browser type, pages visited, and time spent on pages.</li>
                            <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your browsing experience.</li>
                        </ul>

                        <h2>How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul>
                            <li>Provide, operate, and maintain our services</li>
                            <li>Improve, personalize, and expand our services</li>
                            <li>Communicate with you about updates, offers, and promotional materials</li>
                            <li>Process transactions and send related information</li>
                            <li>Respond to your comments, questions, and customer service requests</li>
                            <li>Analyze usage patterns to improve our website and services</li>
                        </ul>

                        <h2>Information Sharing</h2>
                        <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:</p>
                        <ul>
                            <li>To trusted third-party service providers who assist us in operating our website and services</li>
                            <li>When required by law or to protect our rights</li>
                            <li>In connection with a merger, acquisition, or sale of assets</li>
                        </ul>

                        <h2>Data Security</h2>
                        <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.</p>

                        <h2>Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access and receive a copy of your personal data</li>
                            <li>Request correction of inaccurate data</li>
                            <li>Request deletion of your personal data</li>
                            <li>Object to or restrict processing of your data</li>
                            <li>Withdraw consent at any time</li>
                        </ul>

                        <h2>Third-Party Links</h2>
                        <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.</p>

                        <h2>Changes to This Policy</h2>
                        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.</p>

                        <h2>Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                        <ul>
                            <li>Email: privacy@getmoreclients.in</li>
                            <li>Website: <Link to="/contact" className="text-purple-400 hover:text-purple-300">Contact Page</Link></li>
                        </ul>
                    </div>
                </motion.div>
            </article>

            <Footer />
        </div>
    );
};

export default PrivacyPolicyPage;
