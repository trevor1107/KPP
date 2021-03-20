const writePageObj = {
	summerNoteElem: null,
};

window.addEventListener('load', function (e) {
	writePage_initEvent();
	writePage_initSummerNote();
});

function writePage_initEvent() {
	document.getElementById('submit').addEventListener('click', writePage_onClickSubmitBtn);
}

function writePage_initSummerNote() {
	writePageObj.summerNoteElem = $('#summer-note').summernote({
		lang: 'ko-KR',
		height: '20vw',
	});
}
function writePage_onClickSubmitBtn(e) {
	e.preventDefault();

	const title = document.getElementById('title-text').value;
	console.log(title);
	if (title == '') {
		Swal.fire({
			icon: 'error',
			text: '제목을 입력해주세요!',
		});
		return;
	}
	const text = writePageObj.summerNoteElem.summernote('code');

	if (text == '') {
		Swal.fire({
			icon: 'error',
			text: '본문을 입력해주세요!',
		});
		return;
	}
}