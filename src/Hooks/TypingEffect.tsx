import { useState, useEffect, useMemo } from 'react';

// https://codepen.io/aniketkr/pen/xxEYYjW

const TypingEffect = () => {
  const textArray = useMemo(() => ["Portfolio.", "Learn.", "Experiment."], []);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [reverseTyping, setReverseTyping] = useState(false);

  useEffect(() => {
    const type = () => {
      if (isTyping && !reverseTyping) {
        if (charIndex < textArray[textIndex].length) {
          setCharIndex(prevCharIndex => prevCharIndex + 1);
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setReverseTyping(true);
            setIsTyping(true);
          }, 1000);
        }
      } else if (isTyping && reverseTyping) {
        if (charIndex > 0) {
          setCharIndex(prevCharIndex => prevCharIndex - 1);
        } else {
          setReverseTyping(false);
          setTextIndex((prevTextIndex) => (prevTextIndex + 1) % textArray.length);
          setTimeout(() => {
            setIsTyping(true);
          }, 500);
        }
      }
    };

    const typingInterval = setTimeout(type, isTyping ? 80 : 40);
    return () => clearTimeout(typingInterval);
  }, [charIndex, isTyping, reverseTyping, textArray, textIndex]);

  return (
    <span className="typing-effect">
      <span className="typed-text">{textArray[textIndex].substring(0, charIndex)}</span>
      <span>‎ </span>
    </span>
  );
};

export default TypingEffect;