export default class Dog {
  breeds?: any[];
  height?: number;
  id?: string;
  url?: string;
  width?: number;
  constructor(params: Dog) {
    this.breeds = params.breeds;
    this.height = params.height;
    this.id = params.id;
    this.url = params.url;
    this.width = params.width;
  }
}
