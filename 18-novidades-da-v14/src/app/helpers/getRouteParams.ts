import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const getRouteParams = (key: string) =>
  inject(ActivatedRoute).snapshot.params[key];

export default getRouteParams;
