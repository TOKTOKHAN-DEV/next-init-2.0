import React from 'react';

import {
  ProgressHelper,
  UseScrollSectionParamType,
} from './useScrollSection.type';

export default function useScrollSection({
  parentsRef,
  targetRef,
  onProgress,
  onInValid,
}: UseScrollSectionParamType) {
  React.useEffect(() => {
    const parentsEl = parentsRef?.current || document.querySelector('body');
    const targetEl = targetRef.current;
    if (!targetEl) return;
    if (!parentsEl) return;

    const handleProgress = () => {
      const progress = getProgress(parentsEl, targetEl);
      const isValid = progress > 0 && progress < 1;
      if (!isValid) {
        onInValid?.(progress);
        return;
      }

      const helper = createHelper(progress);
      onProgress({ progress, helper });
    };
    handleProgress();
    window.addEventListener('scroll', handleProgress, {
      capture: false,
      passive: false,
    });
    window.addEventListener('load', handleProgress);
    window.addEventListener('resize', handleProgress);
    return () => {
      window.removeEventListener('scroll', handleProgress);
      window.removeEventListener('load', handleProgress);
      window.removeEventListener('resize', handleProgress);
    };
  }, [parentsRef, targetRef]);
}

function getProgress(parentsEl: HTMLElement, targetEl: HTMLElement) {
  const { y: parentsY } = parentsEl.getBoundingClientRect();
  const { y: targetY, height: targetHeight } = targetEl.getBoundingClientRect();

  const pt = window.scrollY + parentsY;
  const targetOffset = (targetY - pt) * -1;
  const progress = targetOffset / targetHeight;
  return progress;
}

function createHelper(progress: number): ProgressHelper {
  return ({ start = 0, end = 1, inOutPoint = 0, onIn, onOut }) => {
    const isValid = progress > start && progress < end;
    if (!isValid) return;

    const range = end - start;
    const rangeOfIn = inOutPoint - start;
    const rangeOfOut = end - inOutPoint;

    const pointOnRange = progress - start;
    const pointOnOut = progress - inOutPoint;

    const progressOnRange = pointOnRange / range;
    const progressOnIn = pointOnRange / rangeOfIn;
    const progressOnOut = pointOnOut / rangeOfOut;

    if (progress < inOutPoint) onIn?.({ progressOnRange, progressOnIn });
    else onOut?.({ progressOnRange, progressOnOut });
  };
}
