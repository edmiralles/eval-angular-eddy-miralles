export class Model {
    id? : number;
    name : string = '';
    price : number = 0;
    reserved?: boolean;
    nbrPerson: number = 0;
    localisation: string = '';
    picture: string = '';
    additionalImages: Array<string> = ['', ''];
}
