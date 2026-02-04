"use client";

import {
    Code,
    Hammer,
    Lightbulb,
    Star,
    Heart,
    Coffee,
    Zap,
    Sparkles,
    Rocket,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <div id="home" className="h-screen md:mt-20 relative flex flex-col-reverse md:flex-row bg-yellow-400 overflow-x-hidden">
            <div className="w-full md:w-1/2 px-6 md:px-10">
                <div className="absolute md:top-10 left-6 md:left-10 z-10 h-14 w-35 bg-white flex items-center justify-center border-3 rounded-full text-lg font-semibold">
                    <p className="text-[1.4rem]">👋</p> Howdy!
                </div>
                <div className="absolute md:top-11 left-7 md:left-11 bg-black h-14 w-35 rounded-full z-0" />

                <div className="mt-16 md:mt-30" />

                <p className="font-mono text-[3rem] md:text-[4.5rem]">I'm</p>
                <p className="font-mono text-[3.5rem] md:text-[5.5rem] font-semibold -mt-2 md:-mt-3">
                    Shivayan
                </p>

                <div className="flex flex-wrap gap-4 md:gap-6 my-5">
                    {[
                        { icon: Code, label: "Software" },
                        { icon: Lightbulb, label: "Electronics" },
                        { icon: Hammer, label: "Cricket" },
                    ].map((item, i) => (
                        <div key={i} className="relative hover:-rotate-1 cursor-pointer">
                            <div className="z-20 h-14 w-42 rounded-xl bg-black" />
                            <div className="absolute -top-1 -left-1 flex items-center justify-center gap-1 text-[1.1rem] bg-white border-3 border-black rounded-xl h-14 w-42">
                                <p className="bg-yellow-400 p-2 rounded-full">
                                    <item.icon />
                                </p>
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="relative mt-8 md:mt-10 max-w-full">
                    <div className="z-20 h-20 w-full md:w-135 rounded-xl bg-black" />
                    <div className="absolute -top-1 -left-1 flex items-center p-4 md:p-5 font-semibold text-[1.1rem] bg-white border-3 border-black rounded-xl h-20 w-full md:w-135">
                        I turn wild ideas into reality with code, design, and a whole lot of ✨
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center relative">
                <div className="relative hidden lg:block h-150 w-130 overflow-hidden">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring", duration: 1.5 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-100 h-100 bg-white border-3 rounded-full cartoon-border flex items-center justify-center"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <Code className="w-32 h-32" />
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring", duration: 1.5 }}
                        className="absolute top-[51%] left-[51%] -translate-x-1/2 -translate-y-1/2 z-0 h-100 w-100 bg-black rounded-full">
                    </motion.div>
                    {[
                        { icon: Star, delay: 0, radius: 215, duration: 8 },
                        { icon: Heart, delay: 0.5, radius: 230, duration: 10 },
                        { icon: Coffee, delay: 1, radius: 230, duration: 9 },
                        { icon: Zap, delay: 1.5, radius: 230, duration: 7 },
                        { icon: Sparkles, delay: 2, radius: 215, duration: 11 },
                        { icon: Rocket, delay: 2.5, radius: 215, duration: 8.5 },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="absolute top-1/2 left-1/2 z-20"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1, rotate: 360 }}
                            transition={{
                                scale: { delay: 0.5 + item.delay, type: "spring" },
                                rotate: {
                                    duration: item.duration,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: item.delay,
                                },
                            }}
                            style={{
                                width: item.radius * 2,
                                height: item.radius * 2,
                                marginLeft: -item.radius,
                                marginTop: -item.radius,
                            }}
                        >
                            <motion.div
                                className="absolute top-0 left-1/2 -translate-x-1/2 bg-yellow-400 border-3 p-4 rounded-2xl cartoon-border"
                                animate={{ rotate: -360 }}
                                transition={{
                                    duration: item.duration,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: item.delay,
                                }}
                            >
                                <item.icon className="w-8 h-8" />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
