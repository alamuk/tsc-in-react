import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/NewGoal">
        <NewGoal />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
