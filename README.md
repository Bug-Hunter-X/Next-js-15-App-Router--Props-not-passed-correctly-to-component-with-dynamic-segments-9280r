# Next.js 15 App Router: Props not passed correctly to component with dynamic segments

This repository demonstrates a bug in Next.js 15's App Router where props are not passed correctly to components when using dynamic routing segments. The issue occurs when props are passed to a component which is a child component of a page that is using dynamic segments, resulting in the props not being received in the child component.

## Bug

The bug is demonstrated in the `bug.js` file. The component `MyComponent` which is a child component of `Home` component. Props is not passed correctly to `MyComponent`. It logs undefined in the console. 

## Solution

The solution is demonstrated in the `bugSolution.js` file. The props passed correctly to the component `MyComponent`.  The issue can be resolved by ensuring the structure of the props passed to the child component in the layout file when using dynamic routing segments.
