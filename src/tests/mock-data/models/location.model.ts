export interface ILocation {
  placeName: string;
  lat: number;
  lng: number;
}

export const ukLocation: ILocation = {
  placeName: 'United Kingdom',
  lat: 51.509865,
  lng: -0.118092
};

export const citiesInUk: Array<ILocation> = [
  {
    placeName: 'Peterborough, Cambridgeshire, the UK',
    lat: 52.573921,
    lng: -0.25083
  },
  {
    placeName: 'Jindrichuv Hradec, Czechia',
    lat: 49.144482,
    lng: 15.006139
  },
  {
    placeName: 'Elgin, Scotland, the UK',
    lat: 57.653484,
    lng: -3.335724
  },
  {
    placeName: 'Stoke-on-Trent, Staffordshire, the UK',
    lat: 53.002666,
    lng: -2.179404
  },
  {
    placeName: 'Solihull, Birmingham, UK',
    lat: 52.412811,
    lng: -1.778197
  },
  {
    placeName: 'Cardiff, Cardiff county, UK',
    lat: 51.481583,
    lng: -3.17909
  },
  {
    placeName: 'Eastbourne, East Sussex, UK',
    lat: 50.768036,
    lng: 0.290472
  },
  {
    placeName: 'Oxford, Oxfordshire, UK',
    lat: 51.752022,
    lng: -1.257677
  },
  {
    placeName: 'London, UK',
    lat: 51.509865,
    lng: -0.118092
  },
  {
    placeName: 'Swindon, Swindon, UK',
    lat: 51.568535,
    lng: -1.772232
  },
  {
    placeName: 'Gravesend, Kent, UK',
    lat: 51.441883,
    lng: 0.370759
  },
  {
    placeName: 'Northampton, Northamptonshire, UK',
    lat: 52.240479,
    lng: -0.902656
  },
  {
    placeName: 'Rugby, Warwickshire, UK',
    lat: 52.370876,
    lng: -1.265032
  },
  {
    placeName: 'Sutton Coldfield, West Midlands, UK',
    lat: 52.570385,
    lng: -1.824042
  },
  {
    placeName: 'Harlow, Essex, UK',
    lat: 51.772938,
    lng: 0.10231
  },
  {
    placeName: 'Aberdeen, Aberdeen City, UK',
    lat: 57.149651,
    lng: -2.099075
  }
];
