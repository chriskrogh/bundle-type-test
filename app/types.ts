import _ from "lodash";

// Unused export
export const SOMETHING = _.noop;

export type Count = {
  count: number;
};

/**
 * If this is imported by Counter, lodash will be bundled into the client bundle.
 * (even though it's not used in the client)
 */
export const INITIAL_COUNT = 0;
