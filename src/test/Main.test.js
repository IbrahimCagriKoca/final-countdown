import Main from '../pages/main/Main';
import React from 'react';
import { render } from '@testing-library/react';

describe('check html tags', () => {
    it('should return main tags classname', () => {
        const {
            container: { firstChild },
        } = render(<Main />);
        expect(firstChild.className).toBe('main');
    });
});
