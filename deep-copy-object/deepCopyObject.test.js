import { deepCopyObject } from './deepCopyObject';

describe('deepCopyObject', () => {
  it('returns a deep copy of given object', () => {
    const myObj = {
      subObj: {
        key: 'value',
      },
    };

    const yourObj = deepCopyObject(myObj);
    yourObj[0].subObj.key = 'new value';

    expect(yourObj[0].subObj.key).toEqual('new value');
    expect(myObj.subObj.key).toEqual('new value');
  });

  it('returns copy of other data types', () => {
    expect(deepCopyObject(4)).toEqual([4]);
    expect(deepCopyObject('string!')).toEqual(['string!']);
    expect(deepCopyObject(true)).toStrictEqual([true]);
    expect(deepCopyObject(null)).toStrictEqual([null]);
  });
});
