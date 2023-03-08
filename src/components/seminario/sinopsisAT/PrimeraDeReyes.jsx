import React, { useState } from 'react';

const PrimeraDeReyes = () => {

  const [colorSeleccion, setColorSeleccion] = useState('red');
  const [texto, setTexto] = useState('');

  function handleSelect() {
    const seleccion = window.getSelection();
    if (seleccion.rangeCount > 0) {
      const rango = seleccion.getRangeAt(0);
      const nuevoSpan = document.createElement('span');
      nuevoSpan.style.color = colorSeleccion;
      nuevoSpan.appendChild(rango.extractContents());
      rango.insertNode(nuevoSpan);
    }
  }
  function handleColorChange(nuevoColor) {
    setColorSeleccion(nuevoColor);
  }
  return (
    <div className="p-3">
      <h3>1ª DE REYES: COMO PERDER UN REINO</h3>
      <button onClick={() => handleColorChange('red')}>Rojo</button>
        <button onClick={() => handleColorChange('blue')}>Azul</button>
        <button onClick={() => handleColorChange('green')}>Verde</button>
      <p onMouseUp={handleSelect}>
        Primera de Reyes es una historia de cómo se pierde un reino, un relato
        que absorbe nuestra atención. Al leer estos dos libros del Antiguo
        Testamento, la clave para conseguir que cobren vida y sean de vital
        importancia en nuestras vidas es darnos cuenta de que son ayudas
        visuales, de las que se vale Dios para mostrarnos lo que está sucediendo
        en nuestras vidas. Podemos vernos reflejados en cada uno de estos
        relatos del Antiguo Testamento y cuando lo hacemos, nos da la impresión
        de que las palabras tienen ojos y nos están mirando y nos damos cuenta
        de que las palabras están dirigidas exacta y directamente a nosotros. La
        imagen que presenta la Biblia del hombre es que cada uno de nosotros ha
        sido creado para ser un rey sobre un reino. Todo el propósito del Señor
        Jesús al entrar en nuestras vidas, que es el tema del libro de Romanos,
        es que aprendamos cómo gobernar el reino que es nuestra vida para Dios,
        dándonos autoridad y concediéndonos la victoria. Eso es lo que hace que
        nuestra vida sea completa y fascinante cuando aprendemos a caminar en el
        poder de Dios. Una de las frases más trilladas y que continuamente se
        usa en los círculos cristianos es "la vida cristiana victoriosa.
        Lamentablemente, hemos hecho un uso excesivo y abusivo de esta frase, la
        hemos distorsionado, retorcido y pervertido en tantas ocasiones que la
        verdad es que ha perdido una gran parte de su significado para nosotros.
        Pero si la considera usted en toda la frescura de su intención original,
        esa es exactamente la intención que tiene Dios para usted, que
        aprendamos a caminar consiguiendo la victoria como un rey sobre el reino
        de su vida y, de este modo, podrá usted encontrar el propósito que se
        pretendía. Esto es exactamente el ejemplo que nos dan estos libros del
        Antiguo Testamento, especialmente los libros que tratan acerca de la
        monarquía en Israel.
      </p>
      <p>
        Dios llamó y apartó a la nación de Israel, marcándola y escogiéndola
        como su propio pueblo. En cierto modo, convirtió a la pequeña tierra de
        Israel en un escenario, haciendo que el mundo entero pusiese sus ojos en
        esta nación. Lo que sucedió en este país es una imagen de lo que está
        sucediendo en el curso de toda la historia humana y lo que está pasando,
        de manera individual, en nuestras vidas. Si consideramos estos libros de
        ese modo, adquieren un significado tremendamente intenso y hacen que
        nuestra vida tenga propósito.
      </p>
      <p>
        El libro de 1ª de Reyes oculta el secreto del éxito que se puede obtener
        a la hora de reinar sobre el reino que es nuestra vida. Es el secreto de
        cómo aprender a someternos a la autoridad y al dominio de Dios en su
        vida. En otras palabras, el hombre no puede nunca ejercer el dominio
        sobre su vida a menos que primero se someta al dominio de Dios. Si se
        somete usted al dominio de Dios, le será concedido el gobierno sobre los
        diversos aspectos de su propia vida. Por otro lado, si no permite usted
        que Dios domine su vida, no podrá usted bajo ninguna circunstancia ni de
        ninguna manera cumplir su deseo de tener autoridad sobre su propia vida.
        ¡Eso es imposible! y eso es lo que nos enseñan estos libros. Por eso es
        por lo que en todo este libro se encontrará usted que el punto central
        es el trono. El que es importante es el rey, porque según le vaya al
        rey, así le irá a la nación. En su vida su voluntad es el rey. Lo que su
        voluntad permita que controle su vida, determina el funcionamiento del
        reino en su vida. El rey Salomón, el sucesor de David, ocupa el trono.
        Al comenzar el libro David sigue siendo aún el rey, pero se tiene que
        enfrentar de inmediato con la rebelión de otro de sus hijos, llamado
        Adonías, que intenta obtener el control del trono mientras David estaba
        todavía vivo. Esto indica la primera señal de lo que una verdadera
        autoridad que domina debiera ser en nuestra vida. La autoridad es algo
        que debe ser un don y proceder de la mano de Dios. Solamente podemos
        reinar cuando Dios nos establece, cuando nos sometemos a su autoridad.
        Al enterarse David de esto, intenta colocar a Salomón en el trono.
        Salomón es ungido como rey mientras su padre está aún vivo y de hecho
        asume el trono mientras David sigue aún con vida. Cuando nos sometemos a
        la autoridad se Dios, se convierte en su responsabilidad hacer que todas
        las circunstancias y todos los enemigos y cada rebelión que podría
        representar una amenaza para el reino, se encuentren bajo control. Eso
        fue lo que hizo en el caso de Adonías.
      </p>
      <p>
        Al leer los capítulos dos y tres, veremos que Salomón asciende al trono,
        gobernando con poder, autoridad y gloria. El reino de Salomón marca la
        mayor extensión del reino de Israel y se caracterizó especialmente por
        un despliegue de majestad y de poderío exterior, pero en el capítulo
        tres, nos encontramos al mismo tiempo con las semillas de la derrota. Es
        muy, muy importante que nos fijemos en esto. Leemos en los versículos
        uno y dos:
      </p>
      <p>
        Salomón estableció una alianza matrimonial con el faraón, rey de Egipto.
        Tomó a la hija del faraón y la llevó a la ciudad de David, hasta que
        acabó de construir su propia casa, la casa del Señor y la muralla
        alrededor de Jerusalén. Sin embargo, el pueblo estaba acudiendo a
        presentar sus sacrificios en los lugares elevados porque todavía no se
        había edificado una casa para el nombre del Señor.
      </p>
      <p>
        A continuación nos encontramos un versículo sumamente importante, el
        tercero:
      </p>
      <p>
        "Salomón amaba a Jehová y caminaba en los estatutos de su padre David;
        solo que sacrificaba y quemaba incienso en los lugares altos."
      </p>
      <p>
        Aquí tenemos un hombre que amaba a Dios, que le amaba con todo su
        corazón. Salomón empieza su reinado con una maravillosa expresión de
        sumisión y el deseo de que Dios gobierne y ejerza su autoridad en su
        vida. Sigue los pasos de su padre David. Sin embargo, hay dos cosas que
        hace, que parecen ser dos asuntos un tanto insignificantes y triviales,
        que acaban por derrocar su reino. Establece una alianza con la hija del
        faraón, el Rey de Egipto (que es una imagen de este mundo) y la sitúa en
        el centro de la vida de la nación de Israel. Aquí se establece una
        alianza con el mundo. Además se nos dice que adora en los lugares altos.
        En las religiones paganas de aquellos tiempos toda la adoración y los
        ritos se celebraban sobre las cimas de las montañas. Las tribus paganas
        habían erigido altares, muchos de los cuales eran centros de toda clase
        de adoración idólatra y licenciosa. Con frecuencia, el altar era el
        lugar donde la fertilidades de los dioses del sexo eran adoradas
        mediante una exhibición sexual, pero el pueblo de Israel también se
        apoderó de los altares y los usaron para ofrecer sacrificios a Jehová.
        El arca de Dios se encontraba en la ciudad de Jerusalén, en el
        tabernáculo, donde David lo había colocado, pero Salomón no presentó sus
        ofrendas en el altar del tabernáculo; en lugar de ello, estaba
        presentando sus ofrendas en los lugares altos. Estaba ofreciendo
        sacrificios a Dios, pero lo hizo sobre altares paganos. Exteriormente
        había mucho de hermoso y de admirable en el gobierno de este joven, y en
        general su corazón seguía la dirección correcta, pero había, sin
        embargo, un aspecto en el que no se había sometido completamente a Dios.
        Había una debilidad en su comunión. No acababa de entender que el
        secreto del amor de Dios radica en someter su voluntad, representada por
        la adoración ante el arca del pacto. En muchas, muchas vidas hay con
        frecuencia un sometimiento exterior y la decisión de hacer la voluntad
        de Dios, pero en el fondo de la vida privada hay una falta de amor y de
        anhelo de Dios. Era precisamente en este aspecto en el que David más
        gráficamente demostraba su punto fuerte. A pesar de que David cayó en
        los sombríos pecados del asesinato y del adulterio, en el lugar mas
        santo e interno de su corazón David sentía un profundo y continuo deseo
        de someterse a la voluntad de Dios y una verdadera hambre de la persona
        de Dios. Esto es algo que se manifiesta claramente en todos los salmos
        de David, pero es algo que falta en la vida de Salomón y esta es la
        primera indicación de que algo falla en su vida.
      </p>
      <p>
        Esta historia nos ofrece una descripción de la belleza y la exhibición
        de la grandeza del reino de Salomón. La segunda señal de un poder y un
        reino dados por Dios nos la ofrece el capítulo tres en el relato acerca
        del sueño de Salomón, en el que aparece Dios y le dijo que pidiese lo
        que quisiese. Salomón no pide, en un pasaje maravilloso, ni las riquezas
        ni el honor, sino la sabiduría:
      </p>
      <p>
        "Da, pues, a tu siervo un corazón que sepa escuchar, para juzgar a tu
        pueblo, y para discernir entre lo bueno y lo malo. Porque ¿quién podrá
        gobernar a este pueblo tan grande?"
      </p>
      <p>
        Al comenzar de este modo su reinado, Salomón demuestra haber captado en
        gran medida lo que era una necesidad primordial para poder ejercer la
        autoridad en el reino que Dios le había concedido, la sabiduría. Cuando
        leemos en el Nuevo Testamento, nos encontramos con que esto es cierto.
        En el libro de Hebreos el escritor reprende al pueblo al que está
        escribiendo porque dice: "Debiendo ser ya maestros por el tiempo
        transcurrido, de nuevo tenéis necesidad de que alguien os instruya desde
        los primeros rudimentos de las palabras de Dios. Habéis llegado a tener
        necesidad de leche y no de alimento sólido. (Heb. 5:12) Dice que la
        señal de los que son maduros en Cristo y han aprendido realmente a
        caminar con El, es que saben discernir entre el bien y el mal. Ese es el
        problema de nuestros días ¿no es así? El bien parece malo y lo malo
        parece bueno. Cualquiera pueda distinguir el bien del mal cuando lo
        bueno parece bueno y lo malo parece malo. Pero el gran problema radica
        en reconocer el mal cuando nos viene sonriendo, derrochando solicitud y
        cuando parece ofrecernos todo lo que hemos estado esperando. La madurez
        cristiana se pone de manifiesto cuando aprendemos a ejercitar el
        espíritu de sabiduría para saber distinguir entre el bien y el mal.
        Aquello que parece satisfacer las necesidades del espíritu puede ser de
        hecho una trampa inteligente de Satanás para plantar la semilla de la
        desconfianza en el corazón y acabará por producir un fruto terrible en
        la vida pocos años después.
      </p>
      <p>
        Esta clase de sabiduría fue la que pidió Salomón y Dios le concedió su
        petición, pero había un punto débil en su petición. Pidió sabiduría para
        saber gobernar al pueblo. Solamente podemos desear al leer, que este
        gran joven hubiera pedido sabiduría para saber gobernar primero su
        propia vida, que fue su primer fallo. Es evidente, basándonos en esto,
        que Dios sabe exactamente lo que hay en una persona. Le concedió a
        Salomón esta sabiduría, pero al mismo tiempo que se la dio también se
        produjeron las circunstancias necesarias para poner a prueba dicha
        sabiduría y esto es algo que hace Dios con todos nosotros porque sabe
        exactamente de lo que somos capaces. El nos da esencialmente lo que es
        nuestra petición básica, urgente y apremiante. Si hay algo que deseamos
        con verdadera desesperación, él nos lo concederá, pero al mismo tiempo
        hará que vaya acompañado de las circunstancias que pongan de manifiesto
        lo que hay en nosotros. Juntamente con la sabiduría, le dio a Salomón
        riquezas y honor y precisamente estas dos cosas fueron la causa de su
        derrota. Cuando Salomón comenzó a sentirse orgulloso y a regocijarse por
        la magnificencia de su reino, el orgullo comenzó a introducirse en su
        corazón y a raíz de ello se produjo su caída. Por lo tanto, la primera
        señal de la soberanía, a fin de establecer nuestro gobierno en el reino
        de nuestra propia vida, es la dependencia de Dios. La segunda es la
        sabiduría, el tener el discernimiento y la comprensión necesarias acerca
        de nosotros mismos, si hemos de andar en el Espíritu. Esto es algo que
        vemos claramente en el sabio juicio que hizo Salomón entre dos madres
        que le trajeron un bebé. Las dos habían tenido un bebé, pero uno de
        ellos había muerto. Las dos mujeres reclamaban como suyo el que había
        quedado vivo. Se pidió a Salomón que decidiese de quién era el bebé. En
        una exhibición de sabiduría para analizar los problemas de otras
        personas dijo: "Traedme una espada. Y colocando al bebé ante aquellas
        dos mujeres dijo: "Cortad el bebé en dos mitades y dad una de ellas a
        una mujer y la otra mitad a la otra mujer. La verdadera madre dijo de
        inmediato: "¡No! ¡No hagáis eso! Que la otra mujer se quede con el bebé.
        Pero la otra mujer dijo: "No, eso está bien, es perfectamente justo.
        Dividid al bebé y cada una de nosotros se quedará con la mitad. Salomón
        supo de inmediato quién era la verdadera madre y de este modo quedó
        demostrada su sabiduría. El capítulo 4:29 empieza un comentario acerca
        de la gran sabiduría que le fue otorgada a Salomón.
      </p>
      <p>
        Dios le concedió a Salomón una sabiduría y un entendimiento sin medida,
        además de amplitud de mente como las arenas de la playa, de manera que
        la sabiduría de Salomón sobrepasaba a la sabiduría de todas las gentes
        del oriente [incluyendo la llamada sabiduría oriental, es decir, la
        china y la india] y toda la sabiduría de Egipto. Porque Salomón era el
        más sabio de todos los hombres, más sabio que Eitán el ezrahita, Ernan,
        Calcol y Darda, los hijos de Majol [¡estos eran los comentadores de
        noticias de aquellos tiempos!]; y su fama se extendió por todas las
        naciones de alrededor. Además pronunció tres mil proverbios [de los que
        ha quedado constancia en el libro de Proverbios]; y escribió mil cinco
        cánticos [de los cuales solamente tenemos uno: "El Cántico de Salomón o
        "Cantar de los Cantares ]. Habló acerca de los árboles, desde el cedro
        del Líbano al hisopo que crece en las murallas; también se refirió a las
        bestias, a los pájaros y reptiles, además de los peces y acudían a él de
        todas las naciones con el fin de escuchar la sabiduría de Salomón, así
        como todos los reyes de la tierra, que habían oído hablar acerca de su
        sabiduría.
      </p>
      <p>
        ¡Qué gran imagen de lo que nos dice Pablo en 1ª Corintios: "tenemos la
        mente de Cristo y "el hombre espiritual lo juzga todo. (1ª Cor. 2:15,
        16) No necesita que nadie le enseñe, porque ya discierne todas las cosas
        y puede analizar y entenderlas.
      </p>
      <p>
        En el capítulo cuatro encontramos la tercera señal de lo que significa
        reinar: el sentido del orden. Un reino tiene que estar en orden. Dios no
        es autor de confusión, sino que hace las cosas decentemente y con orden.
        Además en el capítulo cuatro, versículo 20, encontramos la cuarta señal
        de la autoridad:
      </p>
      <p>
        Judá e Israel eran tan numerosos como las arenas del mar, comían y
        bebían y eran felices. Salomón gobernaba sobre todos los reinos, desde
        el Eufrates a la tierra de los filisteos hasta la frontera de Egipto,
        que le trajeron tributos y sirvieron a Salomón durante todos los días de
        su vida. Ese es el control total sobre todo lo que Dios quiso que
        tuviese. ¿Ha aprendido usted a reinar de ese modo sobre su propia vida?
        Eso es lo que Dios quiere que tenga usted.
      </p>
      <p>
        En los capítulos del cinco al ocho encontramos el relato del glorioso
        templo que edificó Salomón. Este maravilloso edificio era precioso. El
        interior era incluso más glorioso que el exterior y estaba todo
        completamente cubierto de oro. El entrar en aquel santuario debió de ser
        una experiencia asombrosa. Todo lo que se podía tocar estaba cubierto de
        oro, pero la gloria principal del lugar era la gloria de la Shekinah de
        Dios, que descendió y habitó en el lugar santo cuando Salomón dedicó el
        templo.
      </p>
      <p>
        En una oración maravillosa que hace, Salomón le da gracias a Dios por su
        gracia y reconoce una vez más el único e importante principio sobre el
        cual se debe de mantener un reino es la obediencia de su rey al trono de
        Dios.
      </p>
      <p>
        A continuación encontramos la historia, maravillosamente detallada, de
        las visitas que le hacen a Salomón la Reina de Saba y del Rey de Tiro y
        el reconocimiento de las demás naciones de la gloria del reino de
        Salomón. De repente, al principio del capítulo 11, se produce un giro en
        toda la historia y esta sigue otro curso diferente. En él leemos acerca
        de los resultados de las semillas del mal que habían sido anteriormente
        sembradas en el corazón de Salomón:
      </p>
      <p>
        "Pero el rey Salomón amó, además de la hija de faraón, a muchas otras
        mujeres extranjeras: moabitas, edomitas, sidonias y heteas..."
      </p>
      <p>Estas son tribus paganas.</p>
      <p>
        "...de los pueblos que Jehová había dicho a los hijos de Israel: No os
        unáis a ellos ni ellos se unan a vosotros, no sea que hagan desviar
        vuestros corazones tras sus dioses. A estos Salomón se apegó con amor.
        Tuvo 700 mujeres reinas y 300 concubinas [en la mayor subestimación de
        la realidad de la Biblia]. Y sus mujeres hicieron que se desviara su
        corazón."
      </p>
      <p>
        Este es el mismo hombre que había escrito en el libro de Proverbios: "El
        que halla esposa halla el bien. (Prov. 18:22) Este es el ejemplo más
        importante que conozco, es un ejemplo que ha sido llevado a los
        extremos. ¡Mil esposas! ¡Alguien ha dicho que fue sobradamente castigado
        teniendo que soportar a mil suegras! Pero esto pone además de manifiesto
        la debilidad y el fracaso de Salomón al apartarse su corazón de Dios.
        Fijémonos cómo empezó todo. Este hombre disfrutaba de todo lo espléndido
        de su gobierno, teniendo la mayor gloria del reino que le había sido
        encomendado. La magnificencia exterior, acerca de la cual leemos aquí,
        era la evidencia de la bendición de Dios en su vida, pero su caída
        comenzó cuando su corazón se dejó arrastrar por algo que Dios había
        prohibido. Esto concuerda exactamente con la advertencia que hace Jesús
        en el Sermón del Monte, cuando dice: "Porque donde esté vuestro tesoro,
        allí también estará vuestro corazón. (Lucas 12:34) El primer paso en la
        decadencia moral empieza siempre con nuestras emociones. ¿Alrededor de
        qué giran sus emociones? ¿Qué es lo que apodera del lugar central de las
        emociones en su vida? Ahí es donde empieza la decadencia. A continuación
        leemos que a esto le siguió la idolatría:
      </p>
      <p>
        "Porque Salomón siguió a Astarte [la diosa de la sexualidad] diosa de
        los sidonios y a Moloc, ídolo detestable de los amonitas. Salomón hizo
        lo malo ante los ojos de Jehová y no siguió plenamente a Jehová como su
        padre David. Entonces Salomón edificó un lugar alto a Quemós, ídolo
        detestable de Moab...." (11:5-7a)
      </p>
      <p>
        Quemós era la imagen detestable en la que se construyó una hoguera y
        cuando llegó el momento de celebrar el festival religioso, echaron a los
        niños al fuego y fue Salomón el que edificó este lugar, en el cual los
        ritos giraban alrededor de la adoración de este dios sonriente.
      </p>
      <p>
        "...y a Moloc, ídolo detestable de los hijos de Amón [otro dios de la
        fertilidad], en el monte que está frente a Jerusalén. Y así hizo para
        todas sus mujeres extranjeras, las cuales quemaban incienso y ofrecían
        sacrificios a sus dioses. Jehová se indignó contra Salomón, porque su
        corazón se había desviado de Jehová..." (11:7b-9a)
      </p>
      <p>
        En tres ocasiones y en rápida sucesión en el resto de este capítulo
        "Dios le levantó un adversario en contra de Salomón. Primero fue Hadad,
        el edomita, que representa al hombre carnal. Luego se nos dice en el
        versículo 23:
      </p>
      <p>
        "Dios también le levantó un adversario como adversario a Rezón, hijo de
        Eliada, quien había huido de su señor Hadad-ezer, rey de Soba."
      </p>
      <p>Se nos dice en el versículo 26:</p>
      <p>
        "También Jeroboam, hijo de Nabat, servidor de Salomón, efrateo de
        Zereda... que después habría de dividir el reino. De manera que estos
        adversarios se reunieron para derrocar a Salomón y conseguir su
        derrota."
      </p>
      <p>
        El capítulo concluye diciendo de Salomón que "reposó con sus padres y
        fue enterrado en la ciudad de David, lo cual representa el colapso de su
        gloria y de la majestad de su reino.
      </p>
      <p>
        Hace poco oí hablar acerca de un hombre que había ejercido un gran poder
        desde el púlpito y había realizado un tremendo ministerio para Dios, en
        varios sentidos, y de repente todo su ministerio se vino abajo y fue
        llevado antes de su sesión, acusado de cargos morales. Se descubrió que
        había existido un amor en su corazón que no había sido juzgado y que
        había mantenido oculto, año tras año. A pesar del aparente poder y
        autoridad exteriores, de los que se valía en su ministerio, había en su
        corazón emociones que le estaban carcomiendo y la semilla que habría de
        acabar con su reinado. Esta historia se repite de nuevo en vidas por
        todas partes.
      </p>
      <p>
        El segundo movimiento de este libro comienza en el capítulo 12, en el
        que leemos acerca de la degradación y la dispersión del reino. Jeroboam
        dividió el reino, llevándose a las diez tribus del norte para iniciar el
        Reino del Norte, volviendo a introducir en Israel la terrible adoración
        a los carneros de oro. Mucho antes, cuando Moisés se encontraba en la
        montaña, teniendo comunión con Dios, el pueblo fue a Aarón y le dijo:
        "queremos tener un Dios al que podamos adorar como lo hacen las otras
        naciones. ¿Recuerda usted lo que le dijo Aarón a Moisés cuando descendió
        de la montaña? Le dijo: "Les pedí que trajesen todo su oro, todos sus
        pendientes y sus joyas, cogí todo ese oro, lo eché al fuego y de él
        salió, de buenas a primeras, un carnero. Nosotros nos inclinamos y lo
        adoramos, llamándolo Jehová. (Ex. 32:23, 24). No era que quisieran ser
        idólatras, sencillamente querían una evidencia visible sobre la que
        centrar su adoración. Ahora nos encontramos con el pecado cometido por
        Jeroboam. A partir de ese momento se le conoce en Israel como "Jeroboam,
        el hijo de Nabat, que hizo que pecase Israel. En este caso no es un
        carnero, sino dos. Es el mismo pecado multiplicado, doblado en su
        intensidad y en su poder, el que introduce Jeroboam en la vida de la
        nación.
      </p>
      <p>
        El capítulo 14 nos presenta la historia de la invasión y la derrota de
        Israel por parte de Egipto, el mismo Egipto del cual había sacado Dios a
        su pueblo, que vuelve a ser una imagen del mundo y sus costumbres, su
        maldad, su insensatez, frivolidad y su locura. Leemos en 14:25 y 26:
      </p>
      <p>
        "Y sucedió en el quinto año del rey Roboam que subió Sisac, rey de
        Egipto, contra Jerusalén y tomó los tesoros de la casa de Jehová..."
      </p>
      <p>Lo primero que asaltó fue el lugar de la adoración.</p>
      <p>
        "...y los tesoros de la casa del rey; todo lo tomó. También tomó todos
        los escudos de oro que había hecho Salomón..."
      </p>
      <p>
        ¿Entiende usted esta imagen? Salomón, que conocía a Dios y que se
        esforzaba por andar con él no juzgó totalmente las emociones y las
        uniones establecidas en su corazón, por lo que fue finalmente arruinado
        subrepticiamente y volvió a las costumbres mundanas, con todas sus
        insensatas manifestaciones, por lo que perdió la gloria interior y su
        sentido de adoración en el que Dios debería haber sido exaltado en el
        templo interior de su propia vida. Después de esto, el relato nos habla
        acerca de varios reyes que ocuparon el trono de Israel. A Nadab le
        siguieron Baasa y Zimri y finalmente Acab con su malvada mujer, llamada
        Jezabel.
      </p>
      <p>
        La parte final del libro, empezando por el capítulo 17, nos presenta el
        ministerio profético empezando con Elías. Hubo otros profetas antes de
        él, pero no realizaron milagros. Elías comienza el ministerio de los
        milagros en la Biblia. Los profetas que llevaron a cabo su ministerio en
        Judá, el Reino del Sur, no hicieron milagros porque en aquel entonces el
        testimonio de Dios era lo más importante para la vida de la nación, pero
        en Israel, el Reino del Norte, la presencia de Dios fue rechazada y
        adoraron en su lugar los becerros de oro. En este caso el ministerio de
        los milagros es el testimonio ante el pueblo de que Dios sigue estando
        entre ellos. Dios intentó conmoverles para que fuesen conscientes de que
        se habían apartado de él. El ministerio de Elías es una fantástica
        revelación de la manera cómo Dios trata al corazón humano descarriado.
        Para empezar, en su ministerio, cerró los cielos, de manera que no
        llovió sobre la tierra durante tres años. A continuación hizo descender
        fuego del cielo sobre los dirigentes y otros, que habían sido enviados
        para arrestarle y traerle ante la presencia del rey. Cuando estos
        milagros empezaron a llamar la atención del pueblo, se produjo el
        arrepentimiento, hasta cierto punto. Entendieron que Dios estaba
        actuando con mano dura, como lo hace en ocasiones con nosotros, para
        castigarnos y juzgarnos, a fin de que despertemos y seamos conscientes
        de que nos estamos apartando de la adoración a él en el fondo de
        nuestros corazones.
      </p>

      <p>
        Cuando sucedió esto, se produjo por fin el juicio a Baal, y las dos
        filosofías de Israel chocaron en una confrontación que tuvo lugar en el
        Monte Carmelo. Dios vindicó su honor enviando fuego del cielo para
        destruir la ofrenda de Elías, incluyendo toda el agua que fue derramada
        sobre la ofrenda y el altar de piedra y Dios reinó con gran poder.
        Cuando cayó dicho juicio, se volvieron a abrir los cielos y la lluvia
        cayó sobre la tierra. Todo ello es una imagen de lo que sucede en
        nuestras vidas cuando nos resistimos al derecho que tiene Dios a
        gobernar nuestros corazones. Entonces Dios nos somete a su reprensión y,
        por fin, vence nuestra testarudez, poniendo fin a la rebelión
        intencional y por fin somos humillados ante Dios. Entonces es cuando la
        lluvia de Dios se derrama en nuestros corazones para dar nuevamente
        fruto y traer bendición.
      </p>
      <p>
        Siguiendo a todo lo anteriormente dicho nos encontramos con el
        extraordinario relato del temor que le tenía Elías a Jezabel. Esto es
        algo que siempre me divierte. Aquí tenemos a un intrépido profeta, un
        vigoroso hombre de Dios que se había enfrentado él solo con
        cuatrocientos sacerdotes sobre la cima de la montaña, corriendo
        aterrorizado de una mujer enfurecida, clamando mientras se oculta bajo
        un arbusto de junípero: "Señor, ya he tenido bastante. Ya tuve más que
        suficiente al tener que enfrentarme con cuatrocientos sacerdotes de
        Baal, como para que esta mujer venga tras de mi, esto ya es demasiado.
        Ella estaba amenazando su vida. Esto resulta divertido porque Elías
        dice: "Señor, ya he tenido suficiente, quítame la vida, pero como es
        natural eso no lo dice en serio. Todo lo que hubiera tenido que hacer
        hubiera sido salir a buscar a Jezabel y ella hubiera satisfecho su
        deseo. Pero en lugar de ello, se oculta bajo el junípero, a pesar de lo
        cual Dios le trata con su gracia maravillosa. Lo primero que hace es
        acostarle y concederle una buena noche de descanso y a continuación Dios
        le ofrece una buena comida. Finalmente Dios le enseña el secreto más
        importante que jamás había aprendido Elías, que Dios no siempre se
        manifiesta a través del terremoto, del fuego y del trueno, sino que en
        muchas ocasiones lo hace a través del silbo apacible y tranquilo de una
        conciencia transformada.
      </p>
      <p>
        El libro termina con la historia del rey Acab, su fracaso, su insensatez
        y su deseo egoista de apoderarse de la viña de Nabot, haciendo que caiga
        el juicio de Dios. En el capítulo 22 nos enteramos de cómo obra Dios por
        medio de lo que parecen circunstancias accidentales. Los dos reyes, el
        de Israel y el de Judá, salen al campo de batalla. Acab, rey de Israel,
        intenta conseguir, en su endiablada sabiduría, que el rey de Judá se
        coloque en la primera línea del campo de batalla. Acab le pone al rey de
        Judá su propia armadura para que le confundan con el rey de Israel y le
        ataquen, pero al felicitarse el rey Acab por la manera en que ha
        engañado al rey de Judá para que se exponga al peligro, leemos que voló
        una flecha por el aire (por casualidad) de un guerrero del lado
        contrario y encuentra su objetivo, atravesando la armadura y dándole de
        lleno en el corazón. ¡De este modo Dios emite su juicio! Dios es el Dios
        de las circunstancias, de los accidentes y se encuentra tras todos los
        acontecimientos de nuestra vida. Eso es lo que nos revela esta historia.
      </p>
      <p>
        Al concluir este libro de 1ª de Reyes, el versículo que más fijamente se
        me ha quedado grabado en mi mente y en mi corazón es éste:
      </p>
      <p>
        "Sobre toda cosa guardada, guarda tu corazón porque de él emana la
        vida." (Prov. 4:23)
      </p>
      <p>
        Las circunstancias exteriores no deben nunca destronarle e impedir que
        reine usted sobre su vida. Nada de lo que tenga usted que afrontar, en
        cuanto a tensiones externas y circunstancias del exterior, conseguirán
        destronarle. Esto y el que vuelva a encontrarse usted sometido a
        esclavitud y atado por la carne y el demonio, será algo que solo
        sucederá si permite usted que alguna adoración rival se apodere de su
        corazón y destrone a Dios. Cuando sus emociones se encariñen con alguna
        otra cosa, que rivalice con la adoración a Dios, sus días en el reino
        estarán contados.
      </p>
      <p>Oración</p>
      <p>
        Padre nuestro, te pedimos que hagas posible que aprendamos la importante
        lección de este libro y que la guardemos en nuestros corazones porque
        "del corazón emana la vida." Al contemplar el lugar importante que ocupa
        nuestro deseo, aprendemos a saber lo que más deseamos en la vida. Señor,
        ¿a quién tenemos en el cielo aparte de ti y a quién deseamos en la
        tierra más que a ti? Te pedimos que podamos responder a esa pregunta en
        la soledad de nuestros corazones ante ti. Te lo pedimos en el nombre de
        Cristo, amen.
      </p>
    </div>
  );
};

export default PrimeraDeReyes;
