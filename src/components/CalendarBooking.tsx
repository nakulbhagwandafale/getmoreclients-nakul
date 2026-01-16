import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    format,
    addMonths,
    subMonths,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    isSameMonth,
    isSameDay,
    addDays,
    isToday,
    isBefore,
    startOfToday
} from 'date-fns';
import { IconX, IconChevronLeft, IconChevronRight, IconClock, IconCalendar, IconCheck } from '@tabler/icons-react';
import { GradientBorderCard } from './ui/gradient-border-card';

const BookingModal = ({ onClose }: { onClose: () => void }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [step, setStep] = useState<'date' | 'time' | 'success'>('date');

    const today = startOfToday();

    const renderHeader = () => {
        return (
            <div className="flex items-center justify-between mb-8 px-4">
                <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))} className="p-2 rounded-full hover:bg-white/10 transition-colors">
                    <IconChevronLeft className="w-6 h-6 text-white" />
                </button>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                    {format(currentMonth, 'MMMM yyyy')}
                </h2>
                <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))} className="p-2 rounded-full hover:bg-white/10 transition-colors">
                    <IconChevronRight className="w-6 h-6 text-white" />
                </button>
            </div>
        );
    };

    const renderDays = () => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return (
            <div className="grid grid-cols-7 mb-4">
                {days.map((day) => (
                    <div key={day} className="text-center text-gray-400 font-medium text-sm py-2">
                        {day}
                    </div>
                ))}
            </div>
        );
    };

    const renderCells = () => {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const dateFormat = 'd';
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = '';

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, dateFormat);
                const cloneDay = day;
                const isDisabled = isBefore(day, today);
                const isSelected = selectedDate ? isSameDay(day, selectedDate) : false;

                days.push(
                    <div
                        key={day.toString()}
                        className={`p-1 relative aspect-square`}
                    >
                        {!isDisabled ? (
                            <button
                                onClick={() => {
                                    setSelectedDate(cloneDay);
                                    setStep('time');
                                }}
                                className={`
                w-full h-full flex items-center justify-center rounded-xl transition-all duration-200 relative z-10
                ${!isSameMonth(day, monthStart) ? 'text-gray-600' :
                                        isSelected ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/40 scale-105 font-bold' :
                                            isToday(day) ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50' :
                                                'text-gray-300 hover:bg-white/10 hover:text-white'}
              `}
                            >
                                {formattedDate}
                                {isToday(day) && !isSelected && <div className="absolute bottom-1.5 w-1 h-1 bg-purple-400 rounded-full" />}
                            </button>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-700 cursor-not-allowed">
                                {formattedDate}
                            </div>
                        )}
                    </div>
                );
                day = addDays(day, 1);
            }
            rows.push(
                <div className="grid grid-cols-7 gap-1" key={day.toString()}>
                    {days}
                </div>
            );
            days = [];
        }
        return <div className="space-y-1">{rows}</div>;
    };

    const timeSlots = [
        "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
        "11:00 AM", "11:30 AM", "12:00 PM", "01:00 PM",
        "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
        "04:00 PM", "04:30 PM", "05:00 PM"
    ];

    return createPortal(
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Backdrop */}
            <div
                onClick={onClose}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative bg-[#0F0422] border border-white/10 rounded-3xl w-full max-w-5xl h-[85vh] md:h-[700px] overflow-hidden shadow-2xl flex flex-col md:flex-row z-10"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-2 text-gray-400 hover:text-white bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                >
                    <IconX className="w-5 h-5" />
                </button>

                {/* Left Panel: Info & Selection Summary */}
                <div className="w-full md:w-1/3 bg-gradient-to-br from-purple-900/40 to-black p-8 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                            Live Scheduling
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">Book Your Strategy Session</h2>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            Select a date and time that works best for you. We'll lock it in and send you a calendar invite instantly.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className={`p-4 rounded-xl border transition-all duration-300 ${selectedDate ? 'bg-purple-600/20 border-purple-500/50' : 'bg-white/5 border-white/10'}`}>
                            <div className="flex items-center gap-3 mb-1">
                                <IconCalendar className={`w-5 h-5 ${selectedDate ? 'text-purple-300' : 'text-gray-500'}`} />
                                <span className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Date</span>
                            </div>
                            <div className={`text-lg font-medium ${selectedDate ? 'text-white' : 'text-gray-600'}`}>
                                {selectedDate ? format(selectedDate, 'EEEE, MMMM d, yyyy') : 'Select a date'}
                            </div>
                        </div>

                        <div className={`p-4 rounded-xl border transition-all duration-300 ${selectedTime ? 'bg-purple-600/20 border-purple-500/50' : 'bg-white/5 border-white/10'}`}>
                            <div className="flex items-center gap-3 mb-1">
                                <IconClock className={`w-5 h-5 ${selectedTime ? 'text-purple-300' : 'text-gray-500'}`} />
                                <span className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Time</span>
                            </div>
                            <div className={`text-lg font-medium ${selectedTime ? 'text-white' : 'text-gray-600'}`}>
                                {selectedTime || 'Select a time'}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Panel: Picker Steps */}
                <div className="flex-1 p-6 md:p-10 overflow-y-auto custom-scrollbar relative">
                    {/* Background decorations */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

                    <AnimatePresence mode="wait">
                        {step === 'date' && (
                            <motion.div
                                key="step-date"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                            >
                                {renderHeader()}
                                {renderDays()}
                                {renderCells()}
                            </motion.div>
                        )}

                        {step === 'time' && (
                            <motion.div
                                key="step-time"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                                className="h-full flex flex-col"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <button onClick={() => setStep('date')} className="text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                                        <IconChevronLeft className="w-5 h-5" /> Back
                                    </button>
                                    <h3 className="text-2xl font-bold text-white">Select Time</h3>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {timeSlots.map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => {
                                                setSelectedTime(time);
                                                setStep('success');
                                            }}
                                            className="py-4 px-4 rounded-xl text-center bg-white/5 border border-white/10 text-gray-300 hover:bg-purple-600 hover:border-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-200"
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 'success' && (
                            <motion.div
                                key="step-success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                className="h-full flex flex-col items-center justify-center text-center p-8"
                            >
                                <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                                    <IconCheck className="w-12 h-12 text-green-400" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">Booking Confirmed!</h3>
                                <p className="text-gray-400 max-w-md mx-auto mb-8">
                                    You are scheduled for <strong className="text-white">{selectedTime}</strong> on <strong className="text-white">{selectedDate ? format(selectedDate, 'MMMM d, yyyy') : ''}</strong>. A calendar invitation has been sent to your email.
                                </p>
                                <button
                                    onClick={onClose}
                                    className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors"
                                >
                                    Done
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </motion.div>,
        document.body
    );
};

const CalendarBooking: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Placeholder data for the preview calendar
    const currentMonth = 'August 2024';
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const calendarDays = [null, null, null, null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    return (
        <>
            <section className="relative py-24 bg-transparent overflow-hidden wave-bg" id="booking">
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

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="btn-primary inline-flex items-center space-x-2 group text-lg px-8 py-4 cursor-pointer"
                            >
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

                        {/* Right Side - Calendar Preview (Clickable) */}
                        <div className="relative group cursor-pointer" onClick={() => setIsModalOpen(true)}>
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-full transform scale-90 group-hover:bg-purple-600/30 transition-all duration-500"></div>

                            <GradientBorderCard className="p-8">
                                {/* Calendar Header */}
                                <div className="flex items-center justify-between mb-8 pointer-events-none">
                                    <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400">
                                        <IconChevronLeft className="w-5 h-5" />
                                    </button>
                                    <h3 className="text-white font-semibold text-xl tracking-wide">{currentMonth}</h3>
                                    <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400">
                                        <IconChevronRight className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Day Headers */}
                                <div className="grid grid-cols-7 gap-2 mb-4 pointer-events-none">
                                    {days.map((day) => (
                                        <div key={day} className="text-center text-gray-500 text-xs font-semibold uppercase tracking-wider py-2">
                                            {day}
                                        </div>
                                    ))}
                                </div>

                                {/* Calendar Grid */}
                                <div className="grid grid-cols-7 gap-2 pointer-events-none">
                                    {calendarDays.map((day, index) => (
                                        <div
                                            key={index}
                                            className={`
                                                aspect-square flex items-center justify-center text-sm rounded-xl
                                                ${day === null
                                                    ? 'invisible'
                                                    : day === 15
                                                        ? 'bg-purple-600 text-white font-bold shadow-lg shadow-purple-500/30 scale-105'
                                                        : 'text-gray-300 bg-white/5'
                                                }
                                            `}
                                        >
                                            {day}
                                        </div>
                                    ))}
                                </div>

                                {/* Overlay Hint */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 rounded-[23px] backdrop-blur-[2px]">
                                    <span className="px-6 py-3 bg-purple-600 text-white font-bold rounded-full shadow-lg transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        Click to Schedule
                                    </span>
                                </div>
                            </GradientBorderCard>
                        </div>
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {isModalOpen && <BookingModal onClose={() => setIsModalOpen(false)} />}
            </AnimatePresence>
        </>
    );
};

export default CalendarBooking;
