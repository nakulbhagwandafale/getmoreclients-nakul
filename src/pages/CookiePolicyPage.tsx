import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/FooterSection';
import { useEffect } from 'react';

const CookiePolicyPage = () => {
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
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center">
                            <Cookie className="w-7 h-7 text-white" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white">Cookie Policy</h1>
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
                        prose-h3:text-xl prose-h3:text-purple-200
                        prose-p:text-gray-300 prose-p:leading-relaxed
                        prose-ul:text-gray-300 prose-li:text-gray-300
                        prose-strong:text-white">

                        <p className="text-xl text-gray-300 leading-relaxed">
                            This Cookie Policy explains how GetMoreClients uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are, why we use them, and your rights to control our use of them.
                        </p>

                        <h2>What Are Cookies?</h2>
                        <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site. Cookies allow us to recognize your browser and remember certain information about your visit.</p>

                        <h2>Types of Cookies We Use</h2>

                        <h3>Essential Cookies</h3>
                        <p>These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You may disable these by changing your browser settings, but this may affect how the website functions.</p>

                        <h3>Analytics Cookies</h3>
                        <p>We use analytics cookies to understand how visitors interact with our website. This helps us improve our website's performance and user experience. Information collected includes:</p>
                        <ul>
                            <li>Pages visited and time spent on each page</li>
                            <li>How you arrived at our site</li>
                            <li>What you click on while visiting</li>
                            <li>Geographic location (country level)</li>
                        </ul>

                        <h3>Functional Cookies</h3>
                        <p>These cookies enable enhanced functionality and personalization, such as remembering your preferences, language settings, and login information. If you do not allow these cookies, some or all of these services may not function properly.</p>

                        <h3>Marketing Cookies</h3>
                        <p>Marketing cookies are used to track visitors across websites to display relevant advertisements. They help us measure the effectiveness of our advertising campaigns and limit the number of times you see an ad.</p>

                        <h2>Third-Party Cookies</h2>
                        <p>Some cookies are placed by third-party services that appear on our pages. We use the following third-party services:</p>
                        <ul>
                            <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
                            <li><strong>Google Ads:</strong> For advertising and remarketing</li>
                            <li><strong>Facebook Pixel:</strong> For social media advertising</li>
                            <li><strong>LinkedIn Insight Tag:</strong> For B2B marketing analytics</li>
                        </ul>

                        <h2>How to Control Cookies</h2>
                        <p>You have the right to decide whether to accept or reject cookies. You can control cookies through:</p>
                        <ul>
                            <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies through their settings menu</li>
                            <li><strong>Cookie Preferences:</strong> You can adjust your cookie preferences when prompted on our website</li>
                            <li><strong>Opt-Out Links:</strong> Many advertising networks offer opt-out mechanisms</li>
                        </ul>

                        <h2>Cookie Duration</h2>
                        <p>Cookies can be either session cookies or persistent cookies:</p>
                        <ul>
                            <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                            <li><strong>Persistent Cookies:</strong> Remain on your device for a set period (typically 30 days to 2 years)</li>
                        </ul>

                        <h2>Impact of Disabling Cookies</h2>
                        <p>If you choose to disable cookies, you may still use our website, but some features may not function properly. Disabling cookies may affect:</p>
                        <ul>
                            <li>Remembering your preferences</li>
                            <li>Personalized content and recommendations</li>
                            <li>Login functionality</li>
                            <li>Some interactive features</li>
                        </ul>

                        <h2>Updates to This Policy</h2>
                        <p>We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. Any changes will be posted on this page with an updated revision date.</p>

                        <h2>Contact Us</h2>
                        <p>If you have any questions about our use of cookies, please contact us:</p>
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

export default CookiePolicyPage;
