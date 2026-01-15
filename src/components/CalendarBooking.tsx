import React, { useState } from 'react';

const CalendarBooking: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<number | null>(null);

    const currentMonth = 'August 2024';
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Generate calendar days
    const calendarDays: (number | null)[] = [
        null, null, null, null, 1, 2, 3,
        4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17,
        18, 19, 20, 21, 22, 23, 24,
        25, 26, 27, 28, 29, 30, 31
    ];

    return (
        <section className="relative py-24 bg-transparent overflow-hidden wave-bg">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Text Content */}
                    <div className="relative z-10">
                        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium">
                            Book a Call
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Schedule Your
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                                Strategy Session
                            </span>
                        </h2>

                        <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
                            Ready to transform your business? Pick a time that works for you, and let's discuss how we can help you achieve your goals.
                        </p>

                        <button className="btn-primary inline-flex items-center space-x-2 group text-lg px-8 py-4">
                            <span>Book Consultation</span>
                            <svg
                                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>

                    {/* Right Side - Calendar */}
                    <div className="relative">
                        {/* Glow effect behind calendar */}
                        <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-full transform scale-90"></div>

                        <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
                            {/* Calendar Header */}
                            <div className="flex items-center justify-between mb-8">
                                <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <h3 className="text-white font-semibold text-xl tracking-wide">{currentMonth}</h3>
                                <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Day Headers */}
                            <div className="grid grid-cols-7 gap-2 mb-4">
                                {days.map((day) => (
                                    <div key={day} className="text-center text-gray-500 text-xs font-semibold uppercase tracking-wider py-2">
                                        {day}
                                    </div>
                                ))}
                            </div>

                            {/* Calendar Grid */}
                            <div className="grid grid-cols-7 gap-2">
                                {calendarDays.map((day, index) => (
                                    <button
                                        key={index}
                                        disabled={day === null}
                                        onClick={() => day && setSelectedDate(day)}
                                        className={`
                                            aspect-square flex items-center justify-center text-sm rounded-xl transition-all duration-200
                                            ${day === null
                                                ? 'invisible'
                                                : selectedDate === day
                                                    ? 'bg-purple-600 text-white font-bold shadow-lg shadow-purple-500/30 scale-105'
                                                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                                            }
                                        `}
                                    >
                                        {day}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CalendarBooking;
