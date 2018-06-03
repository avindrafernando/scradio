import {Injectable} from '@angular/core';

@Injectable()
export class ShowsService {
  private shows = [{
    artist: 'Proco Mode',
    title: 'The Not So Real Deal',
    id: 1
  }, {
    artist: 'PVC Freedom',
    title: 'The Real Deal',
    id: 2
  }, {
    artist: 'Pajamas & Smores',
    title: 'The Deal',
    id: 3
  }];
  private description = `One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed
    in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a 
    little he could see his brown belly, slightly domed and divided by arches into stiff sections. 
    The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, 
    pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. 
    "What's happened to me?"`;
  private episodes = [
    {id: 1, show: 1, title: 'The Jack in the Box', aired: new Date()},
    {id: 2, show: 1, title: 'Waffle Aweful', aired: new Date()},
    {id: 3, show: 1, title: 'Roll in ze Hay!', aired: new Date()},
    {id: 4, show: 1, title: 'Was Frodo Really the Hero?', aired: new Date()},
    {id: 5, show: 2, title: 'Don\'t Be a Dull Boy', aired: new Date()},
    {id: 6, show: 2, title: 'Stay Fit', aired: new Date()},
    {id: 7, show: 2, title: 'Can I Be a Bear', aired: new Date()},
    {id: 8, show: 2, title: 'Toaster Strudels: Underrated', aired: new Date()},
    {id: 9, show: 3, title: 'Eggs Have It Coming', aired: new Date()},
    {id: 10, show: 3, title: 'Totes McGoats', aired: new Date()},
    {id: 11, show: 3, title: 'Other Things Not to Be Said in Public', aired: new Date()},
    {id: 12, show: 3, title: 'Will There Ever Be Another HHG?', aired: new Date()}
  ];

  constructor() {
  }

  getShows() {
    return this.shows;
  }
  getShow(id) {
    return this.shows.find(s =>  s.id === +id);
  }

  getDescription(id) {
    return this.description;
  }
  getEpisodes(id) {
    return this.episodes.filter(e => e.show === +id);
  }

  save(details) {
    const show = this.shows.find(s => s.id === +details.id);
    show.title = details.title;
  }

}
