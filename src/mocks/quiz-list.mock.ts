import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUESTION_ACTOR: Question = {
    label: 'Jean Gabin a joué dans...',
    answers: [
        {
            value: 'Les tuches II',
            isCorrect: false,
        },
        {
            value: 'La grande illusion',
            isCorrect: true,
        }
    ]
};

export const QUESTION_SPORT: Question = {
    label: 'Who is the best player...',
    answers: [
        {
            value: 'Messi',
            isCorrect: false,
        },
        {
            value: 'Ronaldo',
            isCorrect: true,
        }
    ]
};

export const QUIZ_LIST: Quiz[] = [
    {
        name: 'Les Zbouba', // What's happening if I change this value..?
        theme: 'Actor',
        questions: [QUESTION_ACTOR],
        id: 'zbob',
    },
    {
        name: 'Les Sports',
        theme: 'RAJA',
        questions: [QUESTION_SPORT],
        id: 'cr7',
    }
];
