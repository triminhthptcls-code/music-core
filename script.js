// SOUNDWAVE - JavaScript chỉ bổ sung tương tác, không kết nối máy chủ.
// Đọc từng nhóm hàm, KHÔNG cần học thuộc ngay nếu bạn mới học HTML/CSS.
document.addEventListener('DOMContentLoaded', function () {
  // 1. Player mô phỏng: các nút đổi tên bài và trạng thái, KHÔNG phát nhạc.
  const demoSongs = [
    { title: 'Midnight City', artist: 'An Nhiên', cover: 'assets/cover-1.svg' },
    { title: 'Late Night Letters', artist: 'Lê Minh', cover: 'assets/cover-2.svg' },
    { title: 'After Glow', artist: 'Mây Hồng', cover: 'assets/cover-3.svg' },
    { title: 'Soft Signal', artist: 'An Nhiên', cover: 'assets/cover-4.svg' }
  ];
  let currentSong = 0;
  let isPlaying = false;
  const playerToggle = document.getElementById('player-toggle');
  const playerTitle = document.getElementById('player-title');
  const playerArtist = document.getElementById('player-artist');
  const playerCover = document.querySelector('.player-cover');
  const playerStatus = document.getElementById('player-status');
  function renderPlayer() {
    const song = demoSongs[currentSong];
    playerTitle.textContent = song.title;
    playerArtist.textContent = song.artist;
    playerCover.src = song.cover;
    playerToggle.textContent = isPlaying ? '❚❚' : '▶';
    playerToggle.setAttribute('aria-pressed', String(isPlaying));
    playerToggle.setAttribute('aria-label', isPlaying ? 'Tạm dừng mô phỏng' : 'Phát mô phỏng');
    playerStatus.textContent = isPlaying ? 'Đang phát (mô phỏng)' : 'Bản phát minh họa';
  }
  playerToggle.addEventListener('click', function () { isPlaying = !isPlaying; renderPlayer(); });
  document.getElementById('player-next').addEventListener('click', function () {
    currentSong = (currentSong + 1) % demoSongs.length;
    renderPlayer();
  });
  document.getElementById('player-prev').addEventListener('click', function () {
    currentSong = (currentSong - 1 + demoSongs.length) % demoSongs.length;
    renderPlayer();
  });
  document.querySelectorAll('.play-song').forEach(function (button) {
    button.addEventListener('click', function () {
      const title = button.dataset.song;
      const index = demoSongs.findIndex(function (s) { return s.title === title; });
      if (index >= 0) { currentSong = index; }
      else { demoSongs.push({ title: title, artist: button.dataset.artist, cover: button.dataset.cover }); currentSong = demoSongs.length - 1; }
      isPlaying = true;
      renderPlayer();
    });
  });

  // 2. Search: lọc ngay trên các bài có sẵn trong trang.
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    const genreFilter = document.getElementById('genre-filter');
    const yearFilter = document.getElementById('year-filter');
    const sortFilter = document.getElementById('sort-filter');
    const container = document.getElementById('search-results');
    const cards = Array.from(container.querySelectorAll('.track-row'));
    const resultCount = document.getElementById('result-count');
    const emptyMessage = document.getElementById('search-empty');
    function updateSearch() {
      const keyword = searchInput.value.trim().toLocaleLowerCase('vi');
      const genre = genreFilter.value;
      const year = yearFilter.value;
      const sorted = cards.slice().sort(function (a, b) {
        if (sortFilter.value === 'az') return a.dataset.title.localeCompare(b.dataset.title, 'vi');
        if (sortFilter.value === 'newest') return Number(b.dataset.year) - Number(a.dataset.year);
        return Number(b.dataset.plays) - Number(a.dataset.plays);
      });
      let shown = 0;
      sorted.forEach(function (card) {
        const matchesKeyword = (card.dataset.title + ' ' + card.dataset.artist).includes(keyword);
        const matchesGenre = genre === 'all' || card.dataset.genre === genre;
        const matchesYear = year === 'all' || card.dataset.year === year;
        card.hidden = !(matchesKeyword && matchesGenre && matchesYear);
        if (!card.hidden) shown++;
        container.appendChild(card);
      });
      resultCount.textContent = shown + ' kết quả';
      emptyMessage.hidden = shown !== 0;
    }
    [searchInput, genreFilter, yearFilter, sortFilter].forEach(function (control) {
      control.addEventListener('input', updateSearch);
      control.addEventListener('change', updateSearch);
    });
    const listButton = document.getElementById('view-list');
    const gridButton = document.getElementById('view-grid');
    function changeView(isGrid) {
      container.classList.toggle('grid-view', isGrid);
      listButton.classList.toggle('selected', !isGrid);
      gridButton.classList.toggle('selected', isGrid);
      listButton.setAttribute('aria-pressed', String(!isGrid));
      gridButton.setAttribute('aria-pressed', String(isGrid));
    }
    listButton.addEventListener('click', function () { changeView(false); });
    gridButton.addEventListener('click', function () { changeView(true); });
    const urlGenre = new URLSearchParams(window.location.search).get('genre');
    if (['Indie', 'Lo-Fi', 'EDM', 'Acoustic'].includes(urlGenre)) genreFilter.value = urlGenre;
    updateSearch();
  }

  // 3. Follow: thay trạng thái của nút theo dõi.
  const followButton = document.getElementById('follow-button');
  if (followButton) {
    followButton.addEventListener('click', function () {
      const following = followButton.getAttribute('aria-pressed') === 'true';
      followButton.setAttribute('aria-pressed', String(!following));
      followButton.textContent = following ? '+ Theo dõi' : '✓ Đang theo dõi';
      document.getElementById('follow-status').textContent = 'Đây là thao tác mô phỏng, chưa lưu vào tài khoản.';
    });
  }

  // 4. Contact: kiểm tra dữ liệu bằng HTML required/email; không gửi thật.
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      document.getElementById('contact-status').textContent = 'Đã kiểm tra thông tin hợp lệ! Đây là biểu mẫu demo nên chưa gửi đến email.';
      form.reset();
    });
  }
});
