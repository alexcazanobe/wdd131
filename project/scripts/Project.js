const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        if (window.innerWidth <= 600) {
            navMenu.classList.toggle('active');
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 600) {
            navMenu.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const majorChordsContainer = document.getElementById('major-chords');
    const minorChordsContainer = document.getElementById('minor-chords');
    const seventhChordsContainer = document.getElementById('seventh-chords');
    const pentatonicScalesContainer = document.getElementById('pentatonic-scales');

    const majorChords = [
        { name: 'D Major', image: 'https://www.guitarraviva.com/wp-content/uploads/2011/04/acorde-basico-guitarra-re-d.jpg' },
        { name: 'E Major', image: 'https://www.guitarraviva.com/wp-content/uploads/2011/04/acorde-b%C3%A1sico-guitarra-mi-e.jpg' },
        { name: 'F Major', image: 'https://www.guitarraviva.com/wp-content/uploads/2011/04/acorde-b%C3%A1sico-guitarra-sol-g.jpg' },
        
    ];

    const minorChords = [
        { name: 'A Minor', image: 'https://www.guitarraviva.com/wp-content/uploads/2011/04/acorde-b%C3%A1sico-guitarra-la-menor-am.jpg' },
        { name: 'E Minor', image: 'https://comisariopantera.mx/wp-content/uploads/Captura-de-Pantalla-2022-05-01-a-las-2.57.03-p.m.png' },
        { name: 'D Minor', image: 'https://www.guitarraviva.com/wp-content/uploads/2011/04/acorde-b%C3%A1sico-guitarra-re-menor-dm.jpg' },
       
    ];

    const seventhChords = [
        { name: 'C7', image: 'https://tocaruninstrumento.com/wp-content/uploads/Acordes-de-C7-810x1024-optimized.jpg' },
        { name: 'Am7', image: 'https://tocaruninstrumento.com/wp-content/uploads/Acorde-Am7-779x1024-optimized.jpg' },
        { name: 'Em7', image: 'https://tocaruninstrumento.com/wp-content/uploads/Acorde-de-Em7-2-776x1024-optimized.jpg' },
        
    ];

    const pentatonicScales = [
        { name: 'Major Scale', image: 'https://guitarmonia.es/wp-content/uploads/2017/07/escala-mayor-guitarra.png' },
        { name: 'Minor Scale', image: 'https://guitarmonia.es/wp-content/uploads/2017/07/escala-menor-guitarra.png' },
        { name: 'Major Pentatonic', image: 'https://guitarmonia.es/wp-content/uploads/2017/07/escala-pentatonica-mayor-guitarra.png' },
      
    ];

    const createChordElement = (chord) => {
        const chordDiv = document.createElement('div');
        chordDiv.classList.add('chord');

        const chordName = document.createElement('h3');
        chordName.textContent = chord.name;

        const chordImage = document.createElement('img');
        chordImage.src = chord.image;
        chordImage.alt = chord.name;
        chordImage.loading = 'lazy';

        chordDiv.appendChild(chordName);
        chordDiv.appendChild(chordImage);

        return chordDiv;
    };

    majorChords.forEach(chord => {
        majorChordsContainer.appendChild(createChordElement(chord));
    });

    minorChords.forEach(chord => {
        minorChordsContainer.appendChild(createChordElement(chord));
    });

    seventhChords.forEach(chord => {
        seventhChordsContainer.appendChild(createChordElement(chord));
    });

    pentatonicScales.forEach(scale => {
        pentatonicScalesContainer.appendChild(createChordElement(scale));
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const exercisesList = document.getElementById('exercises-list');
    const basicExercisesContainer = document.getElementById('basic-exercises');
    const advancedExercisesContainer = document.getElementById('advanced-exercises');

    const basicExercises = [
        { name: 'Finger Exercise 1', image: 'https://i.pinimg.com/236x/27/dd/ee/27ddee3e94f93ff7c5d623e495c60c9b.jpg' },
    ];

    const advancedExercises = [
        { name: 'Advanced Finger Exercise', image: 'https://momentoguitarra.com/wp-content/uploads/Recu%C3%A9rdame-coco-cover-video_0001-2-copy.webp' },
    ];

    const createExerciseElement = (exercise) => {
        const exerciseDiv = document.createElement('div');
        exerciseDiv.classList.add('exercise');

        const exerciseName = document.createElement('h3');
        exerciseName.textContent = exercise.name;

        const exerciseImage = document.createElement('img');
        exerciseImage.src = exercise.image;
        exerciseImage.alt = exercise.name;
        exerciseImage.loading = 'lazy';

        exerciseDiv.appendChild(exerciseName);
        exerciseDiv.appendChild(exerciseImage);

        return exerciseDiv;
    };

    basicExercises.forEach(exercise => {
        basicExercisesContainer.appendChild(createExerciseElement(exercise));
    });

    advancedExercises.forEach(exercise => {
        advancedExercisesContainer.appendChild(createExerciseElement(exercise));
    });
});