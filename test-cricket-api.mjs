const CRICKET_API_KEY = '1a822521-d7e0-46ff-98d3-3e51020863f3';
const url = `https://api.cricapi.com/v1/currentMatches?apikey=${CRICKET_API_KEY}&offset=0`;

try {
  const response = await fetch(url);
  const data = await response.json();
  
  console.log('=== CRICKET API RESPONSE ===');
  console.log('Status:', data.status);
  console.log('Total matches:', data.data?.length || 0);
  console.log('');
  
  if (data.data && data.data.length > 0) {
    console.log('=== FIRST 5 MATCHES ===');
    data.data.slice(0, 5).forEach((match, i) => {
      console.log(`\nMatch ${i + 1}:`);
      console.log('  ID:', match.id);
      console.log('  Name:', match.name);
      console.log('  Status:', match.status);
      console.log('  Match Started:', match.matchStarted);
      console.log('  Match Ended:', match.matchEnded);
      console.log('  Has Score:', !!match.score);
      console.log('  Score:', JSON.stringify(match.score));
      console.log('  Fantasy Enabled:', match.fantasyEnabled);
    });
    
    // Count live matches
    const liveMatches = data.data.filter(m => m.matchStarted && !m.matchEnded);
    console.log(`\n=== LIVE MATCH COUNT ===`);
    console.log(`Total live matches: ${liveMatches.length}`);
    
    if (liveMatches.length > 0) {
      console.log('\n=== LIVE MATCHES ===');
      liveMatches.forEach((match, i) => {
        console.log(`\nLive Match ${i + 1}:`);
        console.log('  Name:', match.name);
        console.log('  Status:', match.status);
        console.log('  Score:', JSON.stringify(match.score));
      });
    }
  }
} catch (err) {
  console.error('Error:', err.message);
}
