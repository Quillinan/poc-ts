export class Film {
  constructor(
    public id: number,
    public name: string,
    public platform: string,
    public genre: string,
    public status: string,
    public note?: number,
    public summary?: string
  ) {}
}
