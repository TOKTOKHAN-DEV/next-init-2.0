import { arrayToMap } from '../array-to-map';

interface Person {
  id: number;
  name: string;
}

describe('arrayToMap', () => {
  it('should convert array to map', () => {
    const people: Person[] = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Mike' },
    ];

    const getKey = (person: Person) => person.id;

    const map = arrayToMap(people, getKey);

    expect(map.size).toBe(3);
    expect(map.get(1)).toEqual({ id: 1, name: 'John' });
    expect(map.get(2)).toEqual({ id: 2, name: 'Jane' });
    expect(map.get(3)).toEqual({ id: 3, name: 'Mike' });
  });

  it('should handle duplicate keys by keeping the last occurrence', () => {
    const people: Person[] = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 1, name: 'Mike' },
    ];

    const getKey = (person: Person) => person.id;

    const map = arrayToMap(people, getKey);

    expect(map.size).toBe(2);
    expect(map.get(1)).toEqual({ id: 1, name: 'Mike' });
    expect(map.get(2)).toEqual({ id: 2, name: 'Jane' });
  });

  it('should return an empty map for an empty array', () => {
    const emptyArray: Person[] = [];
    const getKey = (person: Person) => person.id;

    const map = arrayToMap(emptyArray, getKey);

    expect(map.size).toBe(0);
  });
});
