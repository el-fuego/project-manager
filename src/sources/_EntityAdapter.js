import { sortBy, findIndex } from 'lodash';

import Adapter from './_Adapter';


function increaseSortIndex(items, startIndex, endIndex, value) {
  const affectedItems = [];
  for (let i = startIndex; i <= endIndex; i += 1) {
    affectedItems.push({
      ...items[i],
      sortIndex: items[i] + value
    });
  }
  return affectedItems;
}

// Server API emulation
export default class EntityAdapter extends Adapter {

  list() {
    return super.list().then(list => sortBy(list, 'sortIndex'));
  }

  create(data) {
    return this.list()
      .then(items => this.store.put({
        ...data,
        id: Date.now(),
        sortIndex: items.length ? items[items.length - 1] + 1 : 0
      }))
      .then(this.store.get);
  }

  // in real life there will be just http call
  // server method will be DB transaction
  // with nextItemId changing instead of
  // reading all data and reorder it
  moveAfter(idToMove, afterId) {
    return this.list()
      .then(function move(items) {
        const itemToMoveIndex = findIndex(items, { id: idToMove });
        const itemToMoveAfterIndex = findIndex(items, { id: afterId });

        let affectedItems;
        if (itemToMoveIndex < itemToMoveAfterIndex) {
          affectedItems = increaseSortIndex(
            items,
            itemToMoveIndex + 1,
            itemToMoveAfterIndex,
            -1
          );
        } else {
          affectedItems = increaseSortIndex(
            items,
            itemToMoveAfterIndex + 1,
            itemToMoveIndex - 1,
            1
          );
        }

        affectedItems.push({
          ...items[itemToMoveIndex],
          sortIndex: items[itemToMoveAfterIndex].sortIndex + 1
        });

        return this.store.batch(affectedItems);
      });
  }
}
