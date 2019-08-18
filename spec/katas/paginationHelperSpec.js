const PaginationHelper = require('./../../katas/paginationHelper/paginationHelper');

describe("PaginationHelper", function() {
  const collection = ['a','b','c','d','e','f'];
  const itemsPerPage = 4;
  const subject = new PaginationHelper(collection, itemsPerPage);

  describe('#itemCount()', () => {
    it('returns count of items in collection', () => {
      expect(subject.itemCount()).toEqual(collection.length);
    });
  });

  describe('#pageCount()', () => {
    it('returns number of pages for collection', () => {
      expect(subject.pageCount()).toEqual(2);
    })
  });

  describe('#pageItemCount()', () => {
    describe('when there are items on the page with passed index', () => {
      it('returns items count on specified page', () => {
        expect(subject.pageItemsCount(0)).toEqual(4);
        expect(subject.pageItemsCount(1)).toEqual(2);
      });
    });

    describe('when there are no items on the page with passed index', () => {
      it('returns -1', () => {
        expect(subject.pageItemsCount(2)).toEqual(-1);
      });
    });
  });

  describe('#pageIndex', () => {
    describe('when negative page index passed', () => {
      it('returns -1', () => {
        expect(subject.pageIndex(-10)).toEqual(-1);
      });
    });

    describe('when item index cannot be found on any of pages', () => {
      it('returns -1', () => {
        expect(subject.pageIndex(10)).toEqual(-1);
      });
    });

    describe('when item index can be found on any of pages', () => {
      it('returns page number item with specified index belongs to', () => {
        expect(subject.pageIndex(5)).toEqual(1);
        expect(subject.pageIndex(1)).toEqual(0);
      })
    });
  });
});