import sortBy from 'lodash/sortBy';
import filter from 'lodash/filter';

// eslint-disable-next-line no-unused-vars
type ConditionType = (object: any) => any;

export const sortObject = (object: object, condition: ConditionType[], isShowNewest: boolean = false) => {
  const sorted = sortBy(object, condition);
  return isShowNewest ? sorted.reverse() : sorted;
};

export const filterObject = (object: object, condition: ConditionType) => filter(object, condition);
