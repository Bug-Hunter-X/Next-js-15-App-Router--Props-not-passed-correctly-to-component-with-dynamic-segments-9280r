```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <MyComponent props ={"someValue": 123}/>
    </div>
  );
}

// components/MyComponent.js
export default function MyComponent({props}) {
  console.log(props);
  return (
    <div>This is MyComponent</div>
  );
}
```