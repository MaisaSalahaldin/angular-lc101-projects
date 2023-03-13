import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://th.bing.com/th/id/OIP.i1IEwl-k9Aw9fljEEjiJuQHaDt?pid=ImgDet&rs=1';
  image3 = 'https://th.bing.com/th/id/R.b9320ad60e0190d75269915b7f26bbe4?rik=SzDi5XhMyQn1rA&riu=http%3a%2f%2fwww.sippycupmom.com%2fwp-content%2fuploads%2f2015%2f03%2fDisney-Movies-on-Netflix-300x300.jpg&ehk=HGvZpFKjrfO5YG01KBjMccTijEir1MJoyIUGGwZy3is%3d&risl=&pid=ImgRaw&r=0';

  constructor() { }

  ngOnInit() {
  }

}