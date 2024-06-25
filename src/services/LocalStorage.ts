
export class LocalStorage{

    get(key:string){
        return JSON.parse(localStorage.getItem(key)??'');
    }
    put(key:string, value: any){
        return localStorage.setItem(key,JSON.stringify(value));
    }
}