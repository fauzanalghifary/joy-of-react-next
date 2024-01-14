import React from 'react';

import ScreenSaver from '../../../components/ScreenSaver';
import Link from "next/link";

function ScreenSaverExercise() {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
    return (
        <main>
            <p>Choose your color:</p>
            <ul>
                {colors.map((color) => (
                    <li key={color}>
                        <Link href={`/exercises/01-screensaver/${color}`}>{color}</Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default ScreenSaverExercise;
