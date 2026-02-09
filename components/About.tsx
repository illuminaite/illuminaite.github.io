import Image from 'next/image'

export default function About() {
    return (
        <section id="about" className="bg-white mx-8">
            <div className="mx-auto max-w-6xl px-6 py-20 space-y-20">

                {/* ================= MISSION / CULTURE (BORDERED) ================= */}
                <div className="border-2 border-black p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                        {/* OUR MISSION */}
                        <div>
                            <h2 className="text-center text-3xl md:text-4xl font-italiana tracking-wide mb-6">
                                OUR MISSION
                            </h2>

                            <div className="border border-black p-4 space-y-4">
                                <div className="border border-black p-3">
                                    <p className="text-[#BF2929] font-caudex text-lg leading-relaxed">
                                        to find all the intersections of artificial intelligence (AI) ethics with any discipline out there.
                                    </p>
                                </div>

                                <div className="border border-black p-3">
                                    <p className="font-caudex text-sm leading-relaxed whitespace-pre-line">
                                        {`we believe everyone, no matter what major, should have the liberty to use these powerful technologies efficiently and ethically.

it does not matter whether you study computer science in school or not: we are lowering the barriers of entry.

through hosting accessible, hybrid events and growing a deeply connected online community, we are reaching thousands of people worldwide in all disciplines.

we are currently based in Toronto, Canada — come join us at the University of Toronto or online.`}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* OUR CULTURE */}
                        <div>
                            <h2 className="text-center text-3xl md:text-4xl font-italiana tracking-wide mb-6">
                                OUR CULTURE
                            </h2>

                            <div className="border border-black p-4 space-y-4">
                                <div className="border border-black p-3">
                                    <p className="text-[#BF2929] font-caudex text-lg leading-relaxed">
                                        collaborative, connected, laid back, rewarding, &amp; human
                                    </p>
                                </div>

                                <div className="border border-black p-3">
                                    <p className="font-caudex text-sm leading-relaxed whitespace-pre-line">
                                        {`anyone is welcome to join us and become a "lumen". as a team, our primary mission is to have fun in the process.

whether you are a dedicated team member, workshop attendee, hackathon participant, invited guest speaker, or magazine reader — you contribute invaluably to our community.`}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ================= OUR IMPACT ================= */}
                <div className="hidden md:block">
                    {/* title outside border */}
                    <h2 className="text-center text-4xl font-italiana tracking-wide mb-6">
                        OUR IMPACT
                    </h2>

                    {/* bordered content */}
                    <div className="border-2 border-black px-6 py-10 md:px-10 md:py-12">
                        <div className="relative mx-auto max-w-4xl min-h-[560px]">

                            {/* TOP */}
                            <div className="absolute left-1/2 top-0 -translate-x-1/2 text-center">
                                <div className="text-6xl md:text-7xl font-inter leading-none">1000+</div>
                                <div className="mt-2 text-xs tracking-wide">participants</div>
                            </div>

                            {/* LEFT TOP */}
                            <div className="absolute left-0 top-[40%] -translate-y-1/2 text-center">
                                <div className="text-6xl md:text-7xl font-inter leading-none">5</div>
                                <div className="mt-2 text-xs tracking-wide">years since founding</div>
                            </div>

                            {/* LEFT BOTTOM */}
                            <div className="absolute left-0 bottom-32 text-center ">
                                <div className="text-6xl md:text-7xl font-inter leading-none">16</div>
                                <div className="mt-2 text-xs tracking-wide">events hosted</div>
                            </div>

                            {/* RIGHT TOP */}
                            <div className="absolute right-0 top-[40%] -translate-y-1/2 text-center">
                                <div className="text-6xl md:text-7xl font-inter leading-none">50+</div>
                                <div className="mt-2 text-xs tracking-wide">dedicated team members</div>
                            </div>

                            {/* RIGHT BOTTOM */}
                            <div className="absolute right-0 bottom-32 text-center ">
                                <div className="text-6xl md:text-7xl font-interleading-none">12</div>
                                <div className="mt-2 text-xs tracking-wide">countries worldwide</div>
                            </div>

                            {/* CENTER FIGURE */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <Image
                                    src="/images/black_balancing.gif"
                                    alt="illustrated figure holding bags"
                                    width={360}
                                    height={360}
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            {/* BOTTOM */}
                            <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 text-center">
                                <div className="text-6xl md:text-7xl font-inter leading-none">42</div>
                                <div className="mt-2 text-xs tracking-wide">from cities</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>{/* ================= PAST COLLABORATIONS & SPONSORS ================= */}
            <div className="space-y-6 pb-8">

                {/* Title */}
                <h2 className="text-center text-4xl font-italiana tracking-wide">
                    PAST COLLABORATIONS &amp; SPONSORS
                </h2>

                {/* Bordered container */}
                <div className="border-2 border-black px-8 py-6 mx-8">
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
                        {[
                            'uoft.svg',
                            'sap.svg',
                            'perplexity.svg',
                            'mit.svg',
                            'ibm.svg',
                            'ncwit.svg',
                            'wics.svg',
                            'sfu.svg',
                            'ute.svg',
                            'cumulus.svg',
                            'cssu.svg',
                            'entrepreneur first.svg',
                        ].map((filename) => (
                            <div
                                key={filename}
                                className="relative h-20 flex items-center justify-center"
                            >
                                <Image
                                    src={`/images/sponsors/${encodeURIComponent(filename)}`}
                                    alt={filename.replace('.svg', '')}
                                    fill
                                    className="object-contain object-center"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
