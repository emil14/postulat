"use strict";
/**
 * `Class`.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Class = (...members) => {
    const wrappers = members.map((member) => {
        const wrapper = {};
        const getMemberProps = (member) => typeof member === 'function' ? member() : member;
        const memberProps = Object.entries(getMemberProps(member));
        memberProps.forEach(([propName, propValue]) => {
            const isMethod = typeof propValue === 'function';
            if (isMethod) {
                const context = Object.assign({}, ...members.map(member => getMemberProps(member)));
                wrapper[propName] = () => propValue(memberProps);
            }
            else {
                wrapper[propName] = propValue;
            }
        });
        return wrapper;
    });
    return () => Object.assign({}, ...wrappers);
};
