// Datos del Santo Rosario en español
// Incluye oraciones, misterios por día y secuencia completa

export const prayers = {
  signOfCross: {
    title: "Señal de la Cruz",
    text: "Por la señal de la Santa Cruz, de nuestros enemigos líbranos, Señor, Dios nuestro. En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén.",
  },
  apostlesCreed: {
    title: "Credo de los Apóstoles",
    text: "Creo en Dios, Padre Todopoderoso, Creador del cielo y de la tierra. Creo en Jesucristo, su único Hijo, nuestro Señor, que fue concebido por obra y gracia del Espíritu Santo, nació de Santa María Virgen, padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado, descendió a los infiernos, al tercer día resucitó de entre los muertos, subió a los cielos y está sentado a la derecha de Dios, Padre Todopoderoso. Desde allí ha de venir a juzgar a vivos y muertos. Creo en el Espíritu Santo, la santa Iglesia católica, la comunión de los santos, el perdón de los pecados, la resurrección de la carne y la vida eterna. Amén.",
  },
  ourFather: {
    title: "Padre Nuestro",
    text: "Padre nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal. Amén.",
  },
  hailMary: {
    title: "Ave María",
    text: "Dios te salve, María, llena eres de gracia, el Señor es contigo. Bendita Tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios, ruega por nosotros pecadores, ahora y en la hora de nuestra muerte. Amén.",
  },
  gloryBe: {
    title: "Gloria",
    text: "Gloria al Padre, al Hijo y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.",
  },
  fatima: {
    title: "Oración de Fátima",
    text: "Oh Jesús mío, perdónanos nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las almas, especialmente a las más necesitadas de tu misericordia. Amén.",
  },
  hailHolyQueen: {
    title: "Salve Regina",
    text: "Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra; Dios te salve. A Ti llamamos los desterrados hijos de Eva; a Ti suspiramos, gimiendo y llorando, en este valle de lágrimas. Ea, pues, Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos; y después de este destierro, muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh clemente, oh piadosa, oh dulce Virgen María! Ruega por nosotros, Santa Madre de Dios, para que seamos dignos de alcanzar las divinas promesas de Nuestro Señor Jesucristo. Amén.",
  },
  finalPrayer: {
    title: "Oración Final",
    text: "Oh Dios, cuyo Hijo Unigénito, por su vida, muerte y resurrección, nos otorgó las recompensas de la vida eterna; concédenos, te suplicamos, que meditando estos misterios del Santísimo Rosario de la Bienaventurada Virgen María, imitemos lo que contienen y obtengamos lo que prometen. Por Cristo nuestro Señor. Amén.",
  },
};

