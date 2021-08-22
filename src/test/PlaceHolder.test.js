import PlaceHolder from '../components/place-holder/PlaceHolder';
import React from 'react';
import { render } from '@testing-library/react';

describe('check html tags', () => {
    it('should return main tags classname', () => {
        const {
            container: { firstChild },
        } = render(<PlaceHolder />);
        expect(firstChild.className).toBe('place-holder');
    });
});
