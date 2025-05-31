import React from 'react';
import { color, motion } from "motion/react";
import bannerImg1 from "../../assets/team/bannerImg1.jpg";
import bannerImg2 from "../../assets/team/bannerImg2.jpg";

const Banner = () => {
    return (
        <div className="bg-blue-200 rounded-2xl text-black pt-10 pb-20 px-10">
            <div className="flex flex-col items-center gap-8 lg:flex-row-reverse">
                <div className='flex-1 overflow-x-hidden'>
                    <motion.img
                        src={bannerImg1}
                        animate={{ y: [100, 160, 100] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="max-w-sm rounded-t-4xl border-s-4 border-b-4 shadow-2xl"
                    />
                    <motion.img
                        src={bannerImg2}
                        animate={{ x: [110, 160, 120] }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="max-w-sm rounded-t-4xl border-s-4 border-b-4 shadow-2xl"
                    />
                </div>
                <motion.div
                 animate={{ y: [10, 30, 10] }}
                        transition={{ duration: 5, repeat: Infinity }}
                className='flex-1 lg:ml-8'>
                    <h1 className="text-5xl font-bold">The <motion.span
                        animate={{
                            color: ['#0092b8', '#8a33ff', '#0b5345'],
                            transition: { duration: 4, repeat: Infinity }

                        }}
                    >Easiest Way</motion.span> <br />
                        to Get Your New Job</h1>
                    <p className="py-6">
                        Each month, more than 3 million job seekers turn to <br />
                        website in their search for work, making over 140,000 <br />
                        applications every single day..
                    </p>
                    <button className="btn btn-info">Get Started</button>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;