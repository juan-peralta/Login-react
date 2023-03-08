import "./style.css";
import hombrepecador from "./img/hombrepecador.jpg";
import jesus from "./img/jesus.jpg";
import circulos from "./img/circulos.jpg";
import tren from "./img/tren.jpg";
import { useEffect, useState, useRef } from "react";
const LeyesEspirituales = () => {
  const containerRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    containerRef.current.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }
  return (
    <div className="container" ref={containerRef}>
      <button onClick={toggleDarkMode} className="btn btn-secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-moon-fill"
          viewBox="0 0 16 16"
        >
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
        </svg>
      </button>

      <h1>¿Ha oído usted las cuatro leyes spirituales?</h1>
      <p>
        "Así como hay leyes naturales que rigen el universo, también hay leyes
        espirituales que rigen nuesta relación con Dios."
      </p>

      <h2>1. Primera Ley</h2>
      <p>
        Dios le <span>ama</span> y tiene un <span>plan</span> maravilloso para
        su vida
      </p>
      <h3>El amor de Dios</h3>
      <p>
        "Porque de tal manera amó Dios al mundo, que ha dado a su hijo unigénito
        para que todo aquel que en el crea, no se pierda, mas tenga vida
        eterna.(San Juan 3:16)"
      </p>
      <h3>El plan de Dios</h3>
      <p>
        (Cristo afirma) "Yo he venido para que tengan vida, y para que la tengan
        en abundancia"(Una vida completa y con propósito).(San Juan 10:10b)
      </p>
      <p>
        ¿Por qué es que la mayoría de las personas no están experimentando esta
        "vida en abundancia"?
        <br />
        Porque...
      </p>
      <h2>2. Segunda Ley</h2>
      <p>
        El hombre es <span>pecador</span> y esta <span>separado</span> de Dios;
        por lo tanto no puede conocer ni experimentar el amor y el plan de Dios
        para su vida.
      </p>
      <h3>El hombre es pecador</h3>
      <p>
        "Por cuanto todos pecaron, y están destituídos de la gloria de
        Dios."(Romanos 3:23)
      </p>
      <p>
        El hombre fue creado para tener comunión con Dios, pero debido a su
        terca voluntad egoísta, escogió su propio camino y su relación con Dios
        se interrumpió. Esta voluntad egoísta caracterizada por una rebelión
        activa ó indiferencia pasiva es evidencia de lo que la Biblia llama
        pecado.
      </p>
      <h3>El hombre esta separado de Dios</h3>
      <p>
        "Porque la paga del pecado es muerte..."[separación espiritual de
        Dios](Romanos 6:23)
      </p>
      <img
        src={hombrepecador}
        alt=""
        width={300}
        className="mx-auto d-block img-fluid"
      />
      <p>
        Dios es santo y el hombre pecador. Un gran abismo los separa. El hombre
        está tratando continuamente de alcanzar a Dios y la vida en abundancia,
        y cruzar este abismo de separación por sus propios esfuerzos: la
        religión; la moral; la filosofía; las buenas obras; etc.
      </p>
      <p>La tercera ley nos da la única solución a este problema...</p>
      <h2>3. Tercera Ley</h2>
      <p>
        Jesucristo es la <span>unica</span> provisión de Dios para el pecador.
        Solo en el puede usted conocer y experimentar el amor y el plan de Dios
        para su vida.
      </p>
      <h3>El murió en nuestro lugar</h3>
      <p>
        "Mas Dios muestra su amor para con nosotros, en que siendo aún
        pecadores, Cristo murió por nosotros"(Romanos 5:8).
      </p>
      <h3>El Resusitó</h3>
      <p>
        "Cristo murió por nuestros pecados... fue sepultado, y... resusitó al
        tercer día, conforme a las escrituras;... apareció a Cefas, y después a
        los doce. Después apareció a más de quinientos..."(1 de Corintios
        15:3-6).
      </p>
      <h3>Es el Unico camino</h3>
      <p>
        "Jesus le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al
        padre sino por Mí"(San Juan 14:6).
      </p>
      <img
        src={jesus}
        alt=""
        width={300}
        className="mx-auto d-block img-fluid"
      />
      <p>
        Dios ha cruzado el abismo que nos separa de El al enviar a su hijo,
        Jesucristo, a morir en la cruz en nuestro lugar.
      </p>
      <p>
        No es suficiente conocer estas tres leyes y aún aceptarlas
        intelectualmente.
      </p>
      <h2>4. Cuarta Ley</h2>
      <p>
        Debemos individualmente <span>Recibir</span> a Jesucristo como Señor y
        Salvador para conocer y experimentar el amor y el plan de Dios para
        nuestras vidas.
      </p>
      <h3>Debemos recibir a Cristo</h3>
      <p>
        "Mas a todos los que le recibieron, a los que creen en su nombre, les
        dió potestad de ser hechos hijos de Dios."(San Juan 1:12)
      </p>
      <h3>Recibimos a Cristo mediante la Fé</h3>
      <p>
        "Porque por gracias sois salvos por medio de la Fé; y esto no de
        vosotros, pues es don de Dios; no por obras, para que nadie se
        gloríe."(Efesios 2:8-9)
      </p>
      <h3>Recibimos a Cristo por medio de una invitación personal:</h3>
      <p>
        (Cristo dice)"He aquí, yo estoy a la puerta y llamo; si alguno oye mi
        voz y abre la puerta, entraré a él..."(Apocalipsis 3:20).
      </p>
      <p className="v-clave">
        El recibir a Cristo comprende un cambio de actitud hacia Dios, confiar
        en Cristo, para que el entre a nuestras vidas y perdone nuestros
        pecados.
      </p>
      <p className="text-center">
        Estos dos circulos representan dos clases de vidas:
      </p>
      <img
        src={circulos}
        alt=""
        width={600}
        className="mx-auto d-block img-fluid"
      />
      <p>¿Cuál círculo representa su vida?</p>
      <p>¿Cuál círculo le gustaría que representará su vida?</p>
      <p className="v-clave">
        A continuación se explica como puede recibir a Cristo.
      </p>
      <hr />
      <h2 className="text-center">
        Usted Puede Recibir a Cristo Ahora Mismo Cristo Mediante la Oración
      </h2>
      <p>(Orar es hablar con Dios)</p>
      <p>
        Dios conoce su corazón y no tiene tanto interés en sus palabras, sino
        más bien en la actitud de su corazón. La siguiente oración se suguiere
        como guía.
      </p>
      <p className="v-clave">
        Señor Jesucristo: Gracias por que me amas y entiendo que te necesito. Te
        abro la puerta de mi vida y te recibo como mi Señor y Salvador. Ocupa el
        trono de mi vida. Hazme la persona que tu quieres que sea. Gracias por
        perdonar mis pecados. Gracias por haber entrado a mi vida y por escuchar
        mi oración según tu promesa.
      </p>
      <p>¿Expresa esta oración el deseo de su corazón?</p>
      <p className="v-clave">
        Si lo expresa, haga esta oración ahora mismo, y Cristo entrará en su
        vida según su promesa.
      </p>
      <p>Como estar seguro de que Cristo mora en su vida:</p>
      <p>
        ¿Invitó a Cristo a entrar en su vida? de acuerdo con su promesa en
        Apocalipsis 3:20, ¿Donde está Cristo? Cristo dijo que entrará en su
        vida. ¿Le engañaría El? ¿En que se basa su seguridad de que Dios
        contestó su oración?(En la fidelidad de Dios mismo y su palabra)
      </p>
      <h3>La Biblia Promete vida Eterna a todos los que Reciben a Cristo</h3>
      <p>
        "Y este es el testimonio: que Dios nos ha dado vida eterna; y esta vida
        está en su hijo. El que tiene al hijo tiene la vida; el que no tiene al
        hijo de Dios no tiene la vida. Estas cosas os he escrito a vosotros que
        creéis en el nombre del hijo de Dios, para que sepáis que tenéis vida
        eterna, y para que creáis en el nombre del Hijo de Dios"(1 Juan
        5:11-13).
      </p>
      <p>
        Agradézcanle siempre porque Cristo está en su vida y que nunca le
        abandonará (Hebreos 13:5). Puede estar seguro de que el Cristo vivo mora
        en usted y que tiene vida eterna desde el mismo momento en que lo invitó
        a entrar confiando en su promesa. El no le engañará
      </p>
      <p className="v-clave">¿Y qué si no siente nada?</p>
      <hr />
      <h3>No dependa de los sentimientos</h3>
      <p>
        Nuestra seguridad está en la palabra de Dios y no en nuestros
        sentimientos. El cristiano vive por Fé(confíanza) en la fidelidad de
        Dios mismo y su palabra. El diagrama del tren ilustra la relación entre
        el <span>hecho</span> (Dios y su Palabra), la <span>Fé</span> (nuestra
        confianza en Dios y en su palabra) y los <span>sentimientos</span> (el
        resultado de la Fé y la obediencia)(San Juan 14:21)
      </p>
      <img
        src={tren}
        alt=""
        width={500}
        className="mx-auto d-block img-fluid"
      />
      <p>
        El tren corre con ó sin el vagón. Si embargo, sería inutil tratar de que
        el vagón haga correr el tren. Del mismo modo, nosotros como Cristianos,
        no dependemos de los sentimientos ó emociones, sino que ponemos nuestra
        Fé (confianza) en la fidelidad de Dios y en las promesas de su Palabra.
      </p>
      <h3>Ahora que ha Recibido a Cristo</h3>
      <p>
        En el momento en que usted, en un acto de Fé, recibió a Cristo, muchas
        cosas ocurrieron. He aquí algunas de ellas:
      </p>
      <p>1. Cristo entró en su vida (Apocalipsis 3:20)(Colosenses 1:27)</p>
      <p>2. Sus pecados le fueron perdonados (Colosenses 1:14)</p>
      <p>3. Usted ha llegado a ser Hijo de Dios (San Juan 1:12)</p>
      <p>
        4. Comenzó a vivir la gran aventura para la cual Dios le creó (San Juan
        10:10)(2 Corintios 5:17) y (1 Tesalonicenses 5:18).
      </p>
      <p>
        ¿Puede usted pensar en algo más extraordinario que le haya ocurrido que
        el recibir a Cristo? ¿Le gustaría dar gracias a Dios en oración ahora
        mismo por lo que el ha hecho por usted? El acto mismo de dar gracias a
        Dios es una demostración de Fé
      </p>
      <p className="v-clave">¿Y ahora qué?</p>
      <hr />
      <h3>Sugerencias para el Crecimiento Cristiano</h3>
      <p>
        El crecimiento espiritual es el acto de permanecer confiando en
        Jesucristo. "El justo por la Fé vivirá"(Gálatas 3:11). Una vida de Fé le
        capacitará para confiar a Dios cada vez más en todo detalle de su vida y
        para practicar lo siguiente:
      </p>
      <p>
        <span>C</span> Converse con Dios en oración diariamente (San Juan 15:17)
      </p>
      <p>
        <span>R</span> Recurra a la palabra, estudiándola diariamente (Hechos
        17:11). Principie con el evangelio de San Juan.
      </p>
      <p>
        <span>I</span> Insista en confiar a Dios cada aspecto de su vida (1
        Pedro 5:7).
      </p>
      <p>
        <span>S</span> Sea lleno del Espirítu de Cristo - Permítale vivir su
        vida en usted (Gálatas 5:16-17; Hechos 1:8)
      </p>
      <p>
        <span>T</span> Testifique a otros de Cristo verbalmente y con su vida
        (San Mateo 4:19; San Juan 15:18)
      </p>
      <p>
        <span>O</span> Obedezca a Dios momento a momento (San Juan 14:21)
      </p>
      <h3>La importancia de la Iglesia</h3>
      <p>
        En las sagradas escrituras (Hebreos 10:25) se nos amonesta "no dejando
        de reunirnos." "Los cristianos, como brasas de fuego, arden cuando están
        juntos. Apártense los cristianos y como brasas separadas se apagarán
        solos. Si usted no se congrega con alguna iglesia no espere que lo
        inviten a hacerlo. Demuestre iniciativa: llame o visite a un ministro de
        Dios en una iglesia cercana donde se exalte a Cristo y se predique su
        palabra. Comience esta semana, y haga planes para asistir regularmente.
      </p>
      <p>¿Desea compartir este descubrimiento?</p>
      <p>
        Si este folleto ha tenido significado para usted o le ha ayudado a
        conocer a Cristo personalmente, por favor regalelo o lealo a otra
        persona.
      </p>
    </div>
  );
};

export default LeyesEspirituales;
