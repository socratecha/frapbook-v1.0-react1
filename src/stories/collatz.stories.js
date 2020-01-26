import React from 'react';
import { Collatz } from '../App.js';

export default {
    component: Collatz,
    title: 'Collatz sequence',
};

export const for8 = () => <Collatz number={8} />;
for8.story = { name: 'For 8' };

