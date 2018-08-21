import React, { Fragment } from 'react';

import '../src/index.scss';

const ResetExample3 = () => (
  <Fragment>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged.
    </p>

    <p>
      Text with a link will{' '}
      <a
        href="https://www.youtube.com/watch?v=BVggF2TxSu8"
        target="_blank"
        rel="noopener noreferrer"
      >
        look like this
      </a>
      .
    </p>
  </Fragment>
);

export default ResetExample3;