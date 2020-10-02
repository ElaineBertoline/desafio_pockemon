pokesArray: Poke[] = [];

import { PokeHttpService } from '../shared/services/pokehttp-service';
constructor(private hepokeHttpService: PokeHttpService) { 


ngOnInit() {

    this.pokeHttpService.get()
    .subscribe(
    //sucesso
    heroes => {
    this.pokesArray.push(...heroes);
    },
    //erro
    error => {
    console.log("Sem acesso "+ error);
    });

    console.log(this.pokeArray);
 }

}