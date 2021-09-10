import "./countdown.scss";

import React, { useEffect, useRef, useState } from 'react';

const Countdown = () => {  

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {

        const countdownDate = new Date('Nov 05, 2021').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    });

    return (
        <div>
           <section className="timer-container">
                    <div className ="timer">
                        <section>
                            <p className="cdp">{timerDays}</p>
                            <p className="cdp">J</p>
                        </section>
                        <span>:</span>
                        <section>
                            <p className="cdp">{timerHours}</p>
                            <p className="cdp">H</p>
                        </section>
                        <span>:</span>
                        <section>
                            <p className="cdp">{timerMinutes}</p>
                            <p className="cdp">M</p>
                        </section>
                        <span>:</span>
                        <section>
                            <p className="cdp">{timerSeconds}</p>
                            <p className="cdp">S</p>
                        </section>                        
                    </div>
                </section>
        </div>
    );
};

export default Countdown;