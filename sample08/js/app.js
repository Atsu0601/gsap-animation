$(document).ready(function() {
	// 取得するリスト項目の設定
	$items = $('#list li');
	
	// 初期状態でリスト項目のX軸回転を90度に設定
	TweenLite.set($items, {rotationX:90})

	// 初期状態で#hoverMe要素のZ軸回転を-90度に設定
	TweenLite.set($('#hoverMe'), {rotationZ:-90})

	// #hoverMe要素にマウスが入ったときのイベントリスナー
	$('#hoverMe').mouseenter(function() {
		// アニメーションタイムラインの作成
		var tl = new TimelineLite();

		// リスト項目の展開アニメーション
		tl.staggerTo($items, 0.5, {
			width:'100%',
			padding:'10px',
			textIndent:0,
			whiteSpace:'wrap',
			overflow:'auto',
			rotationX:0,
			ease:Back.easeOut
		}, 0.1);
	})

	// #hoverMe要素からマウスが離れたときのイベントリスナー
	$('#hoverMe').mouseleave(function() {
	// アニメーションタイムラインの作成
		var tl = new TimelineLite();
		
		// リスト項目が元の状態に戻るアニメーション
		tl.staggerTo($items, 0.5, {
			width:0,
			padding:'10px 0',
			textIndent:'-100%',
			whiteSpace:'nowrap',
			overflow:'hidden',
			rotationX:90,
			ease:Back.easeIn
		}, 0.1);
	})
})