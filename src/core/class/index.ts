/**
 * `Class`.
 */

// IDEA: parent = function.name

export const Class = (...members: Array<object | Function>): Function => {
  const wrappers = members.map((member: object | Function) => {
    const wrapper: any = {};
    const getMemberProps: Function = (member: object | Function) =>
      typeof member === 'function' ? member() : member;
    const memberProps: Array<any> = Object.entries(getMemberProps(member));

    memberProps.forEach(([propName, propValue]) => {
      const isMethod: boolean = typeof propValue === 'function';

      if (isMethod) {
        const context = Object.assign({}, ...members.map(member => getMemberProps(member)));
        wrapper[propName] = () => propValue(memberProps);
      } else {
        wrapper[propName] = propValue;
      }
    });

    return wrapper;
  });

  return () => Object.assign({}, ...wrappers);
}
