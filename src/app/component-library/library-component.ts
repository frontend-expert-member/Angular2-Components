
export class LibraryComponent {
    public id: number;
    public name: string;
    public title: string;
    public contents: any[];
    public usage: string;
    public shortDescription: string;

    public constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}
