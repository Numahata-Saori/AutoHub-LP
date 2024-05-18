/* Swiperの設定 */
window.addEventListener('DOMContentLoaded', () => {
	// option は使い回すので別に書く
	const options = {
	  slidesPerView: "auto", // コンテナ内に表示させるスライド数
	  slidesPerGroup: 1,
	  spaceBetween: 0, // スライド間の余白

	  loop: true, // 無限ループさせる
	  loopAdditionalSlides: 1, // 無限ループさせる場合に複製するスライド数

	  pagination: {
		el: ".swiper-pagination", // スクロールバー要素のクラス
		clickable: true,
	  },

	  autoplay: { // 自動再生
		delay: 4000, // 次のスライドに切り替わるまでの時間
		disableOnInteraction: false, // ユーザーが操作しても自動再生を止めない
		waitForTransition: false, // アニメーションの間も自動再生を止めない
	  },

	  allowTouchMove: true, //ドラッグ（スワイプ）でのスライド切り替えを無効
	}

	const breakPoint = 767; //ブレークポイント

	let swiper;

	if ( window.innerWidth <= breakPoint ) { //window.innerWidthを使用して現在のウィンドウの幅を取得し、その値がbreakPoint以下であるかどうかをチェック
	  swiper = new Swiper('.swiper-container', options); //条件が真であれば、new Swiperを使用してSwiperのインスタンスを作成
	} else {
	  swiper = undefined; //条件が偽であれば、swiper変数にはundefinedが代入
	}

	window.addEventListener('resize', () => { //resize:ウィンドウのサイズが変更されたときに実行される
	  if ( window.innerWidth <= breakPoint ) { //window.innerWidthを使用して現在のウィンドウの幅を取得し、その値がbreakPoint以下であるかどうかをチェック
		if( swiper ) return; //条件が真であり、かつswiperが存在しない場合
		swiper = new Swiper('.swiper-container', options); //new Swiperを使用してSwiperのインスタンスを作成
	  } else {
		if( !swiper ) return; //条件が偽であり、かつswiperが既に存在している場合
		swiper.destroy(); //swiper.destroy()を呼び出してSwiperのインスタンスを破棄
		swiper = undefined; //swiper変数にundefinedを代入→スライダーがウィンドウの幅がbreakPointを超えた場合に無効
	  }
	}, false);
  }, false);




function fadeAnime(){
	$('.blurTrigger').each(function(){ //blurTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('blur');// 画面内に入ったらblurというクラス名を追記
		} else {
			$(this).removeClass('blur');// 画面外に出たらblurというクラス名を外す
		}
	});

	$('.lineTrigger').each(function(){ //lineTriggerというクラス名が
		const elemPos = $(this).offset().top-50;//要素より、50px上の
		const scroll = $(window).scrollTop();
		const windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('lineAnime');// 画面内に入ったらlineanimeというクラス名を追記
		} else {
			$(this).removeClass('lineAnime');// 画面外に出たらlineanimeというクラス名を外す
		}
	});

	$('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
		} else {
			$(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
		}
	});

	$('.fadeLeftTrigger').each(function(){ //fadeLeftTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('fadeLeft');// 画面内に入ったらfadeLeftというクラス名を追記
		} else {
			$(this).removeClass('fadeLeft');// 画面外に出たらfadeLeftというクラス名を外す
		}
	});

	$('.fadeRightTrigger').each(function(){ //fadeRightTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('fadeRight');// 画面内に入ったらfadeRightというクラス名を追記
		}else{
			$(this).removeClass('fadeRight');// 画面外に出たらfadeRightというクラス名を外す
		}
	});

}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	fadeAnime();
});
