import getData from '../utils/getData';

const Home = async () => {
  const characters = await getData();

  const view = `
    <div class="Characters">
    ${characters.results.map(character => `
      <article class="Character-item">
        <a href="#/${character.id}/">
          <img src="${character.image}" alt="${character.name}">
          <p class="Character-item-name">${character.name}</p>
          <p class="Character-item-gender">${character.gender}</p>
          <p class="Character-item-status">${character.status}</p>
        </a>
      </article>
    `).join('')}
    </div>
  `;
  return view;
}

export default Home;