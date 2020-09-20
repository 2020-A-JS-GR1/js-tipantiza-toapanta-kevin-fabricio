import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class EsAdministradorGuards implements CanActivate{

    constructor( private readonly _authService: AuthService){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        //logica boolean

        const esAdministrador = this._authService
            .roles
            .some(
                (rol)=>{
                    return rol ==='Administrador'
                }
            )
    return esAdministrador;
    }

}