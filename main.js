let jsonVerbs = [
    { "spanishVerb": "Agregar - Añadir", "sForm": "ADD", "sPast": "ADDED", "pParticiple": "ADDED" },
    { "spanishVerb": "Avanzar - Adelantar", "sForm": "ADVANCE", "sPast": "ADVANCED", "pParticiple": "ADVANCED" },
    { "spanishVerb": "Aparecer", "sForm": "APPEAR", "sPast": "APPEARED", "pParticiple": "APPEARED" },
    { "spanishVerb": "Estar de acuerdo", "sForm": "AGREE", "sPast": "AGREED", "pParticiple": "AGREED" },
    { "spanishVerb": "Responder - Contestar", "sForm": "ANSWER", "sPast": "ANSWERED", "pParticiple": "ANSWERED" },
    { "spanishVerb": "Absorver", "sForm": "ABSORB", "sPast": "ABSORBED", "pParticiple": "ABSORBED" },
    { "spanishVerb": "Surgir - Levantarse", "sForm": "ARISE", "sPast": "AROSE", "pParticiple": "ARISEN" },
    { "spanishVerb": "Llegar - Arribar", "sForm": "ARRIVE", "sPast": "ARRIVED", "pParticiple": "ARRIVED" },
    { "spanishVerb": "Preguntar - Pedir", "sForm": "ASK", "sPast": "ASKED", "pParticiple": "ASKED" },
    { "spanishVerb": "Asignar - Designar", "sForm": "ASSIGN", "sPast": "ASSIGNED", "pParticiple": "ASSIGNED" },
    { "spanishVerb": "Ayudar - Asistir", "sForm": "ASSIST", "sPast": "ASSISTED", "pParticiple": "ASSISTED" },
    { "spanishVerb": "Unir - Juntar", "sForm": "ATTACH", "sPast": "ATTACHED", "pParticiple": "ATTACHED" },
    { "spanishVerb": "Asistir - Acompañar", "sForm": "ATTEND", "sPast": "ATTENDED", "pParticiple": "ATTENDED" },
    { "spanishVerb": "Despertar(se)", "sForm": "AWAKE", "sPast": "AWOKE", "pParticiple": "AWOKE" },
    { "spanishVerb": "Otorgar - Premiar", "sForm": "AWARD", "sPast": "AWARDED", "pParticiple": "AWARDED" },
    { "spanishVerb": "Hornear - Cocer", "sForm": "BAKE", "sPast": "BAKED", "pParticiple": "BAKED" },
    { "spanishVerb": "Bañar(se)", "sForm": "BATHE", "sPast": "BATHED", "pParticiple": "BATHED" },
    { "spanishVerb": "Ser - Estar", "sForm": "BE", "sPast": "WAS - WERE", "pParticiple": "BEEN" },
    { "spanishVerb": "Nacer", "sForm": "BEAR", "sPast": "BORE", "pParticiple": "BORN" },
    { "spanishVerb": "Golpear - Batir", "sForm": "BEAT", "sPast": "BEAT", "pParticiple": "BEATEN" },
    { "spanishVerb": "Llegar a ser - Convertirse", "sForm": "BECOME", "sPast": "BECAME", "pParticiple": "BECOME" },
    { "spanishVerb": "Comenzar - Empezar", "sForm": "BEGIN", "sPast": "BEGAN", "pParticiple": "BEGUN" },
    { "spanishVerb": "Creer", "sForm": "BELIEVE", "sPast": "BELIEVED", "pParticiple": "BELIEVED" },
    { "spanishVerb": "Pertenecer", "sForm": "BELONG", "sPast": "BELONGED", "pParticiple": "BELONGED" },
    { "spanishVerb": "Doblarse - Encorvarse", "sForm": "BEND", "sPast": "BENT", "pParticiple": "BENT" },
    { "spanishVerb": "Apostar", "sForm": "BET", "sPast": "BET", "pParticiple": "BET" },
    { "spanishVerb": "Ofrecer - Ofertar - Mandar", "sForm": "BID", "sPast": "BID ", "pParticiple": "BID" },
    { "spanishVerb": "Atar - Pegar - Enlazar", "sForm": "BIND", "sPast": "BOUND", "pParticiple": "BOUND" },
    { "spanishVerb": "Morder - Picar", "sForm": "BITE", "sPast": "BIT", "pParticiple": "BITTEN" },
    { "spanishVerb": "Sangrar", "sForm": "BLEED", "sPast": "BLED", "pParticiple": "BLED" },
    { "spanishVerb": "Soplar - Ventear", "sForm": "BLOW", "sPast": "BLEW", "pParticiple": "BLOWN" },
    { "spanishVerb": "Ruborizar - Sonrojar", "sForm": "BLUSH", "sPast": "BLUSHED", "pParticiple": "BLUSHED" },
    { "spanishVerb": "Hervir", "sForm": "BOIL", "sPast": "BOILED", "pParticiple": "BOILED" },
    { "spanishVerb": "Pedir prestado", "sForm": "BORROW", "sPast": "BORROWED", "pParticiple": "BORROWED" },
    { "spanishVerb": "Molestar", "sForm": "BOTHER", "sPast": "BOTHERED", "pParticiple": "BOTHERED" },
    { "spanishVerb": "Romper - Quebrar", "sForm": "BREAK", "sPast": "BROKE", "pParticiple": "BROKEN" },
    { "spanishVerb": "Criar - Educar", "sForm": "BREED", "sPast": "BRED", "pParticiple": "BRED" },
    { "spanishVerb": "Difundir - Emitir", "sForm": "BROADCAST", "sPast": "BROADCAST", "pParticiple": "BROADCAST" },
    { "spanishVerb": "Tostar - Dorar", "sForm": "BROWN", "sPast": "BROWN", "pParticiple": "BROWN" },
    { "spanishVerb": "Cepillar", "sForm": "BRUSH", "sPast": "BRUSHED", "pParticiple": "BRUSHED" },
    { "spanishVerb": "Construir - Edificar", "sForm": "BUILD", "sPast": "BUILT", "pParticiple": "BUILT" },
    { "spanishVerb": "Quemar(se)", "sForm": "BURN", "sPast": "BURNED", "pParticiple": "BURNED" },
    { "spanishVerb": "Estallar - Reventar", "sForm": "BURST", "sPast": "BURST", "pParticiple": "BURST" },
    { "spanishVerb": "Comprar - Adquirir", "sForm": "BUY", "sPast": "BOUGHT", "pParticiple": "BOUGHT" },
    { "spanishVerb": "Llamar", "sForm": "CALL", "sPast": "CALLED", "pParticiple": "CALLED" },
    { "spanishVerb": "Acampar", "sForm": "CAMP", "sPast": "CAMPED", "pParticiple": "CAMPED" },
    { "spanishVerb": "Cancelar", "sForm": "CANCEL", "sPast": "CANCELLED", "pParticiple": "CANCELLED" },
    { "spanishVerb": "Cuidar - Preocuparse", "sForm": "CARE", "sPast": "CARED", "pParticiple": "CARED" },
    { "spanishVerb": "Llevar - Cargar", "sForm": "CARRY", "sPast": "CARRIED", "pParticiple": "CARRIED" },
    { "spanishVerb": "Coger - Agarrar", "sForm": "CATCH", "sPast": "CAUGHT", "pParticiple": "CAUGHT" },
    { "spanishVerb": "Celebrar", "sForm": "CELEBRATE", "sPast": "CELEBRATED", "pParticiple": "CELEBRATED" },
    { "spanishVerb": "Cambiar ", "sForm": "CHANGE", "sPast": "CHANGED", "pParticiple": "CHANGED" },
    { "spanishVerb": "Cobrar - Cargar", "sForm": "CHARGE", "sPast": "CHARGED", "pParticiple": "CHARGED" },
    { "spanishVerb": "Revisar - Comprobar", "sForm": "CHECK", "sPast": "CHECKED", "pParticiple": "CHECKED" },
    { "spanishVerb": "Masticar - Rumiar", "sForm": "CHEW", "sPast": "CHEWED", "pParticiple": "CHEWED" },
    { "spanishVerb": "Resfriar - Enfriar", "sForm": "CHILL", "sPast": "CHILLED", "pParticiple": "CHILLED" },
    { "spanishVerb": "Elegir - Escoger - Seleccionar", "sForm": "CHOOSE", "sPast": "CHOSE", "pParticiple": "CHOSEN" },
    { "spanishVerb": "Rodear - Cercar ", "sForm": "CIRCLE", "sPast": "CIRCLED", "pParticiple": "CIRCLED" },
    { "spanishVerb": "Aplaudir", "sForm": "CLAP", "sPast": "CLAPPED", "pParticiple": "CLAPPED" },
    { "spanishVerb": "Limpiar - Asear", "sForm": "CLEAN", "sPast": "CLEANED", "pParticiple": "CLEANED" },
    { "spanishVerb": "Trepar - Subir - Escalar", "sForm": "CLIMB", "sPast": "CLIMBED", "pParticiple": "CLIMBED" },
    { "spanishVerb": "Agarrarse - Aferrarse", "sForm": "CLING", "sPast": "CLUNG", "pParticiple": "CLUNG" },
    { "spanishVerb": "Cerrar - Finalizar", "sForm": "CLOSE", "sPast": "CLOSED", "pParticiple": "CLOSED" },
    { "spanishVerb": "Coleccionar", "sForm": "COLLECT", "sPast": "COLLECTED", "pParticiple": "COLLECTED" },
    { "spanishVerb": "Venir", "sForm": "COME", "sPast": "CAME", "pParticiple": "COME" },
    { "spanishVerb": "Comentar", "sForm": "COMMENT", "sPast": "COMMENTED", "pParticiple": "COMMENTED" },
    { "spanishVerb": "Quejar(se) - Reclamar", "sForm": "COMPLAIN", "sPast": "COMPLAINED", "pParticiple": "COMPLAINED" },
    { "spanishVerb": "Completar", "sForm": "COMPLETE", "sPast": "COMPLETED", "pParticiple": "COMPLETED" },
    { "spanishVerb": "Continuar", "sForm": "CONTINUE", "sPast": "CONTINUED", "pParticiple": "CONTINUED" },
    { "spanishVerb": "Convencer", "sForm": "CONVINCE", "sPast": "CONVINCED", "pParticiple": "CONVINCED" },
    { "spanishVerb": "Cocinar", "sForm": "COOK", "sPast": "COOKED", "pParticiple": "COOKED" },
    { "spanishVerb": "Enfriar - Refrigerar", "sForm": "COOL", "sPast": "COOLED", "pParticiple": "COOLED" },
    { "spanishVerb": "Copiar - imitar", "sForm": "COPY", "sPast": "COPIED", "pParticiple": "COPIED" },
    { "spanishVerb": "Costar - Valer", "sForm": "COST", "sPast": "COST", "pParticiple": "COST" },
    { "spanishVerb": "Contar - Calcular", "sForm": "COUNT", "sPast": "COUNTED", "pParticiple": "COUNTED" },
    { "spanishVerb": "Cubrir", "sForm": "COVER", "sPast": "COVERED", "pParticiple": "COVERED" },
    { "spanishVerb": "Cruzar - Atravesar", "sForm": "CROSS", "sPast": "CROSSED", "pParticiple": "CROSSED" },
    { "spanishVerb": "Llorar - Gritar", "sForm": "CRY", "sPast": "CRIED", "pParticiple": "CRIED" },
    { "spanishVerb": "Cortar", "sForm": "CUT", "sPast": "CUT", "pParticiple": "CUT" },
    { "spanishVerb": "Bailar", "sForm": "DANCE", "sPast": "DANCED", "pParticiple": "DANCED" },
    { "spanishVerb": "Distribuir - Negociar", "sForm": "DEAL", "sPast": "DEALT", "pParticiple": "DEALT" },
    { "spanishVerb": "Decidir", "sForm": "DECIDE", "sPast": "DECIDED", "pParticiple": "DECIDED" },
    { "spanishVerb": "Declarar", "sForm": "DECLARE", "sPast": "DECLARED", "pParticiple": "DECLARED" },
    { "spanishVerb": "Decorar - Adornar", "sForm": "DECORATE", "sPast": "DECORATED", "pParticiple": "DECORATED" },
    { "spanishVerb": "Demostrar", "sForm": "DEMONSTRATE", "sPast": "DEMONSTRATED", "pParticiple": "DEMONSTRATED" },
    { "spanishVerb": "Depender", "sForm": "DEPEND", "sPast": "DEPENDED", "pParticiple": "DEPENDED" },
    { "spanishVerb": "Describir", "sForm": "DESCRIBE", "sPast": "DESCRIBED", "pParticiple": "DESCRIBED" },
    { "spanishVerb": "Destruir", "sForm": "DESTROY", "sPast": "DESTROYED", "pParticiple": "DESTROYED" },
    { "spanishVerb": "Dictar", "sForm": "DICTATE", "sPast": "DICTATED", "pParticiple": "DICTATED" },
    { "spanishVerb": "Morir", "sForm": "DIE", "sPast": "DIED", "pParticiple": "DIED" },
    { "spanishVerb": "Cavar - Escavar", "sForm": "DIG", "sPast": "DUG", "pParticiple": "DUG" },
    { "spanishVerb": "Discrepar - No estar de acuerdo", "sForm": "DISAGREE", "sPast": "DISAGREED", "pParticiple": "DISAGREED" },
    { "spanishVerb": "Descubrir", "sForm": "DISCOVER", "sPast": "DISCOVERED", "pParticiple": "DISCOVERED" },
    { "spanishVerb": "Discutir", "sForm": "DISCUSS", "sPast": "DISCUSSED", "pParticiple": "DISCUSSED" },
    { "spanishVerb": "Dividir - Separar", "sForm": "DIVIDE", "sPast": "DIVIDED", "pParticiple": "DIVIDED" },
    { "spanishVerb": "Hacer- Realizar", "sForm": "DO", "sPast": "DID", "pParticiple": "DONE" },
    { "spanishVerb": "Agotar - Vaciar", "sForm": "DRAIN", "sPast": "DRAINED", "pParticiple": "DRAINED" },
    { "spanishVerb": "Dibujar - Trazar", "sForm": "DRAW", "sPast": "DREW", "pParticiple": "DRAWN" },
    { "spanishVerb": "Soñar", "sForm": "DREAM", "sPast": "DREAMED", "pParticiple": "DREAMED" },
    { "spanishVerb": "Vestirse", "sForm": "DRESS", "sPast": "DRESSED", "pParticiple": "DRESSED" },
    { "spanishVerb": "Beber - tomar", "sForm": "DRINK", "sPast": "DRANK", "pParticiple": "DRUNK" },
    { "spanishVerb": "Conducir - Manejar", "sForm": "DRIVE", "sPast": "DROVE", "pParticiple": "DRIVEN" },
    { "spanishVerb": "Arrojar - Soltar - Dejar caer", "sForm": "DROP", "sPast": "DROPPED", "pParticiple": "DROPPED" },
    { "spanishVerb": "Desempolvar - Sacudir", "sForm": "DUST", "sPast": "DUSTED", "pParticiple": "DUSTED" },
    { "spanishVerb": "Comer", "sForm": "EAT", "sPast": "ATE", "pParticiple": "EATEN" },
    { "spanishVerb": "Vaciar - Desocupar", "sForm": "EMPTY", "sPast": "EMPTIED", "pParticiple": "EMPTIED" },
    { "spanishVerb": "Finalizar - Terminar", "sForm": "END", "sPast": "ENDED", "pParticiple": "ENDED" },
    { "spanishVerb": "Disfrutar - Gozar", "sForm": "ENJOY", "sPast": "ENJOYED", "pParticiple": "ENJOYED" },
    { "spanishVerb": "Excusar - Disculpar", "sForm": "EXCUSE", "sPast": "EXCUSED", "pParticiple": "EXCUSED" },
    { "spanishVerb": "Ejercitar - Practicar", "sForm": "EXERCISE", "sPast": "EXERCISED", "pParticiple": "EXERCISED" },
    { "spanishVerb": "Desteñir - Descolorar", "sForm": "FADE", "sPast": "FADED", "pParticiple": "FADED" },
    { "spanishVerb": "Fallar - Fracasar - Quebrar", "sForm": "FAIL", "sPast": "FAILED", "pParticiple": "FAILED" },
    { "spanishVerb": "Caer(se)", "sForm": "FALL", "sPast": "FELL", "pParticiple": "FALLEN" },
    { "spanishVerb": "Abrochar - Sujertar", "sForm": "FASTEN", "sPast": "FASTENED", "pParticiple": "FASTENED" },
    { "spanishVerb": "Temer - Tener miedo", "sForm": "FEAR", "sPast": "FEARED", "pParticiple": "FEARED" },
    { "spanishVerb": "Alimentar(se)", "sForm": "FEED", "sPast": "FED", "pParticiple": "FED" },
    { "spanishVerb": "Sentir(se)", "sForm": "FEEL", "sPast": "FELT", "pParticiple": "FELT" },
    { "spanishVerb": "Pelear", "sForm": "FIGHT", "sPast": "FOUGHT", "pParticiple": "FOUGHT" },
    { "spanishVerb": "Llenar(se) - Ocupar", "sForm": "FILL", "sPast": "FILLED", "pParticiple": "FILLED" },
    { "spanishVerb": "Encontrar - Hallar", "sForm": "FIND", "sPast": "FOUND", "pParticiple": "FOUND" },
    { "spanishVerb": "Terminar - Finalizar", "sForm": "FINISH", "sPast": "FINISHED", "pParticiple": "FINISHED" },
    { "spanishVerb": "Pescar", "sForm": "FISH", "sPast": "FISHED", "pParticiple": "FISHED" },
    { "spanishVerb": "Caber - Llevar bien", "sForm": "FIT", "sPast": "FIT", "pParticiple": "FIT" },
    { "spanishVerb": "Arreglar - Reparar", "sForm": "FIX", "sPast": "FIXED", "pParticiple": "FIXED" },
    { "spanishVerb": "Huir de - Escapar - Evitar", "sForm": "FLEE", "sPast": "FLED", "pParticiple": "FLED" },
    { "spanishVerb": "Volar", "sForm": "FLY", "sPast": "FLEW", "pParticiple": "FLOWN" },
    { "spanishVerb": "Seguir - Continuar", "sForm": "FOLLOW", "sPast": "FOLLOWED", "pParticiple": "FOLLOWED" },
    { "spanishVerb": "Prohibir", "sForm": "FORBID", "sPast": "FORBADE", "pParticiple": "FORBIDDEN" },
    { "spanishVerb": "Olvidar", "sForm": "FORGET", "sPast": "FORGOT", "pParticiple": "FORGOTTEN" },
    { "spanishVerb": "Perdonar", "sForm": "FORGIVE", "sPast": "FORGAVE", "pParticiple": "FORGIVEN" },
    { "spanishVerb": "Congelar - Helar", "sForm": "FREEZE", "sPast": "FROZE", "pParticiple": "FROZEN" },
    { "spanishVerb": "Freir", "sForm": "FRY", "sPast": "FRIED", "pParticiple": "FRIED" },
    { "spanishVerb": "Conseguir - Obtener", "sForm": "GET", "sPast": "GOT", "pParticiple": "GOTTEN" },
    { "spanishVerb": "Dar - Regalar", "sForm": "GIVE", "sPast": "GAVE", "pParticiple": "GIVEN" },
    { "spanishVerb": "Ir", "sForm": "GO", "sPast": "WENT", "pParticiple": "GONE" },
    { "spanishVerb": "Graduar - Calificar - Clasificar", "sForm": "GRADE", "sPast": "GRADED", "pParticiple": "GRADED" },
    { "spanishVerb": "Rallar - Raspar", "sForm": "GRATE", "sPast": "GRATED", "pParticiple": "GRATED" },
    { "spanishVerb": "Asar a la parrilla", "sForm": "GRILL", "sPast": "GRILLED", "pParticiple": "GRILLED" },
    { "spanishVerb": "Moler - Triturar", "sForm": "GRIND", "sPast": "GROUND", "pParticiple": "GROUND" },
    { "spanishVerb": "Crecer - Brotar", "sForm": "GROW", "sPast": "GREW", "pParticiple": "GROWN" },
    { "spanishVerb": "Entregar - Presentar", "sForm": "HAND IN", "sPast": "HANDED IN", "pParticiple": "HANDED IN" },
    { "spanishVerb": "Dar - Distribuir", "sForm": "HAND OUT", "sPast": "HANDED OUT", "pParticiple": "HANDED OUT" },
    { "spanishVerb": "Colgar - Suspender", "sForm": "HANG", "sPast": "HUNG", "pParticiple": "HUNG" },
    { "spanishVerb": "Suceder - Ocurrir - Pasar", "sForm": "HAPPEN", "sPast": "HAPPENED", "pParticiple": "HAPPENED" },
    { "spanishVerb": "Odiar - Aborrecer - Detestar", "sForm": "HATE", "sPast": "HATED", "pParticiple": "HATED" },
    { "spanishVerb": "Tener - Haber", "sForm": "HAVE", "sPast": "HAD", "pParticiple": "HAD" },
    { "spanishVerb": "Oir", "sForm": "HEAR", "sPast": "HEARD", "pParticiple": "HEARD" },
    { "spanishVerb": "Ayudar - Socorrer", "sForm": "HELP", "sPast": "HELPED", "pParticiple": "HELPED" },
    { "spanishVerb": "Esconder - Ocultar", "sForm": "HIDE", "sPast": "HID", "pParticiple": "HIDDEN" },
    { "spanishVerb": "Golpear - Pegar", "sForm": "HIT", "sPast": "HIT", "pParticiple": "HIT" },
    { "spanishVerb": "Sostener - Retener- Mantener", "sForm": "HOLD", "sPast": "HELD", "pParticiple": "HELD" },
    { "spanishVerb": "Apresurar(se)", "sForm": "HURRY", "sPast": "HURRIED", "pParticiple": "HURRIED" },
    { "spanishVerb": "Herir - Lastimar", "sForm": "HURT", "sPast": "HURT", "pParticiple": "HURT" },
    { "spanishVerb": "Identificar", "sForm": "IDENTIFY", "sPast": "IDENTIFIED", "pParticiple": "IDENTIFIED" },
    { "spanishVerb": "Imaginar", "sForm": "IMAGINE", "sPast": "IMAGINED", "pParticiple": "IMAGINED" },
    { "spanishVerb": "Imitar", "sForm": "IMITATE", "sPast": "IMITATED", "pParticiple": "IMITATED" },
    { "spanishVerb": "Incluir", "sForm": "INCLUDE", "sPast": "INCLUDED", "pParticiple": "INCLUDED" },
    { "spanishVerb": "Inspeccionar", "sForm": "INSPECT", "sPast": "INSPECTED", "pParticiple": "INSPECTED" },
    { "spanishVerb": "Invitar", "sForm": "INVITE", "sPast": "INVITED", "pParticiple": "INVITED" },
    { "spanishVerb": "Trotar", "sForm": "JOG", "sPast": "JOGGED", "pParticiple": "JOGGED" },
    { "spanishVerb": "Saltar - Brincar", "sForm": "JUMP", "sPast": "JUMPED", "pParticiple": "JUMPED" },
    { "spanishVerb": "Guardar - Mantener", "sForm": "KEEP", "sPast": "KEPT", "pParticiple": "KEPT" },
    { "spanishVerb": "Patear - Golpear", "sForm": "KICK", "sPast": "KICKED", "pParticiple": "KICKED" },
    { "spanishVerb": "Matar - Acabar con", "sForm": "KILL", "sPast": "KILLED", "pParticiple": "KILLED" },
    { "spanishVerb": "BESAR", "sForm": "KISS", "sPast": "KISSED", "pParticiple": "KISSED" },
    { "spanishVerb": "Saber - Conocer", "sForm": "KNOW", "sPast": "KNEW", "pParticiple": "KNOWN" },
    { "spanishVerb": "Aterrizar - Desembarcar", "sForm": "LAND", "sPast": "LANDED", "pParticiple": "LANDED" },
    { "spanishVerb": "Reir(se)", "sForm": "LAUGH", "sPast": "LAUGHED", "pParticiple": "LAUGHED" },
    { "spanishVerb": "Poner - Colocar - Echar", "sForm": "LAY", "sPast": "LAID", "pParticiple": "LAID" },
    { "spanishVerb": "Conducir - Liderar", "sForm": "LEAD", "sPast": "LED", "pParticiple": "LED" },
    { "spanishVerb": "Aprender", "sForm": "LEARN", "sPast": "LEARNED", "pParticiple": "LEARNED" },
    { "spanishVerb": "Salir - Abandonar", "sForm": "LEAVE", "sPast": "LEFT", "pParticiple": "LEFT" },
    { "spanishVerb": "Prestar", "sForm": "LEND", "sPast": "LENT", "pParticiple": "LENT" },
    { "spanishVerb": "Dejar - Permitir", "sForm": "LET", "sPast": "LET", "pParticiple": "LET" },
    { "spanishVerb": "Lamer", "sForm": "LICK", "sPast": "LICKED", "pParticiple": "LICKED" },
    { "spanishVerb": "Mentir", "sForm": "LIE", "sPast": "LAY", "pParticiple": "LAIN" },
    { "spanishVerb": "Encender - Prender", "sForm": "LIGHT", "sPast": "LIT", "pParticiple": "LIT" },
    { "spanishVerb": "Gustar - Querer", "sForm": "LIKE", "sPast": "LIKED", "pParticiple": "LIKED" },
    { "spanishVerb": "Escuchar", "sForm": "LISTEN TO", "sPast": "LISTENED TO", "pParticiple": "LISTENED TO" },
    { "spanishVerb": "Vivir", "sForm": "LIVE", "sPast": "LIVED", "pParticiple": "LIVED" },
    { "spanishVerb": "Mirar - Lucir", "sForm": "LOOK", "sPast": "LOOKED", "pParticiple": "LOOKED" },
    { "spanishVerb": "Perder", "sForm": "LOSE", "sPast": "LOST", "pParticiple": "LOST" },
    { "spanishVerb": "Amar - Adorar - Encantar", "sForm": "LOVE", "sPast": "LOVED", "pParticiple": "LOVED" },
    { "spanishVerb": "Bajar - Reducir - Disminuir", "sForm": "LOWER", "sPast": "LOWERED", "pParticiple": "LOWERED" },
    { "spanishVerb": "Hacer - Fabricar", "sForm": "MAKE", "sPast": "MADE", "pParticiple": "MADE" },
    { "spanishVerb": "Manejar - Dirigir - Arreglarselas", "sForm": "MANAGE", "sPast": "MANAGED", "pParticiple": "MANAGED" },
    { "spanishVerb": "Significar - Querer decir", "sForm": "MEAN", "sPast": "MEANT", "pParticiple": "MEANT" },
    { "spanishVerb": "Conocer - Encontrar", "sForm": "MEET", "sPast": "MET", "pParticiple": "MET" },
    { "spanishVerb": "Memorizar", "sForm": "MEMORIZE", "sPast": "MEMORIZED", "pParticiple": "MEMORIZED" },
    { "spanishVerb": "Arreglar - Componer", "sForm": "MEND", "sPast": "MENDED", "pParticiple": "MENDED" },
    { "spanishVerb": "Preocupar(se) - Cuidar", "sForm": "MIND", "sPast": "MINDED", "pParticiple": "MINDED" },
    { "spanishVerb": "Extraviar - Perder", "sForm": "MISLAY", "sPast": "MISLAYED", "pParticiple": "MISLAYED" },
    { "spanishVerb": "Hechar de menos - Perder", "sForm": "MISS", "sPast": "MISSED", "pParticiple": "MISSED" },
    { "spanishVerb": "Errar - Equivocarse", "sForm": "MISTAKE", "sPast": "MISTOOK", "pParticiple": "MISTAKEN" },
    { "spanishVerb": "Mezclar - Barajar", "sForm": "MIX", "sPast": "MIXED", "pParticiple": "MIXED" },
    { "spanishVerb": "Trapear - Fregar", "sForm": "MOP", "sPast": "MOPPED", "pParticiple": "MOPPED" },
    { "spanishVerb": "Mover - Mudarse - Trastear", "sForm": "MOVE", "sPast": "MOVED", "pParticiple": "MOVED" },
    { "spanishVerb": "Multiplicar", "sForm": "MULTIPLY", "sPast": "MULTIPLIED", "pParticiple": "MULTIPLIED" },
    { "spanishVerb": "Nombrar - Denominar", "sForm": "NAME", "sPast": "NAMED", "pParticiple": "NAMED" },
    { "spanishVerb": "Necesitar - Requerir", "sForm": "NEED", "sPast": "NEEDED", "pParticiple": "NEEDED" },
    { "spanishVerb": "Notar - Advertir", "sForm": "NOTICE", "sPast": "NOTICED", "pParticiple": "NOTICED" },
    { "spanishVerb": "Ocurrir - Suceder", "sForm": "OCCUR", "sPast": "OCCURED", "pParticiple": "OCCURED" },
    { "spanishVerb": "Ofrecer", "sForm": "OFFER", "sPast": "OFFERED", "pParticiple": "OFFERED" },
    { "spanishVerb": "Omitir", "sForm": "OMIT", "sPast": "OMITTED", "pParticiple": "OMITTED" },
    { "spanishVerb": "Abrir", "sForm": "OPEN", "sPast": "OPENED", "pParticiple": "OPENED" },
    { "spanishVerb": "Ordenar - Disponer", "sForm": "ORDER", "sPast": "ORDERED", "pParticiple": "ORDERED" },
    { "spanishVerb": "Vencer - Superar - Triunfar", "sForm": "OVERCOME", "sPast": "OVERCAME", "pParticiple": "OVERCOME" },
    { "spanishVerb": "Empacar - Envasar", "sForm": "PACK", "sPast": "PACKED", "pParticiple": "PACKED" },
    { "spanishVerb": "Pintar", "sForm": "PAINT", "sPast": "PAINTED", "pParticiple": "PAINTED" },
    { "spanishVerb": "Parquear - Estacionar", "sForm": "PARK", "sPast": "PARKED", "pParticiple": "PARKED" },
    { "spanishVerb": "Pasar - Aprobar - Superar", "sForm": "PASS", "sPast": "PASSED", "pParticiple": "PASSED" },
    { "spanishVerb": "Pagar", "sForm": "PAY", "sPast": "PAID", "pParticiple": "PAID" },
    { "spanishVerb": "Pelar", "sForm": "PEEL", "sPast": "PEELED", "pParticiple": "PEELED" },
    { "spanishVerb": "Permitir", "sForm": "PERMIT", "sPast": "PERMITTED", "pParticiple": "PERMITTED" },
    { "spanishVerb": "Persuadir - Convencer", "sForm": "PERSUADE", "sPast": "PERSUADED", "pParticiple": "PERSUADED" },
    { "spanishVerb": "Recoger", "sForm": "PICK UP", "sPast": "PICKED UP", "pParticiple": "PICKED UP" },
    { "spanishVerb": "Poner - Colocar - Situar", "sForm": "PLACE", "sPast": "PLACED", "pParticiple": "PLACED" },
    { "spanishVerb": "Planear", "sForm": "PLAN", "sPast": "PLANNED", "pParticiple": "PLANNED" },
    { "spanishVerb": "Plantar", "sForm": "PLANT", "sPast": "PLANTED", "pParticiple": "PLANTED" },
    { "spanishVerb": "Jugar - Tocar - Reproducir", "sForm": "PLAY", "sPast": "PLAYED", "pParticiple": "PLAYED" },
    { "spanishVerb": "Pulir", "sForm": "POLISH", "sPast": "POLISHED", "pParticiple": "POLISHED" },
    { "spanishVerb": "Practicar", "sForm": "PRACTICE", "sPast": "PRACTICED", "pParticiple": "PRACTICED" },
    { "spanishVerb": "Preferir", "sForm": "PREFER", "sPast": "PREFERRED", "pParticiple": "PREFERRED" },
    { "spanishVerb": "Preparar", "sForm": "PREPARE", "sPast": "PREPARED", "pParticiple": "PREPARED" },
    { "spanishVerb": "Imprimir", "sForm": "PRINT", "sPast": "PRINTED", "pParticiple": "PRINTED" },
    { "spanishVerb": "Prometer", "sForm": "PROMISE", "sPast": "PROMISED", "pParticiple": "PROMISED" },
    { "spanishVerb": "Pronunciar", "sForm": "PRONOUNCE", "sPast": "PRONOUNCED", "pParticiple": "PRONOUNCED" },
    { "spanishVerb": "Publicar", "sForm": "PUBLISH", "sPast": "PUBLISHED", "pParticiple": "PUBLISHED" },
    { "spanishVerb": "Halar - Tirar de", "sForm": "PULL", "sPast": "PULLED", "pParticiple": "PULLED" },
    { "spanishVerb": "Castigar", "sForm": "PUNISH", "sPast": "PUNISHED", "pParticiple": "PUNISHED" },
    { "spanishVerb": "Empujar", "sForm": "PUSH", "sPast": "PUSHED", "pParticiple": "PUSHED" },
    { "spanishVerb": "Poner - Colocar", "sForm": "PUT", "sPast": "PUT", "pParticiple": "PUT" },
    { "spanishVerb": "Omitir - Rendirse", "sForm": "QUIT", "sPast": "QUIT", "pParticiple": "QUIT" },
    { "spanishVerb": "Llover", "sForm": "RAIN", "sPast": "RAINED", "pParticiple": "RAINED" },
    { "spanishVerb": "Llegar - Alcanzar", "sForm": "REACH", "sPast": "REACHED", "pParticiple": "REACHED" },
    { "spanishVerb": "Leer", "sForm": "READ", "sPast": "READ", "pParticiple": "READ" },
    { "spanishVerb": "Recibir", "sForm": "RECEIVE", "sPast": "RECEIVED", "pParticiple": "RECEIVED" },
    { "spanishVerb": "Relajar - Mitigar", "sForm": "RELAX", "sPast": "RELAXED", "pParticiple": "RELAXED" },
    { "spanishVerb": "Permanecer - Quedarse", "sForm": "REMAIN", "sPast": "REMAINED", "pParticiple": "REMAINED" },
    { "spanishVerb": "Recordar - Remembrar", "sForm": "REMEMBER", "sPast": "REMEMBERED", "pParticiple": "REMEMBERED" },
    { "spanishVerb": "Reparar - Arreglar", "sForm": "REPAIR", "sPast": "REPAIRED", "pParticiple": "REPAIRED" },
    { "spanishVerb": "Repetir", "sForm": "REPEAT", "sPast": "REPEATED", "pParticiple": "REPEATED" },
    { "spanishVerb": "Representar", "sForm": "REPRESENT", "sPast": "REPRESENTED", "pParticiple": "REPRESENTED" },
    { "spanishVerb": "Descansar - Reposar", "sForm": "REST", "sPast": "RESTED", "pParticiple": "RESTED" },
    { "spanishVerb": "Librarse de - Deshacerse", "sForm": "RID", "sPast": "RID", "pParticiple": "RID" },
    { "spanishVerb": "Cabalgar - Montar", "sForm": "RIDE", "sPast": "RODE", "pParticiple": "RIDDEN" },
    { "spanishVerb": "Sonar - Timbrar", "sForm": "RING", "sPast": "RANG", "pParticiple": "RUNG" },
    { "spanishVerb": "Subir - Ascender", "sForm": "RISE", "sPast": "ROSE", "pParticiple": "RISEN" },
    { "spanishVerb": "Correr", "sForm": "RUN", "sPast": "RAN", "pParticiple": "RUN" },
    { "spanishVerb": "Guardar - Ahorrar - Salvar", "sForm": "SAVE", "sPast": "SAVED", "pParticiple": "SAVED" },
    { "spanishVerb": "Decir", "sForm": "SAY", "sPast": "SAID", "pParticiple": "SAID" },
    { "spanishVerb": "Ver", "sForm": "SEE", "sPast": "SAW", "pParticiple": "SEEN" },
    { "spanishVerb": "Parecer", "sForm": "SEEM", "sPast": "SEEMED", "pParticiple": "SEEMED" },
    { "spanishVerb": "Seleccionar", "sForm": "SELECT", "sPast": "SELECTED", "pParticiple": "SELECTED" },
    { "spanishVerb": "Vender", "sForm": "SELL", "sPast": "SOLD", "pParticiple": "SOLD" },
    { "spanishVerb": "Enviar - Mandar", "sForm": "SEND", "sPast": "SENT", "pParticiple": "SENT" },
    { "spanishVerb": "Establecer - Poner - Fijar", "sForm": "SET", "sPast": "SET", "pParticiple": "SET" },
    { "spanishVerb": "Coser", "sForm": "SEW", "sPast": "SEWED", "pParticiple": "SEWED" },
    { "spanishVerb": "Sacudir - Menear", "sForm": "SHAKE", "sPast": "SHOOK", "pParticiple": "SHAKEN" },
    { "spanishVerb": "Compartir", "sForm": "SHARE", "sPast": "SHARED", "pParticiple": "SHARED" },
    { "spanishVerb": "Afilar - Amolar", "sForm": "SHARPEN", "sPast": "SHARPENED", "pParticiple": "SHARPENED" },
    { "spanishVerb": "Brillar - Alumbrar", "sForm": "SHINE", "sPast": "SHONE", "pParticiple": "SHONE" },
    { "spanishVerb": "Tirar - Disparar", "sForm": "SHOOT", "sPast": "SHOT", "pParticiple": "SHOT" },
    { "spanishVerb": "Comprar en tiendas", "sForm": "SHOP", "sPast": "SHOPPED", "pParticiple": "SHOPPED" },
    { "spanishVerb": "Gritar", "sForm": "SHOUT", "sPast": "SHOUTED", "pParticiple": "SHOUTED" },
    { "spanishVerb": "Mostrar - Enseñar", "sForm": "SHOW", "sPast": "SHOWED", "pParticiple": "SHOWED" },
    { "spanishVerb": "Encoger - Contraer", "sForm": "SHRINK", "sPast": "SHRANK", "pParticiple": "SHRUNK" },
    { "spanishVerb": "Cerrar - Callar", "sForm": "SHUT", "sPast": "SHUT", "pParticiple": "SHUT" },
    { "spanishVerb": "Suspirar - Susurrar", "sForm": "SIGH", "sPast": "SIGHED", "pParticiple": "SIGHED" },
    { "spanishVerb": "Firmar", "sForm": "SIGN", "sPast": "SIGNED", "pParticiple": "SIGNED" },
    { "spanishVerb": "Cantar", "sForm": "SING", "sPast": "SANG", "pParticiple": "SUNG" },
    { "spanishVerb": "Sumergir - Hundir", "sForm": "SINK", "sPast": "SANK", "pParticiple": "SUNK" },
    { "spanishVerb": "Sentarse", "sForm": "SIT", "sPast": "SAT", "pParticiple": "SAT" },
    { "spanishVerb": "Patinar", "sForm": "SKATE", "sPast": "SKATED", "pParticiple": "SKATED" },
    { "spanishVerb": "Dormir", "sForm": "SLEEP", "sPast": "SLEPT", "pParticiple": "SLEPT" },
    { "spanishVerb": "Rebanar", "sForm": "SLICE", "sPast": "SLICED", "pParticiple": "SLICED" },
    { "spanishVerb": "Resbalar(se)", "sForm": "SLIDE", "sPast": "SLID", "pParticiple": "SLID" },
    { "spanishVerb": "Oler - Husmear", "sForm": "SMELL", "sPast": "SMELLED", "pParticiple": "SMELLED" },
    { "spanishVerb": "Sonreir", "sForm": "SMILE", "sPast": "SMILED", "pParticiple": "SMILED" },
    { "spanishVerb": "Fumar", "sForm": "SMOKE", "sPast": "SMOKED", "pParticiple": "SMOKED" },
    { "spanishVerb": "Estornudar", "sForm": "SNEEZE", "sPast": "SNEEZED", "pParticiple": "SNEEZED" },
    { "spanishVerb": "Resolver", "sForm": "SOLVE", "sPast": "SOLVED", "pParticiple": "SOLVED" },
    { "spanishVerb": "Sonar - Tocar", "sForm": "SOUND", "sPast": "SOUNDED", "pParticiple": "SOUNDED" },
    { "spanishVerb": "Hablar", "sForm": "SPEAK", "sPast": "SPOKE", "pParticiple": "SPOKEN" },
    { "spanishVerb": "Acelerar", "sForm": "SPEED", "sPast": "SPED", "pParticiple": "SPED" },
    { "spanishVerb": "Deletrear", "sForm": "SPELL", "sPast": "SPELLED", "pParticiple": "SPELLED" },
    { "spanishVerb": "Gastar - Pasar el tiempo", "sForm": "SPEND", "sPast": "SPENT", "pParticiple": "SPENT" },
    { "spanishVerb": "Derramar", "sForm": "SPILL", "sPast": "SPILLED", "pParticiple": "SPILLED" },
    { "spanishVerb": "Hacer girar - Dar vueltas", "sForm": "SPIN", "sPast": "SPUN", "pParticiple": "SPUN" },
    { "spanishVerb": "Escupir", "sForm": "SPIT", "sPast": "SPIT", "pParticiple": "SPIT" },
    { "spanishVerb": "Salpicar - Rociar - Chapotear", "sForm": "SPLASH", "sPast": "SPLASHED", "pParticiple": "SPLASHED" },
    { "spanishVerb": "Divir - Partir", "sForm": "SPLIT", "sPast": "SPLIT", "pParticiple": "SPLIT" },
    { "spanishVerb": "Estropear - Echar a perder - Mimar", "sForm": "SPOIL", "sPast": "SPOILED", "pParticiple": "SPOILED" },
    { "spanishVerb": "Esparcir - Untar - Extender", "sForm": "SPREAD", "sPast": "SPREAD", "pParticiple": "SPREAD" },
    { "spanishVerb": "Apretar - Comprimir", "sForm": "SQUEEZE", "sPast": "SQUEEZED", "pParticiple": "SQUEEZED" },
    { "spanishVerb": "Ponerse de pie - Pararse", "sForm": "STAND", "sPast": "STOOD", "pParticiple": "STOOD" },
    { "spanishVerb": "Comenzar - Arrancar", "sForm": "START", "sPast": "STARTED", "pParticiple": "STARTED" },
    { "spanishVerb": "Permanecer - Quedar", "sForm": "STAY", "sPast": "STAYED", "pParticiple": "STAYED" },
    { "spanishVerb": "Robar - Hurtar", "sForm": "STEAL", "sPast": "STOLE", "pParticiple": "STOLEN" },
    { "spanishVerb": "Apestar - Oler mal", "sForm": "STINK", "sPast": "STANK", "pParticiple": "STUNK" },
    { "spanishVerb": "Revolver - Remover", "sForm": "STIR", "sPast": "STIRRED", "pParticiple": "STIRRED" },
    { "spanishVerb": "Parar - Detener", "sForm": "STOP", "sPast": "STOPPED", "pParticiple": "STOPPED" },
    { "spanishVerb": "Golpear - Atacar - Pegar", "sForm": "STRIKE", "sPast": "STRUCK", "pParticiple": "STRUCK" },
    { "spanishVerb": "Esforzarse - Luchar", "sForm": "STRIVE", "sPast": "STROVE", "pParticiple": "STRIVEN" },
    { "spanishVerb": "Estudiar", "sForm": "STUDY", "sPast": "STUDIED", "pParticiple": "STUDIED" },
    { "spanishVerb": "Sustraer - Restar", "sForm": "SUBTRACT", "sPast": "SUBTRACTED", "pParticiple": "SUBTRACTED" },
    { "spanishVerb": "Sorber - Chupar", "sForm": "SUCK", "sPast": "SUCKED", "pParticiple": "SUCKED" },
    { "spanishVerb": "Soportar - Sostener", "sForm": "SUPPORT", "sPast": "SUPPORTED", "pParticiple": "SUPPORTED" },
    { "spanishVerb": "Suponer", "sForm": "SUPPOSE", "sPast": "SUPPOSED", "pParticiple": "SUPPOSED" },
    { "spanishVerb": "Rodear - Cercar", "sForm": "SURROUND", "sPast": "SURROUNDED", "pParticiple": "SURROUNDED" },
    { "spanishVerb": "Jurar", "sForm": "SWEAR", "sPast": "SWORE", "pParticiple": "SWORN" },
    { "spanishVerb": "Barrer", "sForm": "SWEEP", "sPast": "SWEPT", "pParticiple": "SWEPT" },
    { "spanishVerb": "Nadar", "sForm": "SWIM", "sPast": "SWAM", "pParticiple": "SWUM" },
    { "spanishVerb": "Balancear - Columpiar", "sForm": "SWING", "sPast": "SWUNG", "pParticiple": "SWUNG" },
    { "spanishVerb": "Tomar - Agarrar - Coger", "sForm": "TAKE", "sPast": "TOOK", "pParticiple": "TAKEN" },
    { "spanishVerb": "Hablar - Conversar", "sForm": "TALK", "sPast": "TALKED", "pParticiple": "TALKED" },
    { "spanishVerb": "Saborear - Catar - Probar", "sForm": "TASTE", "sPast": "TASTED", "pParticiple": "TASTED" },
    { "spanishVerb": "Enseñar", "sForm": "TEACH", "sPast": "TAUGHT", "pParticiple": "TAUGHT" },
    { "spanishVerb": "Rasgar - Desgarrar - Arrancar", "sForm": "TEAR", "sPast": "TORE", "pParticiple": "TORN" },
    { "spanishVerb": "Decir - Contar", "sForm": "TELL", "sPast": "TOLD", "pParticiple": "TOLD" },
    { "spanishVerb": "Pensar - Creer", "sForm": "THINK", "sPast": "THOUGHT", "pParticiple": "THOUGHT" },
    { "spanishVerb": "Lanzar - Arrojar", "sForm": "THROW", "sPast": "THREW", "pParticiple": "THROWN" },
    { "spanishVerb": "Confiar - Creer", "sForm": "TRUST", "sPast": "TRUSTED", "pParticiple": "TRUSTED" },
    { "spanishVerb": "Tocar - Rozar", "sForm": "TOUCH", "sPast": "TOUCHED", "pParticiple": "TOUCHED" },
    { "spanishVerb": "Traducir", "sForm": "TRANSLATE", "sPast": "TRANSLATED", "pParticiple": "TRANSLATED" },
    { "spanishVerb": "Viajar - Recorrer", "sForm": "TRAVEL", "sPast": "TRAVELED", "pParticiple": "TRAVELED" },
    { "spanishVerb": "Intentar - Probar - Ensayar", "sForm": "TRY", "sPast": "TRIED", "pParticiple": "TRIED" },
    { "spanishVerb": "Girar - Voltear", "sForm": "TURN", "sPast": "TURNED", "pParticiple": "TURNED" },
    { "spanishVerb": "Digitar en teclado", "sForm": "TYPE", "sPast": "TYPED", "pParticiple": "TYPED" },
    { "spanishVerb": "Subrayar", "sForm": "UNDERLINE", "sPast": "UNDERLINED", "pParticiple": "UNDERLINED" },
    { "spanishVerb": "Entender - Comprender", "sForm": "UNDERSTAND", "sPast": "UNDERSTOOD", "pParticiple": "UNDERSTOOD" },
    { "spanishVerb": "Emprender - Encargarse de", "sForm": "UNDERTAKE", "sPast": "UNDERTOOK", "pParticiple": "UNDERTAKEN" },
    { "spanishVerb": "Alterar - Perturbar", "sForm": "UPSET", "sPast": "UPSET", "pParticiple": "UPSET" },
    { "spanishVerb": "Usar - Emplear - Utilizar", "sForm": "USE", "sPast": "USED", "pParticiple": "USED" },
    { "spanishVerb": "Aspirar", "sForm": "VACUUM", "sPast": "VACUUMED", "pParticiple": "VACUUMED" },
    { "spanishVerb": "Desvanecer(se)", "sForm": "VANISH", "sPast": "VANISHED", "pParticiple": "VANISHED" },
    { "spanishVerb": "Visitar", "sForm": "VISIT", "sPast": "VISITED", "pParticiple": "VISITED" },
    { "spanishVerb": "Esperar", "sForm": "WAIT FOR", "sPast": "WAITED FOR", "pParticiple": "WAITED FOR" },
    { "spanishVerb": "Caminar", "sForm": "WALK", "sPast": "WALKED", "pParticiple": "WALKED" },
    { "spanishVerb": "Querer - Desear", "sForm": "WANT", "sPast": "WANTED", "pParticiple": "WANTED" },
    { "spanishVerb": "Calentar - Acalorar", "sForm": "WARM", "sPast": "WARMED", "pParticiple": "WARMED" },
    { "spanishVerb": "Lavar", "sForm": "WASH", "sPast": "WASHED", "pParticiple": "WASHED" },
    { "spanishVerb": "Mirar - Observar - Vigilar", "sForm": "WATCH", "sPast": "WATCHED", "pParticiple": "WATCHED" },
    { "spanishVerb": "Agitar - Ondear", "sForm": "WAVE", "sPast": "WAVED", "pParticiple": "WAVED" },
    { "spanishVerb": "Pesar - Ponderar", "sForm": "WEIGH", "sPast": "WEIGHED", "pParticiple": "WEIGHED" },
    { "spanishVerb": "Silbar - Pitar", "sForm": "WHISTLE", "sPast": "WHISTLED", "pParticiple": "WHISTLED" },
    { "spanishVerb": "Desear", "sForm": "WISH", "sPast": "WISHED", "pParticiple": "WISHED" },
    { "spanishVerb": "Maravillarse - Preguntarse", "sForm": "WONDER", "sPast": "WONDERED", "pParticiple": "WONDERED" },
    { "spanishVerb": "Trabajar", "sForm": "WORK", "sPast": "WORKED", "pParticiple": "WORKED" },
    { "spanishVerb": "Preocupar(se) - Inquietar(se)", "sForm": "WORRY", "sPast": "WORRIED", "pParticiple": "WORRIED" },
    { "spanishVerb": "Envolver - Embalar", "sForm": "WRAP", "sPast": "WRAPPED", "pParticiple": "WRAPPED" },
    { "spanishVerb": "Bostezar", "sForm": "YAWN", "sPast": "YAWNED", "pParticiple": "YAWNED" }
];

