import ClosedStack from '../components/stack-holder/StackHolder';
import React from 'react';
import { render } from '@testing-library/react';
import StackHolder from '../components/stack-holder/StackHolder';

describe('check html tags', () => {
    it('should return main tags uncompleted classname', () => {
        const {
            container: { firstChild },
        } = render(<StackHolder isCompleted={false} />);
        expect(firstChild.className).toBe('uncompleted-stack');
    });
    it('should return main tags completed classname', () => {
        const {
            container: { firstChild },
        } = render(<StackHolder isCompleted={true} />);
        expect(firstChild.className).toBe('completed-stack');
    });
});
