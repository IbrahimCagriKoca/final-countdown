import App from '../app';
import React from 'react';
import { render } from '@testing-library/react';

describe('check html tags', () => {
    it('should return main tags classname', () => {
        const {
            container: { firstChild },
        } = render(<App />);
        expect(firstChild.className).toBe('app');
    });
});
