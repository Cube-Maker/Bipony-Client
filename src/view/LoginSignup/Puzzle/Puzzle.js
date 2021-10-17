import React from 'react';
import Makeup from './Puzzle.module.css';
import Images from './Images/puzzle.88cee0f4.jpg'
import Image from 'next/image'
import Link from 'next/link'

const Puzzle = () => {
    return (
        <section className={Makeup.Puzzle}>
            <div className={Makeup.Content}>
                <p className="font-bold text-2xl">Solve the puzzle to protect your account</p>
                <div className="p-5">
                    <Image height="200px" width="300px" src={Images} alt="" />
                    <Link href="/Puzzle/PuzzleSolve">
                        <button className={Makeup.Button}>Solve puzzle</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Puzzle;