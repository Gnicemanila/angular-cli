import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor() {

   }

  ngOnInit() {
    
  }
  down(){
    let  u = navigator.userAgent,
    isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1,
    isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    urls:any = {
      'android': 'https://dconlinescan.github.io/APPScan/yq001_andr.html',
      'ios': 'itms-services://?action=download-manifest&url=https://static-pc.1668p2p.com/yq001/manifest.plist',
      'other': 'https://daw.duokebo.com/webchat/chat.aspx?siteid=774679'
      };
   if (isAndroid) {
    //  console.log("1")
        window.location.href = urls.android;
    } else if (isiOS) {
      // console.log("2")
        window.location.href = urls.ios;
    } else {
      // console.log("3")
        window.location.href = urls.other;
    }
  }
}
