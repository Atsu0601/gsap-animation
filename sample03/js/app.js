// ウィンドウが読み込まれたときにアニメーションを実行
window.onload = function(){
    // アニメーションのタイムラインを作成し、1秒のディレイを設定
    var tl = new TimelineLite({delay: 1}),
    firstBg = document.querySelectorAll('.text__first-bg'),
    secBg = document.querySelectorAll('.text__second-bg'),
    word  = document.querySelectorAll('.text__word');
    
    // タイムラインにアニメーションを追加
    tl
    .to(firstBg, 0.2, {scaleX:1}) // 最初の背景要素の scaleX を 0 から 1 に変更
    .to(secBg, 0.2, {scaleX:1}) // 2番目の背景要素の scaleX を 0 から 1 に変更
    .to(word, 0.1, {opacity:1}, "-=0.1") // テキストの opacity を 0 から 1 に変更し、前のアニメーションから 0.1 秒差で開始
    .to(firstBg, 0.2, {scaleX:0}) // 最初の背景要素の scaleX を 1 から 0 に変更
    .to(secBg, 0.2, {scaleX:0}); // 2番目の背景要素の scaleX を 1 から 0 に変更
}