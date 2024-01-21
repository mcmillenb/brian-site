async function loadRep() {
  const response = await fetch('https://api.stackexchange.com/2.3/users/2678454?site=stackoverflow');
  const { items } = await response.json();
  const rep = items?.[0]?.reputation;

  if (rep) {
    const stat = Math.round(rep / 100) / 10 + 'k';
    document.querySelector('#so-card .stat').innerHTML = `Rep: ${stat}`;
  }
}

(async function () {
  console.log('The cosmos in a pine cone.');

  loadRep();
  setInterval(loadRep, 60000);
})();
