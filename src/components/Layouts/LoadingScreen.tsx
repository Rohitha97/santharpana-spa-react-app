import { useEffect, useState } from "react";
import "./LoadingScreen.css";

interface LoadingScreenProps {
    /** When true the spinner fades out and unmounts */
    done?: boolean;
}

function LoadingScreen({ done = false }: LoadingScreenProps) {
    const [hiding, setHiding] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        if (done) {
            setHiding(true);
            const t = setTimeout(() => setHidden(true), 600);
            return () => clearTimeout(t);
        }
    }, [done]);

    if (hidden) return null;

    return (
        <div className={`spa-loader${hiding ? " spa-loader--out" : ""}`} aria-label="Loading" role="status">
            {/* Petal ring & Logo Container */}
            <div className="spa-loader__graphics">
                {/* Petal ring */}
                <div className="spa-loader__ring" aria-hidden="true">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <span key={i} className="spa-loader__petal" style={{ "--i": i } as React.CSSProperties} />
                    ))}
                </div>

                {/* Logo */}
                <div className="spa-loader__logo">
                    <img src="images/logo.png" alt="Santharpana" />
                </div>
            </div>

            {/* Shimmer progress bar */}
            <div className="spa-loader__bar" aria-hidden="true">
                <div className="spa-loader__bar-fill" />
            </div>

            {/* Tagline */}
            <p className="spa-loader__tagline">Santharpana Ayurveda&nbsp;Ashram</p>
        </div>
    );
}

export default LoadingScreen;
