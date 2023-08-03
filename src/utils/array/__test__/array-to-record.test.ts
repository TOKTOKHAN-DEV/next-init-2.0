import { arrayToRecord } from '../array-to-record';

type Person = {
  id: number;
  name: string;
};

describe('arrayToRecord', () => {
  it('should convert array to record', () => {
    const people: Person[] = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Mike' },
    ];

    const getKey = (person: Person) => person.id;

    const record = arrayToRecord(people, getKey);

    expect(record).toEqual({
      1: { id: 1, name: 'John' },
      2: { id: 2, name: 'Jane' },
      3: { id: 3, name: 'Mike' },
    });
  });

  it('should return an empty object for an empty array', () => {
    const emptyArray: Person[] = [];
    const getKey = (person: Person) => person.id;

    const record = arrayToRecord(emptyArray, getKey);

    expect(record).toEqual({});
  });

  it('should handle duplicate keys by keeping the last occurrence', () => {
    const people: Person[] = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 1, name: 'Mike' },
    ];

    const getKey = (person: Person) => person.id;

    const record = arrayToRecord(people, getKey);

    expect(record).toEqual({
      1: { id: 1, name: 'Mike' },
      2: { id: 2, name: 'Jane' },
    });
  });
});
