(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null,
      audio = $('myAudio'); // Thêm đoạn này để truy cập đối tượng âm thanh

  openB.addEventListener('click', function () {
    // Các dòng code mở card
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);

    // Phát âm thanh khi nhấp vào nút "Open"
    audio.play();
  });

  closeB.addEventListener('click', function () {
    // Các dòng code đóng card
    card.setAttribute('class', 'close-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

}());
