import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

// export const QUESTION_ACTOR: Question = {
//     label: 'Jean Gabin a joué dans...',
//     answers: [
//         {
//             value: 'Les tuches II',
//             isCorrect: false,
//         },
//         {
//             value: 'La grande illusion',
//             isCorrect: true,
//         }
//     ]
// };

export const QUIZ_LIST: Quiz[] = [
    {
        name: 'AGAPEI 31',
        ptf:"PTF-F05-000GEZ",
        ic:"Oussama Kinani",
        status:"Perdu",
        pri: 21000,
        offre:'calling',
      solution:"calling OSM",
      partenaire:"CISCO",
      commentaires:"1500 postes en attente de retour, echange client bla",
      creationDate: new Date(2021,10,22),
      avv:"Nicolas Rolly",
      dar:"DAR-0018137",
      recpdar: new Date(2021,10,22),
      tagpilotage:"Clos",
      signature:new Date(2021,10,1),


    },
    {
        name: 'FUNECAP Holding',
      status:"Perdu",
      offre:'calling',

    },
  {
    name: 'FOS SERVICE LEVAGE',
    status:"Standby",
    offre:'calling'
  },
  {
    name: 'Groupe ADEQUAT',
    status:"Perdu",
    offre:'calling',
  },
  {
    name: 'VICAT',
    status:"Gagné",
    offre:'calling',
  },
  {
    name: 'Université Lyon 3',
    status:"Standby",
    offre:'meeting',
  }
];
