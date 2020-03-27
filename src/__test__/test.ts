import { getPlural } from '../';

describe('getPlural function test', () => {
    it('should return Boys', () => {
        var result = getPlural('Boy');
        expect(result).toBe('Boys');
    });
    it('should return Girls', () => {
        var result = getPlural('Girl');
        expect(result).toBe('Girls');
    });
    it('should return Geese', () => {
        var result = getPlural('Goose');
        expect(result).toBe('Geese');
    });
    it('should return Toys', () => {
        var result = getPlural('Toy');
        expect(result).toBe('Toys');
    });
    it('should return Men', () => {
        var result = getPlural('Man');
        expect(result).toBe('Men');
    });
});
