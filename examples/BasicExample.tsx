import React from 'react';
import { Button3D } from '../src';
import '../src/styles.css';
// Import different themes to test
// import '../src/themes/ocean.css';
// import '../src/themes/sunset.css';
// import '../src/themes/forest.css';
// import '../src/themes/pirate.css';
// import '../src/themes/neon.css';

export default function BasicExample() {
  return (
    <div style={{ padding: '40px', fontFamily: 'system-ui, sans-serif' }}>
      <h1>React 3D Button Examples</h1>

      <section style={{ marginBottom: '40px' }}>
        <h2>Button Types</h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button3D
            type="primary"
            onPress={() => console.log('Primary pressed')}
          >
            Primary
          </Button3D>
          <Button3D
            type="secondary"
            onPress={() => console.log('Secondary pressed')}
          >
            Secondary
          </Button3D>
          <Button3D
            type="tertiary"
            onPress={() => console.log('Tertiary pressed')}
          >
            Tertiary
          </Button3D>
          <Button3D
            type="success"
            onPress={() => console.log('Success pressed')}
          >
            Success
          </Button3D>
          <Button3D type="error" onPress={() => console.log('Error pressed')}>
            Error
          </Button3D>
          <Button3D
            type="warning"
            onPress={() => console.log('Warning pressed')}
          >
            Warning
          </Button3D>
          <Button3D type="info" onPress={() => console.log('Info pressed')}>
            Info
          </Button3D>
          <Button3D type="danger" onPress={() => console.log('Danger pressed')}>
            Danger
          </Button3D>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Button Sizes</h2>
        <div
          style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Button3D type="primary" size="small">
            Small
          </Button3D>
          <Button3D type="primary" size="medium">
            Medium
          </Button3D>
          <Button3D type="primary" size="large">
            Large
          </Button3D>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>With Icons (Using Simple SVG)</h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button3D
            type="primary"
            before={
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            }
          >
            Download
          </Button3D>
          <Button3D
            type="success"
            after={
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            }
          >
            Next
          </Button3D>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Ripple Effect</h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button3D type="primary" ripple={true}>
            With Ripple
          </Button3D>
          <Button3D type="secondary" ripple={true}>
            Click Me
          </Button3D>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Disabled State</h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button3D type="primary" disabled>
            Disabled
          </Button3D>
          <Button3D type="secondary" disabled>
            Can't Click
          </Button3D>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>As Link</h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button3D type="anchor" href="https://github.com">
            Visit GitHub
          </Button3D>
          <Button3D type="primary" href="https://npmjs.com">
            NPM Registry
          </Button3D>
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Without Hover Tilt (moveEvents=false)</h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button3D type="primary" moveEvents={false}>
            No Tilt Effect
          </Button3D>
          <Button3D type="secondary" moveEvents={true}>
            With Tilt (default)
          </Button3D>
        </div>
      </section>

      <div
        style={{
          marginTop: '60px',
          padding: '20px',
          background: '#f5f5f5',
          borderRadius: '8px',
        }}
      >
        <h3>To try different themes:</h3>
        <p>Uncomment one of the theme imports at the top of this file:</p>
        <pre
          style={{
            background: '#fff',
            padding: '12px',
            borderRadius: '4px',
            overflow: 'auto',
          }}
        >
          {`// import '../src/themes/ocean.css';
// import '../src/themes/sunset.css';
// import '../src/themes/forest.css';
// import '../src/themes/pirate.css';
// import '../src/themes/neon.css';`}
        </pre>
      </div>
    </div>
  );
}
