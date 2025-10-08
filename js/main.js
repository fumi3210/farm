document.addEventListener("DOMContentLoaded", function () {
  // Intersection Observer
  const intersectionObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in-view");
      } else {
        entry.target.classList.remove("is-in-view");
      }
    });
  });

  // 監視対象を追加
  const inViewItems = document.querySelectorAll(".js-in-view");
  inViewItems.forEach(function(item){
    intersectionObserver.observe(item);
  });

  // ドロワーメニュー
  const drawerIcon = document.querySelector(".drawer_icon");
  const drawerContent = document.querySelector(".drawer_content");

  drawerIcon.addEventListener("click", function () {
    drawerIcon.classList.toggle("is-checked");
    drawerContent.classList.toggle("is-checked");
  });
});
// QA
document.addEventListener("DOMContentLoaded", () => {
  const qaBoxes = document.querySelectorAll(".Qa_box");

  qaBoxes.forEach((box) => {
    const head = box.querySelector(".Qa_box-head");

    head.addEventListener("click", () => {
      // すでに開いている場合は閉じる
      if (box.classList.contains("is-open")) {
        box.classList.remove("is-open");
      } else {
        // 他を閉じたい場合（単独開閉）→コメント解除
        // qaBoxes.forEach((b) => b.classList.remove("is-open"));
        box.classList.add("is-open");
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
    
    // Products Swiper の初期化
    const swiperProducts = new Swiper('.products-slider', {
        
        // 無限ループを有効にする
        loop: true, 
        
        // モバイルでのデフォルト設定
        slidesPerView: 1.2, // ⭐ 1.2枚表示（1枚完全に表示し、次のスライドを少し見せる）
        spaceBetween: 20, // スライド間の余白
        centeredSlides: false, // 中央揃えはしない

        // ページネーション（ドット）
        pagination: {
            el: '.products-pagination',
            clickable: true,
        },
        
        // ブレイクポイント（レスポンシブ設定）
        breakpoints: {
            // 768px以上の画面幅 (PCサイズを想定)
            768: {
                slidesPerView: 4, // ⭐ PCでは4枚表示
                spaceBetween: 30, // PCでのスライド間の余白
                centeredSlides: false,
                // PCではスワイプが不要になる場合、loop: falseにすることも可能
                // loop: false, 
            }
        },
    });
});

const swiper = new Swiper(".products-slider", {
  loop: true, // 無限ループ
  slidesPerView: "auto", // スライド幅を自動調整
  spaceBetween: 24, // スライドの間隔
  speed: 2000, // 速度（値を大きくするとゆっくり流れる）
  allowTouchMove: false, // スワイプ操作を無効
  autoplay: {
    delay: 0, // 常に流れる
    disableOnInteraction: false, // 操作しても止まらない
  },
});
