class _JDump {
    dump(object) {
        this.object = object;
        this.addOverlayToBody();
        this.createCard();
        this.countKeys();
    }
    addOverlayToBody() {
        document.getElementById('jumbo').style.transition = 'filter 80ms ease-in-out';
        document.getElementById('jumbo').style.filter = 'blur(1px)';
        const overlay = document.createElement('div');
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.right = '0';
        overlay.id = 'jd-overlay';
        overlay.style.bottom = '0';
        overlay.style.display = 'flex';
        overlay.style.position = 'absolute';
        overlay.style.justifyContent = 'center';
        overlay.style.backgroundColor = 'rgba(255, 193, 7, 0.9)';
        document.body.appendChild(overlay);
    }
    createCard() {
        const jdOverlay = document.getElementById('jd-overlay');
        const jdTitle = document.createElement('h3');
        jdTitle.id = 'jd-title';
        jdTitle.style.top = '0';
        jdTitle.style.left = '0';
        jdTitle.style.width = '100%';
        jdTitle.style.padding = '10px';
        jdTitle.style.color = '#007bff';
        jdTitle.style.textAlign = 'center';
        jdTitle.style.position = 'absolute';
        jdTitle.style.backgroundColor = '#222';
        jdTitle.innerHTML = '<strong style="color:#ffbf10;">J</strong>Dump';
        const jdCard = document.createElement('div');
        jdCard.id = 'jd-card';
        jdCard.style.width = '70%';
        jdCard.style.height = '500px';
        jdCard.style.position = 'absolute';
        jdCard.style.top = '50%';
        jdCard.style.marginTop = '-250px';
        jdCard.style.backgroundColor = '#fff';
        jdCard.style.border = '2px solid #007bff';
        jdCard.style.boxShadow = '3px 5px 10px -5px #222';
        jdOverlay.appendChild(jdTitle);
        jdOverlay.appendChild(jdCard);
    }
    countKeys() {
        const keys = Object.keys(this.object);
        const card = document.getElementById('jd-card');
        card.innerHTML = `<h3>Keys: ${keys.length}</h3>`;
    }
}
const JD = new _JDump();
function JDump(object) {
    console.log('Dumping!');
    JD.dump(object);
}
