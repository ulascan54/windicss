const classNames = [
  'container',
  'box-border', 'box-content',
  'block',
  'inline-block', 'inline',
  'flex',
  'inline-flex',
  'table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row',
  'flow-root',
  'grid',
  'inline-grid',
  'contents',
  'hidden',
  'float-right',
  'clear-left',
  'object-contain',
  'overflow-auto',
  'overscroll-auto',
  'static',
  'inset-0',
  'bottom-0',
  'left-0',
  'right-0',
  'inset-3px', 'inset-3rem', 'inset-3/9', 'inset-x-8', 'inset-y-9',
  '-inset-4rem', '-inset-0.5rem', '-inset-2/13',
  'inset-$test-variable',
  'visible',
  'invisible',
  'z-0', 'z-auto', 'z-321', 'z-789', 'z-$test-variable',
  'flex-row', 'flex-row-reverse', 'flex-col', 'flex-col-reverse', 'flex-wrap', 'flex-wrap-reverse', 'flex-nowrap', 'flex-1', 'flex-auto', 'flex-initial', 'flex-none', 'flex-grow-0', 'flex-grow', 'flex-shrink-0', 'flex-shrink',
  'order-1', 'order-123',
  '-order-456',
  'order-$test-variable',
  'grid-cols-1', 'grid-cols-none', 'grid-cols-23', 'grid-cols-$test-variable',
  'col-auto', 'col-span-1', 'col-start-1', 'col-end-1', 'col-span-123', 'col-start-567', 'col-end-233', 'col-span-$test-variable', 'col-start-$test-variable', 'col-end-$test-variable',
  'grid-rows-1', 'grid-rows-none', 'grid-rows-123', 'grid-rows-$test-variable',
  'row-auto', 'row-span-1', 'row-start-1', 'row-end-1', 'row-span-78', 'row-start-61', 'row-end-60', 'row-span-$test-variable', 'row-start-$test-variable', 'row-end-$test-variable',
  'grid-flow-row',
  'auto-cols-auto', 'auto-cols-max', 'auto-cols-fr', 'auto-rows-auto', 'auto-rows-min', 'auto-rows-max', 'auto-rows-fr',
  'gap-0', 'gap-x-0', 'gap-y-0', 'gap-0.5', 'gap-128', 'gap-x-256', 'gap-y-444', 'gap-y-22.3', 'gap-x-3px', 'gap-y-4rem', 'gap-$test-variable', 'gap-y-$test-variable', 'gap-x-$test-variable',
  'justify-start', 'justify-evenly', 'justify-items-auto', 'justify-self-auto',
  'content-center', 'content-start', 'content-end', 'content-between', 'content-around', 'content-evenly',
  'items-start', 'items-end', 'items-center', 'items-baseline', 'items-stretch',
  'self-auto', 'self-start', 'self-end', 'self-center', 'self-stretch',
  'place-content-center', 'place-items-auto', 'place-items-start', 'place-items-end', 'place-items-center', 'place-items-stretch', 'place-self-auto', 'place-self-start', 'place-self-end', 'place-self-center', 'place-self-stretch',
  'p-0', 'p-px',
  'py-0', 'py-px',
  'p-3px', 'p-5rem', 'p-128',
  'pl-43',
  'p-$test-variable',
  'pr-$test-variable',
  'm-0', 'm-px', 'm-8px', 'm-9rem',
  '-m-12rem', '-my-23px', '-ml-148px',
  'm-$test-variable',
  'mr-$test-variable',
  'space-y-0', 'space-y-1.3', 'space-x-256', 'space-y-reverse',
  '-space-x-13', '-space-y-25',
  'space-x-12px', 'space-x-reverse',
  '-space-y-4rem',
  'space-x-$test-variable', 'space-y-$test-variable',
  'w-0', 'w-full', 'w-screen', 'w-min', 'w-max', 'w-13', 'w-3/14', 'w-xs', 'w-sm', 'w-md', 'w-lg', 'w-2xl', 'w-screen-sm', 'w-screen-md', 'w-screen-lg', 'w-screen-xl', 'w-screen-2xl', 'w-$test-variable',
  'min-w-0', 'min-w-screen-sm', 'min-w-$test-variable',
  'max-w-0', 'max-w-screen-sm', 'max-w-13', 'max-w-3/14', 'max-w-xs', 'max-w-sm', 'max-w-md', 'max-w-lg', 'max-w-2xl', 'max-w-$test-variable',
  'h-0', 'h-auto', 'h-px', 'h-1/2', 'h-full', 'h-screen', 'h-13', 'h-3/14', 'h-xs', 'h-sm', 'h-md', 'h-lg', 'h-2xl', 'h-screen-sm', 'h-screen-md', 'h-screen-lg', 'h-screen-xl', 'h-screen-2xl', 'h-$test-variable',
  'min-h-0', 'min-h-full', 'min-h-screen', 'min-h-13', 'min-h-3/14', 'min-h-xs', 'min-h-sm', 'min-h-md', 'min-h-lg', 'min-h-2xl', 'min-h-screen-sm', 'min-h-screen-md', 'min-h-screen-lg', 'min-h-screen-xl', 'min-h-screen-2xl', 'min-h-$test-variable',
  'max-h-0', 'max-h-px', 'max-h-full', 'max-h-screen',
  'font-sans', 'font-serif', 'font-mono',
  'text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl', 'text-7xl', 'text-8xl', 'text-9xl', 'text-20xl', 'text-4px', 'text-15rem', 'text-size-$test-variable',
  'antialiased',
  'subpixel-antialiased',
  'italic',
  'not-italic',
  'font-thin', 'font-extralight', 'font-light', 'font-normal', 'font-medium', 'font-semibold', 'font-bold', 'font-extrabold', 'font-black', 'font-123', 'font-$test-variable',
  'normal-nums',
  'ordinal',
  'slashed-zero',
  'lining-nums',
  'oldstyle-nums',
  'proportional-nums',
  'tabular-nums',
  'diagonal-fractions',
  'stacked-fractions',
  'tracking-tighter', 'tracking-tight', 'tracking-normal', 'tracking-wide', 'tracking-wider', 'tracking-widest', 'tracking-3em',
  '-tracking-2em',
  'tracking-$test-variable',
  'leading-3', 'leading-4', 'leading-5', 'leading-6', 'leading-7', 'leading-8', 'leading-9', 'leading-10', 'leading-none', 'leading-tight', 'leading-snug', 'leading-normal', 'leading-relaxed', 'leading-loose', 'leading-18', 'leading-12rem', 'leading-3px', 'leading-$test-variable',
  'list-none', 'list-disc', 'list-decimal', 'list-inside', 'list-outside',
  'placeholder-transparent', 'placeholder-current', 'placeholder-black', 'placeholder-white', 'placeholder-$test-variable', 'placeholder-opacity-0', 'placeholder-opacity-21', 'placeholder-opacity-$test-variable',
  'text-left', 'text-center', 'text-right', 'text-justify', 'text-transparent', 'text-current', 'text-black', 'text-white', 'text-$test-variable', 'text-opacity-0', 'text-opacity-33', 'text-opacity-$test-variable',
  'underline',
  'line-through',
  'no-underline',
  'uppercase',
  'lowercase',
  'capitalize',
  'normal-case',
  'truncate',
  'overflow-ellipsis', 'overflow-clip',
  'align-baseline', 'align-top', 'align-middle', 'align-bottom', 'align-text-top', 'align-text-bottom',
  'whitespace-normal', 'whitespace-nowrap', 'whitespace-pre', 'whitespace-pre-line', 'whitespace-pre-wrap',
  'break-normal', 'break-words', 'break-all',
  'bg-fixed', 'bg-local', 'bg-scroll', 'bg-clip-border', 'bg-clip-padding', 'bg-clip-content', 'bg-clip-text', 'bg-transparent', 'bg-current', 'bg-black', 'bg-white', 'bg-hex-1c1c1e', 'bg-$test-variable', 'bg-opacity-0', 'bg-opacity-55', 'bg-opacity-$test-variable', 'bg-bottom', 'bg-center', 'bg-left', 'bg-left-bottom', 'bg-left-top', 'bg-right', 'bg-right-bottom', 'bg-right-top', 'bg-top', 'bg-repeat', 'bg-no-repeat', 'bg-repeat-x', 'bg-repeat-y', 'bg-repeat-round', 'bg-repeat-space', 'bg-auto', 'bg-cover', 'bg-contain', 'bg-none', 'bg-gradient-to-t', 'bg-gradient-to-tr', 'bg-gradient-to-r', 'bg-gradient-to-br', 'bg-gradient-to-b', 'bg-gradient-to-bl', 'bg-gradient-to-l', 'bg-gradient-to-tl',
  'from-transparent', 'from-current', 'from-black', 'from-white',
  'via-transparent', 'via-current', 'via-black', 'via-white',
  'to-transparent', 'to-current', 'to-black', 'to-white', 'to-hex-1c1c1e', 'to-$test-variable',
  'rounded-none', 'rounded-sm', 'rounded-4rem', 'rounded-t', 'rounded-3px', 'rounded-10xl', 'rounded-t-4px', 'rounded-$test-variable', 'rounded-t-$test-variable', 'rounded-tl-$test-variable',
  'border-0', 'border-2', 'border-t-23', 'border-t-3px', 'border-l-4rem', 'border-width-$test-variable', 'border-t-width-$test-variable', 'border-l-width-$test-variable', 'border-transparent', 'border-current', 'border-black', 'border-white', 'border-hex-1c1c1e', 'border-$test-variable', 'border-opacity-0', 'border-opacity-66', 'border-opacity-$test-variable', 'border-solid', 'border-dashed', 'border-dotted', 'border-double', 'border-none',
  'divide-y-0', 'divide-y-reverse', 'divide-x-reverse', 'divide-x-321', 'divide-y-56', 'divide-x-$test-variable', 'divide-y-$test-variable', 'divide-transparent', 'divide-current', 'divide-black', 'divide-white', 'divide-hex-1c1c1e', 'divide-$test-variable', 'divide-opacity-0', 'divide-opacity-77', 'divide-opacity-$test-variable', 'divide-solid', 'divide-dashed', 'divide-dotted', 'divide-double', 'divide-none',
  'ring-0', 'ring-inset', 'ring-12', 'ring-32px', 'ring-4rem', 'ring-width-$test-variable', 'ring-transparent', 'ring-current', 'ring-black', 'ring-white', 'ring-rose-200', 'ring-fuchsia-500', 'ring-violet-300', 'ring-light-blue-400', 'ring-emerald-50', 'ring-amber-300', 'ring-warm-gray-500', 'ring-true-gray-600', 'ring-cool-gray-500', 'ring-blue-gray-300', 'ring-hex-1c1c1e', 'ring-$test-variable', 'ring-opacity-0', 'ring-opacity-88', 'ring-opacity-$test-variable', 'ring-offset-0', 'ring-offset-12rem', 'ring-offset-4px', 'ring-offset-width-$test-variable', 'ring-offset-transparent', 'ring-offset-current', 'ring-offset-black', 'ring-offset-white', 'ring-offset-gray-50', 'ring-offset-hex-1c1c1e', 'ring-offset-$test-variable',
  'shadow-sm', 'shadow', 'shadow-md', 'shadow-lg', 'shadow-xl', 'shadow-2xl', 'shadow-inner', 'shadow-none',
  'opacity-0', 'opacity-33', 'opacity-$test-variable',
  'border-collapse', 'border-separate',
  'table-auto', 'table-fixed',
  'transition-none', 'transition-all', 'transition', 'transition-colors', 'transition-opacity', 'transition-shadow', 'transition-transform',
  'duration-75', 'duration-333', 'duration-$test-variable',
  'ease-linear', 'ease-in', 'ease-out', 'ease-in-out',
  'delay-75', 'delay-444', 'delay-$test-variable',
  'animate-none', 'animate-spin', 'animate-ping', 'animate-pulse', 'animate-bounce',
  'transform', 'transform-gpu', 'transform-none',
  'origin-center',
  'scale-0', 'scale-15', 'scale-x-170', 'scale-y-24', 'scale-$test-variable', 'scale-x-$test-variable', 'scale-y-$test-variable',
  'rotate-0',
  '-rotate-1',
  'rotate-75', 'rotate-185',
  '-rotate-260',
  'rotate-$test-variable',
  'translate-x-0', 'translate-x-2.9', 'translate-x-2/13', 'translate-y-35',
  '-translate-y-62',
  'translate-x-3rem', 'translate-y-4px', 'translate-x-$test-variable', 'translate-y-$test-variable',
  'skew-x-0', 'skew-x-74',
  '-skew-y-74',
  'skew-x-$test-variable', 'skew-y-$test-variable',
  'appearance-none',
  'cursor-auto', 'cursor-default', 'cursor-pointer', 'cursor-wait', 'cursor-text', 'cursor-move', 'cursor-not-allowed',
  'outline-none', 'outline-white', 'outline-black', 'outline-gray-200', 'outline-green-400', 'outline-dotted-gray-200', 'outline-solid-blue-400', 'outline-hex-1c1c1e', 'outline-solid-hex-1c1c1e', 'outline-dotted-hex-1c1c1e', 'outline-$test-variable', 'outline-solid-$test-variable', 'outline-dotted-$test-variable',
  'pointer-events-none', 'pointer-events-auto',
  'resize-none', 'resize-y', 'resize-x', 'resize',
  'select-none', 'select-text', 'select-all', 'select-auto',
  'fill-current', 'fill-gray-300', 'fill-red-400', 'fill-hex-1c1c1e', 'fill-$test-variable',
  'stroke-current', 'stroke-blue-400', 'stroke-green-500', 'stroke-hex-1c1c1e', 'stroke-$test-variable', 'stroke-0', 'stroke-1', 'stroke-2', 'stroke-5', 'stroke-12', 'stroke-width-$test-variable',
  'sr-only',
  'not-sr-only',
];

export default classNames;
