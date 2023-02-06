import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { BASE_URL } from 'src/app/constants';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  private baseUrl = BASE_URL;
  private speciesUrl = `${BASE_URL}-species`;
  public apiError = false;
  public isLoading = true;
  public pokemon: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService,
  ) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;

    const pokemon = this.pokeApiService.getPokemon(`${this.baseUrl}/${id}`);
    const pokemonSpecies = this.pokeApiService.getPokemon(
      `${this.speciesUrl}/${id}`,
    );

    forkJoin([pokemon, pokemonSpecies]).subscribe({
      next: (res) => {
        this.pokemon = res;
        this.isLoading = false;
      },
      error: (error) => (this.apiError = true),
    });
  }
}
