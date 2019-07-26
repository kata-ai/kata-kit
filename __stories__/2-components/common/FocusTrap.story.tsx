import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import Wrapper from '@storybook-utils/components/Wrapper';
import WithState from '@storybook-utils/components/WithState';

import { FocusTrap } from '@kata-kit/common/src/components/FocusTrap';
import { Button } from '@kata-kit/button/src';

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

const story = storiesOf('Components|Common/FocusTrap', module).addDecorator(
  StoryWrapper
);

const info = `
## Install

~~~sh
# yarn
yarn add @kata-kit/common
# npm
npm install @kata-kit/common
~~~

## Usage

~~~jsx
import { FocusTrap } from '@kata-kit/common';
~~~
`;

story.add(
  'Documentation',
  () => (
    <WithState initialState={{ active: false }}>
      {({ active }, { setState }) => (
        <div>
          <p>
            Tubulo putas dicere? Erat enim Polemonis. Minime vero istorum
            quidem, inquit. Hic nihil fuit, quod quaereremus.{' '}
            <a
              href="https://www.youtube.com/watch?v=ncB65dETKlM"
              target="_blank"
            >
              Est, ut dicis, inquit;
            </a>{' '}
            Iam contemni non poteris.{' '}
          </p>

          <FocusTrap active={active}>
            <p>
              Focus Lock: <strong>{active ? 'On' : 'Off'}</strong>
            </p>
            <Button
              onClick={() => setState({ active: !active })}
              style={{ marginBottom: '16px' }}
            >
              Toggle focus trap
            </Button>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              adiuvas? Illa tamen simplicia, vestra versuta.
              <a
                href="https://www.youtube.com/watch?v=qTUnDV3MgVQ"
                target="_blank"
              >
                Quamquam tu hanc copiosiorem etiam soles dicere.
              </a>{' '}
              Sed ego in hoc resisto; Si longus, levis. Roges enim Aristonem,
              bonane ei videantur haec: vacuitas doloris, divitiae, valitudo;{' '}
            </p>
          </FocusTrap>
        </div>
      )}
    </WithState>
  ),
  { info: { text: info, propTables: [FocusTrap] } }
);
