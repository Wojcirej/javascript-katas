class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  itemCount() {
    return this.collection.length;
  };

  pageCount() {
    return Math.ceil(this.itemCount() / this.itemsPerPage);
  };

  pageItemsCount(pageIndex) {
    if(pageIndex > (this.pageCount() -1)) return -1;
    const startPoint = pageIndex * this.itemsPerPage;
    const endPoint = (pageIndex * this.itemsPerPage) + this.itemsPerPage;
    return this.collection.slice(startPoint, endPoint).length;
  };

  pageIndex(itemIndex) {
    if(itemIndex < 0 || (this.itemCount() - 1) < itemIndex) return -1;
    return Math.floor((itemIndex / this.itemsPerPage));
  };
};

module.exports = PaginationHelper;