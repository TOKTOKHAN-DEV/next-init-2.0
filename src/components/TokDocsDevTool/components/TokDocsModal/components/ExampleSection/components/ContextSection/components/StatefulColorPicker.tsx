import { useState } from 'react';

import ColorBoxList from '../common/ColorBoxList';
import ColorText from '../common/ColorText';
import { Colors } from './ContextColorPicker/context/hooks/useSubExampleState';

const StatefulColorPicker = () => {
  const [color, setColor] = useState<Colors>('red');

  const handleColor = (color: Colors) => {
    setColor(color);
  };
  return (
    <>
      <ColorBoxList onClick={handleColor} color={color} />
      <ColorText color={color} />
    </>
  );
};

export default StatefulColorPicker;
