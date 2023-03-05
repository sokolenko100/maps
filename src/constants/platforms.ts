const NODE_ENV = process.env.NODE_ENV;
const IS_TESTS = NODE_ENV === 'test';

export {NODE_ENV, IS_TESTS};
