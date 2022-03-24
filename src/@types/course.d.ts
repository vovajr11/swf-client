interface IChapter {
    _id: string;
    name: string;
    chapters: [];
}
interface IModule {
    modules: IChapter[];
}

interface IItem {
    name: string;
    desciption: string;
    id: string;
    modules: IChapter[];
}

interface IAuth {
    items: IItem[];
}

export {
    IModule, IAuth
}