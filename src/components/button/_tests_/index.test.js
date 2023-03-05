import React from 'react';
import {expect} from '@jest/globals';
import {render} from '@testing-library/react-native';

import Button from '@components/Button/Button';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('testing ButtonAtomic component', () => {
  it('check is ButtonAtomic exist', () => {
    const output = render(
      <Button
        size="large"
        type="primary"
        text="Default"
        onPress={() => {
          console.log('Pressed!');
        }}
      />,
    );

    expect(output).toBeTruthy();
  });
});