export const mysteries = {
  Gozosos: {
    name: "Misterios Gozosos",
    days: "Lunes y Sábado",
    list: [
      { title: "1º Misterio Gozoso", subtitle: "La Anunciación del Ángel a María", meditation: "Contemplamos cómo el ángel Gabriel anuncia a María que será Madre del Salvador. Pedimos la virtud de la humildad." },
      { title: "2º Misterio Gozoso", subtitle: "La Visitación de María a su prima Santa Isabel", meditation: "María visita a su prima Isabel llevando a Jesús en su vientre. Pedimos el amor al prójimo." },
      { title: "3º Misterio Gozoso", subtitle: "El Nacimiento de Jesús en Belén", meditation: "Jesús nace en un pesebre, humilde y pobre. Pedimos el espíritu de pobreza y desprendimiento." },
      { title: "4º Misterio Gozoso", subtitle: "La Presentación del Niño Jesús en el Templo", meditation: "María y José presentan al Niño al Señor. Pedimos la virtud de la obediencia y pureza." },
      { title: "5º Misterio Gozoso", subtitle: "El Niño Jesús perdido y hallado en el Templo", meditation: "María y José encuentran a Jesús enseñando en el Templo. Pedimos la búsqueda constante de Dios." },
    ],
  },
  Dolorosos: {
    name: "Misterios Dolorosos",
    days: "Martes y Viernes",
    list: [
      { title: "1º Misterio Doloroso", subtitle: "La Oración de Jesús en el Huerto", meditation: "Jesús ora en Getsemaní y suda sangre. Pedimos el dolor por nuestros pecados." },
      { title: "2º Misterio Doloroso", subtitle: "La Flagelación del Señor", meditation: "Jesús es azotado cruelmente en la columna. Pedimos la mortificación de los sentidos." },
      { title: "3º Misterio Doloroso", subtitle: "La Coronación de Espinas", meditation: "Coronan a Jesús con espinas y se burlan de Él. Pedimos el desprecio del mundo." },
      { title: "4º Misterio Doloroso", subtitle: "Jesús con la Cruz a cuestas camino del Calvario", meditation: "Jesús carga con la cruz por nosotros. Pedimos paciencia en las tribulaciones." },
      { title: "5º Misterio Doloroso", subtitle: "La Crucifixión y Muerte de Nuestro Señor", meditation: "Jesús muere en la cruz por nuestra salvación. Pedimos el amor a Dios sobre todas las cosas." },
    ],
  },
  Gloriosos: {
    name: "Misterios Gloriosos",
    days: "Miércoles y Domingo",
    list: [
      { title: "1º Misterio Glorioso", subtitle: "La Resurrección del Señor", meditation: "Cristo resucita victorioso al tercer día. Pedimos una fe firme." },
      { title: "2º Misterio Glorioso", subtitle: "La Ascensión del Señor a los Cielos", meditation: "Jesús sube al cielo en cuerpo y alma. Pedimos una esperanza viva." },
      { title: "3º Misterio Glorioso", subtitle: "La Venida del Espíritu Santo sobre los Apóstoles", meditation: "El Espíritu Santo desciende en lenguas de fuego. Pedimos los dones del Espíritu Santo." },
      { title: "4º Misterio Glorioso", subtitle: "La Asunción de la Santísima Virgen al Cielo", meditation: "María es llevada al cielo en cuerpo y alma. Pedimos una buena muerte." },
      { title: "5º Misterio Glorioso", subtitle: "La Coronación de María como Reina del Cielo", meditation: "María es coronada Reina de cielos y tierra. Pedimos la perseverancia final." },
    ],
  },
  Luminosos: {
    name: "Misterios Luminosos",
    days: "Jueves",
    list: [
      { title: "1º Misterio Luminoso", subtitle: "El Bautismo de Jesús en el Jordán", meditation: "El Padre proclama a Jesús como Hijo amado. Pedimos vivir nuestro bautismo." },
      { title: "2º Misterio Luminoso", subtitle: "Las Bodas de Caná", meditation: "Por intercesión de María, Jesús realiza su primer milagro. Pedimos confianza en María." },
      { title: "3º Misterio Luminoso", subtitle: "El Anuncio del Reino de Dios", meditation: "Jesús predica el Reino e invita a la conversión. Pedimos un corazón convertido." },
      { title: "4º Misterio Luminoso", subtitle: "La Transfiguración del Señor", meditation: "Jesús se transfigura en el Tabor. Pedimos el deseo de la santidad." },
      { title: "5º Misterio Luminoso", subtitle: "La Institución de la Eucaristía", meditation: "Jesús se entrega en la Eucaristía. Pedimos amor a la Sagrada Comunión." },
    ],
  },
};

// Detección automática según día de la semana
export function getMysteriesForToday(date = new Date()) {
  const day = date.getDay(); // 0=Domingo, 1=Lunes, ...
  const map = {
    0: "Gloriosos",   // Domingo
    1: "Gozosos",     // Lunes
    2: "Dolorosos",   // Martes
    3: "Gloriosos",   // Miércoles
    4: "Luminosos",   // Jueves
    5: "Dolorosos",   // Viernes
    6: "Gozosos",     // Sábado
  };
  return map[day];
}

