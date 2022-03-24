type TChapter = {
    _id: string;
    name: string;
    contetnt: string;
}

interface IChapter {
    _id: string;
    name: string;
    chapters: TChapter[];
}

interface IItem {
    name: string;
    desciption: string;
    id: string;
    modules: IChapter[];
}

interface ICourse {
    items: IItem[];
}

export { ICourse, IItem, IChapter }