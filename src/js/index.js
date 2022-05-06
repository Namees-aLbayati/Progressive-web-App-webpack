import {Workbox} from 'workbox-window'
import '../css/style.css'

if('serviceWorker' in navigator){
    const workboxSW=new Workbox('/src-sw.js');
    workboxSW.register();
}else{
    console.log('error on your serviceWORKER namees!!!')

}
