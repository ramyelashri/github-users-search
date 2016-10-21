import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username:string;
    private client_id = '87a39bc4869b746710ec';
    private client_secret = 'acc5bac9506deb38c10c61e70e83c0eef7be7067';

    constructor(private _http: Http) {
        console.log('Github service ready');
        this.username = 'ramyelashri';
    }

    getUser() {
        return this._http.get(
            'http://api.github.com/users/'
            + this.username
            + '?client_id='
            + this.client_id
            + '&client_secret='
            + this.client_secret).map(res => res.json())
    }
}