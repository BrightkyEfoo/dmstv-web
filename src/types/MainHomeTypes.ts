export type Link = {
    title: string;
    url: string;
  };
  
export type Horaire = {
    title : string,
    hours : string,
}
  
export type Programme = {
    title : string,
    image : string,
    horaires : Horaire[]
  }
  