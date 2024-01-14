'use client'

import React from 'react';

export const SoundContext = React.createContext();

function SoundProvider({children}) {
    const [soundEnabled, setSoundEnabled] = React.useState(true);

    const value = React.useMemo(
        () => ({
            soundEnabled,
            toggleSound: () => setSoundEnabled(!soundEnabled),
        }),
        [soundEnabled],
    );

    return (
        <SoundContext.Provider value={value}>
            {children}
        </SoundContext.Provider>
    );
}

export default SoundProvider;