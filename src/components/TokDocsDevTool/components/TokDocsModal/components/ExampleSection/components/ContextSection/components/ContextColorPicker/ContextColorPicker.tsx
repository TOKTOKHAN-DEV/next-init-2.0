import ColorBoxList from '../../common/ColorBoxList';
import ColorText from '../../common/ColorText';
import { useSubExampleContext } from './context/useSubExampleContext';
import withColorPickerProvider from './hocs/withColorPickerProvider';

const ContextColorPicker = () => {
  const handleColor = useSubExampleContext((ctx) => ctx.handler.handleColor);
  const color = useSubExampleContext((ctx) => ctx.state.color);

  return (
    <>
      <ColorBoxList onClick={handleColor} color={color} />
      <ColorText />
    </>
  );
};

export default withColorPickerProvider(ContextColorPicker);
