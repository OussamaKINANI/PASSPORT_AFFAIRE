import { Question } from './question.model';

export interface Quiz {
    name: string;
    ptf?: string;
    ic?: string;
    status: string;
    pri?: number;
    offre: string;
    solution?: string;
    partenaire?: string;
    commentaires?: string;
    creationDate?: Date;
    avv?: string;
    dar?: string;
    esb?: string;
    recpdar?: Date;
    tag?: string;
    tagpilotage?: string;
    warning?: string;
    signature?: Date;
}
