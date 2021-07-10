import React, { FC, memo, RefObject, useCallback, useEffect, useRef, useState } from 'react';

import './styles.scss';
// import styles from './styles.module.scss';

const SCROLL_BOX_MIN_HEIGHT = 20;

interface ICustomScrollbarProps {
  className: string;
  [attr: string]: any;
}

const CustomScrollbar: FC<ICustomScrollbarProps> = ({ children, className, ...restProps }) => {
  const [hovering, setHovering] = useState(false);
  const [scrollBoxHeight, setScrollBoxHeight] = useState(SCROLL_BOX_MIN_HEIGHT);
  const [scrollBoxTop, setScrollBoxTop] = useState(0);
  const [lastScrollThumbPosition, setScrollThumbPosition] = useState(0);
  const [isDragging, setDragging] = useState(false);

  const scrollHostRef = useRef(null) as RefObject<HTMLDivElement> | null;

  const handleMouseOver = useCallback(() => {
    !hovering && setHovering(true);
  }, [hovering]);

  const handleMouseOut = useCallback(() => {
    !!hovering && setHovering(false);
  }, [hovering]);

  const handleDocumentMouseUp = useCallback(
    (e) => {
      if (isDragging) {
        e.preventDefault();
        setDragging(false);
      }
    },
    [isDragging],
  );

  const handleDocumentMouseMove = useCallback(
    (e) => {
      if (isDragging) {
        e.preventDefault();
        e.stopPropagation();
        if (scrollHostRef?.current) {
          const scrollHostElement = scrollHostRef.current;
          const { scrollHeight, offsetHeight } = scrollHostElement;

          let deltaY = e.clientY - lastScrollThumbPosition;
          let percentage = deltaY * (scrollHeight / offsetHeight);

          setScrollThumbPosition(e.clientY);
          setScrollBoxTop(Math.min(Math.max(0, scrollBoxTop + deltaY), offsetHeight - scrollBoxHeight));
          scrollHostElement.scrollTop = Math.min(scrollHostElement.scrollTop + percentage, scrollHeight - offsetHeight);
        }
      }
    },
    [isDragging, lastScrollThumbPosition, scrollBoxHeight, scrollBoxTop],
  );

  const handleScrollThumbMouseDown = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setScrollThumbPosition(e.clientY);
    setDragging(true);
    console.log('handleScrollThumbMouseDown');
  }, []);

  const handleScroll = useCallback(() => {
    if (scrollHostRef && scrollHostRef.current) {
      const { scrollTop, scrollHeight, offsetHeight } = scrollHostRef.current;

      let newTop = (parseInt(scrollTop.toString(), 10) / parseInt(scrollHeight.toString(), 10)) * offsetHeight;
      // newTop = newTop + parseInt(scrollTop, 10);
      newTop = Math.min(newTop, offsetHeight - scrollBoxHeight);
      setScrollBoxTop(newTop);
    }
  }, [scrollBoxHeight]);

  useEffect(() => {
    const scrollHostElement = scrollHostRef?.current;
    if (scrollHostElement) {
      const { clientHeight, scrollHeight } = scrollHostElement;
      const scrollThumbPercentage = clientHeight / scrollHeight;
      const scrollThumbHeight = Math.max(scrollThumbPercentage * clientHeight, SCROLL_BOX_MIN_HEIGHT);
      setScrollBoxHeight(scrollThumbHeight);
      scrollHostElement.addEventListener('scroll', handleScroll, true);
    }
    return function cleanup() {
      scrollHostElement?.removeEventListener('scroll', handleScroll, true);
    };
  }, [handleScroll]);

  useEffect(() => {
    //this is handle the dragging on scroll-thumb
    document.addEventListener('mousemove', handleDocumentMouseMove);
    document.addEventListener('mouseup', handleDocumentMouseUp);
    document.addEventListener('mouseleave', handleDocumentMouseUp);
    return function cleanup() {
      document.removeEventListener('mousemove', handleDocumentMouseMove);
      document.removeEventListener('mouseup', handleDocumentMouseUp);
      document.removeEventListener('mouseleave', handleDocumentMouseUp);
    };
  }, [handleDocumentMouseMove, handleDocumentMouseUp]);

  const showShant = () => {
    console.log('shant');
  };

  return (
    <div className={'scrollhost-container'} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div ref={scrollHostRef} className={`scrollhost ${className}`} {...restProps}>
        {children}
      </div>

      <div className={'scroll-bar'} style={{ opacity: hovering ? 1 : 0 }}>
        <div
          className={'scroll-thumb'}
          style={{ height: scrollBoxHeight, top: scrollBoxTop }}
          onMouseDown={handleScrollThumbMouseDown}
        />
      </div>
    </div>
  );
};

export default memo(CustomScrollbar);
