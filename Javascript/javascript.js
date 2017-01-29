    var liste1 = [[1,"MULOT Cyrille",3],[2,"AMIOT Antoine",2],[3,"BRUNET Xavier",36],[4,"FONTENAY Karine",1],[5,"PRIVAT Nicolas",61],[6,"KAMINSKI Stephan",98],[7,"GARDENT Thierry",51],[8,"HENNENFENT Roland",17],[9,"BENOIT Philippe",39],[10,"LANGEVIN Samuel",58],[11,"REVILLER Thierry",86],[12,"SAVART Jerome",65],[13,"MOULIN Franck",68],[14,"ALENDOURO Victor",66],[15,"PECOT Stève",95],[16,"VASTESAEGER Sven",75],[17,"GARNIER Dominique",23],[18,"FLOURET Michel",46],[19,"MINARD Anne laure",76],[20,"PASQUET Frederic",79],[21,"DEVILLERT Christophe",28],[22,"LAPIERRE Michael",85],[23,"ROUX Thierry",82],[24,"ROULET David",59],[25,"DORDAIN Tony",93],[26,"MENDER Miloud",96],[27,"FONTAINE Julien",29],[28,"FOUQUET Arnaud",48],[29,"GICQUEL Fabrice",97],[30,"ARAR Didier",84],[31,"BRAJON Bertrand",57],[32,"SCIACCA Aurélia",50],[33,"LOPES LELO Maria",5],[34,"FORESTIER David",33],[35,"HUET Jérôme",53],[36,"MARSURA Philippe",42],[37,"LINVAL Philippe",69],[38,"HERNOT Laurent",89],[39,"LAKAS Patrice",67],[40,"MARCHAND Eric",40],[41,"BOURNAT Thierry",38],[42,"CAMBONI Mario",25],[43,"BARICHARD Jérôme",47],[44,"SANSELME Philippe",87],[45,"ANDRE Serge",71],[46,"CARTON Noël",24],[47,"PETITJEAN Rémy",64],[48,"TEISSEDRE Christian",37],[49,"AMY Jérôme",99],[50,"MOYNAULT Christophe",35],[51,"VéNIANT Romu",92],[52,"LEBIGUE Tristan",88],[53,"JUGE Fabrice",26],[54,"VINCENT Jérémy",90],[55,"IVART Yann",30],[56,"DESJOUR Patrick",70],[57,"GALLON Fabrice",77],[58,"GUYOT Jean-joseph",27],[59,"CHATARD Benoit",80],[60,"ROUX Claude",9],[61,"KOWALSKI Dany",63],[62,"PERRETTE Christophe",34],[63,"DUBOURDIEU Stephane",81],[64,"LAMBERT Guillaume",54],[65,"FAMBRINI Cyril",52],[66,"MOUNIER Christian",72],[67,"BROSSARD Remy",13],[68,"FOUQUET Arnaud",94],[69,"ARNAUD Christian",44]];
    var liste2 = [[70,"MOSNIER Bernard",55],[71,"BERGERET Lise",8],[72,"BERGERET Christophe",7],[73,"LEFEBVRE Michel",91],[74,"FLEURY Stephanie",15],[75,"AUBARD Nicolas",74],[76,"VALLEE Nelly",45],[77,"BERNABEU Julien",73],[78,"DUPRé Alain",78],[79,"SALIGNAT Jean-claude",4],[80,"VOLAT Marc",21],[81,"BENIGAUD Sylviane",18],[82,"LEPAIN Laurent",22]];
    var listecomp = liste1.concat(liste2);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function afficherUnTableau(monTableau){                    
    document.getElementById('classement').innerHTML="";  
   for (var i = 0; i < monTableau.length; i++) {               
        var lignetab = "<tr>";                                              

    for (var x = 0 ;x < monTableau[i].length ; x++) {       
      lignetab+="<td>";                                                     
      lignetab+=monTableau[i][x];                                     
      lignetab+="</td>";                                                    
      
    }
    lignetab+="</tr>";                                                   
    
    document.getElementById('classement').innerHTML+=lignetab;

    }
  }  

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function search(){                                                
    var resultat = new Array;                                  
    var recherche = document.formu.rech.value;  
    var type = document.formu.choixType.value;  
    var tableau = listecomp;                                   

    switch(type){                                                     
      case 'nom' :                                                     
      recherche = recherche.toUpperCase()+" ";    
      type=1;                                                           
      break;                                                              

      case 'prenom':                                                
      recherche = " "+recherche.charAt(0).toUpperCase()+recherche.substring(1).toLowerCase();
     
      type=1;                                                         
      break;                                                            

      case 'dossard' :                                            
      recherche=parseInt(recherche);                  
      type=2;                                                        
      break;                                                          

      case 'classement' :                                      
      recherche=parseInt(recherche);                 
      type=0;                                                       
      break;                                                          

      default:                                                        
      type='';                                                       
    }

    for(i=0;i <= tableau.length-1; i++){           
      switch(recherche){                                      
        case tableau[i][type] :                               
        resultat.push(tableau[i]);                         
        break;                                                     
      }
      if(recherche!=parseInt(recherche) && tableau[i][type].indexOf(recherche)!=-1){

        resultat.push(tableau[i]);                       
        }
      
    }
      if(!resultat[0]){                                      
          resultat[0]= 'pas trouvé';                   
      }
      afficherUnTableau(resultat);                  
  };

   function tri(type){

   var tableau = new Array;
    tableau = tableau.concat(listecomp);
    var resultat = new Array;
    var minimum;
    var indice;
    var ligneMinimum;

  if(type==0||type==2){}
    while(tableau.length!=0){
        minimum=tableau[0][type];
        for (var i=0; i<tableau.length;i++){
            if(tableau[i][type] <= minimum){
                minimum= tableau[i][type];
                ligneMinimum= tableau[i];
                indice = i;
            }
        }
        resultat.push(ligneMinimum);
        tableau.splice(indice,1);
    }
    afficherUnTableau(resultat);
};

function tri_prenom(){

    var tableau = new Array;
    tableau = tableau.concat(listecomp);
    var resultat = new Array;
    var type = 1;
    var minimum;
    var indice;
    var ligneMinimum;
    var indice_prenom;


      while(tableau.length != 0){
        minimum = tableau[0][type].split(' ');
        for(var i =0; i<tableau.length; i++){
          prenom = tableau[i][type].split(' ');
          for(var k=0;k<prenom.length; k++){
            if(prenom[k][1]== prenom[k][1].toLowerCase()){
              indice_prenom = k;
            }
          }
          if(prenom[indice_prenom]<= minimum[1]){
            minimum[1] = prenom[indice_prenom];
            ligneMinimum = tableau[i];
            indice = i;
          }
        }
        resultat.push(ligneMinimum);
        tableau.splice(indice,1);
      }
    afficherUnTableau(resultat);

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////                                                                                                                                     ///////
///////                                            EN DEHORS DES FONCTIONS                                          ///////
///////                                                                                                                                    ///////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  afficherUnTableau(listecomp);               //On affiche le tableau initiale
