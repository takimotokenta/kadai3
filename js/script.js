$(function(){
  $('#date').datepicker();
});

$(function () {
  /*=================================================
  // 入力チェック（申し込みボタン押下時に実行）
  ===================================================*/
  $('#submit-button').on('click', function () {
    // エラーメッセージを表示するためのエリアを初期化
    $('#name-error').text("");
    $('#tel-error').text("");
    $('#reservation-error').text("");
    $('#lesson-error').text("");

    // 名前が未入力の場合
    if ($('input[name="your-name"]').val() == "") {
      // エラーメッセージをセット
      $("#name-error").text("名前は必須項目です。");
    }

    // 電話番号の入力欄に1つでも未入力がある場合
    if (
      ($('input[name="your-tel1"]').val() == "") ||
      ($('input[name="your-tel2"]').val() == "") ||
      ($('input[name="your-tel3"]').val() == "")
    ) {
      // エラーメッセージをセット
      $("#tel-error").text("電話番号は必須項目です。");
    }

    // 予約日が未入力の場合
    if ($('input[name="your-reservation"]').val() == "") {
      // エラーメッセージをセット
      $("#reservation-error").text("予約日は必須項目です。");
    }

    // 受講形式が未入力の場合
    const lesson = $('[name="your-lesson"]:checked').length;
    if (lesson === 0) {
      $("#lesson-error").text("受講形式は必須項目です。");
    }

  });
});

$(function() {
  $('[name="your-lesson"]:radio').change( function() {
    if($('[id=online]').prop('checked')){
      $('.add').fadeOut();
      $('.add-online').fadeIn();
    } else if ($('[id=floor]').prop('checked')) {
      $('.add').fadeOut();
      $('.add-floor').fadeIn();
    } 
  });
});

