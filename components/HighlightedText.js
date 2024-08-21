import React, { useEffect, useRef } from 'react';
import { annotate } from 'rough-notation';

const HighlightedText = ({ children, type = 'highlight', color = '#fca311', multiline = false }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const annotation = annotate(elementRef.current, {
      type,
      color,
      multiline,
      animationDuration: 1500,
    });
    annotation.show();
  }, [type, color, multiline]);

  return <span ref={elementRef}>{children}</span>;
};

export default HighlightedText;
