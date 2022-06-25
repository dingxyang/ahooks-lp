import { useUpdate } from 'anya-hooks';
import React from 'react';

export default () => {
  const update = useUpdate();
  return (
    <div>
      <div>{Date.now()}</div>
      <button type="button" onClick={update} style={{ marginTop: 8 }}>
        update
      </button>
    </div>
  );
};
