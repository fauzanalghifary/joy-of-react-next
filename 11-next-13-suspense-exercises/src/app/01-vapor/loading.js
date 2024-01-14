import LibraryGameCardSkeleton from "@/components/LibraryGameCardSkeleton";

const VaporLoading = () => {
    return (
        <section className="max-width-wrapper">
            <header className="library-header">
                <h1>My games</h1>
            </header>
            <div className="game-grid">
                {Array.from({length: 12}).map((_, index) => (
                    <LibraryGameCardSkeleton key={index}/>
                ))}
            </div>
        </section>
    );
}

export default VaporLoading