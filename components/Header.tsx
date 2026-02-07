'use client';

import { useEffect, useState } from 'react';

export default function Header() {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        setCurrentDate(now.toLocaleDateString('en-US', options).toUpperCase());
    }, []);

    return (
        <div className="relative z-10 pt-8 bg-white mx-8 overflow-hidden">
            <div className="flex justify-between items-baseline w-full">
                <div className="flex items-baseline gap-2">
                    <h1 className="text-5xl md:text-6xl font-italiana font-light tracking-tight px-4">
                        <span className="text-[#BF2929]">illumin</span>
                        <span className="text-[#BF2929]">AI</span>
                    </h1>
                    <div className="h-12 w-px bg-[#8B0000]/30"></div>
                    <p className="hidden md:block text-xl md:text-2xl text-[#BF2929] font-italiana tracking-wide">
                        AI, ETHICS <span className="text-[#BF2929]">&</span> SOCIETY
                    </p>
                </div>
                <p className="text-sm md:text-base text-black font-caudex uppercase px-8">{currentDate}</p>
            </div>

            <div className="mt-2 relative w-full">
                <div className="border-t-[3px] border-black absolute top-0 left-0 right-0"></div>
                <div className="border-t border-black absolute top-1 left-0 right-0"></div>
                <div className="py-3">
                    <p className="text-base md:text-lg text-black leading-relaxed font-light px-8">
                        We bring curious people exploring interdisciplinary challenges of the ethics and societal impacts of AI,
                        together.
                    </p>
                </div>
                <div className="border-b border-black absolute bottom-1 left-0 right-0"></div>
                <div className="border-b-[3px] border-black absolute bottom-0 left-0 right-0"></div>
            </div>
        </div>
    );
}
