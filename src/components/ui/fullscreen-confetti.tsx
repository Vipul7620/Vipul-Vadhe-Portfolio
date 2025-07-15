
'use client';
import { Laugh } from 'lucide-react';
import { useEffect, useState } from 'react';

const PoppingSmiley = ({ onComplete }: { onComplete: () => void }) => {
    const [position, setPosition] = useState({ left: '50%', top: '50%' });
    const [size, setSize] = useState(20);

    useEffect(() => {
        setPosition({
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
        });
        setSize(Math.random() * 30 + 20);
    }, []);

    return (
        <Laugh
            onAnimationEnd={onComplete}
            className="absolute text-accent opacity-0 animate-pop"
            style={{
                width: `${size}px`,
                height: `${size}px`,
                left: position.left,
                top: position.top,
            }}
        />
    );
};

const FullscreenConfetti = ({ onComplete }: { onComplete: () => void }) => {
    const [confetti, setConfetti] = useState<number[]>([]);

    useEffect(() => {
        const newConfetti = Array.from({ length: 50 }, (_, i) => i);
        setConfetti(newConfetti);

        const timer = setTimeout(onComplete, 2000); // Should be longer than animation
        return () => clearTimeout(timer);
    }, [onComplete]);

    const handleAnimationEnd = (index: number) => {
        // Optional: remove one by one if needed, but the parent handles the full removal
    };

    if (confetti.length === 0) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-[200] pointer-events-none overflow-hidden">
            {confetti.map((c) => (
                <PoppingSmiley key={c} onComplete={() => handleAnimationEnd(c)} />
            ))}
        </div>
    );
};

export default FullscreenConfetti;
