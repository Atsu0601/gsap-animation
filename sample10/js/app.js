// グローバル変数の定義
const { gsap } = window;

// 現在のリンクとインデックスを初期化
let currentLink;
let currentIndex = 0;
// ナビゲーション内のすべてのリンクを取得
const links = document.querySelectorAll("nav a");

// 各リンクにクリックイベントリスナーを追加
links.forEach((link, index) => {
	link.addEventListener("click", (e) => {
		addActive(e, index);
	});
});

// アクティブクラスを追加する関数
function addActive(e, i) {
	const target = e.currentTarget;
	if (target != currentLink) {
		// スライドの方向を決定
		let direction;
		if (currentIndex < i) direction = "right";
		else direction = "left";
		// スライド要素を取得
		const slide = target.querySelector(".slide");

		// アニメーションの設定
		gsap.timeline()
			.call(() => {
			// すべてのリンクからアクティブクラスを削除
			links.forEach((link) => {
				link.classList.remove("active");
			});
		})
			.fromTo(
			slide,
			{
				// スライドの開始位置を設定
				transformOrigin: `${direction == "left" ? "right" : "left"} center`,
				scaleX: 0,
			},
			{
				// スライドアニメーションの遅延と持続時間を設定
				delay: 0.1,
				duration: 0.25,
				scaleX: 1,
			}
		)
			.call(() => {
			// クリックされたリンクにアクティブクラスを追加
			target.classList.add("active");
		})
			.to(slide, {
			// スライドアニメーションの終了位置と持続時間を設定
			delay: 0.25,
			duration: 0.25,
			transformOrigin: `${direction} center`,
			scaleX: 0,
		});
		// 現在のリンクとインデックスを更新
		currentLink = target;
		currentIndex = i;
	}
}
