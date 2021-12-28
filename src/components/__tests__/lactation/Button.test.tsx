import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button, { Props } from 'src/components/lactation/Button';

describe('Button', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
  });

  const renderButton = ({
    disabled, onClick,
  }: Props) => render((
    <Button
      disabled={disabled}
      onClick={onClick}
    />
  ));

  it('Button 컴포넌트를 랜딩합니다', () => {
    const { container } = renderButton({
      disabled: false,
      onClick: handleClick,
    });

    expect(container).toHaveTextContent('저장');
  });

  context('저장 버튼을 누르면', () => {
    it('onClick 함수를 실행합니다', () => {
      const { getByText } = renderButton({
        disabled: false,
        onClick: handleClick,
      });

      const button = getByText('저장');

      fireEvent.click(button);
      expect(handleClick).toBeCalled();
    });
  });
});
