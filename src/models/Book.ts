import { nanoid } from 'nanoid';

export interface IBook {
    id: string;
    title: string;
    description: string;
    authors: string;
    favorite: string;
    fileCover: string;
    fileName: string;
}

export function buildBook(title:string = '', description:string = '', authors:string = "", favorite:string = "", fileCover:string = "", fileName:string=""): IBook {
    return {
        id: nanoid(),
        title,
        description,
        authors,
        favorite,
        fileCover,
        fileName,
    }
}