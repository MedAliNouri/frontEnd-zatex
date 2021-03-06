export interface User {
    name:string;
    lastName:string;
    email:string;
    phone:string;
    civility:string;
    post:string;
    socialReason:string;
    password:string;
    urlPhoto:string
    role:Role
    gerant:string
}


enum Role {
    ADMIN = 'ADMIN',
    EMPLOYEE = 'EMPLOYEE',
    GERANT="GERANT"
}