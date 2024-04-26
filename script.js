document.addEventListener('DOMContentLoaded', function() {
  const loadNewsBtn = document.getElementById('load-news-btn');
  loadNewsBtn.addEventListener('click', fetchNews);
});

function fetchNews() {
  const apiKey = 'e7fbaba830f74892aea41dcc725c0450';
  const topic = 'Graphic Design';
  const url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`;

  fetch(url)
      .then(response => response.json())
      .then(data => {
          displayNews(data.articles.slice(0, 15));
      })
      .catch(error => {
          console.error('Error fetching news:', error);
      });
}

function displayNews(articles) {
  const newsList = document.getElementById('news-list');
  newsList.innerHTML = ''; 

  articles.forEach(article => {
      const li = document.createElement('li');
      li.innerHTML = `
          <div class="news-title">${article.title}</div>
          <div class="news-description">${article.description}</div>
          <div><a href="${article.url}" target="_blank">Read more</a></div>
      `;
      newsList.appendChild(li);
  });
}

