import React from 'react';

export default function AddButton(props) {
  const { tag, className, children, ...otherProps } = props;

  return React.createElement(
    props.tag,
    {
      className: ['Button', props.className].join(' '),
      ...otherProps,
    },
    props.children
  );
}

AddButton.defaultProps = {
  tag: 'a',
};
