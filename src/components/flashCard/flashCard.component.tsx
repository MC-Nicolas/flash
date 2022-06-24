import React, { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import './flashCard.component.styles.scss';
import '../blurLayer/blurLayer.component.styles.scss';
import SuccessCard from '../successCard/successCard.component';

type FlashCardProps = {
  frontText?: string;
  backText?: string;
  isVisible?: boolean;
  isSuccess?: boolean;
  revealFlashCard?: () => void;
};

const FlashCard = ({
  frontText,
  backText,
  isVisible,
  isSuccess = false,
  revealFlashCard,
}: FlashCardProps) => {
  const [isFront, setIsFront] = useState(true);

  const handleOnReveal = () => {
    setIsFront(!isFront);
    if (revealFlashCard) {
      revealFlashCard();
    }
  };
  if (!isSuccess) {
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className='flash-card'
            initial={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.3 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ position: 'absolute', x: '-100vw', opacity: 0, y: 100 }}
          >
            <div className={`flash-card__inner ${isFront ? '' : 'flipped'}`}>
              <div
                className={`flash-card__front flex items-center justify-center blur-container`}
                onClick={handleOnReveal}
              >
                <h1>{frontText}</h1>
              </div>
              <div
                className={`flash-card__back flex items-center justify-center blur-container`}
              >
                {backText}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  } else {
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className='flash-card'
            initial={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.3 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ position: 'absolute', x: '-100vw', opacity: 0, y: 100 }}
          >
            <div className={`flash-card__inner ${isFront ? '' : 'flipped'}`}>
              <div
                className={`flash-card__front flex items-center justify-center blur-container`}
              >
                <SuccessCard />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
};

export default FlashCard;
