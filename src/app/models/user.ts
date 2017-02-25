export class User {
    id: string;
    name: string;
    surname: string;
    username: string;
    email: string;
    verified: boolean;
    certified: boolean;
    code: string;

    constructor(id?: string, name?: string, surname?: string, username?: string, email?: string, verified?: boolean, certified?: boolean, code?: string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.verified = verified;
        this.certified = certified;
        this.code = code;
    }

    fromObject(data) {
        this.id = data.id;
        this.name = data.name;
        this.surname = data.surname;
        this.username = data.username;
        this.email = data.email;
        this.verified = data.verified;
        this.certified = data.certified;
        this.code = data.code;
        return this;
    }
}
