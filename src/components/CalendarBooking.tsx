import React, { useState } from 'react';

const CalendarBooking: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<number | null>(null);

    const currentMonth = 'August 2024';
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Generate calendar days (August 2024 starts on Thursday)
    const calendarDays: (number | null)[] = [
        null, null, null, null, 1, 2, 3,
        4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17,
        18, 19, 20, 21, 22, 23, 24,
        25, 26, 27, 28, 29, 30, 31
    ];

    return (
        <section className="relative py-20 bg-transparent overflow-hidden">
            {/* Background wave pattern */}
            <div className="absolute inset-0">
                <svg
                    className="absolute inset-0 w-full h-full opacity-20"
                    viewBox="0 0 1440 600"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="calendarWave" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0,200 C200,100 400,300 600,200 C800,100 1000,300 1200,200 C1400,100 1440,200 1440,200 L1440,600 L0,600 Z"
                        fill="url(#calendarWave)"
                    />
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Text Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                            Calendar/Schedule
                            <br />
                            Booking
                            <br />
                            <span className="text-purple-400">Intoamorpntion</span>
                        </h2>

                        <p className="text-gray-400 text-base mb-8 max-w-md leading-relaxed">
                            With sets eros asasess of pattern or blessing the
                            semper to omniconnor your Taetaoting assets anti
                            inteagrol time.
                        </p>

                        <button className="btn-primary inline-flex items-center space-x-2 group">
                            <span>Book Meeting</span>
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
                    <div className="card max-w-md mx-auto lg:ml-auto p-6">
                        {/* Calendar Header */}
                        <div className="flex items-center justify-between mb-6">
                            <button className="text-gray-400 hover:text-white transition-colors p-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <h3 className="text-white font-semibold text-lg">{currentMonth}</h3>
                            <button className="text-gray-400 hover:text-white transition-colors p-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Day Headers */}
                        <div className="grid grid-cols-7 gap-1 mb-2">
                            {days.map((day) => (
                                <div key={day} className="text-center text-gray-500 text-xs font-medium py-2">
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 gap-1">
                            {calendarDays.map((day, index) => (
                                <button
                                    key={index}
                                    disabled={day === null}
                                    onClick={() => day && setSelectedDate(day)}
                                    className={`
                    aspect-square flex items-center justify-center text-sm rounded-lg transition-all duration-200
                    ${day === null
                                            ? 'invisible'
                                            : selectedDate === day
                                                ? 'bg-purple-600 text-white font-semibold'
                                                : 'text-gray-300 hover:bg-purple-600/20 hover:text-purple-300'
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
        </section>
    );
};

export default CalendarBooking;
