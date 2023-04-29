const body = document.querySelector("body");

// マウスの動きに応じてイベントリスナーを設定
// x座標とy座標を取得して、translateの関数を呼び出し
body.addEventListener("mousemove", (e) => {
  const x = e.clientX;
	const y = e.clientY;
	translate(x, y);
});

// タッチデバイスでのタッチ操作に応じてイベントリスナーを設定
// x座標とy座標を取得して、translateの関数を呼び出し
body.addEventListener("touchmove", (e) => {
	const x = e.targetTouches[0].clientX;
	const y = e.targetTouches[0].clientY;
	translate(x, y);
});

// x, y座標を受け取り、テキストのシャドウと変形を適用する関数の処理になります。
function translate(x, y) {
  // 画面の中心とカーソル（またはタッチ）位置の差を計算し、それぞれの変数に格納します。
	const xTranslate = (window.innerWidth / 2 - x) / 20;
	const yTranslate = (window.innerHeight / 2 - y) / 20;
  // シャドウとフォントの変形を適用する処理になります。
  // GSAPの処理になります。
	gsap.to("h1", {
		textShadow: `
			${xTranslate}px ${yTranslate}px 2px rgba(0,0,0,0.01),
			${xTranslate}px ${yTranslate}px 10px rgba(0,0,0,0.15),
			${-xTranslate}px ${-yTranslate}px 20px rgba(255,255,255, 0.5)`,
		fontVariationSettings: `'wght' ${(x / window.innerWidth) * 700}`,
		"--x-translate": window.innerWidth / 2 - x,
		"--y-translate": window.innerHeight / 2 - y,
		ease: "expo.out"
	});
}