// Construye la secuencia completa de pasos del Rosario
// Cada paso = { type, beadIndex, prayerKey, mysteryIndex?, label, content }
// beadIndex se refiere al índice visual del bead actual (0..59) o null si es paso sin bead
export function buildRosarySequence(mysteryKey) {
  const mys = mysteries[mysteryKey];
  const sequence = [];

  // Paso 0: Señal de la Cruz (en el crucifijo)
  sequence.push({
    type: "intro",
    beadIndex: 0, // crucifijo
    prayerKey: "signOfCross",
    label: prayers.signOfCross.title,
    content: prayers.signOfCross.text,
    decade: 0,
    inDecadeIndex: 0,
  });

  // Paso 1: Credo (todavía en el crucifijo)
  sequence.push({
    type: "intro",
    beadIndex: 0,
    prayerKey: "apostlesCreed",
    label: prayers.apostlesCreed.title,
    content: prayers.apostlesCreed.text,
    decade: 0,
    inDecadeIndex: 0,
  });

  // Paso 2: Padre Nuestro introductorio (cuenta grande 1)
  sequence.push({
    type: "ourFatherIntro",
    beadIndex: 1,
    prayerKey: "ourFather",
    label: prayers.ourFather.title,
    content: prayers.ourFather.text,
    decade: 0,
    inDecadeIndex: 0,
  });

  // 3 Ave Marías introductorias (beads 2,3,4)
  for (let i = 0; i < 3; i++) {
    sequence.push({
      type: "hailMaryIntro",
      beadIndex: 2 + i,
      prayerKey: "hailMary",
      label: `Ave María ${i + 1} de 3 (Fe, Esperanza, Caridad)`,
      content: prayers.hailMary.text,
      decade: 0,
      inDecadeIndex: 0,
    });
  }

  // Gloria introductoria
  sequence.push({
    type: "gloryIntro",
    beadIndex: 4,
    prayerKey: "gloryBe",
    label: prayers.gloryBe.title,
    content: prayers.gloryBe.text,
    decade: 0,
    inDecadeIndex: 0,
  });

  // Para cada uno de los 5 misterios (decade)
  // Visual layout:
  // bead 5 = Padre Nuestro misterio 1
  // beads 6-15 = 10 Ave Marías misterio 1
  // bead 16 = Padre Nuestro misterio 2
  // beads 17-26 = 10 Ave Marías misterio 2
  // bead 27 = Padre Nuestro misterio 3
  // beads 28-37 = 10 Ave Marías misterio 3
  // bead 38 = Padre Nuestro misterio 4
  // beads 39-48 = 10 Ave Marías misterio 4
  // bead 49 = Padre Nuestro misterio 5
  // beads 50-59 = 10 Ave Marías misterio 5
  for (let m = 0; m < 5; m++) {
    const ourFatherBead = 5 + m * 11;
    const mystery = mys.list[m];

    // Anuncio del misterio
    sequence.push({
      type: "mysteryAnnounce",
      beadIndex: ourFatherBead,
      prayerKey: null,
      label: mystery.title,
      subtitle: mystery.subtitle,
      content: mystery.meditation,
      decade: m + 1,
      inDecadeIndex: 0,
    });

    // Padre Nuestro del misterio
    sequence.push({
      type: "ourFather",
      beadIndex: ourFatherBead,
      prayerKey: "ourFather",
      label: prayers.ourFather.title,
      content: prayers.ourFather.text,
      decade: m + 1,
      inDecadeIndex: 0,
    });

    // 10 Ave Marías
    for (let i = 0; i < 10; i++) {
      sequence.push({
        type: "hailMary",
        beadIndex: ourFatherBead + 1 + i,
        prayerKey: "hailMary",
        label: `Ave María ${i + 1} de 10`,
        content: prayers.hailMary.text,
        decade: m + 1,
        inDecadeIndex: i + 1,
      });
    }

    // Gloria al final de la decena
    sequence.push({
      type: "glory",
      beadIndex: ourFatherBead + 10,
      prayerKey: "gloryBe",
      label: prayers.gloryBe.title,
      content: prayers.gloryBe.text,
      decade: m + 1,
      inDecadeIndex: 10,
    });

    // Oración de Fátima
    sequence.push({
      type: "fatima",
      beadIndex: ourFatherBead + 10,
      prayerKey: "fatima",
      label: prayers.fatima.title,
      content: prayers.fatima.text,
      decade: m + 1,
      inDecadeIndex: 10,
    });
  }

  // Salve Regina
  sequence.push({
    type: "salve",
    beadIndex: null,
    prayerKey: "hailHolyQueen",
    label: prayers.hailHolyQueen.title,
    content: prayers.hailHolyQueen.text,
    decade: 6,
    inDecadeIndex: 0,
  });

  // Oración final
  sequence.push({
    type: "final",
    beadIndex: null,
    prayerKey: "finalPrayer",
    label: prayers.finalPrayer.title,
    content: prayers.finalPrayer.text,
    decade: 6,
    inDecadeIndex: 0,
  });

  // Señal de la Cruz final
  sequence.push({
    type: "end",
    beadIndex: null,
    prayerKey: "signOfCross",
    label: "Señal de la Cruz (Final)",
    content: prayers.signOfCross.text,
    decade: 6,
    inDecadeIndex: 0,
  });

  return sequence;
}

// Total de beads visibles en el rosario: 1 crucifijo + 1 PN intro + 3 AM intro + 5 PN decena + 50 AM = 60
export const TOTAL_BEADS = 60;
