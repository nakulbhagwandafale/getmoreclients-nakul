import type { ServiceDetail } from "../../data/services";
import { ShieldCheck, TrendingUp, Users } from 'lucide-react';

interface TrustSectionProps {
    service: ServiceDetail;
}

export default function TrustSection({ service }: TrustSectionProps) {
    return (
        <section className="py-20 bg-[#05010d] border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

                    {/* Stat 1 */}
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm">
                        <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{service.trustMetric}</h3>
                        <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">{service.trustLabel}</p>
                    </div>

                    {/* Stat 2 */}
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm">
                        <ShieldCheck className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">100%</h3>
                        <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">Data Privacy Compliant</p>
                    </div>

                    {/* Stat 3 */}
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm">
                        <Users className="w-8 h-8 text-pink-400 mx-auto mb-4" />
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">500+</h3>
                        <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">Active Deployments</p>
                    </div>

                </div>
            </div>
        </section>
    );
}
