import {Map, OrderedMap} from 'immutable';


export function arrayToMap(arr, DataRecord = Map) {
  return arr.reduce((acc, item) => acc.set(item.id, new DataRecord(item)), new OrderedMap({}))
}


export function mapToArray(map) {
  return map.valueSeq().toArray();
}