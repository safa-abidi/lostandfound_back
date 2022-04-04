export class CreatePublicationDto {
  title: string;
  description: string;
  date: Date;
  category: string;
  location: Location;
  images: [];
  owner: string;
  status: string;
  type: string;
  tempsCreation: Date;
}
