import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputBox, { Props } from 'src/components/lactation/InputBox';

describe('InputBox', () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
  });

  const renderInputBox = ({
    id, title, value, onChange,
  }: Props) => render((
    <InputBox
      id={id}
      title={title}
      value={value}
      onChange={onChange}
    />
  ));

  it('InputBox 컴포넌트를 랜딩합니다', () => {
    const { getByLabelText } = renderInputBox({
      id: 'amount',
      title: '용량',
      value: 20,
      onChange: handleChange,
    });

    const input = getByLabelText('용량');

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(20);
  });

  context('용량 숫자를 변경하면', () => {
    it('handleChange 함수를 실행합니다', () => {
      const { getByLabelText } = renderInputBox({
        id: 'amount',
        title: '용량',
        value: 0,
        onChange: handleChange,
      });

      const input = getByLabelText('용량');
      expect(input).toHaveValue(0);

      fireEvent.change(input, { target: { value: 20 } });
      expect(handleChange).toBeCalled();
    });
  });
});
