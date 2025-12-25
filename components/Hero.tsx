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

        const fontSize = 14;      // glyph size
        const rowSpacing = 10;    // vertical density (smaller = more condensed)

        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = Math.floor(window.innerWidth * dpr);
            canvas.height = Math.floor(window.innerHeight * dpr);
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const randBit = () => (Math.random() > 0.5 ? '1' : '0');

        // draw helpers
        const drawBit = (x: number, row: number, topY: number) => {
            ctx.fillText(randBit(), x, topY + row * rowSpacing);
        };

        const drawSegments = (
            x: number,
            topY: number,
            segments: { start: number; count: number }[]
        ) => {
            segments.forEach((seg) => {
                for (let i = 0; i < seg.count; i++) {
                    drawBit(x, seg.start + i, topY);
                }
            });
        };

        const drawCapDots = (
            baseX: number,
            topY: number,
            rows: number[],
            offsets: number[]
        ) => {
            rows.forEach((r) => {
                offsets.forEach((off) => {
                    drawBit(baseX + off * fontSize, r, topY);
                });
            });
        };

        const draw = () => {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            ctx.fillStyle = '#d32f2f';
            ctx.font = `${fontSize}px monospace`;

            const startX = window.innerWidth * 0.40; // move shape left/right
            const columnSpacing = 90;

            const x1 = startX;
            const x2 = startX + columnSpacing;
            const x3 = startX + columnSpacing * 2;

            const topY = 220;

            const availableH = window.innerHeight - topY - 40;
            const totalRows = Math.max(60, Math.floor(availableH / rowSpacing));

            const midEnd = totalRows - 18;
            const bottomRingBase = totalRows - 14;
            const tailRow = totalRows - 4;

            // ---- Pillars ----
            const col1 = [
                { start: 0, count: 4 },
                { start: 6, count: 10 },
                { start: 18, count: 10 },
                { start: 30, count: 8 },
                { start: 40, count: Math.max(10, midEnd - 40) },
            ];

            const col2 = [
                { start: 0, count: 4 },
                { start: 6, count: 10 },
                { start: 18, count: 10 },
                { start: 30, count: 8 },
                { start: 40, count: Math.max(18, midEnd - 40) },
            ];

            const col3 = [
                { start: 0, count: 6 },
                { start: 8, count: 1 },
                { start: 10, count: 1 },
                { start: 12, count: 1 },
                { start: 14, count: 1 },
                { start: 16, count: Math.max(20, midEnd - 16) },
            ];

            // draw pillars
            drawSegments(x1, topY, col1);
            drawSegments(x2, topY, col2);
            drawSegments(x3, topY, col3);

            // ---- TOP RIGHT rounded cap ----
            drawCapDots(x3, topY, [0, 1, 2], [-2, -1, 1, 2]);
            drawCapDots(x3, topY, [3], [-2, 2]);
            drawCapDots(x3, topY, [4], [-1, 1]);

            // ---- BOTTOM LEFT small ring ----
            drawCapDots(x1, topY, [bottomRingBase, bottomRingBase + 1], [-2, 2]);
            drawCapDots(x1, topY, [bottomRingBase + 2], [-3, 3]);
            drawCapDots(x1, topY, [bottomRingBase + 3], [-2, 2]);
            drawCapDots(x1, topY, [bottomRingBase + 4], [-1, 1]);

            // ---- BOTTOM RIGHT big ring ----
            drawCapDots(x3, topY, [bottomRingBase - 2, bottomRingBase - 1], [-2, -1, 1, 2]);
            drawCapDots(x3, topY, [bottomRingBase], [-3, 3]);
            drawCapDots(x3, topY, [bottomRingBase + 1], [-2, 2]);
            drawCapDots(x3, topY, [bottomRingBase + 2], [-1, 1]);

            // ---- bottom tail ----
            for (let i = -6; i <= 6; i++) {
                drawBit(x3 + i * fontSize, tailRow, topY);
            }
            // small vertical continuation on right side of tail
            drawSegments(x3, topY, [{ start: tailRow + 2, count: 3 }]);
            drawSegments(x3 + 2 * fontSize, topY, [{ start: tailRow + 2, count: 3 }]);
        };

        const handleResize = () => {
            resizeCanvas();
            draw();
        };

        resizeCanvas();
        draw();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <section className="relative min-h-screen bg-white overflow-hidden" id="home">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-[2vw] min-w-8 bg-black" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[2vw] min-w-8 bg-black" />

            <div className="relative z-10 w-full px-[3vw] sm:px-10 lg:px-16 xl:px-20 pt-8 pb-6">
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

                <div className="mt-2 mb-24 relative w-full">
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

            <div className="relative z-10 container mx-auto px-8 pb-8 max-w-6xl">
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
