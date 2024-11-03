declare module '@react-three/fiber';
declare module '@react-three/drei';
declare namespace JSX {
    interface IntrinsicElements {
      primitive: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { object: any };
    }
  }
  declare namespace JSX {
    interface IntrinsicElements {
      primitive: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { object: any };
      ambientLight: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & THREE.AmbientLight;
      directionalLight: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & THREE.DirectionalLight;
    }
  }
  //Declaring Three.js objects so TypeScript can recognize them as valid JSX elements.