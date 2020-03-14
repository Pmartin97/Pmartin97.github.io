/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Darío Noxus",
                Photo: "man.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Como amante gastronómico, desea descubrir nuevos platos típicos junto a su familia",
                touch1: "Agenda",
                feel1: "4",
                con1: "Debe esperar a tener los días libres",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECISION ***/ 
                goal2: "Busca en EatWith experiencias culinarias interesantes",
                touch2: "Ordenador",
                feel2: "2",
                con2: "La interfaz es algo liosa y no sabe por dónde empezar a buscar",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide comer en un restaurante japonés en Granada",
                touch3: "Ordenador",
                feel3: "2",
                con3: "Las ofertas son algo caras y escasas en las fechas en que Darío puede ir",
                ima3: "cartoon-PCangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca experiencias culinarias japonesas en Granada",
                touch4: "Ordenador",
                feel4: "1",
                con4: "Hay pocas fechas que puede elegir ya que están reservadas",
                ima4: "cartoon-PCangry.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Darío mira en la agenda de su móvil a ver si puede cambiar uno de sus das libres",
                touch5: "Móvil",
                feel5: "2",
                con5: "No puede ya que tiene reuniones con otros clientes",
                ima5: "cartoon-phoningangry.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Al final reserva una experiencia culinaria mexicana en Granada ya que es la única oferta con plazas en sus dias libres",
                touch6: "Ordenador",
                feel6: "1",
                con6: "En caso de cancelación y reembolso, debe hacerse 24h antes de la cena y solo por Internet.",
                ima6: "cartoon-sad.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Anabel Martín",
                Photo: "woman.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar una comida especial junto a su pareja para el día de los enamorados",
                touch1: "Agenda",
                feel1: "5",
                con1: "Tiene que ser para el día 14 de febrero.",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en internet una página para la cena",
                touch2: "Ordenador",
                feel2: "4",
                con2: "Tiene que escoger de un montón de sitios recomendados por el buscador.",
                ima2: "cartoon-PChappy.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Entra al sitio web 'eatwith' para buscar alguna cena de su gusto.",
                touch3: "Ordenador",
                feel3: "4",
                con3: "La página responde muy lento.",
                ima3: "cartoon-PCtyping.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "No encuentra ninguna oferta libre porque no hay anfitriones en Granada",
                touch4: "Ordenador (webapp)",
                feel4: "2",
                con4: "Piensa que ha perdido el tiempo",
                ima4: "cartoon-PChard.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Busca otro sitio web donde realizar la reserva.",
                touch5: "Ordenador (webapp)",
                feel5: "3",
                con5: "En varios sitios no quedan reservas disponibles",
                ima5: "cartoon-thinking.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consiguie reservar en un restaurante por recomendación de una amiga.",
                touch6: "Ordenador (reserva OK)",
                feel6: "2",
                con6: "Al final no ha obtenido ayuda de la página, si no de una recomendación de una amiga.",
                ima6: "cartoon-sad.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



