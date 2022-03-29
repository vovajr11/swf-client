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
    description: string;
    id: string;
    isVisible?: boolean;
    numberOfModules?: number;
    modules: IChapter[];
}

interface ICourse {
    coursesForAdmin: IItem[];
    coursesForStudents: IItem[];

}

export { ICourse, IItem, IChapter, TChapter }