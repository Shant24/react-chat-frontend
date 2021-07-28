import React, { memo, useRef, useState } from 'react';

import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';

interface IContentEditableInputProps {
  tagName?: string;
  innerData?: string;
}

const ContentEditableInput = ({ tagName = 'div', innerData = '' }: IContentEditableInputProps) => {
  const [content, setContent] = useState<string>(innerData);
  const contentEditable = useRef<HTMLElement>(null);

  const handleChange = (e: ContentEditableEvent | { [p: string]: any }) => {
    setContent(e.target.value);
  };

  return (
    <ContentEditable
      innerRef={contentEditable}
      html={content} // innerHTML of the editable div
      disabled={false} // use true to disable editing
      onChange={handleChange} // handle innerHTML change
      tagName={tagName} // Use a custom HTML tag (uses a div by default)
    />
  );
};

export default memo(ContentEditableInput);
