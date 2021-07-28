import React, { Dispatch, HTMLAttributes, KeyboardEvent, memo, RefObject, SetStateAction } from 'react';

import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import { isMobile } from 'react-device-detect';

interface IContentEditableInputProps extends HTMLAttributes<HTMLElement> {
  ref?: RefObject<HTMLElement>;
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
  tagName?: string;
  placeholder?: string;
}

const ContentEditableInput = (props: IContentEditableInputProps) => {
  const { ref, content, setContent, tagName = 'div', placeholder = '', ...restProps } = props;

  const scrollToBottom = () => {
    if (ref?.current) {
      const { scrollTo, scrollHeight } = ref.current;
      scrollTo({ top: scrollHeight });
    }
  };

  const handleChange = (e: ContentEditableEvent | { [p: string]: any }) => {
    console.log('e.target.value', e.target.value);
    setContent(e.target.value);
    scrollToBottom();
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLElement>) => {
    if (!isMobile && !e.shiftKey) {
      // e.preventDefault();
      // TODO: add functionality for send message when press enter
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (!isMobile && !e.shiftKey) {
      // e.preventDefault();
      // TODO: add functionality for send message when press enter
    }
  };

  return (
    <ContentEditable
      {...restProps}
      innerRef={ref}
      html={content} // innerHTML of the editable div
      placeholder={placeholder}
      dir="auto"
      spellCheck
      tagName={tagName} // Use a custom HTML tag (uses a div by default)
      disabled={false} // use true to disable editing
      onChange={handleChange} // handle innerHTML change
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      // onKeyPress={}
    />
  );
};

export default memo(ContentEditableInput);
