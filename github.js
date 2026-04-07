document.getElementById('saludbt').addEventListener('click', async () => {
  const res = await fetch('https://api.github.com/repos/mouredev/hello-python/commits?per_page=10');
  const commits = await res.json();

  commits.forEach((item, i) => {
    const hash = item.sha.substring(0, 7).toUpperCase();
    const autor = item.commit.author.name;
    const mensaje = item.commit.message.split('\n')[0];
    const fecha = new Date(item.commit.author.date).toLocaleString();

    console.log(`Commit ${i + 1} | ${hash} | ${autor} | ${mensaje} | ${fecha}`);

    const p = document.createElement('p');
    p.textContent = `Commit ${i + 1} | ${hash} | ${autor} | ${mensaje} | ${fecha}`;
    document.getElementById('commits-list').appendChild(p);
  });
});