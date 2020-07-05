import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {

  const id = getHash();
  const character = await getData(id);
  const {image, name, episode, status, species, gender, origin, location} = character;
  
  const view = `
    <div class="Characters-inner">
      <article class="Characters-card">
        <img src="${image}" alt="${name}">
        <div class="Characters-card-info"> 
          <h2>${name}</h2>
          <p>Episodes: <span>${episode.length}</span></p>
          <p>Status: <span>${status}</span></p>
          <p>Species: <span>${species}</span></p>
          <p>Gender: <span>${gender}</span></p>
          <p>Origin: <span>${origin.name}</span></p>
          <p>Last Location: <span>${location.name}</span></p>
        </div>
      </article>
    </div>
  `
  return view;
}

export default Character;