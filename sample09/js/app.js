// ページが読み込まれたときに実行される関数
window.onload = function () {
    // ScrollMagic Controller を初期化
    var a = new ScrollMagic.Controller();

    // .project クラスを持つ各要素に対して処理を実行
    $(".project").each(function () {
        // TimelineMax インスタンスを作成（GSAP のアニメーションタイムライン）
        var b = new TimelineMax();

        // 各要素から .overlay, .text-folder, .text-folder内の p クラスを取得
        var c = $(this).find(".overlay");
        var d = $(this).find(".text-folder");
        var f = $(this).find(".text-folder p");

        // b に対してアニメーションを追加
        b
            .fromTo(c, 1.5, {
                skewX: 30,
                scale: 2.5
            }, {
                skewX: 0,
                xPercent: 100,
                transformOrigin: "0% 100%",
                ease: Power4.easeOut
            })
            .from(d, 1, {
                scaleX: 0,
                transformOrigin: "left",
                ease: Expo.easeOut
            }, "-=1")
            .staggerFrom(f, 0.5, {
                y: 20,
                autoAlpha: 0,
                ease: Power4.easeOut
            }, 0.15, '-=0.5');

        // ScrollMagic を使用して、スクロール位置に応じてアニメーションを実行
        var e = new ScrollMagic
            .Scene({triggerElement: this, triggerHook: 0.3})
            .addIndicators() // スクロール位置のインジケーターを表示（デバッグ用）
            .setTween(b) // アニメーションタイムライン b をシーンに適用
            .addTo(a) // シーンを ScrollMagic コントローラに追加
    })
};
