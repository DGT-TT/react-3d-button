import type * as React from 'react';

const POSITION_STATES = ['middle', 'left', 'right'] as const;

export function classToModules(
  className: string[] = [],
  cssModule?: Record<string, string> | null
): string {
  if (!cssModule) {
    return className.join(' ').trim();
  }
  const ClassName: string[] = [];
  let i = className.length;
  while (i--) {
    if (cssModule[className[i]]) {
      ClassName.push(cssModule[className[i]]);
    }
  }
  return ClassName.join(' ').trim();
}

export function getClassName(
  className = '',
  cssModule?: Record<string, string> | null
): string {
  if (cssModule) {
    return cssModule[className] || className;
  }
  return className;
}

export function toggleMoveClasses({
  element,
  root,
  cssModule = null,
  state = null,
}: {
  element: HTMLElement | null;
  root: string;
  cssModule?: Record<string, string> | null;
  state?: string | null;
}): boolean {
  if (!element?.classList) {
    return false;
  }
  if (!state) {
    const states = [
      classToModules([`${root}--${POSITION_STATES[0]}`], cssModule),
      classToModules([`${root}--${POSITION_STATES[1]}`], cssModule),
      classToModules([`${root}--${POSITION_STATES[2]}`], cssModule),
    ];
    states.forEach((state) => {
      if (state) {
        element.classList.remove(state);
      }
    });
    return false;
  }

  const options = POSITION_STATES.filter((item) => item !== state);
  let i = options.length;
  while (i--) {
    const cls = classToModules([`${root}--${options[i]}`], cssModule);
    if (cls) {
      element.classList.remove(cls);
    }
  }

  const cls = classToModules([`${root}--${state}`], cssModule);
  if (cls) {
    element.classList.add(cls);
  }

  return true;
}

export function setCssEndEvent(
  element: HTMLElement | null,
  type: 'transition' | 'animation',
  options: { tolerance?: number } = {}
): Promise<void> {
  return new Promise((resolve) => {
    if (!element) {
      resolve();
      return;
    }

    const eventMap: Record<'transition' | 'animation', string> = {
      transition: 'transitionend',
      animation: 'animationend',
    };

    const eventName = eventMap[type];
    if (!eventName) {
      resolve();
      return;
    }

    const tolerance = options.tolerance || 0;
    let count = 0;
    let timeoutId: NodeJS.Timeout | null = null;
    let resolved = false;

    const cleanup = () => {
      if (!resolved) {
        resolved = true;
        element.removeEventListener(eventName, handler);
        if (timeoutId) {
          clearTimeout(timeoutId);
          timeoutId = null;
        }
        resolve();
      }
    };

    const handler = () => {
      count++;
      if (count > tolerance) {
        cleanup();
      }
    };

    element.addEventListener(eventName, handler);

    // Fallback timeout
    timeoutId = setTimeout(cleanup, 1000);
  });
}

export function createRippleEffect({
  event,
  button,
  content,
  className,
}: {
  event: React.MouseEvent | React.TouchEvent;
  button: HTMLElement;
  content: HTMLElement;
  className: string;
}) {
  const bounds = button.getBoundingClientRect();
  const top = window.pageYOffset || document.documentElement.scrollTop || 0;
  const bubble = document.createElement('span');
  const size = bounds.width < 50 ? bounds.width * 3 : bounds.width * 2;

  let pageX, pageY;
  if ('changedTouches' in event && event.changedTouches) {
    pageX = event.changedTouches[0].pageX;
    pageY = event.changedTouches[0].pageY;
  } else if ('pageX' in event) {
    pageX = event.pageX;
    pageY = event.pageY;
  } else {
    pageX = bounds.left + bounds.width / 2;
    pageY = bounds.top + bounds.height / 2;
  }

  bubble.className = className;
  bubble.style.top = `-${size / 2 - (pageY - bounds.top - top)}px`;
  bubble.style.left = `-${size / 2 - (pageX - bounds.left)}px`;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;

  content.appendChild(bubble);

  setCssEndEvent(bubble, 'animation').then(() => {
    window.requestAnimationFrame(() => {
      if (content.contains(bubble)) {
        content.removeChild(bubble);
      }
    });
  });

  return bubble;
}
