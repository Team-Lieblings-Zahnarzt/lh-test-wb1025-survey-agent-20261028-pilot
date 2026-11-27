import { FUSSZEILE } from './lib/texte';

export default function App() {
  return (
    <main style={{ padding: 32, fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: 28, fontWeight: 700 }}>Stand: zweite Runde</h1>
      <p style={{ color: '#555', marginTop: 12 }}>{FUSSZEILE}</p>
    </main>
  );
}
