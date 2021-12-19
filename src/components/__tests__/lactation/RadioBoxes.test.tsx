import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RadioBoxes, { Props } from 'src/components/lactation/RadioBoxes';
import { lactationOptions } from 'src/utils/constants';

describe('RadioBoxes', () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
  });

  const renderRadioBoxes = ({
    name, options, value, onChange,
  }: Props) => render((
    <RadioBoxes
      name={name}
      options={options}
      value={value}
      onChange={onChange}
    />
  ));

  it('RadioBoxes 컴포넌트를 랜딩합니다', () => {
    const { getByLabelText } = renderRadioBoxes({
      name: 'lactationType',
      options: lactationOptions,
      value: 'breastMilk',
      onChange: handleChange,
    });

    expect(getByLabelText('직수')).toBeInTheDocument();
    expect(getByLabelText('모유')).toBeInTheDocument();
    expect(getByLabelText('분유')).toBeInTheDocument();
  });

  context('라디오 버튼을 클릭을 클릭하면', () => {
    it('onChange 함수를 실행합니다', () => {
      const { getByLabelText } = renderRadioBoxes({
        name: 'lactationType',
        options: lactationOptions,
        value: 'breastMilk',
        onChange: handleChange,
      });

      const radioButton = getByLabelText('분유');
      fireEvent.click(radioButton);

      expect(handleChange).toBeCalled();
    });
  });
});
