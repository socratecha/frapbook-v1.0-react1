import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components'
import { getCollatzSequence, Collatz, App } from './App';

it('checks getCollatzSequence on 17 and 1', () => {
    expect(getCollatzSequence(17)).toEqual(
        [17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1 ]
    );
    expect(getCollatzSequence(1)).toEqual([1]);
});

it('checks getCollatzSequence on non-integer input', () => {
    expect(getCollatzSequence(1.0)).toEqual([1]);
});

it('checks getCollatzSequence contains an item', () => {
    expect(getCollatzSequence(101)).toContain(101*3 + 1);
});

it('checks getCollatzSequence on string input', () => {
    expect(() => { getCollatzSequence('1'); }).toThrow(TypeError);
});

it('checks Collatz with test renderer', () => {    
    const collatz = renderer.create(<Collatz number={ 13 } />).toJSON()
    expect(collatz).toHaveProperty(['props', 'className'], 'Collatz');
    expect(collatz).toHaveProperty(['children', '1', 'children', '2']);
    expect(collatz).toHaveProperty(['children', '0', 'type'], 'h2');
    expect(collatz.children[1].children[2].children).toEqual(["20"]);
    expect(collatz).toHaveProperty(
        ['children', '1', 'children', '4', 'children', '0'],
        '5'
    );
});

it('checks Collatz bold list style with test renderer', () => {    
    const collatz = renderer.create(<Collatz number={ 13 } />).toJSON()
    expect(collatz.children[1].children[2]).toHaveStyleRule(
        'font-weight', 'bold');
});
