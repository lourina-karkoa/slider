import React, { useState } from 'react';
import './Slider.css';

export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalCards = 5; // عدد الكروت الكلي
    const cardWidth = 330; // عرض الكرت الواحد
    const visibleCardsLarge = 3; // عدد الكروت على الشاشة الكبيرة
    const visibleCardsMedium = 2; // عدد الكروت على الشاشة المتوسطة
    const visibleCardsSmall = 1; // عدد الكروت على الشاشة الصغيرة

    // حساب عدد الكروت المرئية بناءً على حجم الشاشة
    const getVisibleCards = () => {
        if (window.innerWidth >= 1024) return visibleCardsLarge;
        if (window.innerWidth >= 768) return visibleCardsMedium;
        return visibleCardsSmall;
    };

    // حساب أقصى `currentIndex` بناءً على عدد الكروت الكلي وعدد الكروت المرئية
    const maxIndex = totalCards - getVisibleCards();

    const handleNext = () => {
        setCurrentIndex(currentIndex < maxIndex ? currentIndex + 1 : maxIndex);
    };

    const handlePrev = () => {
        setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : 0);
    };

    return (
        <div className="father">
            <span className="arrow left" onClick={handlePrev}>{'<'}</span>
            <span className="arrow right" onClick={handleNext}>{'>'}</span>
            <div className="slider-container">
                <div
                    className="slider"
                    style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
                >
                    {[...Array(totalCards)].map((_, index) => (
                        
                        <div className="son" key={index}></div>
                    ))}
                </div>
            </div>
            <div className="f-circle">
                {[...Array(totalCards)].map((_, index) => (
                    <span
                        className={`circle ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                        key={index}
                    >
                        {index + 1}
                    </span>
                ))}
            </div>
        </div>
    );
}
