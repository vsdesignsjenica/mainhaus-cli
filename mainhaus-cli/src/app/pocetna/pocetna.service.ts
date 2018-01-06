import { Injectable } from '@angular/core';
import { Http, Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Komentari } from "../common/komentari.interface";

@Injectable()
export class PocetnaService {

    constructor(private http:Http) { }

    getKomentari():Observable<Komentari[]>{
        let projectsurl="http://localhost:2903/api/Komentari";
        return this.http.get(projectsurl).map((res:Response)=>res.json());
    }

}