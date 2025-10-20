export async function fetchPuzzleData() {
  const res = await fetch('/public/data/puzzle.json', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('No se puede cargar el puzzle');
  }
  return res.json();
}