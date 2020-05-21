/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{
				Id: 0,
				Name: "Alberto Fernández",
				Photo: "man.png",
				Quote: "El esfuerzo siempre tiene su recompensa",
				Age: 28,
				Occupation: "Profesor de Universidad",
				Family: "Casado desde hace 2 años",
				Location: "Granada (Chana)",
				Character: "Simpático, temperamental y constante.", 
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Que el año que viene no suspenda ningún alumno", "Realizar un viaje a Italia", "Aprender a cocinar", "En un futuro, tener dos hijas y un hijo"],
				Frustrations: ["El ruido del tráfico", "El poco entusiasmo de muchos alumnos", "No mejorar físicamente, cuando va al gimnasio", "Que se le olviden las cosas"],
				Bio: "Nació en Valencia, en Alicante. Desde siempre quiso ser Informático, así que estudió la carrera de Ingienería Informática en Granada. Al terminar los estudios quiso centrar su carrera en investigación y en la enseñanza. Lleva 5 años impartiendo clases y está contento de su trabajo actual. Está casado con María Martínez, a quien conoció en una conferencia de ciberseguridad.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 4 }
					
				], 
                Contextos: "En el despacho que tiene hay problemas  eléctricos y necesita un sitio donde pueda trabajar tranquilamente.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Anabel Martín",
				Photo: "woman.png",
				Quote: "La única persona que puede vencerme, soy yo misma.",
				Age: 29,
				Occupation: "Fisioterapéutica",
				Family: "Cuatro hermanas.",
				Location: "Valderrubio",
				Character: "Adaptable, extrovertida y risueña.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Ayudar a todos sus pacientes a curarse", "Afán de superación", "Sacarse el carné de moto porque no se puede aparcar en el centro", "Plantar flores de varios colores en su jardín", "Comprarse un móvil nuevo porque el suyo funciona mal" ],
				Frustrations: ["La monotonía y la repetitividad del día a día", "Que la tecnología funcione mal o lento", "No poder hacer deporte por una lesión", "El agobio de los atascos y el ruido", "Aunque le guste su trabajo, no tener tanto tiempo para quedar con sus amigos"],
				Bio: "Amante de la salud y la condición física, odio los estereotipos físicos. El valor de una persona viene dado por su salud, no por su estética. Soy fisioterapeuta en el Virgen de las Nieves desde hace tres años. Tengo pareja estable y nos encanta hacer excursiones al campo",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Mobile", Value: 3 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 5 }
					
				], 
                Contextos:   "Se acerca el 14 de febrero, el día de los enamorados y quiere darle una sorpresa a su pareja con una cena romántica." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 4 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			}
			
			
			
		];
		$scope.model = $scope.Personas[0];

	}])
