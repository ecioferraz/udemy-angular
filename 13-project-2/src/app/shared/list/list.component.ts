import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  private allPokemons: any;
  public apiError = false;
  public filteredPokemons: any;

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApiService.getAllPokemons.subscribe({
      next: (res) => {
        this.filteredPokemons = res.results;
        this.allPokemons = res.results;
      },
      error: (error) => (this.apiError = true),
    });
  }

  public getSearch(value: string) {
    this.filteredPokemons = this.allPokemons.filter((pokemon: any) =>
      pokemon.name.includes(value.toLowerCase()),
    );
  }
}
