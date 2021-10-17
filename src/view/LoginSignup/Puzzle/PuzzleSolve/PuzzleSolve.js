import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Makeup from './PuzzleSolve.module.css'

import Image1 from '../Images/1.4f689455.jpg'
import Image2 from '../Images/2.jpg'
import Image3 from '../Images/3.jpg'
import Image4 from '../Images/4.jpg'
import Image5 from '../Images/5.323cbe58.jpg'
import Image6 from '../Images/6.jpg'


const PuzzleSolve = () => {
    return (
        <section className={Makeup.PuzzleSolve}>
            <div className={Makeup.Content}>
                <p className="font-bold text-2xl text-center">Pick the spiral galaxy</p>
                <div className="grid md:grid-cols-3 gap-1">
                    <Image className={Makeup.Images} height="100%" width="100%" src={Image1} alt="" />
                    <Image className={Makeup.Images} height="100%" width="100%" src={Image2} alt="" />
                    <Image className={Makeup.Images} height="100%" width="100%" src={Image3} alt="" />
                    <Image className={Makeup.Images} height="100%" width="100%" src={Image4} alt="" />
                    <Image className={Makeup.Images} height="100%" width="100%" src={Image5} alt="" />
                    <Link href="/signUp">
                        <Image className={Makeup.Images} height="100%" width="100%" src={Image6} alt="" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PuzzleSolve;