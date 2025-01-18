```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <MyComponent someValue={123} />
    </div>
  );
}

// components/MyComponent.js
export default function MyComponent({ someValue }) {
  console.log(someValue); // Output: 123
  return (
    <div>This is MyComponent</div>
  );
}
```