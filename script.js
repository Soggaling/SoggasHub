const searchInput = document.getElementById('searchInput');
if (searchInput) {
  const gameGrid = document.getElementById('gameGrid');
  const links = gameGrid.getElementsByTagName('a');

  searchInput.addEventListener('input', function () {
    const filter = searchInput.value.toLowerCase();

    for (let i = 0; i < links.length; i++) {
      const txt = links[i].textContent.toLowerCase();
      links[i].style.display = txt.includes(filter) ? '' : 'none';
    }
  });
}