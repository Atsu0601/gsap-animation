// 数値のランダム値を生成する関数
function random(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

// TimelineMax インスタンスを生成し、無限ループに設定
var tl = new TimelineMax({ repeat: -1 }),
    // 対象となるコンテナ要素を選択
    container = $(".container"),
    html = "",
    // モバイルデバイスであるか否かの判定
    isMobile = !!("ontouchstart" in window),
    // モバイルの場合は80,それ以外は175の点の数を設定
    dotsCount = isMobile ? 80 : 175;

// ドットの数だけdiv要素を生成
for (var i = 0; i < dotsCount; i++) {
  html += "<div></div>";
}

// 生成したdiv要素をコンテナに追加
var dots = $(html).appendTo(container);

// 各ドットに対してアニメーションを追加
dots.each(function() {
  tl.add(TweenMax.fromTo(this, 6, {
    // 初期位置と透明度をランダムに設定
    left: random(0,100) + "%",
    top: random(0,100) + "%",
    z: random(-725,600),
    opacity: Math.random()
  }, {
    // ドットをランダムな距離だけ移動させる
    left: "+=" + random(-40,40) + "%",
    top: "+=" + random(-36,36) + "%",
    z: "+=" + random(-725,600),
    // 透明度をランダムに変化させる
    opacity: Math.random() + 0.1,
    // アニメーションを繰り返し、逆再生する
    repeat: 1,
    yoyo: true,
    // アニメーションの速度を設定
    ease: Sine.easeInOut
  }), 0);
});

// コンテナ全体に対するアニメーションを追加
tl.fromTo(container, .8, { 
    // 初期の視点と透明度を設定
    perspective: 50, 
    opacity: .55 
}, { 
    // 視点と透明度を変化させる
    perspective: 215, 
    opacity: .9, 
    ease: Sine.easeInOut 
}, 3.25)
  // コンテナ全体の視点と透明度を再度変化させる
  .to(container, .8, { 
    perspective: 50, 
    opacity: .55, 
    ease: Sine.easeInOut 
}, 6.5);
