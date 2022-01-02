import {
  saveItem, loadItem, removeItem, clearItem,
} from 'src/utils/storage';

describe('storage', () => {
  jest.spyOn(window.localStorage.__proto__, 'getItem');
  jest.spyOn(window.localStorage.__proto__, 'setItem');
  jest.spyOn(window.localStorage.__proto__, 'removeItem');
  jest.spyOn(window.localStorage.__proto__, 'clear');

  beforeEach(() => {
    Storage.prototype.setItem = jest.fn();
    Storage.prototype.getItem = jest.fn();
    Storage.prototype.removeItem = jest.fn();
    Storage.prototype.clear = jest.fn();
  });

  describe('loadItem', () => {
    it('localStorage의 getItem 함수를 호출합니다', () => {
      loadItem({ key: 'flower' });

      expect(localStorage.getItem).toBeCalledWith('flower');
    });
  });

  describe('saveItem', () => {
    it('localStorage의 setItem 함수를 호출합니다', () => {
      saveItem({ key: 'password', value: 'hackerman' });

      expect(localStorage.setItem).toBeCalledWith('password', 'hackerman');
    });
  });

  describe('removeItem', () => {
    it('localStorage의 removeItem 함수를 호출합니다', () => {
      removeItem({ key: 'sky' });

      expect(localStorage.removeItem).toBeCalledWith('sky');
    });
  });

  describe('clearItem', () => {
    it('localStorage의 clear 함수를 호출합니다', () => {
      clearItem();

      expect(localStorage.clear).toBeCalled();
    });
  });
});
