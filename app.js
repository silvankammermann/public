fetch("https://rickandmortyapi.com/api/character?page=2")
    .then(res => res.json())
    .then(res => {
        const content = document.querySelector(".content");

        res.results.forEach((character) => {
            console.log(character);
            const template = document.getElementById("template-character").content.cloneNode(true);

            const img = template.querySelector(".character__picture img");
            const name = template.querySelector(".character__name");
            const status = template.querySelector(".character__status");
            const episodes = template.querySelector(".character__episodes");

            img.src = character.image
            name.textContent = character.name;
            status.textContent = character.status + " - " + character.species;
            episodes.textContent = character.episode.length;

            content.appendChild(template);
        });
    });