var MusicPlayer = {
  trackList: [
    'song1.mp3',
    'song2.mp3',
    'song3.mp3',
  ],
  currentTrack: 'song1.mp3',
  status: 'pause',
  display: function() {
    return 'Track: ' + this.currentTrack + ' Status: ' + this.status;
  },
  play: function() {
    this.status = 'play';
  },
  pause: function() {
    this.status = 'pause';
  },
  next: function() {
    if (this.trackList.indexOf(this.currentTrack)<2){ //Если индекс trackList'a у currentTrack'a меньше двух (song3.mp3)
   this.currentTrack = this.trackList[
     this.trackList.indexOf(this.currentTrack)+1 //Добавляем индекс (т.е. меняем трек на следующий)
    ];
   this.status = "play";} //сразу ставит статус = "play"
   else { 
     this.currentTrack=this.trackList[0] //иначе, если индекс равен или больше 2, ставит 0 индекс, т.е. снова проигрываем с song1.mp3
   }
  },
  prev: function() {
    if (this.trackList.indexOf(this.currentTrack)>0){ //Если индекс trackList'a у currentTrack'a больше 0
   this.currentTrack = this.trackList[
     this.trackList.indexOf(this.currentTrack)-1 //Убираем индекс (т.е. меняем трек на предыдущий)
    ];
   this.status = "play";} //сразу ставит статус = "play"
   else { 
     this.currentTrack=this.trackList[2]  //иначе, если индекс равен 0, ставит 2 индекс, т.е. проигрываем с song3.mp3
   }
  },
  showTracks: function() {
    this.trackList.forEach(function(item,i) { // метод forEach, чтобы перебрать все треки в trackListe, в частности его индекс и сам элемент
  if (item !== MusicPlayer.currentTrack ) { //Если элемент массива не равен currentTrack'y 
    console.log(`${i+1}. ${item}`); //Выводит просто его индексацию, увеличеную на 1 (индексация с 0)
  } else { //иначе, если элемент массива равен currentTrack'y 
    console.log(`${i+1}. ${item}` + " - играет сейчас") //Выводит индексацию + 1, сам элемент и подпись "играет сейчас"
  }
  });
},
};
 
Player.display(); // "Track: song1.mp3, Status: pause"
Player.play();
Player.display(); // "Track: song1.mp3, Status: play"
 
Player.next(); // переключает другой трек
Player.display(); // "Track: song2.mp3, Status: play"
 
Player.showTracks(); // вывести в консоль список доступных треков