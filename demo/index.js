function startListeners() {
    const textarea = document.getElementById('object');
    textarea.addEventListener('keydown', (e) => {
        if (e.keyCode === 9) {
            e.preventDefault();
        }
    });
}

function dump() {
    try {
        const obj = JSON.parse(document.getElementById('object').value);
        JDump(obj);
    } catch (e) {
        console.log(e);
        document.getElementById('error')
            .classList
            .add('show');

        setTimeout(() => {
            document.getElementById('error')
                .classList
                .remove('show');
        }, 2000);
    }
}
