import React, { useRef, useState } from 'react';

import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';

interface IContentEditableInputProps {
  innerData?: string;
}

const ContentEditableInput = ({ innerData = '' }: IContentEditableInputProps) => {
  const [content, setContent] = useState<string>(innerData);
  const contentEditable = useRef<HTMLElement>(null);

  const handleChange = (e: ContentEditableEvent | { [p: string]: any }) => {
    console.log('e.target.value', e.target.value);
    setContent(e.target.value + 'Shant');
  };

  return (
    <ContentEditable
      innerRef={contentEditable}
      html={content} // innerHTML of the editable div
      disabled={false}       // use true to disable editing
      onChange={handleChange} // handle innerHTML change
      tagName="span" // Use a custom HTML tag (uses a div by default)
    />
  );
};

export default ContentEditableInput;
