
 class FetchPeople {
    #repository;

    constructor(repository) {
        this.#repository = repository;
    }

    async execute() {
        const peoples = await this.#repository.list();

        return { peoples };
    }
}

export { FetchPeople }