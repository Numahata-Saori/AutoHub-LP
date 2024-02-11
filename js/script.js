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

	const breakPoint = 768; //ブレークポイント

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
