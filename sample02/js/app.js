// カスタムカーソルとフォロワー要素を取得
var cursor = $(".cursor"),
follower = $(".cursor-follower");

// 座標の初期化
var posX = 0,
posY = 0;

var mouseX = 0,
mouseY = 0;

// アニメーションの設定
// TweenMaxの引数(target:アニメーションの対象, duration:アニメーション, vars:プロパティと値を格納したオブジェクト)
// 下記の場合
// TweenMaxのtargetは空。durationは0.016秒。varsは繰り返しアニメーションのオプジェクト
TweenMax.to({}, 0.016, {
  repeat: -1, // 無限に繰り返す
  onRepeat: function() {
    // カーソルの位置とマウスの位置を徐々に近づける
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;
    
    // フォロワー要素の座標を更新
    TweenMax.set(follower, {
        css: {    
        left: posX - 12,
        top: posY - 12
        }
    });
    
    // カスタムカーソル要素の座標を更新
    TweenMax.set(cursor, {
        css: {    
        left: mouseX,
        top: mouseY
        }
    });
  }
});

// jQueryで処理
// マウスムーブイベントの処理
$(document).on("mousemove", function(e) {
  // マウスの位置を更新
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// jQueryで処理
// リンクのマウスオーバー/マウスアウトイベントの処理
$(".link").on("mouseenter", function() {
  // カーソルとフォロワー要素に "active" クラスを追加
  cursor.addClass("active");
  follower.addClass("active");
});
$(".link").on("mouseleave", function() {
  // カーソルとフォロワー要素から "active" クラスを削除
  cursor.removeClass("active");
  follower.removeClass("active");
});