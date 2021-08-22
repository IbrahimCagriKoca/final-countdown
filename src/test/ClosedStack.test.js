import ClosedStack from '../components/closed-stack/ClosedStack';
import React from 'react';
import { render } from '@testing-library/react';

describe('check html tags', () => {
    it('should return main tags classname', () => {
        const {
            container: { firstChild },
        } = render(<ClosedStack onClick={() => {}} order={5} />);
        expect(firstChild.className).toBe('closed-stack');
    });
});
