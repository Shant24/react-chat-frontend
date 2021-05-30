import sortBy from 'lodash/sortBy';
import filter from 'lodash/filter';

type ConditionType = (object: any) => any;

export const sortObject = (object: object, condition: ConditionType[], isShowNewest: boolean = false) => {
  const sorted = sortBy(object, condition);
  return isShowNewest ? sorted.reverse() : sorted;
};

export const filterObject = (object: object, condition: ConditionType) => {
  const filtered = filter(object, condition);
  return filtered;
};
