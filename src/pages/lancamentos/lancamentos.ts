import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the LancamentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'LancamentosPage',
  segment: 'lancamentos',
})
@Component({
  selector: 'page-lancamentos',
  templateUrl: 'lancamentos.html',
})
export class LancamentosPage {

  public filmes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public provider: ApiProvider, public platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LancamentosPage');
    this.provider.getLancamentos().then(data => {
      this.filmes = data['results'];
    });
  }

  public teste(index) {
    if (index % 2 == 0) return 'left';
  }

  public urlPoster(filme) {
    if (this.platform.width() > 700) {
      return filme.poster_path;
    }
    return filme.backdrop_path;
  }

}