let wrongAnswer = [], okAnswer = [], answer = [];
let aux = "";
let cont = 0;
let nVerb;
let nForms;



const forms = () => { //numero aleatorio para la forma verbal
    nForms = Math.floor(Math.random() * (0, 3));
    return nForms;
}
const verbs = () => {//numero aleatorio para el verbo
    nVerb = Math.floor(Math.random() * (0, jsonVerbs.length));
    return nVerb;
}

const supr = () => {//suprime undefined e imprime respuestas incorrectas y su respectivas respuestas correctas
    for (i = 0; i < wrongAnswer.length; i++) {
        if (wrongAnswer[i] === undefined) {
            okAnswer.splice(i, 1);
            wrongAnswer.splice(i, 1);
            answer.splice(i, 1);
            --i
        } else {
            document.write(`Respuesta Incorrecta N° ${i + 1}: "${wrongAnswer[i]}"
             =====> Respuesta Correcta: "${okAnswer[i]}" =====> Significado: "${answer[i]}"<br>`);
        }
    }
    document.write(`<br>Ha acertado un total de ${cont}/20 verbos <br>Tu nota final es
     ${((cont * 10) / 20).toFixed(2)}<br>`);
}


let used = [];
let repeat = [""];

for (i = 0; i < 20; i++) {
    forms();
    verbs();
    used[i] = nForms.toString() + nVerb.toString();

    start:
    for (j = 0; j < repeat.length; j++) {
        if (used[i] == repeat[j]) {
            i--;
            break;
        }
        if (i == used.length - 1 && j == repeat.length - 1) {
            repeat.push(used[i]);

            switch (nForms) {
                case 0:
                    aux = prompt(`how do you say "${jsonVerbs[nVerb].spanishVerb}" in its simple form? | score: ${cont}/${i}`).toLowerCase();
                    if (aux === jsonVerbs[nVerb].sForm.toLowerCase()) {
                        cont++;
                    } else {
                        wrongAnswer[i] = aux;
                        okAnswer[i] = jsonVerbs[nVerb].sForm.toLowerCase();
                        answer[i] = jsonVerbs[nVerb].spanishVerb
                    }
                    break;
                case 1:
                    aux = prompt(`how do you say "${jsonVerbs[nVerb].spanishVerb}" in its simple past? | score: ${cont}/${i}`).toLowerCase();
                    if (aux === jsonVerbs[nVerb].sPast.toLowerCase()) {
                        cont++;
                    } else {
                        wrongAnswer[i] = aux;
                        okAnswer[i] = jsonVerbs[nVerb].sPast.toLowerCase();
                        answer[i] = jsonVerbs[nVerb].spanishVerb
                    }
                    break;
                case 2:
                    aux = prompt(`how do you say "${jsonVerbs[nVerb].spanishVerb}" in its past participle? | score: ${cont}/${i}`).toLowerCase();
                    if (aux === jsonVerbs[nVerb].pParticiple.toLowerCase()) {
                        cont++;
                    } else {
                        wrongAnswer[i] = aux;
                        okAnswer[i] = jsonVerbs[nVerb].pParticiple.toLowerCase();
                        answer[i] = jsonVerbs[nVerb].spanishVerb
                    }
                    break;
                default:

            }
            break start;
        }
    }
}

supr();


