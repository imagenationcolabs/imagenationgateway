export default function Home() {
  return (
    <main style={{ backgroundColor: 'black', color: 'white', padding: '100px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '40px' }}>ImageNation Gateway</h1>
      <p style={{ fontSize: '18px', marginTop: '20px' }}>
        This is your sovereign altar. When a creation is credited to another identity—like Ada or VENCCI—a new lab is born.
        Each lab is claimable, verifiable, and ritualized into the living economy.
      </p>
      <a href="/claim" style={{ marginTop: '40px', display: 'inline-block', padding: '10px 20px', backgroundColor: 'white', color: 'black', borderRadius: '5px', textDecoration: 'none' }}>
        Claim Your Lab
      </a>
    </main>
  );
}
