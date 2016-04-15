jest.unmock('../sum');

import sum from '../sum';
describe('sum', function() {
    it('add 1 + 2 to equal 3', function() {
        expect( sum(1, 2) ).toBe(3);
    });
});
