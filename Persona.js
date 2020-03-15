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
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Darío Sanabria",
				Photo: "man.png",
				Quote: "¡Luchen, sangren, no cedan ante la debilidad",
				Age: 40,
				Occupation: "Abogado de familia",
				Family: "Casado desde hace 15 años y con 1 hijo de 10 años",
				Location: "Granada (Armilla)",
				Character: "Amable, empático, familiar y tradicional. Se frustra con facilidad con la tecnología, odia la política", 
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 5 }
				], 
				Goals: ["Ir al gimnasio a ponerse fuerte", "Visitar el mayor número de países del mundo", "Probar nuevos platos cada mes", "Comprarse un Tesla", "Que su hijo siga sus pasos como abogado, pero respetará si decide estudiar otra cosa"],
				Frustrations: ["Se lleva mal con la tecnología", "Odia perder casos en juicios", "Pierde los nervios con el tráfico", "Suele perderse los eventos escolares de su hijo"],
				Bio: "Nació en Armilla, desde siempre quiso ser Abogado, sueño que cumplió al terminar la carrera de Derecho, buscó una casa cerca de la casa de sus padres en Armilla para poder tenerlos cerca. Su mujer actual la conoció en la carrera y tienen un hijo en común de 10 años. Le gusta viajar a distintos países y probar la comida típica de dicho país",
				Tech: [
					{ Name: "TIC/Internet", Value: 1 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos: "Próximamente tendrá varios días libres que le corresponden del trabajo, quiere aprovecharlos para viajar a alguna ciudad para visitarla y degustar comida típica",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 5 },
					{ Name: "Online & Social Media", Value: 2 },
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
				Bio: "Nacida en Valderrubio(Granada) en el 91. Mis padres son Antonio y María y tengo cuatro hermanas entre ellas soy la mayor: María(27), Laura(27), Elvira(25) y Lucía(24). Desde pequeña tuve una gran afición por la medicina así que mis padres se compraron una casa en la ciudad para poder ir a los mejores centros. Estudié en el I.E.S. Padre Suárez y después estudié el grado de Fisioterapia en la UGR. Amante de la salud y la condición física, odio los estereotipos físicos. El valor de una persona viene dado por su salud, no por su estética. Soy fisioterapeuta en el Virgen de las Nieves desde hace tres años. Tengo pareja estable y nos encanta hacer excursiones al campo",
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
