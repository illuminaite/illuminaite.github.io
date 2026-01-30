'use client';

import { useEffect, useRef, useState } from 'react';

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [currentDate, setCurrentDate] = useState('');
    const miniArticles = [
        {
            title: 'TITLE',
            intro: 'Brief intro to the article',
            author: '[AUTHOR NAME]',
            image:
                'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'TITLE',
            intro: 'Brief intro to the article',
            author: '[AUTHOR NAME]',
            image:
                'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'TITLE',
            intro: 'Brief intro to the article',
            author: '[AUTHOR NAME]',
            image:
                'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
        },
    ];

    useEffect(() => {
        // date
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        setCurrentDate(now.toLocaleDateString('en-US', options).toUpperCase());

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Binary pattern matching the image - three columns
        const leftColumn = [
            '   1001',
            ' 01000001',
            '10101101001010100101011010011',
            ' 10100011',
            '  001110',
            '   0011',
            '   0011',
            '   1001',
            '   1011',
            '   0101',
            '   1010',
            '   1001',
            '   0000',
            '   0000',
            '   1011',
            '   1011',
            '   0111',
            '   0101',
            '   1100',
            '   1111',
            '   0010',
            '   0000',
            '   0000',
            '   1011',
            '   1011',
            '   0111',
            '   1101',
            '   0110',
            '   1111',
            '  001001',
            ' 0      1',
            '0        0',
            ' 0      0',
            '  101001'
        ];

        const middleColumn = [
            '   1000',
            ' 01000001',
            '',
            ' 01000010',
            '  101010',
            '   0101',
            '   0001',
            '   0101',
            '   1011',
            '   0110',
            '   0001',
            '   0010',
            '   0010',
            '   0111',
            '   1011',
            '   1011',
            '   0111',
            '   0101',
            '   1100',
            '   1101',
            '   0111',
            '   1001',
            '   1010',
            '   1111',
            '   0110',
            '   1011',
            '   1110',
            '   1111',
            '   0110',
            '  001001',
            ' 01000010',
            '01010100101010100010101010000',
            ' 01000110',
            '   1101'
        ];

        const rightColumn = [
            '  010101',
            ' 1      1',
            '0        0',
            ' 0      1',
            '  001110',
            '   0111',
            '   0101',
            '   0001',
            '   0001',
            '   0000',
            '   0000',
            '   1011',
            '   1011',
            '   0111',
            '   0010',
            '   0001',
            '   0101',
            '   0010',
            '   0110',
            '   0111',
            '   0011',
            '   1101',
            '   1001',
            '   1010',
            '   1111',
            '   0010',
            '   1111',
            '   1110',
            '   1011',
            '  001001',
            ' 10100000',
            '',
            ' 10100000',
            '   0110'
        ];

        const fontSize = 16;
        const lineHeight = 16;
        let animationCounter = 0;
        let animationFrame: number;

        // Find the maximum length across all columns for animation
        const maxLength = Math.max(
            ...leftColumn.map(s => s.length),
            ...middleColumn.map(s => s.length),
            ...rightColumn.map(s => s.length)
        );

        const staggerDelay = 2; // Number of animation steps to delay each row

        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            const topY = 200;
            const minHeight = topY + (leftColumn.length * lineHeight) + 50; // Add 50px buffer
            const canvasHeight = Math.max(window.innerHeight, minHeight);
            
            canvas.width = Math.floor(window.innerWidth * dpr);
            canvas.height = Math.floor(canvasHeight * dpr);
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${canvasHeight}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const draw = () => {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            ctx.fillStyle = '#bf2929';
            ctx.font = `bold ${fontSize}px "Courier Prime", monospace`;

            const startX = window.innerWidth * 0.55;
            const columnSpacing = 180;
            const topY = 200;

            // Draw all lines with staggered animation
            for (let i = 0; i < leftColumn.length; i++) {
                const y = topY + i * lineHeight;
                // Calculate how many characters to show for this row based on stagger
                const charsToShow = Math.max(0, animationCounter - (i * staggerDelay));
                
                if (leftColumn[i] && charsToShow > 0) {
                    ctx.fillText(leftColumn[i].substring(0, charsToShow), startX, y);
                }
                if (middleColumn[i] && charsToShow > 0) {
                    ctx.fillText(middleColumn[i].substring(0, charsToShow), startX + columnSpacing, y);
                }
                if (rightColumn[i] && charsToShow > 0) {
                    ctx.fillText(rightColumn[i].substring(0, charsToShow), startX + columnSpacing * 2, y);
                }
            }

            // Continue animation until all rows are fully typed
            const totalAnimationSteps = maxLength + (leftColumn.length * staggerDelay);
            if (animationCounter < totalAnimationSteps) {
                animationCounter++;
                animationFrame = requestAnimationFrame(() => {
                    setTimeout(draw, 20);
                });
            }
        };

        const handleResize = () => {
            resizeCanvas();
            // Redraw current state without resetting animation
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            ctx.fillStyle = '#bf2929';
            ctx.font = `bold ${fontSize}px "Courier Prime", monospace`;

            const startX = window.innerWidth * 0.55;
            const columnSpacing = 180;
            const topY = 200;

            for (let i = 0; i < leftColumn.length; i++) {
                const y = topY + i * lineHeight;
                const charsToShow = Math.max(0, animationCounter - (i * staggerDelay));
                
                if (leftColumn[i] && charsToShow > 0) {
                    ctx.fillText(leftColumn[i].substring(0, charsToShow), startX, y);
                }
                if (middleColumn[i] && charsToShow > 0) {
                    ctx.fillText(middleColumn[i].substring(0, charsToShow), startX + columnSpacing, y);
                }
                if (rightColumn[i] && charsToShow > 0) {
                    ctx.fillText(rightColumn[i].substring(0, charsToShow), startX + columnSpacing * 2, y);
                }
            }
        };

        resizeCanvas();
        draw();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, []);
    return (
        <section className="relative min-h-screen bg-white overflow-hidden" id="home">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-[2vw] min-w-8 bg-black" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[2vw] min-w-8 bg-black" />

            <div className="relative z-10 w-full px-[3vw] sm:px-10 lg:px-16 xl:px-20 pt-8">
                <div className="flex justify-between items-baseline w-full">
                    <div className="flex items-baseline gap-2">
                        <h1 className="text-5xl md:text-6xl font-italiana font-light tracking-tight">
                            <span className="text-[#BF2929]">illumin</span>
                            <span className="text-[#BF2929]">AI</span>
                        </h1>
                        <div className="h-12 w-px bg-[#8B0000]/30"></div>
                        <p className="text-xl md:text-2xl text-[#BF2929] font-italiana tracking-wide">
                            AI, ETHICS <span className="text-[#BF2929]">&</span> SOCIETY
                        </p>
                    </div>
                    <p className="text-sm md:text-base text-black font-caudex uppercase">{currentDate}</p>
                </div>

                <div className="mt-2 relative w-full">
                    <div className="border-t-[3px] border-black absolute top-0 left-0 right-0"></div>
                    <div className="border-t border-black absolute top-1 left-0 right-0"></div>
                    <div className="py-3">
                        <p className="text-base md:text-lg text-black leading-relaxed font-light">
                            We bring curious people exploring interdisciplinary challenges of the ethics and societal impacts of AI,
                            together.
                        </p>
                    </div>
                    <div className="border-b border-black absolute bottom-1 left-0 right-0"></div>
                    <div className="border-b-[3px] border-black absolute bottom-0 left-0 right-0"></div>
                </div>
            </div>

            <div className="relative z-10 container mx-auto px-8 m-24 max-w-6xl h-[450px]">
                <div className="max-w-2xl ml-24 flex flex-col justify-center min-h-[50vh] space-y-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl text-black font-italiana tracking-wide inline-block border-b border-black/30 pb-2">
                            RESEARCH <span className="text-black">&</span> WRITING
                        </h2>
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl text-black font-italiana tracking-wide inline-block border-b border-black/30 pb-2">
                            VIDEOS <span className="text-black">&</span> INTERVIEWS
                        </h2>
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl text-black font-italiana tracking-wide inline-block border-b border-black/30 pb-2">
                            AI ETHICS CONFERENCE
                        </h2>
                    </div>
                </div>
            </div>

            <div className="relative z-10 w-full px-[3vw] sm:px-10 lg:px-16 xl:px-20 pb-12">
                <div className="relative mt-10 w-full">
                    <div className="border-t-[3px] border-black absolute top-0 left-0 right-0"></div>
                    <div className="border-t border-black absolute top-1 left-0 right-0"></div>
                    <div className="py-3">
                        <p className="text-base md:text-lg text-black leading-relaxed font-light">
                            engineering - computer science - philosophy - business - political science - mathematics - criminology
                        </p>
                    </div>
                    <div className="border-b border-black absolute bottom-1 left-0 right-0"></div>
                    <div className="border-b-[3px] border-black absolute bottom-0 left-0 right-0"></div>
                </div>
            </div>

            <div className="relative z-10 w-full px-[3vw] sm:px-10 lg:px-16 xl:px-20 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-7">
                        <div className="border border-black/40 bg-white/90 shadow-[0_12px_25px_rgba(0,0,0,0.12)] rounded-sm overflow-hidden flex flex-col max-h-[420px]">
                            <div className="w-full bg-neutral-100 aspect-[16/9] max-h-[320px]">
                                <div
                                    className="h-full w-full bg-cover bg-center"
                                    style={{
                                        backgroundImage:
                                            "url('https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80')",
                                    }}
                                />
                            </div>
                            <div className="p-4 sm:p-4">
                                <h3 className="text-2xl sm:text-3xl font-caudex text-black leading-tight">TITLE</h3>
                                <p className="text-base sm:text-lg text-black mt-1">Brief intro to the article</p>
                                <p className="text-sm text-black mt-2">by [AUTHOR NAME]</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="border border-black/40 bg-white/95 shadow-[0_10px_20px_rgba(0,0,0,0.1)] rounded-sm p-4 sm:p-5 flex flex-col gap-5">
                            {miniArticles.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between gap-4 border border-black/20 rounded-sm px-3 py-3 bg-white"
                                >
                                    <div className="flex-1">
                                        <h4 className="text-base font-semibold text-black leading-tight">{item.title}</h4>
                                        <p className="text-sm text-black mt-1 leading-snug">{item.intro}</p>
                                        <p className="text-xs text-black mt-3">by {item.author}</p>
                                    </div>
                                    <div
                                        className="h-20 w-24 sm:w-28 shrink-0 rounded-[6px] overflow-hidden border border-black/20 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${item.image})` }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
