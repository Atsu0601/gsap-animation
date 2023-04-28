// filled-textとoutline-textクラスを持つ要素に対してアニメーションを適用します
gsap.to(".filled-text, .outline-text", {
  // スクロールトリガーを設定します
  scrollTrigger: {
    // トリガーとなる要素を指定します
    trigger: ".filled-text, .outline-text",
    // アニメーションが開始されるスクロール位置を指定します
    start: "top bottom",
    // アニメーションが終了されるスクロール位置を指定します
    end: "bottom top",
    // スクロール中のアニメーション速度を調整します
    scrub: 1
  },
  // x軸方向に200px移動させます
  x: 200
});

// imageクラスを持つ要素に対してアニメーションを適用します
gsap.to(".image", {
  // スクロールトリガーを設定します
  scrollTrigger: {
    // トリガーとなる要素を指定します
    trigger: ".image",
    // アニメーションが開始されるスクロール位置を指定します
    start: "top bottom",
    // アニメーションが終了されるスクロール位置を指定します
    end: "bottom top",
    // スクロール中のアニメーション速度を調整します
    scrub: 1,
    // マーカーを表示して、開始と終了位置を確認できるようにします
    markers: true
  },
  // x軸方向に-250px移動させます
  x: -250
});
