'use client';

import {useRef} from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

export const useGSAPHook = (container: HTMLElement, fn: () => void) => {
    const containerRef = useRef(container);

    useGSAP(() => {
        fn();
    }, {scope: containerRef ?? 'body'});
}