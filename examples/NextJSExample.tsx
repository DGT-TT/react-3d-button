'use client';

import React, { useState } from 'react';
import { Button3D } from '../src';
import '../src/styles.css';

export default function NextJSExample() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  return (
    <div style={{ padding: '40px', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Next.js App Router Example</h1>
      <p>This example works with Next.js 13+ App Router</p>
      
      <section style={{ marginBottom: '40px' }}>
        <h2>Counter Example</h2>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button3D 
            type="error" 
            onPress={() => setCount(count - 1)}
            disabled={count <= 0}
          >
            Decrement
          </Button3D>
          <div style={{ 
            padding: '12px 24px', 
            background: '#f0f0f0', 
            borderRadius: '6px',
            fontWeight: 'bold',
            fontSize: '18px'
          }}>
            Count: {count}
          </div>
          <Button3D 
            type="success" 
            onPress={() => setCount(count + 1)}
          >
            Increment
          </Button3D>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Active State Toggle</h2>
        <Button3D 
          type="primary" 
          active={isActive}
          onPress={() => setIsActive(!isActive)}
          ripple={true}
        >
          {isActive ? 'Active!' : 'Click to Activate'}
        </Button3D>
        <p style={{ marginTop: '12px', color: '#666' }}>
          Current state: {isActive ? 'Active' : 'Inactive'}
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Async Operation Example</h2>
        <AsyncButton />
      </section>
    </div>
  );
}

function AsyncButton() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  const handleAsyncOperation = async () => {
    setLoading(true);
    setResult('Loading...');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setResult('✅ Operation completed!');
    setLoading(false);
  };

  return (
    <div>
      <Button3D 
        type="info" 
        disabled={loading}
        onPress={handleAsyncOperation}
        ripple={true}
      >
        {loading ? 'Loading...' : 'Start Async Operation'}
      </Button3D>
      {result && (
        <p style={{ marginTop: '12px', fontWeight: 'bold' }}>
          {result}
        </p>
      )}
    </div>
  );
}
