import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import mockState, { mockUseDispatch, mockUseSelector } from '__mocks__/fixtures/mockTools';
import LactationContainer from 'src/containers/lactation/LactationContainer';
import { RootReducer } from 'src/redux/rootReducer';

jest.mock('react-redux');

describe('LactationContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
    dispatch.mockClear();
    mockUseDispatch.mockImplementation(() => dispatch);
    mockUseSelector.mockImplementation((selector: (arg: RootReducer) => void) => selector({
      ...mockState,
    }));
  });

  const renderLactationContainer = () => render((
    <LactationContainer />
  ));

  it('LactationContainer를 랜딩합니다', () => {
    const { container } = renderLactationContainer();

    expect(container).toHaveTextContent('수유 일지');
  });

  describe('handleClickAddFolder 함수를 검사하기 위해', () => {
    context('분유를 선택하면', () => {
      it('dispatch 함수를 실행합니다', () => {
        mockUseSelector.mockImplementation((selector: (arg: RootReducer) => void) => selector({
          ...mockState,
        }));

        const { getByLabelText } = renderLactationContainer();

        const radio = getByLabelText('분유');
        fireEvent.click(radio);

        expect(dispatch).toBeCalledTimes(1);
      });
    });

    context('용량을 입력할 때', () => {
      context('숫자가 들어가면', () => {
        it('dispatch 함수를 실행합니다', () => {
          mockUseSelector.mockImplementation((selector: (arg: RootReducer) => void) => selector({
            ...mockState,
          }));

          const { getByLabelText } = renderLactationContainer();

          const input = getByLabelText('용량');
          fireEvent.change(input, { target: { value: 100 } });

          expect(dispatch).toBeCalledTimes(1);
        });
      });

      context('falsy가 들어가면', () => {
        it('dispatch 함수를 실행합니다', () => {
          mockUseSelector.mockImplementation((selector: (arg: RootReducer) => void) => selector({
            ...mockState,
          }));

          const { getByLabelText } = renderLactationContainer();

          const input = getByLabelText('용량');
          fireEvent.change(input, { target: { value: null } });

          expect(dispatch).toBeCalledTimes(1);
        });
      });
    });
  });

  describe('handleClickSaveRecord 함수를 검사하기 위해', () => {
    context('저장 버튼을 클릭하면', () => {
      it('dispatch 함수를 실행합니다', () => {
        mockUseSelector.mockImplementation((selector: (arg: RootReducer) => void) => selector({
          ...mockState,
        }));

        const { getByText } = renderLactationContainer();

        const input = getByText('저장');
        fireEvent.click(input);

        expect(dispatch).toBeCalledTimes(1);
      });
    });
  });
});
