import { useEffect, useState } from "react";

export default function BackgroundSlider() {

    const images = [
        "https://picsum.photos/1920/1080?random=1",
        "https://picsum.photos/1920/1080?random=2",
        "https://picsum.photos/1920/1080?random=3",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 z-[-1]">
            <img src={images[index]} alt="" className="w-full h-full brightness-40 object-cover" />
        </div>
    );
}
