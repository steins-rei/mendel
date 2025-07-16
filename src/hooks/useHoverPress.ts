import { useState } from 'react';

export function useHoverPress() {
  const [hovered, setHover] = useState(false);
  const [pressed, setPress] = useState(false);

  const eventHandlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false)
      setPress(false)
    },
    onMouseDown: () => {
      setPress(true)
      setHover(false)
    },
    onMouseUp: () => setPress(false)
  }

  const style = {
    opacity: pressed ? 'var(--opacity-mute-partial)' : 1,
    scale: hovered ? 1.05 : pressed ? 0.95 : '',
  }

  return { hovered, pressed, eventHandlers, style }
}