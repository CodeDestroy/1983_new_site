document.addEventListener('DOMContentLoaded', () => {
    let options = {
        height: 300,
        menubar: false,
        statusbar: false,
        plugins: ['advlist', 'anchor', 'autolink', 'autoresize', 'autosave', 'charmap', 'code', 'codesample',
            'directionality', 'emoticons', 'fullscreen', 'image', 'importcss', 'insertdatetime', 'link',
            'lists', 'media', 'nonbreaking', 'pagebreak', 'preview', 'quickbars', 'save', 'searchreplace',
            'table', 'visualblocks', 'wordcount'
        ],
        toolbar: 'undo redo | styles | bold italic code codesample | alignleft aligncenter alignright alignjustify | ' +
            'bullist numlist outdent indent | link image | searchreplace | print preview media fullscreen | ' +
            'forecolor backcolor emoticons',
        language: 'ru',
        file_picker_types: 'image',
        images_upload_handler: (blobInfo, progress) => new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.withCredentials = false;
            xhr.open('POST', '/images/save/');
            xhr.upload.onprogress = (e) => {
                progress(e.loaded / e.total * 100);
            };
            xhr.onload = () => {
                if (xhr.status === 403) {
                    reject({ message: 'HTTP Error: ' + xhr.status, remove: true });
                    return;
                }
                if (xhr.status < 200 || xhr.status >= 300) {
                    reject('HTTP Error: ' + xhr.status);
                    return;
                }
                const json = JSON.parse(xhr.responseText);
                if (!json || typeof json.location != 'string') {
                    reject('Invalid JSON: ' + xhr.responseText);
                    return;
                }
                resolve(json.location);
            };
            xhr.onerror = () => {
                reject('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
            };
            const formData = new FormData();
            formData.append('csrfmiddlewaretoken', getCookie('csrftoken'));
            formData.append('file', blobInfo.blob(), blobInfo.filename());
            xhr.send(formData);
        }),
        setup: function(ed) {
           ed.on('change', function(e) {
               let content = document.getElementById('id_content');
               content.value = ed.getContent();
           });
       }
    }
    if (localStorage.getItem('data-bs-theme') === 'dark') {
        options.skin = 'oxide-dark';
        options.content_css = 'dark';
    }
    options.selector = 'textarea';
    tinyMCE.init(options);
});

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}