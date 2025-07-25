import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxScroll = ({
  fromOptions = { y: -100, scale: 0.8 },
  fromScroll = { start: 'top top', end: 'bottom top', scrub: true },
  toOptions = { y: 100, opacity: 0 },
  toScroll = { start: 'top bottom', end: 'top center', scrub: true },
  children
}) => {
  const fromRef = useRef(null);
  const toRef = useRef(null);

  useEffect(() => {
    if (fromRef.current) {
      gsap.to(fromRef.current, {
        ...fromOptions,
        scrollTrigger: {
          trigger: fromRef.current,
          ...fromScroll,
        },
      });
    }
    if (toRef.current) {
      gsap.from(toRef.current, {
        ...toOptions,
        scrollTrigger: {
          trigger: toRef.current,
          ...toScroll,
        },
      });
    }
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [fromOptions, fromScroll, toOptions, toScroll]);

  // Expecting exactly two children: [from, to]
  const [fromChild, toChild] = React.Children.toArray(children);

  return (
    <>
      {fromChild && React.cloneElement(fromChild, { ref: fromRef })}
      {toChild && React.cloneElement(toChild, { ref: toRef })}
    </>
  );
};

export default ParallaxScroll;